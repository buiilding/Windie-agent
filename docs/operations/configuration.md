---
summary: "Public client configuration guide for frontend settings, sidecar runtime, and hosted backend endpoint overrides."
read_when:
  - When adding or changing public client config, endpoint env vars, or Electron settings persistence.
---

# Configuration Guide

Windie Agent public-client configuration is split between:

- **Frontend settings** stored locally by the Electron app.
- **Sidecar runtime settings** provided through environment variables and local
  runtime paths.
- **Hosted backend endpoint settings** used by Electron main and the Python
  sidecar to call public WindieOS APIs.

The private hosted backend implementation is not part of this repository. Do
not add backend source-code config docs here.

## Frontend Configuration

The renderer persists a minimal settings payload locally and sends the relevant
session settings to the hosted backend over the supported transport contract.

Primary persisted fields:

- `model_mode`
- `model_provider`
- `selected_model_id`
- `interaction_mode`
- `speech_mode_enabled`
- `wakeword_enabled`
- `include_query_screenshot`

Storage locations:

- `localStorage` key: `desktop-assistant-config`
- Electron user data file: `frontend-config.json`

Related code:

- `frontend/src/renderer/utils/configStorage.js`
- `frontend/src/renderer/utils/configFilter.js`
- `frontend/src/main/ipc.cjs`

## Backend Endpoint Overrides

By default, dev and packaged clients use the configured hosted WindieOS API.
Override endpoints only when connecting to another compatible backend.

Supported environment variables:

- `BACKEND_HTTP_URL`: full HTTP base URL, highest priority for HTTP.
- `BACKEND_WS_URL`: full WebSocket URL, highest priority for WebSocket.
- `BACKEND_HOST`: fallback host when full URLs are not set.
- `BACKEND_PORT`: fallback port when full URLs are not set.

Examples:

```bash
export BACKEND_HTTP_URL="https://api.windieos.com"
export BACKEND_WS_URL="wss://api.windieos.com/ws"
```

```powershell
$env:BACKEND_HTTP_URL = "https://api.windieos.com"
$env:BACKEND_WS_URL = "wss://api.windieos.com/ws"
```

## Sidecar Runtime

Electron main resolves the sidecar Python runtime in this order:

1. `WINDIE_PYTHON_PATH` when set and valid.
2. Bundled packaged runtime.
3. Development fallback from the active environment or platform Python.

Useful sidecar environment variables:

- `WINDIE_PYTHON_PATH`: explicit Python executable for the sidecar.
- `WINDIE_SIDECAR_LOG_LEVEL`: sidecar log level override.
- `WINDIE_VERBOSE_SIDECAR_STDERR=1`: forward verbose sidecar stderr in
  Electron logs.

## Security Notes

- API keys and credentials must come from environment variables or user
  configuration, not committed files.
- Do not document real user tokens, local machine secrets, or private backend
  deployment details in this public client repo.
- The renderer should persist only public client settings; backend-owned runtime
  policy remains backend-owned.
