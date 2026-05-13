---
summary: "Public client release guide."
read_when:
  - When preparing a public client release.
---

# Release Guide

This guide describes the public-client release flow for Windie Agent desktop
artifacts.

## Principles

- Prefer small, scoped releases with clear changelogs.
- Run relevant tests before tagging or publishing artifacts.
- Do not publish artifacts, change version numbers, or create release tags
  without explicit approval.

## Pre-Release Checklist

- Ensure you are on `main`.
- Pull the latest changes from origin.
- Confirm the working tree is clean.
- Confirm release credentials are available only in the release environment.
- Decide the version and channel.
- Update `frontend/package.json` when a version bump is approved.
- Update `CHANGELOG.md`.

## Test And Build

From the repo root:

```bash
./scripts/test-sidecar
./scripts/test
```

From `frontend/`:

```bash
npm run test:ci
npm run lint
npm run build
```

If UI behavior changed, run the Electron app manually or through the relevant
smoke workflow before release.

## Desktop Artifact Workflow

Current workflow:

- `.github/workflows/desktop-release.yml`

Expected artifact coverage:

- Linux: AppImage, deb, rpm.
- Windows: NSIS installer.
- macOS: dmg and zip.

macOS publish runs must have signing and notarization available. Local macOS
reinstall loops can skip notarization for speed, but production release
artifacts should not.

## Release Steps

1. Commit version and changelog changes.
2. Run the relevant test/build checks.
3. Tag the release after approval.
4. Push commits and tags.
5. Verify artifacts and release notes on GitHub.

## Post-Release Checks

- Verify a clean checkout can install dependencies and start the app.
- Download each published artifact and check basic launch behavior where
  platform access is available.
- Confirm endpoint defaults point at the intended hosted WindieOS API.
