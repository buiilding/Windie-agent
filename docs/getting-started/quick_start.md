---
summary: "Quick Start Guide"
read_when:
  - When running first-time public client setup.
---

# Quick Start

## Prerequisites

- Windows 10/11, macOS, or Linux.
- Python 3.11 for source development.
- Node.js 18+ and npm.
- Git.

## Install

```bash
git clone https://github.com/buiilding/Windie-agent.git
cd Windie-agent
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install sidecar Python dependencies:

```bash
cd ..
./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt
```

## Run

Start Vite:

```bash
./scripts/run-frontend-dev
```

In another terminal, start Electron:

```bash
./scripts/run-frontend-electron
```

By default, the client connects to the configured hosted WindieOS API. Override
the endpoint only when intentionally using another compatible backend:

```bash
export BACKEND_HTTP_URL="https://api.windieos.com"
export BACKEND_WS_URL="wss://api.windieos.com/ws"
```

## First Steps

1. Complete permission onboarding.
2. Send a message from the floating chat pill.
3. Open the dashboard when you want tool logs, transcript detail, memory, or
   settings.
4. Use the Windie browser profile for browser-use sign-in state instead of your
   everyday browser profile.

## Development Checks

From the repo root:

```bash
./scripts/test-sidecar
./scripts/test
```

From `frontend/`:

```bash
npm run test:ci
npm run lint
```
