<!-- BEGIN:fraim-sync — auto-generated from fraim/config.json + project rules. Do not edit manually. -->

# PhysicianLabs — Agent Instructions

You are working inside the **PhysicianLabs** repository (`moamalleck/PhyLabs`).
Read this file fully before taking any action.

---

## Project Identity

| Field | Value |
|---|---|
| **Product** | PhysicianLabs |
| **Industry** | HealthTech — SaaS for healthcare providers (clinics, doctors, small care centres) |
| **Repo** | `github.com/moamalleck/PhyLabs` |
| **Issue tracker** | GitHub Issues — `moamalleck/PhyLabs` |
| **FRAIM mode** | `integrated` |
| **Architecture doc** | `product/architecture/architecture.md` |

---

## This is NOT the Next.js you know

This project uses **Next.js 16** (App Router, Turbopack). APIs, conventions, and file structure
may differ significantly from your training data.
Read `node_modules/next/dist/docs/` before writing any Next.js code. Heed all deprecation notices.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | TypeScript 5 (strict mode) |
| Frontend | Next.js 16 — App Router, React Server Components |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Backend | Next.js Server Actions + API Routes |
| AI sidecar | Express 4 — MCP server (`src/mcp-server.ts`, port 15302) |
| Database | PostgreSQL (`pg`) — branch-scoped DB naming via `src/core/utils/git-utils.ts` |
| Testing | Jest + ts-jest (unit/integration), Playwright (e2e, planned) |
| Runtime | Node.js v24 |

---

## Project Rules

### 1. HIPAA-Awareness by Default
Never log, expose, or persist Protected Health Information (PHI) — including patient names,
dates of birth, diagnoses, treatment records, or insurance details. Any feature that touches
patient data must be flagged for compliance review before implementation begins.

### 2. Stack Discipline
The approved stack is **Next.js (App Router) + Node.js + Tailwind CSS**.
Do not introduce additional UI frameworks, component libraries, or alternative styling systems
without explicit approval from the project owner.

### 3. API-First Architecture
All business logic must live in Node.js API routes or Next.js server actions.
Client components must stay thin and presentational.
Do not put business rules, data access, or validation logic inside React components.

### 4. Auth on Every Endpoint
Every API route and server action must be authenticated.
Implement RBAC with at minimum three roles: `provider`, `admin`, and `patient`.
No endpoint may be publicly accessible unless explicitly approved.

### 5. Accessibility (WCAG 2.1 AA)
All UI components must meet WCAG 2.1 Level AA standards: sufficient colour contrast,
full keyboard navigation, correct ARIA labels, and screen-reader compatibility.

### 6. Test Before Merge
Every feature or bug fix requires at least one unit test and one integration test
before a pull request is considered complete.

---

## Repository Structure

```
src/
  app/                        # Next.js App Router — RSC + client components
    layout.tsx                # Root layout (Geist fonts, Tailwind)
    page.tsx                  # Home route (provider dashboard placeholder)
    globals.css
  core/
    utils/
      git-utils.ts            # getPort(), determineDatabaseName(), getCurrentGitBranch()
  services/                   # Domain services (planned)
  middleware/                 # Middleware (planned)
  models/                     # PostgreSQL models (planned)
  types/                      # Shared TypeScript types (planned)
  config/                     # Config modules (planned)
  lib/                        # Shared library code — db.ts connection pool (planned)
  __tests__/
    test-utils.ts             # BaseTestCase, tag filtering, runTests<T>()
    shared-server-utils.ts    # MCP server lifecycle helpers for e2e tests
  issues.ts                   # GitHub issue filing (fileIssue())
  mcp-server.ts               # Express MCP sidecar — /health + /mcp (JSON-RPC 2.0)

e2e/
  health.test.ts              # MCP server health + initialize e2e test

fraim/
  config.json                 # FRAIM config (mode, repo, issue tracker, customizations)
  personalized-employee/
    rules/project_rules.md    # Agent operating rules (source of truth for this file)

# Three-domain split (see STRUCTURE.md for the full guide)
marketing/                    # Internal GTM brain — strategy, research, competitor analysis,
                              #   customer research, discussion prep, emails, FRAIM job outputs
website/                      # Everything publicly accessible — landing, signup, demo,
                              #   testimonials, shareable credibility/partnership materials
product/                      # Engineering — APIs, architecture, EMR integrations, tests, infra
  architecture/
    architecture.md           # Full system architecture document (read before designing)
```

---

## Key Conventions

- **Path alias**: `@/*` maps to `src/*` (configured in `tsconfig.json`)
- **Port allocation**: `getPort()` in `git-utils.ts` — do not hardcode ports
- **Database naming**: `determineDatabaseName()` — branch-scoped, do not hardcode DB names
- **Environment variables**: never hardcode secrets; all config via `.env.local` (see `.env.example`)
- **Issue filing**: use `fileIssue()` from `src/issues.ts` for programmatic GitHub issues
- **MCP tools**: register new AI-callable tools in `src/mcp-server.ts` under `tools/call`

---

## Available Scripts

| Script | Command | Purpose |
|---|---|---|
| Dev server | `npm run dev` | Start Next.js on port 3000 |
| Build | `npm run build` | Production build (Turbopack) |
| Tests | `npm test` | Jest unit + integration tests |
| MCP server | `npm run mcp` | Start MCP sidecar (`npx tsx src/mcp-server.ts`) |
| E2E tests | `npm run e2e` | Run MCP health e2e test |

---

<!-- END:fraim-sync -->

<!-- FRAIM_AGENT_ADAPTER_START -->
## FRAIM

This repository uses FRAIM.

- The FRAIM discovery catalog lives under `fraim/`.
- Jobs under `fraim/ai-employee/jobs/` and `fraim/ai-manager/jobs/` are FRAIM's primary execution units. Treat them like first-class workflows when deciding how to execute work.
- Skills under `fraim/ai-employee/skills/` are reusable capabilities that jobs compose.
- Rules under `fraim/ai-employee/rules/` are always-on constraints and conventions.
- Repo-specific overrides and learning artifacts live under `fraim/personalized-employee/` and take precedence over synced baseline content.
- Before acting on any user request, scan the job stubs under `fraim/ai-employee/jobs/` and `fraim/ai-manager/jobs/` to identify the most appropriate job. Read stub filenames and their Intent/Outcome sections to match the request to the right job.
- Once you identify the relevant job, call `get_fraim_job({ job: "<job-name>" })` to get the full phased instructions.
- For deeper capability detail, call `get_fraim_file({ path: "skills/<category>/<skill-name>.md" })` or `get_fraim_file({ path: "rules/<category>/<rule-name>.md" })`.
- Read `fraim/personalized-employee/rules/project_rules.md` if it exists before doing work.
- When users ask for next step recommendations, use recommend-next-job skill under `fraim/ai-employee/skills/` to gather context before suggesting jobs.

> [!IMPORTANT]
> **Job stubs are for discovery only.** When a user mentions or references any file under `fraim/ai-employee/jobs/` or `fraim/ai-manager/jobs/`, do NOT attempt to execute the job from the stub content. The stub only shows intent and phase names. Always call `get_fraim_job({ job: "<job-name>" })` first to get the full phased instructions before doing any work.
<!-- FRAIM_AGENT_ADAPTER_END -->
