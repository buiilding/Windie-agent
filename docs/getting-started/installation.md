---
summary: "Installation Guide"
read_when:
  - When installing public client dependencies.
---

# Installation Guide

## System Requirements

- Windows 10/11, macOS 10.15+, or Linux.
- Python 3.11 for source development.
- Node.js 18+.
- npm.
- Git.

Packaged releases are expected to bundle the Python sidecar runtime so end
users do not need a system Python installation.

## Source Install

```bash
git clone https://github.com/buiilding/Windie-agent.git
cd Windie-agent
```

Install Node dependencies:

```bash
cd frontend
npm install
```

Install sidecar dependencies:

```bash
cd ..
./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt
```

## Runtime Endpoint

The public client is designed to use a hosted WindieOS backend by default. Use
explicit endpoint overrides only for another compatible backend:

```bash
export BACKEND_HTTP_URL="https://api.windieos.com"
export BACKEND_WS_URL="wss://api.windieos.com/ws"
```

Windows PowerShell:

```powershell
$env:BACKEND_HTTP_URL = "https://api.windieos.com"
$env:BACKEND_WS_URL = "wss://api.windieos.com/ws"
```

## Run From Source

Terminal 1:

```bash
./scripts/run-frontend-dev
```

Terminal 2:

```bash
./scripts/run-frontend-electron
```

## Sidecar Python Resolution

For dev/source runs, Electron main resolves Python from:

1. `WINDIE_PYTHON_PATH` when set and valid.
2. Active Conda interpreter from `CONDA_PREFIX`.
3. Platform fallback (`py` on Windows, `python3` on Linux/macOS).

Set `WINDIE_PYTHON_PATH` if you need a specific interpreter:

```bash
export WINDIE_PYTHON_PATH="/absolute/path/to/python"
```

## Verify

```bash
./scripts/test-sidecar
./scripts/test
```
