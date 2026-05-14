---
summary: "Convention for Windie Agent extensions that contribute local tools, schemas, prompt layers, and docs."
read_when:
  - When adding reusable client-side extensions.
  - When deciding where extension-owned tool schemas and docs should live.
---

# Extension Convention

Windie Agent extensions are public-client packages. They can contribute local
sidecar tools, model-facing schemas, executable schemas, prompt layers, settings
surfaces, required permissions, and documentation. Hosted WindieOS backend
implementation code is not part of an extension.

The v1 convention is intentionally small:

```text
extensions/
  my-extension/
    extension.json
    tools/
    ui/
    docs/
```

`extension.json` should describe the extension:

```json
{
  "id": "my-extension",
  "name": "My Extension",
  "description": "Adds local tools for a specific workflow.",
  "tools": [
    {
      "name": "my_tool",
      "model_schema": "tools/my_tool.model.schema.json",
      "execution_schema": "tools/my_tool.execution.schema.json",
      "argument_resolution": "passthrough"
    }
  ],
  "prompt_layers": [],
  "required_permissions": []
}
```

Until a dynamic loader exists, extension code should be wired through the same
paths as built-in tools:

1. Implement the local tool under `frontend/src/main/python/tools/`.
2. Register it with the sidecar registry.
3. Add executable schema export coverage in
   `frontend/src/main/python/tools/manifest.py`.
4. Add the model-facing manifest entry in `frontend/src/main/tool_manifest.cjs`.
5. Add or update docs under the extension `docs/` directory and the relevant
   canonical docs.
6. Add tests for the manifest builder, sidecar schema export, and execution
   path.

Use `passthrough` when model arguments are executable sidecar arguments. Use
`backend_grounding` only when the hosted backend must resolve OCR, vision, or
semantic target descriptions into executable sidecar arguments.

Remote tools such as `web_search` are backend tools. An extension may expose a
settings toggle or docs for them, but it must not claim to execute them through
the local sidecar.
