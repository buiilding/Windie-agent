---
summary: "Public client tool system overview."
read_when:
  - When changing sidecar tool execution, frontend tool handling, or tool-result rendering.
---

# Tool System

Windie Agent uses tools so the model can ask the client to act on the user's
computer. In the public client repo, the important boundary is execution:

- Hosted WindieOS APIs own model orchestration and model-facing tool contracts.
- Electron main and the renderer relay tool calls and stream visibility.
- The Python sidecar executes local machine-touching tools.

## Runtime Flow

```text
Hosted WindieOS APIs
        |
        | tool-call event over WebSocket
        v
Electron Main / Renderer
        |
        | JSON-RPC
        v
Python Sidecar Tool Registry
        |
        v
Local computer: mouse, keyboard, browser, files, shell, memory, system state
```

## Sidecar Tool Domains

- **Computer**: screenshot, mouse, keyboard, scroll, and related desktop
  control.
- **Browser**: Windie-owned persistent browser profile and browser-use actions.
- **Filesystem**: file reads, replacement, and patch-like edits.
- **Shell/process**: foreground commands and background process sessions.
- **System**: wait, window switching, app opening, and system stats.
- **Memory**: local transcript, episodic memory, semantic memory, and related
  search/storage helpers.

## Frontend Responsibilities

- Receive tool-call events.
- Execute local tools through Electron main and sidecar JSON-RPC.
- Render tool-call and tool-output rows.
- Persist transcript-visible tool results.
- Keep screenshot and artifact payloads normalized.
- Recover gracefully from skipped execution or malformed tool-output payloads.

## Sidecar Responsibilities

- Register executable local tools.
- Validate and normalize tool arguments.
- Return structured success/error results.
- Keep local side effects explicit and observable.
- Avoid importing private backend code.

## Related Docs

- [Frontend Runtime Tool Execution](../frontend/runtime/tool_execution_and_streaming.md)
- [Tool Execution Service](../frontend/renderer/infrastructure/tool_execution_service_and_hook_runtime_reference.md)
- [Sidecar Tools Hub](../frontend/sidecar/tools/README.md)
- [Tool Registry Contract](../frontend/sidecar/tools/registry/tool_registry_exposed_schema_and_result_normalization_reference.md)
- [Computer Tool Runtime](../frontend/sidecar/tools/computer/mouse_keyboard_scroll_and_screenshot_runtime_reference.md)
- [Browser Tool Runtime](../frontend/sidecar/tools/browser_runtime_contract_and_windie_runtime_reference.md)
