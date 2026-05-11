# Project Onboarding — Evidence Document

**Date:** 2026-04-23
**Job:** project-onboarding
**Project:** PhysicianLabs
**Repository:** https://github.com/moamalleck/PhyLabs

---

## Summary

Initial FRAIM onboarding completed for PhysicianLabs — a HealthTech SaaS platform targeting healthcare providers (clinics, doctors, small care centers). Project configured in `integrated` mode with GitHub as both code host and issue tracker.

---

## Work Completed

### Files Created

| File | Purpose |
|------|---------|
| `fraim/config.json` | FRAIM project configuration with mode, repo, and issue tracking |
| `fraim/personalized-employee/rules/project_rules.md` | 6 durable repo-wide rules for all future AI agents |

### Configuration Summary

- **Mode:** `integrated` (GitHub for code + issues)
- **Project name:** PhysicianLabs
- **Industry:** HealthTech
- **Repository:** github / moamalleck / PhyLabs (branch: main)
- **Issue tracking:** github / moamalleck / PhyLabs
- **Tech stack:** Next.js (App Router) + Node.js + Tailwind CSS

### Project Rules Established

1. HIPAA-awareness by default — no PHI logging/exposure/persistence
2. Stack discipline — Next.js + Node.js + Tailwind only
3. API-first architecture — business logic in server actions/API routes
4. Auth on every endpoint — RBAC with provider/admin/patient roles
5. Accessibility — WCAG 2.1 AA on all UI components
6. Test before merge — unit + integration test required per feature

---

## Deferred Items (Can Be Added Later)

- Design system path/brand — add after brand is defined
- Compliance regulations (HIPAA, SOC 2, etc.) — add via `compliance-requirements-detection`
- Customer communication config — add when email/newsletter is configured
- Competitors map — add as competitive research is done

---

## Session 2 Update — 2026-05-10

### Changes Made

| File | Change |
|------|--------|
| `fraim/config.json` | Added `customizations.validation` block; removed unsupported `customizations.worktrees` field |

### Config Updates

- **buildCommand:** `npm run build`
- **testSuiteCommand:** `npm test`
- **smokeTestCommand:** `npm run e2e`

### Validation

- `npx fraim workspace-config validate` — **PASSED** ✅
- `customizations.architectureDoc` → `docs/architecture/architecture.md` — file exists ✅
- `customizations.validation` block confirmed in config ✅
- Unsupported `customizations.worktrees` field removed ✅

---

## Validation

- `fraim/config.json` read back and confirmed correct structure ✅
- `fraim/personalized-employee/rules/project_rules.md` read back and confirmed ✅
- Git repository initialized and remote set to `https://github.com/moamalleck/PhyLabs.git` ✅

---

## Quality Checks

- ✅ All approved deliverables written
- ✅ No fields invented outside the approved config schema
- ✅ Rules are specific, actionable, and relevant to HealthTech + Next.js stack
- ✅ Deferred items documented — nothing silently dropped
- ✅ Unsupported schema field removed; validator passes cleanly
