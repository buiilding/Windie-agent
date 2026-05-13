---
summary: "Public client deployment and desktop packaging guide."
read_when:
  - When shipping desktop builds.
  - When changing public client packaging, signing, or update-channel behavior.
---

# Deployment And Packaging

This document covers public-client desktop packaging. Hosted backend deployment,
Cloudflare tunnel setup, and multi-user backend scaling docs do not belong in
this public client repository.

## Target Artifact Types

- Windows: NSIS installer.
- macOS: `dmg` and `zip`.
- Linux: AppImage, deb, and rpm.

Packaging commands run from `frontend/`:

```bash
npm run package:win
npm run package:mac
npm run package:linux
```

Bundled sidecar-runtime packaging commands:

```bash
npm run package:win:bundled-python
npm run package:mac:bundled-python
npm run package:linux:bundled-python
```

See [Sidecar Runtime Packaging](sidecar_runtime_packaging.md) for the bundled
Python runtime details.

## Release Channels

Recommended channels:

- `canary`: fast internal validation.
- `beta`: broader pre-release testing.
- `stable`: production users.

Use staged rollout and channel pinning where supported by the updater.

## Signing

Production releases should be signed:

- macOS: Developer ID signing plus notarization.
- Windows: Authenticode signing.
- Linux: package checksums and release signatures where supported.

Local macOS reinstall loops may intentionally skip Apple notarization to keep
development iteration fast. Signed/notarized installer validation remains part
of the real release path.

## CI/CD Shape

The desktop release workflow should:

1. Build the frontend.
2. Build or reuse the bundled sidecar runtime.
3. Package platform artifacts.
4. Run smoke checks where automation is reliable.
5. Sign and notarize when release secrets are present.
6. Publish release artifacts and metadata.

Current workflow:

- `.github/workflows/desktop-release.yml`

## Endpoint Defaults

Packaged clients should default to the configured hosted WindieOS API and use
explicit `BACKEND_*` overrides only when intentionally pointing at another
compatible backend.
