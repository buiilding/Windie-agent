---
summary: "Public client testing guide."
read_when:
  - When adding tests or running public client CI checks.
---

# Testing Guide

## Repo-Level Checks

```bash
./scripts/test-sidecar
./scripts/test
```

## Frontend Checks

```bash
cd frontend
npm run test
npm run test:ci
npm run lint
npm run build
```

## Sidecar Tests

Sidecar tests use `pytest` and should avoid real network and system side
effects unless the test is explicitly an integration/smoke check.

```bash
./scripts/test-sidecar
```

## Docs Checks

```bash
./bin/docs-list
```

## Test Placement

- Frontend tests live under `tests/frontend` or the established frontend test
  location for the touched module.
- Sidecar tests live under `tests/sidecar`.
- Add focused tests for behavior changes, IPC changes, tool execution changes,
  and memory/runtime boundary changes.
