# PhysicianLabs — Project Rules

These rules apply to every AI agent working in this repository. Read and follow them before taking any action.

---

## Workspace Rule — No Worktrees

**ABSOLUTE RULE: Never create git worktrees or new git branches for FRAIM jobs.**

All FRAIM work — every job, every phase, every file output — must happen directly inside the main project directory: `C:\Users\Admin\Documents\MyNewStartup`.

- Do NOT call `EnterWorktree` or any equivalent worktree-creation tool.
- Do NOT run `prep-issue.sh` or any script that creates a branch or worktree.
- Do NOT use the `isolation: "worktree"` option in any agent invocation.
- Work in place in the current workspace at all times.
- The only exception is if the user explicitly says "create a worktree" or "create a branch" in their message.

This overrides the FRAIM `local-development` rule's isolated-issue-worktree option. Worktrees are disabled for this project (`fraim/config.json` → `customizations.worktrees: false`).

---

## Non-Negotiables

### 1. HIPAA-Awareness by Default
Never log, expose, or persist Protected Health Information (PHI) — including patient names, dates of birth, diagnoses, treatment records, or insurance details. Any feature that touches patient data must be flagged for compliance review before implementation begins.

### 2. Auth on Every Endpoint
Every API route and server action must be authenticated. Implement RBAC with at minimum three roles: `provider`, `admin`, and `patient`. No endpoint may be publicly accessible unless explicitly approved.

### 3. Test Before Merge
Every feature or bug fix requires at least one unit test and one integration test before a pull request is considered complete. Do not submit or approve work that lacks test coverage.

### 4. Accessibility (WCAG 2.1 AA)
All UI components must meet WCAG 2.1 Level AA standards: sufficient colour contrast, full keyboard navigation, correct ARIA labels, and screen-reader compatibility.

---

## Repo Conventions

### Stack Discipline
The approved stack is **Next.js 16 (App Router) + Node.js + Tailwind CSS v4**. Do not introduce additional UI frameworks, component libraries, or alternative styling systems without explicit approval.

### Next.js 16 — Read the Docs First
This project uses Next.js 16 (App Router, Turbopack). APIs and conventions differ significantly from earlier versions. Read `node_modules/next/dist/docs/` before writing any Next.js code. Heed all deprecation notices.

### API-First Architecture
All business logic must live in Node.js API routes or Next.js server actions. Client components must stay thin and presentational. Do not put business rules, data access, or validation logic inside React components.

### Path Alias
Use `@/*` to reference `src/*` in all imports (configured in `tsconfig.json`). Never use relative `../../` paths across module boundaries.

### Port Allocation
Use `getPort()` from `src/core/utils/git-utils.ts` for all port assignments. Never hardcode port numbers.

### Database Naming
Use `determineDatabaseName()` from `src/core/utils/git-utils.ts` for all database name references. Never hardcode database names. Each issue branch gets its own isolated PostgreSQL database.

### No Hardcoded Secrets
Never hardcode secrets, tokens, or credentials. All configuration must come from `.env.local` (see `.env.example`).

### Issue Filing
Use `fileIssue()` from `src/issues.ts` for all programmatic GitHub issue creation. Never call the GitHub API directly.

### MCP Tool Registration
Register all new AI-callable tools in `src/mcp-server.ts` under `tools/call`. Do not add AI tooling to the Next.js application layer.

---

## Verification Defaults

- **Feature work**: Run `npm test` to verify unit and integration tests pass before opening a PR.
- **UI changes**: Verify WCAG 2.1 AA compliance and browser rendering before marking complete.
- **API changes**: Confirm auth middleware is applied and RBAC roles are enforced.
- **Database changes**: Confirm branch-scoped DB isolation is preserved via `determineDatabaseName()`.
- **MCP changes**: Run `npm run e2e` to validate the MCP sidecar health and tool registration.

---

## Experiment Hygiene

### Close Every Experiment on Its Review Date
Every experiment or test document (e.g., `marketing/strategy/business-development/experiment-design-*.md`) must be closed with a recorded **PASS / FAIL verdict and supporting evidence on its stated review/decision date**. Do not leave an experiment's evidence log frozen or its verdict unrecorded past the decision date. If the review date arrives and the outcome is genuinely ambiguous, record an explicit **INCONCLUSIVE** verdict with the reason rather than leaving it open. (Origin: the first MVT lapsed 11 days un-closed before its June 4 verdict was reconstructed on June 15.)

---

## Escalation Triggers

Stop and ask the project owner before proceeding when:
- A feature requires logging, storing, or transmitting PHI.
- A new third-party library, framework, or styling system is needed.
- An endpoint must be made publicly accessible.
- A schema migration affects the production database.
- Compliance (HIPAA) scope is unclear for a given feature.
