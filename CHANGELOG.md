# Changelog

All notable public-client changes to WindieOS will be documented in this file.

## Unreleased

### Changed

- Add client-owned tool manifests, prompt layers, Agent settings controls, sidecar
  executable schema export, and a mock backend for open-source extension work.

## 0.6.24 - 2026-05-13

### Changed

- Restore setup and permission onboarding progress labels to white instead of
  Windie blue.
- Ensure the Windie dedicated browser always has a page target before
  Playwright attaches over CDP, fixing browser automation onboarding failures
  when Chrome starts with an empty target list.
- Replace the packaged app icon assets with the full rounded-square Windie icon
  across macOS, Windows, Linux, and runtime window/tray surfaces.
- Align renderer theme, first-run onboarding, permission prompts, and primary
  settings/chat controls with the public WindieOS landing-page black and
  electric-blue palette, including visible progress, active, selected, granted,
  and success states.
- Switch remaining gray hover states across chat, sidebar, settings, memory,
  model cards, attachment controls, and scrollbars to WindieOS blue hover
  treatments.
- Match the settings modal surface to the dashboard's near-black shell
  background.
- Make outgoing user chat bubbles use the WindieOS blue accent instead of a
  neutral white surface.
- Remove the left blue inset accent from selected sidebar chat rows.
- Request the model catalog on renderer startup so packaged installs open the
  hosted backend connection before the chat model controls render.
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
