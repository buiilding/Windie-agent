#!/usr/bin/env node
const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = Number.parseInt(process.env.WINDIE_MOCK_BACKEND_PORT || '8765', 10);

function send(ws, type, payload = {}) {
  ws.send(JSON.stringify({ type, payload }));
}

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ ok: true, service: 'windie-agent-mock-backend' }));
    return;
  }
  res.writeHead(404);
  res.end('not found');
});

const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws) => {
  let handshake = null;

  ws.on('message', (raw) => {
    let message;
    try {
      message = JSON.parse(raw.toString());
    } catch (_error) {
      send(ws, 'error', { error: 'invalid JSON' });
      return;
    }

    if (!handshake) {
      if (message?.type !== 'handshake') {
        send(ws, 'error', { error: 'first message must be handshake' });
        ws.close();
        return;
      }
      handshake = message;
      const manifestTools = Array.isArray(message.client_tool_manifest?.tools)
        ? message.client_tool_manifest.tools
        : [];
      send(ws, 'client-tool-manifest', {
        accepted: manifestTools,
        rejected: [],
      });
      send(ws, 'remote-tool-catalog', {
        remote_tools: [{
          name: 'web_search',
          description: 'Mock hosted web search tool.',
          enabled: true,
          available: true,
          reason_unavailable: null,
        }],
      });
      return;
    }

    if (message.type === 'query') {
      const toolSchemas = Array.isArray(handshake.client_tool_manifest?.tools)
        ? handshake.client_tool_manifest.tools.map((tool) => ({
          type: 'function',
          name: tool.name,
          description: tool.description,
          parameters: tool.model_schema || { type: 'object' },
        }))
        : [];
      send(ws, 'system-prompt', {
        content: 'Mock WindieOS system prompt.',
        tool_schemas: null,
      });
      send(ws, 'tool-schemas', { tool_schemas: toolSchemas });
      send(ws, 'streaming-response', { chunk: 'Mock response from Windie-agent backend. ' });
      send(ws, 'streaming-complete', {
        content: 'Mock response from Windie-agent backend.',
      });
      return;
    }

    if (message.type === 'tool-result' || message.type === 'tool-bundle-result') {
      send(ws, 'tool-output', {
        output: 'mock tool result accepted',
        metadata: { source: 'mock-backend' },
      });
    }
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Windie-agent mock backend listening on ws://127.0.0.1:${PORT}/ws`);
});
