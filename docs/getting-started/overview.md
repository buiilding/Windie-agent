---
summary: "Windie Agent public client overview."
read_when:
  - When you need a high-level overview of the public client runtime.
---

# Windie Agent Overview

Windie Agent is the public desktop client for WindieOS. It combines an Electron
frontend, React renderer, Python sidecar, local tool execution, browser-use,
memory storage, and hosted WindieOS API transport.

The hosted backend implementation is not included in this repository. The
client talks to compatible hosted APIs for model orchestration, OCR, vision,
embeddings, semantic summarization, artifacts, and session streaming.

## What The Client Owns

- Minimal floating chat pill.
- Fullscreen dashboard.
- Screenshot capture and local screen context.
- Local Python sidecar process lifecycle.
- Local tools for files, shell, computer-use, browser-use, memory, and system
  state.
- Renderer state, transcript display, tool logs, settings, permissions, voice,
  and wakeword surfaces.
- Transport clients for hosted WindieOS APIs.

## Runtime Shape

```text
Hosted WindieOS APIs
        ^
        | HTTPS / WebSocket
        v
Electron Main <-> React Renderer
        |
        | JSON-RPC
        v
Python Sidecar -> local computer, files, shell, browser, memory
```

## Key Capabilities

- Computer-use through a sequential screenshot/action loop.
- Browser-use through a Windie-owned persistent browser profile.
- Local episodic and semantic memory, with procedural memory as the direction
  for repeatable routines.
- Tool logs and transcript visibility in the dashboard.
- Always-present chat pill for quick tasks.

## Boundaries

- Frontend and sidecar code must not import private backend Python packages.
- Tools that touch the user's machine execute locally in the sidecar.
- Backend-owned capabilities are reached through public HTTP/WebSocket
  contracts.
- Public docs should describe the client runtime and transport boundaries, not
  private backend implementation internals.
