---
summary: "Public client tool system overview."
read_when:
  - When changing sidecar tool execution, frontend tool handling, or tool-result rendering.
---

# Tool System

Windie Agent uses tools so the model can ask the client to act on the user's
computer. In the public client repo, the important boundary is execution:

- Hosted WindieOS APIs own model orchestration, backend remote tools, provider
  projection, and manifest validation.
- Windie Agent owns local sidecar tools, executable schemas, and model-facing
  schemas for client-local tools.
- Electron main and the renderer relay tool calls and stream visibility.
- The Python sidecar executes local machine-touching tools.

## Runtime Flow

```text
Hosted WindieOS APIs
        |
        | accepts client_tool_manifest + validates policy
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

- Build and send `client_tool_manifest` during handshake.
- Keep model-facing and executable schemas for local tools in the public repo.
- Receive tool-call events.
- Execute local tools through Electron main and sidecar JSON-RPC.
- Render tool-call and tool-output rows.
- Persist transcript-visible tool results.
- Keep screenshot and artifact payloads normalized.
- Recover gracefully from skipped execution or malformed tool-output payloads.

## Sidecar Responsibilities

- Register executable local tools.
- Export executable schemas for registered tools.
- Validate and normalize tool arguments.
- Return structured success/error results.
- Keep local side effects explicit and observable.
- Avoid importing private backend code.

## Manifest Contract

Each client-local tool is described by:

```json
{
  "name": "read_file",
  "description": "Read a local file.",
  "execution_target": "sidecar",
  "model_schema": { "type": "object", "properties": {} },
  "execution_schema": { "type": "object", "properties": {} },
  "argument_resolution": "passthrough"
}
```

Use `passthrough` when model arguments already match sidecar arguments.
Use `backend_grounding` when the hosted backend must resolve OCR, vision, or
semantic targeting before the sidecar can execute. Computer-use tools such as
`mouse_control` and `scroll_control` use `backend_grounding`; file, shell, and
browser tools usually use `passthrough`.

Remote tools such as `web_search` are not sidecar tools. They are exposed by a
backend remote-tool catalog and should stay separate from local tool toggles.

Reusable client extensions should follow the `extensions/` convention and wire
their v1 tools through the same manifest and sidecar registry paths as built-ins.

## Related Docs

- [Frontend Runtime Tool Execution](../frontend/runtime/tool_execution_and_streaming.md)
- [Extension Convention](../development/extensions.md)
- [Tool Execution Service](../frontend/renderer/infrastructure/tool_execution_service_and_hook_runtime_reference.md)
- [Sidecar Tools Hub](../frontend/sidecar/tools/README.md)
- [Tool Registry Contract](../frontend/sidecar/tools/registry/tool_registry_exposed_schema_and_result_normalization_reference.md)
- [Computer Tool Runtime](../frontend/sidecar/tools/computer/mouse_keyboard_scroll_and_screenshot_runtime_reference.md)
- [Browser Tool Runtime](../frontend/sidecar/tools/browser_runtime_contract_and_windie_runtime_reference.md)
