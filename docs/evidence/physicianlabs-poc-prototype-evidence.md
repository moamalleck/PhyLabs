# Evidence — PhysicianLabs Interactive PoC Prototype

**Workflow:** FRAIM `user-facing-prototyping`
**Date:** 2026-06-18
**Stakeholder:** Founder (ash.malleck@gmail.com)
**Tracked issue:** none (no GitHub issue created; slug-named to avoid a `0-` prefix gap)
**Commit:** `9f81ac3` on `main` (committed in place — project rules ban branches/worktrees; `gh` unavailable, so no PR)

---

## Summary

Built a clickable, browser-openable proof-of-concept of the PhysicianLabs product — the
interactive app the marketing site teases at `app.physicianlab.com/dashboard` but that did not
exist yet. Purpose: show real prospects how PhysicianLabs delivers value and convert them into
paying **$1,000 money-back PoC** customers.

Deliverable: `docs/prototypes/physicianlabs-poc/` (the prototype IS the deliverable).

## Work completed

| File | Purpose |
|---|---|
| `docs/prototypes/physicianlabs-poc/index.html` | 7 screens + app shell + guided demo bar |
| `docs/prototypes/physicianlabs-poc/styles.css` | Extends marketing brand tokens |
| `docs/prototypes/physicianlabs-poc/app.js` | Screen routing, guided nav, analyzing + count-up animations |
| `docs/prototypes/physicianlabs-poc/README.md` | How to run, conversion arc, UX findings, design-system gap |
| `.claude/launch.json` | Added `physicianlabs-poc` server entry (port 3743) |

**Approach:** Fixed canned persona (Dr. Marcus Chen, Meridian Family Medicine — just-launched ICP).
Standalone HTML/CSS/JS, no build step, no backend/PHI. Conversion arc:
sign-in → intake → diagnostic payoff (Health Score 76 + "$23,800 you're not collecting") →
revenue recovery → 90-day roadmap → live dashboard → $1K money-back PoC close.

**Design baseline:** Extended `PhysicianLabs/css/styles.css` (Plus Jakarta Sans, primary `#4F46E5`,
ink `#0F172A`, status colors, shared radii/shadows/components). No formal design system exists —
`fraim/config.json customizations.designSystem.path` unset; recommended `design-system-creation` follow-on.

## Validation

Walked the full journey in the browser preview (port 3743) at 1280×860 and 375×812:

- Sign-in → intake → **analyzing animation → diagnostic** navigation works.
- Score ring animates to **76**; payoff headline counts up to **$23,800** (verified via DOM eval).
- Revenue recovery, roadmap, dashboard, close all render with correct active sidebar states.
- Claim CTA flips offer card → success state (verified `close-success.show === true`).
- **Console: zero errors.**
- **Responsive:** 375px stacks payoff vertically, demo bar collapses step pips; sidebar shell at desktop.
- **Accessibility (WCAG 2.1 AA intent):** labeled inputs, focus-visible rings, ARIA label on score
  ring, decorative SVGs `aria-hidden`, arrow-key + tab nav; confirmed `.ring-label` computed color
  is white .85 on dark gradient (AA pass).

## Quality checks

- ✅ All 7 screens implemented and demo-able
- ✅ Brand-consistent with existing marketing site
- ✅ Zero console errors; desktop + mobile verified
- ✅ README documents run instructions, UX findings, and the design-system gap
- ✅ Committed to `main` (`9f81ac3`); working tree's unrelated changes left untouched

## Phase completion (FRAIM)

scoping ✅ → execution ✅ → demo ✅ → decision ✅ (approved first pass, 0 revisions) → submission ✅

## Open questions for in-demo validation

1. Is **$23,800** the right magnitude vs. the discovery "save $100K/yr" frame? (Kept conservative/credible.)
2. Does the money-back guarantee read as confidence or gimmick to physicians?
3. Open on sign-in/intake framing, or jump straight to the payoff?

## Recommended next steps

- Demo to live prospects (Shaun Cowan ~June 14, Saf Malleck) to pressure-test the 3 questions above.
- Highest-leverage future upgrade: **"prospect enters their own numbers"** live diagnostic mode.
- Run `design-system-creation` to formalize tokens before any production build.
