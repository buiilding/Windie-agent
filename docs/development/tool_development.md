---
summary: "Public client tool development guide."
read_when:
  - When creating or modifying sidecar tools or frontend tool execution paths.
---

# Tool Development Guide

Windie tool execution is split by boundary:

- Hosted backend services own model orchestration, remote backend tools,
  provider projection, and validation of client-provided tool manifests.
- The public client sidecar executes local tools against the user's machine.
- The public client owns model-facing and executable schemas for client-local
  tools.
- The renderer and Electron main bridge tool requests, progress, results, and
  transcript visibility.

## Sidecar Tools

Sidecar tool code lives under:

- `frontend/src/main/python/tools/`

Tool docs live under:

- `docs/frontend/sidecar/tools/`

When adding or changing a sidecar tool:

1. Keep the tool implementation local to the sidecar.
2. Add or update its executable schema in `frontend/src/main/python/tools/manifest.py`.
3. Add or update its model-facing manifest entry in `frontend/src/main/tool_manifest.cjs`.
4. Choose `argument_resolution`:
   - `passthrough` when model args are executable sidecar args.
   - `backend_grounding` when backend OCR/vision/prediction must resolve target args.
5. Return structured success/error payloads.
6. Avoid real network/system side effects in unit tests.
7. Update sidecar docs and focused tests in the same change.
8. Confirm renderer/tool-output formatting still handles the result shape.

Reusable extension tools can put model-facing and executable schema JSON under
`extensions/<id>/tools/` and reference those files from
`extensions/<id>/extension.json`. Electron main loads those schema files into
`client_tool_manifest`; the sidecar implementation still lives in the normal
sidecar tool registry.

## Prompt Layers

Workspace `AGENTS.md` files and custom instructions are sent as
`client_prompt_layers`. The hosted backend compiles those layers after its base
system/tool protocol. Do not make sidecar code depend on backend prompt files.

## Remote Backend Tools

Remote tools, including `web_search`, execute on hosted WindieOS infrastructure.
Expose them through remote-tool settings/toggles and document them separately
from local sidecar tools.

## Mock Backend

Open-source contributors can run a local mock backend:

```bash
node scripts/mock-backend.cjs
```

Then point the app at `ws://127.0.0.1:8765/ws` using the normal backend endpoint
environment/config path. The mock accepts handshakes, client manifests, prompt
layers, emits a fake tool call, accepts the tool result, and completes the turn
without private backend access.

## Tool Registry

See:

- [Extension Convention](extensions.md)
- [Sidecar Tools Docs Hub](../frontend/sidecar/tools/README.md)
- [Tool Registry Schema and Result Normalization](../frontend/sidecar/tools/registry/tool_registry_exposed_schema_and_result_normalization_reference.md)
- [Frontend Tool Base Interface](../frontend/sidecar/tools/contracts/frontend_tool_base_interface_and_simple_tool_result_contract_reference.md)

## Frontend Execution Path

Renderer and Electron main tool execution docs:

- [Tool Execution Service and Hook Runtime](../frontend/renderer/infrastructure/tool_execution_service_and_hook_runtime_reference.md)
- [Tool Execution and Streaming](../frontend/runtime/tool_execution_and_streaming.md)
- [Tool-Call and Tool-Output Recovery](../frontend/contracts/events/tool_runtime/tool_call_and_tool_output_recovery_skip_execution_contract_reference.md)
