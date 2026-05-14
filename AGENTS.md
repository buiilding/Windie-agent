# Repository Guidelines

## Project Overview

WindieOS is a desktop AI operator with persistent memory, terminal access,
computer-use tools, browser-use tools, voice surfaces, and wakeword flows.

This public repository contains the client runtime only:

- Electron app for UX
  - Renderer for UI
  - Main process for orchestration bridges
- Python sidecar for local tool execution and local memory services
- Public transport clients for hosted WindieOS APIs

The hosted backend implementation is private and must not be copied into this
repository.

## Project Structure

- Frontend Electron and React: `frontend/src/`
  - main process in `src/main`
  - renderer in `src/renderer`
- Frontend Python sidecar: `frontend/src/main/python/`
  - IPC, tools, memory
- Tests: `tests/`
  - `tests/sidecar`
  - `tests/frontend`
- Docs: `docs/`

## Architecture Notes

- Tools execute on the frontend Python sidecar.
- Hosted backend services own model orchestration, OCR, vision, embeddings, and
  semantic summarization.
- Windie Agent owns local tool implementations, executable schemas, and
  model-facing schemas for client-local tools.
- Tool changes must update the client tool manifest, sidecar executable schema
  export, docs, and focused tests in the same change.
- Local tools must not import private backend packages.
- Backend remote tools must be documented separately from local sidecar tools.
- Built-in grounded tools must preserve the model-schema vs execution-schema
  distinction. Use `backend_grounding` only when OCR/vision/prediction prepares
  executable sidecar arguments; otherwise use `passthrough`.
- Frontend and sidecar code must not import private backend Python packages.
- Public backend interaction must go through HTTP/WebSocket transport clients.

## Environment and Commands

### Baseline

- Python 3.11
- Node 18+

### Environment Launcher

- Do not manually activate environments.
- Use `./scripts/python-in-env <frontend|sidecar> <cmd...>`.
- If the expected conda env is missing, the script falls back to the current
  shell environment.

### Install

- Frontend deps: `cd frontend && npm install`
- Sidecar deps:
  `./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt`

### Run

- Frontend UI with Vite: `cd frontend && npm run dev`
- Electron dev app: `cd frontend && npm run electron:dev`
- Electron customer app: `cd frontend && npm run electron`

### Test and Lint

- Sidecar tests: `./scripts/test-sidecar`
- Frontend tests: `cd frontend && npm run test`
- Frontend CI tests: `cd frontend && npm run test:ci`
- Frontend lint: `cd frontend && npm run lint`

## Coding Standards

- Keep modules focused.
- Prefer simple, intuitive implementations.
- Remove unused code in touched areas.
- Keep renderer logic in `frontend/src/renderer`.
- Keep main process and IPC logic in `frontend/src/main`.
- Keep sidecar logic in `frontend/src/main/python`.
- Use focused tests for behavior changes.

## Public Repo Guardrails

- Do not add private backend source code.
- Do not add backend-only deployment scripts or private operational runbooks.
- Do not add real credentials, tokens, local machine paths, or user data.
- Do not commit built runtime directories such as `frontend/python-runtime/`,
  `frontend/release/`, `frontend/dist/`, or `node_modules/`.

## Documentation

When behavior changes, update the public docs that describe the touched client
boundary. Keep backend internals out of public docs; document the public
HTTP/WebSocket contract instead.
