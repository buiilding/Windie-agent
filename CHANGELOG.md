# Changelog

All notable public-client changes to WindieOS will be documented in this file.

## Unreleased

### Changed

- Keep the macOS reinstall helper as a local ignored script instead of tracking
  it in the public client repo.
- Move the root banner image into `artifacts/` to keep the public client repo
  root cleaner.
- Fix packaged sidecar runtime archiving so Git Bash tar treats Windows
  drive-letter paths as local files while macOS Bash can still archive without
  optional tar flags.
- Rewrite the README around the Windie Agent product pitch, banner, UI states,
  model-agnostic computer-use, dedicated browser profile, and memory system.
- Expand public docs with frontend, sidecar, browser, getting-started,
  development, reference, and client operations coverage copied from the main
  repo and adjusted for public-client boundaries.
- Add OpenClaw-style README documentation links and a docs navigation table for
  the public client docs.
- Replace README badges with Release, MIT License, Discord, and AGENTS links,
  and switch the public frontend/sidecar license text to MIT.
- Reframe the README around Windie as the desktop layer for personal AI agents,
  no-setup downloads, visible OS-level agent reactions, model-agnostic
  computer-use, hands-free voice, and dedicated browser-use profile.

### Added

- Create the `Windie-agent` public client repository with the Electron frontend,
  Python sidecar, frontend tests, sidecar tests, public docs, and packaging
  scripts.

### Private

- The hosted WindieOS backend implementation is intentionally not part of this
  public repository.
