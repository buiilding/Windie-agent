---
summary: "Contributing"
read_when:
  - When preparing PRs or working on dev workflow.
---

# Contributing

## Workflow

1. Create a branch for your change.
2. Make updates and keep docs in sync.
3. Run tests when relevant.
4. Submit a PR with a clear summary.

## Commit Messages

Use Conventional Commits for the subject line (`feat|fix|refactor|build|ci|chore|docs|style|perf|test`), and include a short description body when it improves reviewability.

Example:

```
feat(frontend-dashboard): delete semantic memory entries

- Add right-click delete menu in Semantic Memory section.
- Wire IPC bridge to sidecar delete handler.
- Add regression tests.
```

## Where to Edit

- Frontend: `frontend/src/`
- Sidecar tools: `frontend/src/main/python/`
- Docs: `docs/`

## Tests

- Full public-client gate: `./scripts/test`
- Sidecar tests: `./scripts/test-sidecar`
- Docs sanity: `bin/docs-list` (or `node scripts/docs-list.js`)
- Frontend lint: `cd frontend && npm run lint`
- Frontend CI tests: `cd frontend && npm run test:ci`
- Frontend checks auto-skip when `frontend/node_modules` is missing.
