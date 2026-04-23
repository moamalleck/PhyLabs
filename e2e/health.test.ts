/**
 * PhysicianLabs — E2E: MCP Server Health Check
 *
 * Verifies the MCP server starts, responds to /health,
 * and handles a JSON-RPC `initialize` request correctly.
 *
 * Run: npm run e2e
 */

import {
  startTestServer,
  stopTestServer,
  sendMCPRequest,
  getTestServerUrl,
} from '../src/__tests__/shared-server-utils';
import axios from 'axios';

async function runE2ETests(): Promise<void> {
  console.log('\n🧪 PhysicianLabs E2E — MCP Health Check\n');

  await startTestServer();

  let passed = 0;
  let failed = 0;

  // --- Test 1: /health returns 200 ---
  try {
    const res = await axios.get(`${getTestServerUrl()}/health`, { timeout: 5000 });
    if (res.status === 200 && res.data.status === 'ok') {
      console.log('  ✅ /health returns 200 with status: ok');
      passed++;
    } else {
      throw new Error(`Unexpected response: ${JSON.stringify(res.data)}`);
    }
  } catch (err) {
    console.error(`  ❌ /health check failed: ${(err as Error).message}`);
    failed++;
  }

  // --- Test 2: MCP initialize handshake ---
  try {
    const result = (await sendMCPRequest('initialize')) as {
      protocolVersion: string;
      serverInfo: { name: string };
    };
    if (result.protocolVersion && result.serverInfo?.name === 'physician-labs-mcp') {
      console.log('  ✅ MCP initialize returns correct protocolVersion and serverInfo');
      passed++;
    } else {
      throw new Error(`Unexpected result: ${JSON.stringify(result)}`);
    }
  } catch (err) {
    console.error(`  ❌ MCP initialize failed: ${(err as Error).message}`);
    failed++;
  }

  // --- Test 3: tools/list returns empty list ---
  try {
    const result = (await sendMCPRequest('tools/list')) as { tools: unknown[] };
    if (Array.isArray(result.tools)) {
      console.log('  ✅ tools/list returns an array');
      passed++;
    } else {
      throw new Error(`Expected tools array, got: ${JSON.stringify(result)}`);
    }
  } catch (err) {
    console.error(`  ❌ tools/list failed: ${(err as Error).message}`);
    failed++;
  }

  await stopTestServer();

  console.log(`\nResults: ${passed} passed, ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}

runE2ETests().catch((err) => {
  console.error('E2E suite crashed:', err);
  process.exit(1);
});
