# Product Development

**The engineering system.** APIs, architecture, EMR integration, tests, synthetic data — everything
technical behind the public login. The public shell is [`../website/`](../website/README.md).

HIPAA note: no real PHI in this repo, ever. Use `synthetic-data/` for anything resembling patient
records. Any feature touching patient data gets flagged for compliance review before build.

## Folders

| Folder | What goes here |
|---|---|
| `architecture/` | System architecture, design decisions (ADRs), data model, diagrams |
| `apis/` | API implementations, route specs, OpenAPI/schema definitions, versioning |
| `integrations/` | EMR interoperability — see breakdown below |
| `testing/unit/` | Unit tests |
| `testing/integration/` | Integration tests |
| `e2e-uat/` | End-to-end tests and user-acceptance test flows |
| `synthetic-data/` | Generated/synthetic patient & clinic data for dev and testing (no real PHI) |
| `docs/` | Technical docs — how the APIs connect, integration runbooks, sequence diagrams |
| `infra/` | AWS infrastructure-as-code (CDK/Terraform), backend hosting, secrets, DB, CI wiring |

## EMR integration (`integrations/`)
This is the interoperability core — connecting to unknown/varied EMRs with different capabilities.

| Sub-folder | Purpose |
|---|---|
| `emr-connectors/` | Per-EMR adapters — Epic, Accuro, Cerner, athenahealth, etc. One folder per target EMR |
| `interop-standards/` | The interface *types* / protocols: FHIR (R4/US Core), HL7 v2, SMART on FHIR, CDA, X12, flat-file/CSV, vendor REST |
| `emr-layers/` | Which **layers** of each EMR we connect to and why — auth/SSO, patient/demographics, scheduling, billing/claims, clinical/orders, documents. Maps required layer → available standard per EMR |

## The live app stays at repo root — on purpose
`src/` (the Next.js App Router app + MCP sidecar) and `e2e/` **remain at the repository root**, not
inside `product/`. Next.js only auto-detects the app at `<root>/app` or `<root>/src/app`, where
`package.json`, `next.config.ts`, and `node_modules` live. Relocating `src/` under `product/` would
mean moving the entire Next.js project — breaking the build, Jest/Playwright config, the `@/*` path
alias, and CI — for no functional gain.

So the split is **conceptual, not physical** for the running code:
- **Live application** → `src/` + `e2e/` at repo root (Next.js requires this).
- **`product/`** → the engineering artifacts *around* the app: architecture, EMR integrations,
  API design/specs, synthetic data, test strategy & UAT plans, technical docs, and infra-as-code.

If you later want a true monorepo (e.g. `apps/web`, `packages/*`), that's a deliberate restructure —
call it out and I'll do it as its own change with build/deploy validation.

## Migrated in (from the old `docs/` tree)
- `docs/architecture/architecture.md` → `architecture/`
- `docs/product/*` → `docs/`
- `docs/prototypes/` → `prototypes/`
