/**
 * PhysicianLabs issue filing endpoint.
 * Files bugs and tasks to GitHub Issues (moamalleck/PhyLabs).
 *
 * Required environment variables:
 *   GITHUB_TOKEN   — Personal Access Token with `repo` scope
 *   REPO_OWNER     — defaults to "moamalleck"
 *   REPO_NAME      — defaults to "PhyLabs"
 */

import axios from 'axios';

export interface FileIssueParams {
  title: string;
  body: string;
  labels?: string[];
  dryRun?: boolean;
  // Client identity — injected by the MCP server from session context
  clientEmail?: string;    // who filed the issue
  clientAgent?: string;    // which AI agent filed it (e.g. "Claude")
  clientContext?: string;  // branch, job, or phase context
}

export interface IssueResult {
  success: boolean;
  issueNumber?: number;
  issueUrl?: string;
  message?: string;
  dryRun?: boolean;
}

export async function fileIssue(params: FileIssueParams): Promise<IssueResult> {
  const { title, labels, dryRun, clientEmail, clientAgent, clientContext } = params;

  // Prepend client identity block so every issue is traceable
  const identityLines: string[] = [];
  if (clientEmail) identityLines.push(`**Filed by:** ${clientEmail}`);
  if (clientAgent) identityLines.push(`**Agent:** ${clientAgent}`);
  if (clientContext) identityLines.push(`**Context:** ${clientContext}`);
  const identityBlock =
    identityLines.length > 0 ? identityLines.join('\n') + '\n\n---\n\n' : '';
  const body = identityBlock + params.body;

  // Dry-run: simulate success without hitting the GitHub API
  if (dryRun) {
    return {
      success: true,
      dryRun: true,
      message: `[DRY RUN] Would create issue: "${title}"`,
    };
  }

  const token = process.env.GITHUB_TOKEN || process.env.ISSUE_TRACKER_TOKEN;
  if (!token) {
    return {
      success: false,
      message:
        'Missing GITHUB_TOKEN environment variable. Add it to your .env.local file.',
    };
  }

  const owner = process.env.REPO_OWNER ?? 'moamalleck';
  const repo = process.env.REPO_NAME ?? 'PhyLabs';
  const url = `https://api.github.com/repos/${owner}/${repo}/issues`;

  try {
    const payload: Record<string, unknown> = { title, body };
    if (labels && labels.length > 0) payload.labels = labels;

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
    });

    return {
      success: true,
      issueNumber: response.data.number,
      issueUrl: response.data.html_url,
    };
  } catch (error: unknown) {
    const message = axios.isAxiosError(error)
      ? `GitHub API error: ${error.response?.status} ${error.response?.statusText}`
      : 'Unknown error filing issue';
    return { success: false, message };
  }
}
