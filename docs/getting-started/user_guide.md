---
summary: "User Guide"
read_when:
  - When updating user-facing behavior or UX.
---

# User Guide

## Two UI States

Windie has two primary UI states:

- **Chat pill**: the minimal always-present overlay for quick prompts.
- **Dashboard**: the fullscreen surface for transcript detail, tool logs,
  memory, settings, permissions, and longer inspection.

The intended flow is to start from the chat pill and open the dashboard when
you need more visibility.

## Chat Pill

- Floats on screen and stays out of the way.
- Sends the current screen as context when screenshot capture is enabled.
- Shows compact status while the agent is sending, thinking, or running tools.
- Can hand off to the dashboard for detailed inspection.

## Dashboard

The dashboard gives fuller visibility into:

- chat transcript
- tool-call and tool-output rows
- screenshots and attachments
- memory surfaces
- model/settings controls
- permissions and onboarding surfaces

## Browser-Use

Windie browser-use uses a Windie-owned persistent browser profile by default.
This keeps automation state separate from the user's normal browser profile.

Use the dedicated Windie browser for sign-in state needed by agent browser
tasks.

## Memory

Windie memory is designed around:

- **Episodic memory**: what happened.
- **Semantic memory**: durable facts and preferences.
- **Procedural memory**: repeatable routines and learned workflows.

## Stop And Redirect

Use the visible stop control or configured stop shortcut to interrupt a running
agent loop. Send a new instruction when you want to redirect the task.

## Troubleshooting

See [Troubleshooting](troubleshooting.md).
