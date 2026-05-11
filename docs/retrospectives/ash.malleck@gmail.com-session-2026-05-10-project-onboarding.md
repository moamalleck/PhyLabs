---
author: ash.malleck@gmail.com
date: 2026-05-10
synthesized: 2026-05-11
---

# Postmortem: Project Onboarding (FRAIM) — PhysicianLabs

**Date**: 2026-05-10
**Duration**: ~1 session
**Objective**: Onboard PhysicianLabs into a FRAIM-ready state — update `fraim/config.json` with validation commands and confirm project rules are durable.
**Outcome**: Success

## Executive Summary

FRAIM project onboarding completed successfully. The config was already well-bootstrapped from a prior `npx fraim init-project` run. This session added missing validation commands (`buildCommand`, `testSuiteCommand`, `smokeTestCommand`), removed an unsupported `customizations.worktrees` field that was causing schema validation failure, and confirmed the 6 existing project rules are correct and complete.

## Architectural Impact

**Has Architectural Impact**: No

## Timeline of Events

### Phase 1: Discover and Analyze
- ✅ **Read** `~/.fraim/config.json` — FRAIM global config present (v2.0.119)
- ✅ **Read** `fraim/config.json` — project already bootstrapped in `integrated` mode
- ✅ **Read** `docs/architecture/architecture.md` — architecture doc confirmed and detailed
- ✅ **Read** `fraim/personalized-employee/rules/project_rules.md` — 6 solid rules already in place
- ✅ **Detected** validation commands from `package.json` (`build`, `test`, `e2e`)
- ✅ **Confirmed** no design system doc or compliance policy doc exists yet

### Phase 2: User Review and Approval
- ✅ **Presented** discovery buckets (Confirmed / Needs Input / Can Add Later)
- ✅ **User skipped** all 3 optional inputs (design system, compliance doc, smoke command clarification)
- ✅ **Rules approved** — no changes requested

### Phase 3: Write
- ✅ **Updated** `fraim/config.json` — added `customizations.validation` block
- ✅ **Project rules** — no changes needed; file already correct

### Phase 4: Validate
- ❌ **First run** of `npx fraim workspace-config validate` failed — `customizations.worktrees` is not a supported schema field
- ✅ **Fixed** — removed the unsupported `worktrees` field
- ✅ **Second run** passed cleanly
- ✅ **Architecture doc** confirmed to exist on disk

### Phase 5: Submit
- ✅ **Updated** evidence document `docs/evidence/onboarding-evidence.md`
- ✅ **Committed** `fraim/config.json` + evidence doc (SHA: 2144fb4)
- ✅ **Pushed** to `origin/main`

### Phase 6: Address Feedback
- ✅ No PR / no feedback — approved directly

## Root Cause Analysis

### 1. **Primary Cause**
**Problem**: `customizations.worktrees: false` was written into `fraim/config.json` by a prior automated FRAIM process, but it is not a field in the supported schema.
**Impact**: `npx fraim workspace-config validate` failed on first run, requiring a fix before the config was clean.

### 2. **Contributing Factors**
**Problem**: The schema template (`templates/manager/fraim-config-schema.ts`) was fetched but did not list `worktrees` — the unsupported field was only caught by the deterministic validator, not during manual inspection.
**Impact**: Required one extra fix-and-revalidate cycle, but was caught before submission.

## What Went Wrong

1. **Unsupported field in existing config**: `customizations.worktrees` was pre-existing in `fraim/config.json` from a prior automated init step. The FRAIM schema does not support this field, causing validator failure.

## What Went Right

1. **Deterministic validation caught the issue**: `npx fraim workspace-config validate` flagged the exact field name with a clear error message — no guessing required.
2. **Existing context was rich**: Architecture doc, project rules, and package.json were all well-formed, so almost nothing needed to be asked of the user.
3. **User review was fast**: All 3 optional inputs were skipped, confirming the defaults were sensible. Zero back-and-forth needed.
4. **Schema reference prevented over-writing**: Fetching `fraim-config-schema.ts` before writing confirmed which fields are supported, avoiding introduction of new unsupported fields.

## What I Almost Did Wrong But Caught

1. **Working in the worktree path**: Initially tried to edit `fraim/config.json` inside the Claude worktree path (`.claude/worktrees/cranky-saha-b644ee/`), but the file lives in the main project root. Caught it immediately when the edit failed with a "file not found" error.

## Where Past Learnings Actually Fired

1. **Schema-first writing**: Fetching the config schema before writing prevented introducing new unsupported fields — a discipline from prior FRAIM onboarding runs.

## Lessons Learned

1. **Always run the validator immediately after writing config**: The validator is the authority. Manual inspection of schema alone is not sufficient — automated tools like `npx fraim workspace-config validate` catch fields that look plausible but aren't actually supported.
2. **Prior automated init steps may introduce unsupported fields**: `fraim init-project` (or equivalent tooling) may write fields into `fraim/config.json` that later versions of the schema no longer support. Always validate before treating the config as clean.
3. **Confirm the file path before editing**: In projects with Claude worktrees, config files exist in the project root, not inside `.claude/worktrees/`. Verify the correct path before making edits.

## Agent Rule Updates Made to avoid recurrence

1. **Validate config immediately after any write**: Run `npx fraim workspace-config validate` after every `fraim/config.json` change, not just at the end of onboarding.
2. **Strip unrecognised fields before adding new ones**: When updating an existing config, check every existing field against the schema before writing new values.

## Enforcement Updates Made to avoid recurrence

1. **Add validator step to the write phase checklist**: The validate phase already mandates this, but it's worth making it explicit as a pre-condition of the write phase completion report as well.
2. **Confirm project root vs worktree path at session start**: When operating in a repo with Claude worktrees, establish the canonical project root path before any file operations.
