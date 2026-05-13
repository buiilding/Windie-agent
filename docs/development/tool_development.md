---
summary: "Public client tool development guide."
read_when:
  - When creating or modifying sidecar tools or frontend tool execution paths.
---

# Tool Development Guide

Windie tool execution is split by boundary:

- Hosted backend services own model-facing orchestration and public transport
  contracts.
- The public client sidecar executes local tools against the user's machine.
- The renderer and Electron main bridge tool requests, progress, results, and
  transcript visibility.

## Sidecar Tools

Sidecar tool code lives under:

- `frontend/src/main/python/tools/`

Tool docs live under:

- `docs/frontend/sidecar/tools/`

When adding or changing a sidecar tool:

1. Keep the tool implementation local to the sidecar.
2. Return structured success/error payloads.
3. Avoid real network/system side effects in unit tests.
4. Update sidecar docs and focused tests in the same change.
5. Confirm renderer/tool-output formatting still handles the result shape.

## Tool Registry

See:

- [Sidecar Tools Docs Hub](../frontend/sidecar/tools/README.md)
- [Tool Registry Schema and Result Normalization](../frontend/sidecar/tools/registry/tool_registry_exposed_schema_and_result_normalization_reference.md)
- [Frontend Tool Base Interface](../frontend/sidecar/tools/contracts/frontend_tool_base_interface_and_simple_tool_result_contract_reference.md)

## Frontend Execution Path

Renderer and Electron main tool execution docs:

- [Tool Execution Service and Hook Runtime](../frontend/renderer/infrastructure/tool_execution_service_and_hook_runtime_reference.md)
- [Tool Execution and Streaming](../frontend/runtime/tool_execution_and_streaming.md)
- [Tool-Call and Tool-Output Recovery](../frontend/contracts/events/tool_runtime/tool_call_and_tool_output_recovery_skip_execution_contract_reference.md)
