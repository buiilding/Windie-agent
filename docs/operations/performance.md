---
summary: "Public client performance notes for Electron, renderer, sidecar, memory, browser-use, and tool execution."
read_when:
  - When working on public client performance or profiling.
---

# Performance Notes

## Frontend

- **Split contexts**: `AppConfigContext` and `AppStatusContext` reduce broad
  re-render pressure.
- **Store-driven chat state**: chat state is managed through focused store
  selectors so components can subscribe to only the fields they need.
- **Lazy settings UI**: settings surfaces are loaded lazily.
- **Stable stream listener lifecycle**: backend event handlers stay stable
  across model-config updates where possible.
- **No-op state updates**: message and status setters should preserve state
  identity when values are unchanged.
- **Artifact image normalization**: shared image metadata helpers avoid repeated
  content-type and extension parsing.
- **GPU acceleration default-on**: Electron UI keeps GPU acceleration enabled by
  default; use `WINDIE_FORCE_SOFTWARE_RENDERING=1` only for driver-specific
  fallback cases.

## Sidecar

- **Bounded executor routing**: interactive and background work should use
  bounded executors to avoid unbounded thread growth.
- **Lazy browser startup**: browser runtime imports should be deferred until the
  first browser tool execution.
- **Lean screenshot transport**: sidecar screenshot tools should return file
  references instead of huge inline base64 payloads where possible.
- **Large JSON-line parsing off main thread**: oversized sidecar JSON-RPC lines
  should be parsed away from the Electron main hot path.
- **Quieter default logging**: sidecar logs should default to warning-level
  noise unless explicitly overridden for debugging.

## Memory

- Avoid duplicate FAISS reads at startup.
- Skip vector writes when startup sync makes no vector changes.
- Rebuild or validate embedding-space metadata when hosted embedding settings
  change.

## Browser-Use

- Keep the Windie-owned persistent browser profile separate from the user's
  normal browser profile.
- Delay browser launch until a browser action needs it.
- Prefer deterministic extraction and snapshots over repeated heavyweight page
  inspection when the current state is already known.

## Tips

- Keep screenshots reasonably bounded; very large screenshots increase upload
  and transport cost.
- Profile renderer re-renders before adding memoization.
- Prefer one shared formatting/normalization path for tool results and message
  payloads.
