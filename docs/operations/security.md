---
summary: "Public client security notes for Electron isolation, IPC, local tool execution, browser profile separation, and secrets."
read_when:
  - When changing public-client security-relevant code.
---

# Security Notes

## IPC And Renderer Isolation

- Electron renderer runs with `contextIsolation` enabled.
- Renderer `nodeIntegration` stays disabled.
- IPC channels are exposed through the preload allowlist, not arbitrary renderer
  access to Electron main.
- IPC payloads should be validated at the boundary before execution.

## Tool Execution

- Local tools execute in the Python sidecar on the user's machine.
- Electron main owns sidecar process lifecycle and bridges JSON-RPC requests.
- Renderer code should not directly execute shell, filesystem, browser, or
  system actions.
- Tool results should use structured success/error payloads so failures remain
  inspectable.

## Browser Isolation

- Browser-use should use a Windie-owned persistent browser profile by default.
- Do not attach to or mutate the user's everyday browser profile unless a user
  explicitly configures that behavior.
- Keep cookies, downloads, and automation state scoped to the Windie runtime
  profile.

## Secrets

- API keys and credentials must come from environment variables, OS credential
  stores, or explicit user configuration.
- Do not commit real credentials, local user data, or machine-specific paths.
- Do not document private hosted-backend deployment secrets in this repo.

## Hosted Backend Boundary

The hosted backend implementation is outside this repository. Public client docs
may describe the transport contracts the client consumes, but backend source
internals and private operational runbooks should not be copied here.
