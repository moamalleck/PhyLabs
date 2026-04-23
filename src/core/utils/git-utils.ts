import { execSync } from 'child_process';

/**
 * Allocates a unique port based on the current git branch's issue number.
 * Formula: 10000 + (issueNumber % 55535) — keeps ports in the safe range 10000–65535.
 * This lets multiple issue branches run simultaneously without port conflicts.
 */
export function getPort(): number {
  try {
    const branchName =
      process.env.FRAIM_BRANCH ||
      execSync('git rev-parse --abbrev-ref HEAD', { timeout: 2000, stdio: 'pipe' })
        .toString()
        .trim();

    const issueMatch =
      branchName.match(/issue-(\d+)/i) || branchName.match(/(\d+)-/);

    if (issueMatch) {
      const issueNum = parseInt(issueMatch[1], 10);
      return 10000 + (issueNum % 55535);
    }
  } catch {
    // Silently fail if git is unavailable (CI, Docker, etc.)
  }

  // Environment variable fallback chain for different hosting platforms
  return (
    Number(process.env.PORT) ||
    Number(process.env.WEBSITES_PORT) ||
    Number(process.env.FRAIM_MCP_PORT) ||
    15302
  );
}

/**
 * Returns a PostgreSQL database name scoped to the current git branch.
 * Each issue branch gets its own database: physicianlab_issue_<N>
 * This enables parallel development without data conflicts between branches.
 */
export function determineDatabaseName(): string {
  try {
    const branchName =
      process.env.FRAIM_BRANCH ||
      process.env.FRAIM_BRANCH_NAME ||
      execSync('git rev-parse --abbrev-ref HEAD', { timeout: 2000, stdio: 'pipe' })
        .toString()
        .trim();

    const issueMatch =
      branchName.match(/issue-(\d+)/i) || branchName.match(/(\d+)-/);

    if (issueMatch) {
      return `physicianlab_issue_${issueMatch[1]}`;
    }
  } catch {
    // Silently fail
  }

  return (
    process.env.POSTGRES_DB ||
    (process.env.NODE_ENV === 'production' ? 'physicianlab_prod' : 'physicianlab_dev')
  );
}

/**
 * Returns the current git branch name.
 * Includes a 2-second timeout to prevent hangs on broken repos or network mounts.
 */
export function getCurrentGitBranch(): string {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD', {
      timeout: 2000,
      stdio: 'pipe',
    })
      .toString()
      .trim();
  } catch {
    return 'main';
  }
}
