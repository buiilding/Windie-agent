<p align="center">
  <img src="image.png" alt="Windie Agent banner" width="100%">
</p>

# Windie Agent

<p align="center">
  <a href="https://github.com/buiilding/Windie-agent/releases"><img src="https://img.shields.io/badge/Release-GitHub-2563EB?style=for-the-badge" alt="Release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-16A34A?style=for-the-badge" alt="MIT License"></a>
  <a href="https://discord.gg/windieos"><img src="https://img.shields.io/badge/Discord-Join-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="AGENTS.md"><img src="https://img.shields.io/badge/Agents-AGENTS.md-111827?style=for-the-badge" alt="AGENTS.md"></a>
</p>

**Welcome to Windie.** Windie is a desktop agent for your real computer: a
local Electron experience with a Python sidecar, hosted model orchestration,
computer-use, browser-use, memory, terminal access, and UI surfaces that stay
with you while the agent works.

Windie belongs in the same conversation as Hermes, OpenClaw, Codex, Claude
Code, and the other serious agent systems. Like Codex, it has computer-use
built in. Unlike vendor-specific computer tools, Windie's local computer-use
contract is model-agnostic: any supported model can drive the same screenshot
loop, tool calls, and desktop actions.

The goal is simple: ask for something in natural language, let Windie use the
screen you are already looking at, and keep the work visible enough that you can
trust, interrupt, or redirect it.

---

## What Makes Windie Different

<table>
<tr><td><b>Computer-use built in</b></td><td>Windie works through a sequential screenshot loop: observe the desktop, reason over the image and state, act with local tools, observe again, and continue.</td></tr>
<tr><td><b>Works with any supported model</b></td><td>The computer-use tools are exposed through Windie's own tool contract, so they are not limited to OpenAI-native computer-use models.</td></tr>
<tr><td><b>Human-inspired memory</b></td><td>Windie's memory direction is episodic, semantic, and procedural: what happened, what should be remembered, and how repeatable work should be done next time.</td></tr>
<tr><td><b>Dedicated browser-use profile</b></td><td>Windie uses a WindieOS-owned persistent browser profile instead of attaching an extension to your normal Chrome profile, so you can keep working in your own browser.</td></tr>
<tr><td><b>Two-state desktop UI</b></td><td>A minimal always-present chat pill for fast goals, plus a fullscreen dashboard for tool logs, transcripts, memory, settings, and deeper inspection.</td></tr>
</table>

---

## The Windie Loop

```text
You describe a goal.
Windie captures the current screen.
The model decides what to do next.
The sidecar executes local tools.
Windie shows progress in the pill or dashboard.
The loop repeats until the task is done or you stop it.
```

Computer-use is intentionally screenshot-first. Windie does not need to own an
accessibility tree or a single model vendor's desktop API to act. It sees the
screen, clicks, types, scrolls, runs commands, reads files, drives its browser,
and checks the result before taking the next step.

## The Windie Vibe

Windie has two UI states.

**The first state is the minimal chat pill.** It floats on your screen, stays
out of the way, and automatically takes a screenshot of your screen when you
send a message. This is the state I recommend living in most of the time.

**The second state is the fullscreen dashboard.** It shows the longer
conversation, live tool logs, memory surfaces, settings, and everything else
you need when you want to inspect the agent loop closely.

The product is designed to feel present without taking over the computer. Start
from the pill, expand into the dashboard when you want more visibility, and
return to the pill when you want the agent out of the way. If you close the
pill, Windie opens the dashboard so the second state is always one step away
instead of losing the running context.

---

## Core Systems

### Computer-Use

Windie can use your machine through local sidecar tools:

- screenshots and screen-state capture
- mouse movement, clicking, dragging, and scrolling
- keyboard input
- shell commands and long-running processes
- filesystem reads, writes, and searches
- browser-use actions through the Windie browser runtime

The hosted backend owns model orchestration and model-facing tool schemas. The
local sidecar owns execution on the user's computer.

### Memory

Windie's memory system is inspired by how people remember:

- **Episodic memory**: records of conversations, events, and what happened.
- **Semantic memory**: distilled facts, preferences, and durable context.
- **Procedural memory**: repeatable routines, workflows, and learned ways of
  doing tasks.

This is one of Windie's core bets: agents should not only store chat logs. They
should develop useful continuity across sessions.

### Browser-Use

Windie does not attach to your everyday Chrome profile by default.

Instead, it uses a WindieOS-owned persistent browser profile. The agent keeps
its own cookies, sessions, and automation context while your personal browser
stays separate and usable.

### Desktop UI

The client experience is split across:

- **Minimal chat pill** for fast prompts and automatic screenshot context.
- **Fullscreen dashboard** for tool traces, memory, logs, settings, and longer
  agent runs.

Use the pill as the default. Use the dashboard when you want the whole loop in
front of you.

## Quick Start

### Requirements

- macOS, Windows, or Linux
- Node.js 18+
  
### Run From Source

```bash
git clone https://github.com/buiilding/Windie-agent.git
cd Windie-agent
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install sidecar dependencies:

```bash
cd ..
./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt
```

Start the renderer:

```bash
cd frontend
npm run dev
```

In another terminal, start Electron:

```bash
cd frontend
npm run electron:dev
```

By default, the client is designed to talk to the configured hosted WindieOS
backend. Use `BACKEND_*` or `WINDIE_BACKEND_*` overrides only when pointing the
client at another compatible backend.

## Docs

Start with the [Documentation Hub](docs/getting-started/docs_hub.md), or jump
directly into a topic:

| Section | What it covers |
| --- | --- |
| [Quick Start](docs/getting-started/quick_start.md) | Install dependencies and run the public client from source. |
| [Installation](docs/getting-started/installation.md) | Source install, endpoint overrides, sidecar Python resolution, and verification. |
| [User Guide](docs/getting-started/user_guide.md) | Chat pill, dashboard, browser-use, memory, and stop/redirect behavior. |
| [Frontend Architecture](docs/architecture/frontend_architecture.md) | Electron main, React renderer, preload boundary, and sidecar ownership. |
| [Communication Flow](docs/architecture/communication_flow.md) | IPC, JSON-RPC, WebSocket, HTTP, query, memory, and tool event paths. |
| [Tool System](docs/architecture/tool_system.md) | Hosted orchestration boundary, sidecar tool execution, and renderer visibility. |
| [Browser-Use](docs/browser/browser_control.md) | Windie browser profile, browser automation actions, and runtime behavior. |
| [Frontend Docs](docs/frontend/README.md) | Deep frontend maps across main, renderer, preload, contracts, runtime, and inventory. |
| [Sidecar Docs](docs/frontend/sidecar/README.md) | Python sidecar runtime, memory, browser automation, services, and tools. |
| [Operations](docs/operations/release.md) | Configuration, packaging, release, security, performance, and sidecar runtime packaging. |
| [Development](docs/development/contributing.md) | Contribution workflow, environment setup, tests, and tool development. |
| [API Reference](docs/reference/api_reference.md) | Public hosted API transport surfaces consumed by the client and sidecar. |

The public client docs intentionally describe the Electron frontend, Python
sidecar, browser-use runtime, local memory, packaging, and hosted transport
contracts. Private hosted backend implementation docs are not part of this
repository.

## License

See [LICENSE](LICENSE).
