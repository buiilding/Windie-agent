---
summary: "How to run and test public-client browser control."
read_when:
  - Running browser for the first time
  - Testing browser automation
---

# How To Run Browser Control

Windie browser-use runs through the public client sidecar and uses a
Windie-owned persistent browser profile by default. It should not attach to the
user's everyday browser profile unless explicitly configured.

## Install Dependencies

From the repository root:

```bash
./scripts/python-in-env sidecar python -m pip install -r frontend/src/main/python/requirements.txt
```

If Playwright browser assets are needed for the current runtime:

```bash
./scripts/python-in-env sidecar python -m playwright install chromium
```

`browser_use` is vendored at:

```text
frontend/src/main/python/tools/browser/browser_use
```

## Run Windie Agent

Terminal 1:

```bash
./scripts/run-frontend-dev
```

Terminal 2:

```bash
./scripts/run-frontend-electron
```

Then ask Windie to use the browser:

```text
Open the Windie browser and go to example.com
```

## Runtime Flags

Browser Use-native runtime is the default path, but these flags are useful for
explicit testing:

```bash
export WINDIE_BROWSER_USE_RUNTIME=browser_use_native
export WINDIE_BROWSER_USE_NATIVE_HANDLER_MODULE=tools.browser.browser_tool
```

## Dedicated Profile Behavior

- If the Windie browser is already running, browser-use attaches to it.
- If it is not running, Windie launches its dedicated browser instance.
- Cookies, sessions, and automation state live in the Windie browser profile.
- The user's normal browser process/profile is not modified by default.

## Test Chrome Detection

```bash
cd frontend/src/main/python
python -c "
from tools.browser.chrome_detection import find_chrome_executable
exe = find_chrome_executable()
print(f'Found: {exe}')
"
```

## Test Via Tool Registry

```bash
cd frontend/src/main/python
python -c "
import asyncio
from tools.registry import ToolRegistry

async def test():
    registry = ToolRegistry()
    result = await registry.execute_tool('browser', {
        'action': 'connect'
    })
    print(f'Connect: {result}')

    result = await registry.execute_tool('browser', {
        'action': 'navigate',
        'url': 'https://example.com'
    })
    print(f'Navigate: {result}')

asyncio.run(test())
"
```

## Browser Tests

```bash
./scripts/python-in-env sidecar python -m pytest tests/sidecar -k browser -v
```

## Chat Examples

```text
Open the Windie browser.
Go to github.com.
What do you see on the page?
Click the sign in button.
```

The hosted model decides when browser-use is needed; the sidecar executes the
local browser actions.
