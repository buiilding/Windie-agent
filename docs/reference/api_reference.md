---
summary: "Public client API reference for hosted WindieOS transport surfaces consumed by the Electron app and sidecar."
read_when:
  - When integrating hosted WindieOS APIs or changing client transport calls.
---

# API Reference

Windie Agent talks to hosted WindieOS APIs over:

- WebSocket for query/session streaming and event delivery.
- HTTP for artifacts, memory services, and other request/response endpoints.

The hosted backend implementation is outside this repository. This document is
about client-consumed transport surfaces, not backend internals.

## Endpoint Configuration

Environment variables:

- `BACKEND_HTTP_URL`: hosted HTTP base URL.
- `BACKEND_WS_URL`: hosted WebSocket URL.
- `BACKEND_HOST`: fallback host when full URLs are not set.
- `BACKEND_PORT`: fallback port when full URLs are not set.

Default production shape:

```text
https://api.windieos.com
wss://api.windieos.com/ws
```

## WebSocket

The Electron client uses WebSocket transport for:

- sending user queries
- receiving assistant chunks
- receiving tool-call and tool-output events
- receiving status/phase updates
- sending settings updates and stop/cancel requests
- rehydrating transcript/session state where supported

Renderer code should consume typed/guarded event payloads through the frontend
event and stream layers rather than handling raw WebSocket messages directly.

Related docs:

- [Frontend Contracts](../frontend/contracts/README.md)
- [Backend Event Consumer Matrix](../frontend/contracts/backend_event_consumer_matrix_reference.md)
- [Stream Event State Machine](../frontend/runtime/stream_event_state_machine.md)

## HTTP

The client and sidecar use HTTP for public hosted services such as:

- artifact upload and lookup
- embeddings
- semantic summarization
- conversation title generation
- health checks where supported

Sidecar remote client docs:

- [Remote API Client Base](../frontend/sidecar/core/remote_api_client_base_session_lifecycle_timeout_and_error_wrapper_contract_reference.md)
- [Remote Embedding Client](../frontend/sidecar/core/remote_embedding_client_health_probe_dimension_and_error_surface_contract_reference.md)
- [Remote Semantic Client](../frontend/sidecar/core/remote_semantic_client_summarize_payload_timeout_and_error_surface_contract_reference.md)
- [Remote Title Client](../frontend/sidecar/core/remote_title_client_generation_payload_model_override_timeout_and_error_surface_contract_reference.md)

## Local Execution Boundary

Machine-touching tools do not execute in the renderer. They are routed through:

```text
Renderer -> Electron Main -> Python Sidecar -> local tool implementation
```

Use sidecar docs for local tool behavior:

- [Sidecar Tools](../frontend/sidecar/tools/README.md)
- [Tool Registry](../frontend/sidecar/tools/registry/tool_registry_exposed_schema_and_result_normalization_reference.md)
- [Browser Runtime](../frontend/sidecar/tools/browser_runtime_contract_and_windie_runtime_reference.md)

## Compatibility Rule

When changing transport payloads, update the client-side docs and tests that
consume those payloads. Public client changes should preserve the boundary that
frontend and sidecar code do not import private backend packages.
