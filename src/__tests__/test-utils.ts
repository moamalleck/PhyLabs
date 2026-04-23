/**
 * PhysicianLabs test utilities.
 * Provides BaseTestCase, tag-based filtering, and the runTests runner
 * for all unit and integration test suites.
 */

/**
 * Every test case in PhysicianLabs implements this interface.
 * The `tags` array enables selective execution:
 *   --tags=unit          run only unit tests
 *   EXCLUDE_TAGS=slow    skip slow tests
 */
export interface BaseTestCase {
  name: string;
  description?: string;
  tags?: string[];           // e.g. ['unit', 'auth'], ['integration', 'db']
  testFn?: () => Promise<boolean>;
}

/**
 * Normalises line endings to LF.
 * Prevents test failures caused by CRLF vs LF differences on Windows.
 */
export function normalizeLineEndings(content: string): string {
  return content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

/**
 * Runs a suite of test cases with optional tag filtering.
 *
 * Tag sources (in priority order):
 *  1. CLI arg:  --tags=unit,auth
 *  2. Env var:  TAGS=unit,auth
 *  3. Env var:  EXCLUDE_TAGS=slow,e2e  (exclusion)
 */
export async function runTests<T extends BaseTestCase>(
  testCases: T[],
  testTitle: string
): Promise<void> {
  console.log(`\nRunning: ${testTitle}\n`);

  // --- Parse inclusion tags ---
  let tagsFilter: string[] = [];
  const tagsArg = process.argv.find(
    (arg) => typeof arg === 'string' && arg.startsWith('--tags=')
  );
  if (tagsArg) {
    const val = tagsArg.split('=')[1];
    if (val) tagsFilter = val.split(',');
  }
  if (tagsFilter.length === 0 && process.env.TAGS) {
    tagsFilter = process.env.TAGS.split(',');
  }

  // --- Parse exclusion tags ---
  const excludeTags: string[] = process.env.EXCLUDE_TAGS
    ? process.env.EXCLUDE_TAGS.split(',')
    : [];

  // --- Apply filters ---
  const testsToRun = testCases.filter((tc) => {
    if (tagsFilter.length > 0) {
      if (!tc.tags?.some((t) => tagsFilter.includes(t))) return false;
    }
    if (excludeTags.length > 0) {
      if (tc.tags?.some((t) => excludeTags.includes(t))) return false;
    }
    return true;
  });

  if (testsToRun.length === 0) {
    console.log('No tests match the current filter.\n');
    return;
  }

  console.log(`Running ${testsToRun.length} of ${testCases.length} test(s)\n`);

  let passed = 0;
  let failed = 0;

  for (const tc of testsToRun) {
    try {
      if (tc.testFn) {
        const result = await tc.testFn();
        if (!result) throw new Error(`Test returned false`);
      }
      console.log(`  ✅ ${tc.name}`);
      passed++;
    } catch (err) {
      console.error(`  ❌ ${tc.name}: ${(err as Error).message}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}
