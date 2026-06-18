---
author: ash.malleck@gmail.com
date: 2026-06-18
synthesized:
---

# Postmortem: PhysicianLabs Interactive PoC Prototype — conversational session

**Date**: 2026-06-18
**Duration**: ~single session
**Objective**: Build the founder's first prototype/PoC to show real customers — to demonstrate value delivery and convert prospects into paying $1K money-back PoC customers.
**Outcome**: Success — approved first pass, 0 revision rounds, committed to `main` (9f81ac3, d7b347b).

## Executive Summary

Built a clickable 7-screen PhysicianLabs product walkthrough (the app the marketing site teases but
didn't exist) as a standalone HTML/CSS/JS artifact, extending the existing marketing brand. The
diagnostic "we found $23,800 you're not collecting" payoff anchors a fear→clarity→ROI→plan→ongoing→close
conversion arc. Verified across desktop/mobile with zero console errors, approved without revisions.

## Quick RCA Card

**What failed**: Nothing material. One tooling friction: `preview_click` did not register on
fixed-position demo-bar buttons at a zoomed viewport.
**Impact**: Minor — momentarily looked like a broken handler; resolved by confirming via programmatic `.click()`.
**What should have happened**: Recognize fixed-element/zoom click quirks faster and verify via DOM eval.
**What changes next time**: When a `preview_click` returns success but state doesn't change, immediately
verify with `preview_eval` programmatic click before assuming a code bug.
**Example**: `#run-diagnostic` and `#db-next` clicks reported success but didn't fire until `.click()` via eval.

## Architectural Impact

**Has Architectural Impact**: No

The prototype is a disposable stakeholder artifact under `docs/prototypes/`, deliberately outside the
Next.js app (`src/`). No production architecture touched. No PHI, no backend, no auth.

## Timeline of Events

### Phase 1: prototype-scoping
- [done] Front-loaded full context scan (memory + positioning + MVT + discovery + existing site/CSS) before asking anything.
- [done] Asked only 3 genuinely-unanswerable questions (scope, interactivity, persona) via one batched prompt.
- [done] Flagged the no-branch project rule overriding the generic "ensure prototype/ branch" phase step.

### Phase 2: prototype-execution
- [done] Built index.html/styles.css/app.js extending marketing brand tokens.
- [done] Verified all 7 screens in browser at 1280px + 375px; confirmed animations and contrast.

### Phase 3–7: demo → decision → submission → address-feedback → retrospective
- [done] Captured evidence, presented to founder, got explicit approval, committed only intended files, wrote evidence + this retrospective.

## Root Cause Analysis

### 1. **Primary Cause**
**Problem**: `preview_click` reported success but the click handler didn't fire on fixed-position buttons.
**What drove it**: The preview viewport had been resized/zoomed (1280px shown in a smaller frame); the
click coordinate translation for a `position:fixed` element at the bottom bar didn't land on the target.
**Corpus conflict**: none.
**Impact**: ~2 extra verification round-trips; no effect on the deliverable (buttons work for real users).

### 2. **Contributing Factors**
**Problem**: Repeated identical user prompt re-deliveries mid-session created ambiguity about whether to restart.
**What drove it**: Harness re-sending the initial message; reasoning gap was momentary.
**Impact**: None — correctly treated as noise and continued the in-flight build.

## What Went Wrong

1. **Tool-click quirk**: `preview_click` unreliable on fixed/zoomed elements; needed eval fallback to verify.

## What Went Right

1. **Context-first scoping**: The front-load scan (validated-pattern P-HIGH) meant only 3 questions were needed; zero structural rework.
2. **Brand reuse**: Extending `PhysicianLabs/css/styles.css` made the prototype read as a true continuation of the marketing site, satisfying the job's "use a baseline when it exists" principle.
3. **Conversion-first structure**: Anchoring on the validated $1K money-back PoC offer and the "windshield" frame tied the artifact directly to the locked GTM strategy.
4. **Clean commit hygiene**: Staged only the 5 intended files despite a very dirty working tree; founder's other changes untouched.

## What I Almost Did Wrong But Caught

1. **Near-miss — design system**: Almost invented an ad-hoc token set. Caught by the job's missing-config
   warning + the principle to extend an existing baseline; instead lifted the marketing tokens and explicitly
   flagged the `design-system-creation` follow-on.
2. **Near-miss — branch**: The phase step literally says "ensure a prototype/ branch is active." Caught by
   project_rules.md hard no-branch ban; worked in place on main.

## Where Past Learnings Actually Fired

1. **Pattern**: "Front-load context scan before asking the operator any questions" (validated-patterns P-HIGH) —
   fired in scoping; reduced the question set to 3 and produced a first-pass approval.
2. **Pattern**: "Mock UI cards with realistic data for pre-product marketing sites" — informed using concrete
   physician metrics ($23,800, denial 8.1%, A/R 48d) instead of placeholders, carrying credibility.
3. **Pattern**: "Physician-specific language outperforms generic SaaS copy" — drove copy like "under-coded E/M
   visits", "payer underpayment", "days in A/R" over generic "streamline billing".
4. **Pattern**: "Proactive WCAG audit before submission" — verified ring-label contrast + labeled inputs + focus rings unprompted.
5. **Pattern**: "gh CLI not available" (mistake-patterns P-HIGH) — anticipated; chose commit-on-main path without attempting a PR.

## Lessons Learned

1. When verifying interactive prototypes, treat a successful-but-inert `preview_click` as a tooling artifact, not a code bug — confirm with `preview_eval` immediately.
2. For pre-product PoCs, the single highest-converting screen is the quantified "money you're not collecting" payoff; build the whole flow to set it up and pay it off.
3. The conversion arc (fear→clarity→ROI→plan→ongoing→close) maps cleanly onto a SaaS screen sequence and should be reusable for future PhysicianLabs demos.

## Agent Rule Updates Made to avoid recurrence

1. None codified to project rules this session (the click quirk is a tool behavior, not a project rule).

## Enforcement Updates Made to avoid recurrence

1. Documented the `preview_click`-on-fixed-element fallback in this retrospective for synthesis into mistake-patterns by sleep-on-learnings.
