---
summary: "Public client documentation hub for Windie Agent frontend, sidecar, browser, operations, and reference docs."
read_when:
  - When you need a fast entrypoint to Windie Agent public client docs.
  - When deciding where new public client documentation should be added.
title: "Documentation Hub"
---

# Documentation Hub

This hub is the public-client entrypoint for Windie Agent documentation. It
focuses on the Electron frontend, renderer, preload boundary, Python sidecar,
browser-use runtime, memory, packaging, and client operations.

The hosted WindieOS backend implementation is not part of this repository.
Docs here may describe public backend transport contracts where the client
depends on them, but backend implementation internals belong outside the public
client repo.

## Start Here

- [Product Overview](product_overview.md)
- [Overview](overview.md)
- [Quick Start](quick_start.md)
- [Installation](installation.md)
- [User Guide](user_guide.md)
- [Troubleshooting](troubleshooting.md)

## Architecture

- [Frontend Architecture](../architecture/frontend_architecture.md)
- [Communication Flow](../architecture/communication_flow.md)
- [Python Sidecar](../architecture/python_sidecar.md)
- [Memory System](../architecture/memory_system.md)
- [Tool System](../architecture/tool_system.md)

## Frontend Runtime

- [Frontend Docs Hub](../frontend/README.md)
- [Frontend Runtime Docs Hub](../frontend/runtime/README.md)
- [Main Process Docs Hub](../frontend/main/README.md)
- [Renderer Docs Hub](../frontend/renderer/README.md)
- [Preload Docs Hub](../frontend/preload/README.md)
- [Frontend Contracts Docs Hub](../frontend/contracts/README.md)
- [Frontend Inventory Docs Hub](../frontend/inventory/README.md)

## Renderer Surfaces

- [Chat Docs Hub](../frontend/renderer/chat/README.md)
- [Dashboard Docs Hub](../frontend/renderer/dashboard/README.md)
- [Overlay Docs Hub](../frontend/renderer/overlays/README.md)
- [Settings Docs Hub](../frontend/renderer/settings/README.md)
- [Transcript Docs Hub](../frontend/renderer/transcript/README.md)
- [Voice Docs Hub](../frontend/renderer/voice/README.md)
- [Permissions Docs Hub](../frontend/renderer/permissions/README.md)
- [Provider Stack Docs Hub](../frontend/renderer/providers/README.md)
- [Renderer Runtime](../frontend/renderer/renderer_runtime.md)

## Main, IPC, And Preload

- [Electron Main and IPC](../frontend/main/electron_main_and_ipc.md)
- [Main Process Lifecycle](../frontend/main/main_process_lifecycle_overlay_ipc_and_window_visibility_runtime_reference.md)
- [Window and Overlay Lifecycle](../frontend/main/window_and_overlay_lifecycle.md)
- [Runtime Paths and Endpoints](../frontend/main/runtime_paths_and_endpoints.md)
- [Preload Allowlist and Renderer Bridge](../frontend/preload/preload_channel_allowlist_and_renderer_bridge_reference.md)
- [IPC Channels and Event Contracts](../frontend/contracts/ipc_channels_and_event_contracts.md)

## Sidecar

- [Sidecar Docs Hub](../frontend/sidecar/README.md)
- [Sidecar Core Docs Hub](../frontend/sidecar/core/README.md)
- [Sidecar Services Docs Hub](../frontend/sidecar/services/README.md)
- [Sidecar Memory Docs Hub](../frontend/sidecar/memory/README.md)
- [Sidecar Browser Docs Hub](../frontend/sidecar/browser/README.md)
- [Sidecar Tools Docs Hub](../frontend/sidecar/tools/README.md)
- [Sidecar System State Docs Hub](../frontend/sidecar/system_state/README.md)
- [Python Sidecar and Memory](../frontend/sidecar/python_sidecar_and_memory.md)
- [Tool Catalog and Execution Model](../frontend/sidecar/tool_catalog_and_execution_model.md)

## Browser-Use

- [Browser Control](../browser/browser_control.md)
- [Browser Control Runbook](../browser/browser_control_run.md)
- [Browser Automation Stack](../frontend/sidecar/browser_automation_stack.md)
- [Browser Runtime Contract](../frontend/sidecar/tools/browser_runtime_contract_and_windie_runtime_reference.md)
- [Chrome Runtime Docs Hub](../frontend/sidecar/browser/chrome/README.md)
- [Browser Use Runtime Docs Hub](../frontend/sidecar/browser/browser_use/README.md)

## Operations

- [Configuration](../operations/configuration.md)
- [Deployment and Packaging](../operations/deployment.md)
- [Performance](../operations/performance.md)
- [Release](../operations/release.md)
- [Security](../operations/security.md)
- [Sidecar Runtime Packaging](../operations/sidecar_runtime_packaging.md)

## Development

- [Contributing](../development/contributing.md)
- [Environment Setup](../development/environment_setup.md)
- [Testing](../development/testing.md)
- [Tool Development](../development/tool_development.md)
- [Extension Convention](../development/extensions.md)

## Reference

- [API Reference](../reference/api_reference.md)

## Useful Deep References

- [Frontend Runtime Invariants Checklist](../frontend/runtime/frontend_runtime_invariants_checklist.md)
- [Stream Event State Machine](../frontend/runtime/stream_event_state_machine.md)
- [Tool Execution and Streaming](../frontend/runtime/tool_execution_and_streaming.md)
- [Message Send Surface Policy and Screenshot Capture](../frontend/renderer/chat/message_send_surface_policy_and_screenshot_capture_reference.md)
- [Tool Execution Service and Hook Runtime](../frontend/renderer/infrastructure/tool_execution_service_and_hook_runtime_reference.md)
- [Wakeword Bridge and Audio Framing](../frontend/sidecar/wakeword_bridge_and_audio_framing_reference.md)
- [Tool Registry Schema and Result Normalization](../frontend/sidecar/tools/registry/tool_registry_exposed_schema_and_result_normalization_reference.md)
- [Filesystem Tool Runtime](../frontend/sidecar/tools/filesystem_read_replace_runtime_reference.md)
- [Shell and Process Runtime](../frontend/sidecar/tools/shell_and_process_session_runtime_reference.md)
