/**
 * PhysicianLabs E2E server helpers.
 * Manages MCP server lifecycle for end-to-end tests.
 */

import { ChildProcess, spawn } from 'child_process';
import * as net from 'net';
import axios from 'axios';
import { getPort } from '../core/utils/git-utils';

// --- Port / URL resolution ---

export function getTestServerPort(): number {
  if (process.env.FRAIM_TEST_SERVER_PORT) {
    return parseInt(process.env.FRAIM_TEST_SERVER_PORT, 10);
  }
  return getPort();
}

export function getTestServerUrl(): string {
  return (
    process.env.FRAIM_TEST_SERVER_URL ||
    `http://localhost:${getTestServerPort()}`
  );
}

// --- Port conflict detection ---

export function isPortInUse(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => resolve(true));
    server.once('listening', () => {
      server.close();
      resolve(false);
    });
    server.listen(port);
  });
}

// --- Server lifecycle ---

let serverProcess: ChildProcess | null = null;

export async function startTestServer(): Promise<void> {
  const port = getTestServerPort();

  if (await isPortInUse(port)) {
    console.log(`[E2E] Server already running on port ${port}`);
    return;
  }

  serverProcess = spawn('npx', ['tsx', 'src/mcp-server.ts'], {
    env: { ...process.env, PORT: String(port) },
    stdio: 'pipe',
  });

  serverProcess.stdout?.on('data', (d) =>
    process.stdout.write(`[MCP] ${d}`)
  );
  serverProcess.stderr?.on('data', (d) =>
    process.stderr.write(`[MCP] ${d}`)
  );

  await waitForServer(15000);
  console.log(`[E2E] Server started on port ${port}`);
}

export async function stopTestServer(): Promise<void> {
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
    serverProcess = null;
    console.log('[E2E] Server stopped');
  }
}

// --- Health polling ---

export async function waitForServer(timeoutMs = 10000): Promise<void> {
  const healthUrl = `${getTestServerUrl()}/health`;
  const deadline = Date.now() + timeoutMs;
  console.log(`[E2E] Waiting for ${healthUrl}...`);

  while (Date.now() < deadline) {
    try {
      await axios.get(healthUrl, { timeout: 2000 });
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  throw new Error(`Server not ready after ${timeoutMs}ms`);
}

// --- MCP JSON-RPC helper ---

export async function sendMCPRequest(
  method: string,
  params: Record<string, unknown> = {}
): Promise<unknown> {
  const response = await axios.post(
    `${getTestServerUrl()}/mcp`,
    { jsonrpc: '2.0', method, params, id: Date.now() },
    { headers: { 'Content-Type': 'application/json' }, timeout: 10000 }
  );

  if (response.data.error) {
    throw new Error(`MCP error: ${response.data.error.message}`);
  }

  return response.data.result;
}
