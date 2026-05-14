const {
  buildAgentCapabilityHandshakePayload,
} = require('../../frontend/src/main/agent_capability_handshake.cjs');

describe('agent capability handshake manifest', () => {
  test('includes client tool manifest and preserves remote web_search availability', () => {
    const payload = buildAgentCapabilityHandshakePayload();

    expect(payload.available_tools).toContain('read_file');
    expect(payload.available_tools).toContain('web_search');
    expect(payload.client_tool_manifest.tools).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'read_file',
          execution_target: 'sidecar',
          argument_resolution: 'passthrough',
        }),
        expect.objectContaining({
          name: 'mouse_control',
          execution_target: 'sidecar',
          argument_resolution: 'backend_grounding',
        }),
      ]),
    );
  });

  test('omits disabled local tools from manifest and available tools', () => {
    const payload = buildAgentCapabilityHandshakePayload({
      disabledTools: ['browser'],
    });

    expect(payload.available_tools).not.toContain('browser');
    expect(payload.client_tool_manifest.tools.map((tool) => tool.name)).not.toContain('browser');
  });
});
