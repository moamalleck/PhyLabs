/**
 * PhysicianLabs MCP Server
 * Exposes AI-callable tools via JSON-RPC 2.0 over HTTP.
 *
 * Endpoints:
 *   GET  /health  — readiness probe (used by IDEs, e2e tests, cloud deployments)
 *   POST /mcp     — JSON-RPC 2.0 endpoint for AI agent tool calls
 */

import express from 'express';
import cors from 'cors';
import { getPort } from './core/utils/git-utils';

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// ---------------------------------------------------------------------------
// Health check — required by IDEs, e2e helpers, and cloud health probes
// ---------------------------------------------------------------------------
app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'physician-labs-mcp',
    timestamp: new Date().toISOString(),
  });
});

// ---------------------------------------------------------------------------
// MCP endpoint — JSON-RPC 2.0
// ---------------------------------------------------------------------------
app.post('/mcp', async (req, res) => {
  const { method, params, id } = req.body;

  try {
    let result: unknown;

    switch (method) {
      case 'initialize':
        result = {
          protocolVersion: '2024-11-05',
          capabilities: { tools: {} },
          serverInfo: { name: 'physician-labs-mcp', version: '0.1.0' },
        };
        break;

      case 'tools/list':
        // Register new AI-callable tools here as features are built
        result = { tools: [] };
        break;

      case 'tools/call':
        result = {
          content: [{ type: 'text', text: 'No tools registered yet.' }],
        };
        break;

      default:
        res.status(400).json({
          jsonrpc: '2.0',
          error: { code: -32601, message: `Method not found: ${method}` },
          id,
        });
        return;
    }

    res.json({ jsonrpc: '2.0', result, id });
  } catch {
    res.status(500).json({
      jsonrpc: '2.0',
      error: { code: -32603, message: 'Internal server error' },
      id,
    });
  }
});

// ---------------------------------------------------------------------------
// Start — uses git-based port allocation to avoid conflicts across branches
// ---------------------------------------------------------------------------
const port = getPort();

app.listen(port, () => {
  console.log(`[PhysicianLabs MCP] Running on port ${port}`);
  console.log(`[PhysicianLabs MCP] Health: http://localhost:${port}/health`);
  console.log(`[PhysicianLabs MCP]    MCP: http://localhost:${port}/mcp`);
});

export default app;
