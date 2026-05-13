---
summary: "Troubleshooting Guide"
read_when:
  - When diagnosing public client runtime issues.
---

# Troubleshooting

## Electron Does Not Start

1. Install frontend dependencies:

```bash
cd frontend
npm install
```

2. Start Vite before Electron:

```bash
./scripts/run-frontend-dev
./scripts/run-frontend-electron
```

3. If Electron was installed for another OS, reinstall `frontend/node_modules`
on the current machine.

## Sidecar Does Not Start

Install sidecar dependencies:

```bash
./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt
```

Set `WINDIE_PYTHON_PATH` if Electron is picking the wrong Python:

```bash
export WINDIE_PYTHON_PATH="/absolute/path/to/python3.11"
```

Enable verbose sidecar stderr when debugging startup:

```bash
export WINDIE_VERBOSE_SIDECAR_STDERR=1
```

## Hosted API Connection Fails

Check endpoint overrides:

```bash
echo "$BACKEND_HTTP_URL"
echo "$BACKEND_WS_URL"
```

Unset them to use the default configured hosted WindieOS API, or set both to a
known compatible backend.

## Browser-Use Fails

- Confirm the Windie browser runtime can start.
- Keep Windie browser state separate from your normal browser profile.
- If a page requires login, sign in inside the Windie-owned browser profile.
- Restart Electron after changing browser runtime paths or profile settings.

## Screenshots Or Computer-Use Fail

- Confirm OS screen-recording and accessibility permissions.
- On Linux, confirm a desktop session is available; use `xvfb-run` only for
  headless smoke checks.
- Restart the app after changing OS permissions.

## Tests

Run sidecar and frontend tests:

```bash
./scripts/test-sidecar
./scripts/test
```

From `frontend/`:

```bash
npm run test:ci
npm run lint
```
