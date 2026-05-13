---
summary: "Client and sidecar environment setup across Windows, Ubuntu, and macOS."
read_when:
  - When setting up the public client and sidecar runtime across platforms.
---

# Client And Sidecar Environment Setup

This file keeps its historical name for incoming links, but the public client
repo only contains the frontend and sidecar. Backend source setup is not part of
this repository.

## Python 3.11

Install Python 3.11:

- Windows: install from python.org and check "Add python.exe to PATH".
- Ubuntu:

```bash
sudo apt update
sudo apt install -y python3.11 python3.11-venv python3-pip
```

- macOS:

```bash
brew install python@3.11
```

## Sidecar Dependencies

From the repository root:

```bash
./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt
```

Optional explicit interpreter:

```bash
export WINDIE_PYTHON_PATH="/absolute/path/to/python3.11"
```

## Frontend Dependencies

```bash
cd frontend
npm install
```

## Run

Terminal 1:

```bash
./scripts/run-frontend-dev
```

Terminal 2:

```bash
./scripts/run-frontend-electron
```

Windows notes:

- Run the docs index helper as `.\bin\docs-list.cmd` or
  `node .\scripts\docs-list.js`.
- If Electron fails with `spawn ...\electron ENOENT`, reinstall
  `frontend/node_modules` on the current OS so Electron downloads the matching
  binary.

Linux CI/headless note:

```bash
cd frontend
xvfb-run -a npm run electron:dev
```

## Endpoint Overrides

The client defaults to hosted WindieOS APIs. Override only for a compatible
backend:

```bash
export BACKEND_HTTP_URL="https://api.windieos.com"
export BACKEND_WS_URL="wss://api.windieos.com/ws"
```
