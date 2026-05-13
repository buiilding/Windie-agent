---
summary: "Public client development environment setup."
read_when:
  - When setting up a local public client development environment.
---

# Environment Setup

## Requirements

- Python 3.11.
- Node.js 18+.
- npm.
- Git.

## Frontend

```bash
cd frontend
npm install
```

## Sidecar

```bash
./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt
```

Set `WINDIE_PYTHON_PATH` when you need Electron to use a specific Python:

```bash
export WINDIE_PYTHON_PATH="/absolute/path/to/python3.11"
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

## Docs

```bash
./bin/docs-list
```

Windows:

```powershell
.\bin\docs-list.cmd
```
