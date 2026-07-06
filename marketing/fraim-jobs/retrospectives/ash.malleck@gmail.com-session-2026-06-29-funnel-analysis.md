---
author: ash.malleck@gmail.com
date: 2026-06-29
---

# Postmortem: PhysicianLabs AARRR Funnel Analysis — FRAIM funnel-analysis job

**Date**: 2026-06-29
**Job**: funnel-analysis (FRAIM)
**Objective**: Produce an actionable AARRR funnel report identifying the single highest-leverage drop-off and prioritized interventions.
**Outcome**: Success. 9-slide deck approved first pass, 0 revision rounds, committed to `main` (c696d04). FRAIM MCP trial expired during the final phase transition.

## Executive Summary

Ran the funnel-analysis job end to end on a pre-launch company that has no product and no analytics integration. Reframed the "funnel" as the GTM / customer-development pipeline and grounded every number in repo trackers, reconciled against the master prospects file Conversion Funnel tab. The central finding: the funnel does not leak at conversion (activation 71%, discovery-to-paid 20% are healthy); it leaks at the top, with a 0% scalable reply rate and 100% of activity coming from the founder's personal network, which produced zero new contacts in June. Selected acquisition as the highest-leverage drop-off and delivered three sequenced interventions plus a payment-rails unblock. Deliverable at docs/gtm/funnel-analysis-2026-06-29.pptx.

## What Went Well

1. **Front-loaded context scan replaced guesswork with exact data.** Scanning the trackers before asking the operator anything surfaced an existing "Conversion Funnel" tab in the master xlsx with canonical numbers (85 logged, 8 contacted, 0 replied, 5 discovery, 1 paid). The single confirming question to the operator ("pull exact top-of-funnel?") was the only one needed.

2. **Refused to fabricate retention curves.** The phase assumed a live product with D1/D7/D30 usage retention. None exists pre-launch. Substituted a clearly labeled pipeline-persistence proxy rather than inventing numbers, and named it as the single biggest data gap and the highest-value future metric once the product is instrumented.

3. **Honored project-rule overrides over generic submit steps.** The submit phase literally instructed creating a feature branch, opening a PR, and updating GitHub labels via gh. Project rules forbid branches and gh is not on PATH. Flagged both upfront, worked in place on main, and did not auto-commit until the operator said yes.

4. **Extended the existing brand baseline.** Lifted the actual tokens from PhysicianLabs/css/styles.css (navy 0F172A, indigo 4F46E5, semantic green/amber/red) instead of inventing a palette, so the deck reads as a continuation of the existing visual system.

5. **Drafted the deck with zero em-dashes from the start.** Applied the known formal-communication constraint during authoring, not at validation. A post-generation scan of all slide text runs confirmed 0 em/en dashes, so no rewrite cycle was needed.

## What Was Hard or Incomplete

1. **Visual render QA could not run.** LibreOffice (soffice) is not installed and Python is the non-functional Windows Store stub on this machine, so the pptx skill's PDF-to-image visual-QA path was unavailable. Mitigation: parsed slide XML for content QA and verified layout by coordinate math, which caught one text-box overlap on the interventions slide before finalizing. The gap was disclosed to the operator rather than hidden.

2. **pptxgenjs module resolution from the scratchpad.** The build script lived in the scratchpad and Node resolves modules from the script directory, not cwd, so the first run failed with MODULE_NOT_FOUND. Fixed by setting NODE_PATH to the global npm modules directory. A script placed in the project tree would have resolved it directly.

3. **FRAIM trial expired mid-job.** The final seekMentoring call to close address-feedback returned "14-day free trial has expired." The substantive work was already done and approved, so the retrospective was written directly to the docs/retrospectives convention instead of being driven by the job's phase tooling.

## Key Learnings

- For a pre-launch company, the AARRR funnel maps onto the customer-development pipeline, and retention has no product analog yet. State the scope explicitly and label every proxy.
- When a deliverable format skill depends on tooling that is missing on this machine (LibreOffice, Python), the rich artifact can still be produced via the Node path (pptxgenjs), but the visual-QA loop must be replaced with content QA plus coordinate verification, and the limitation disclosed.
- The strongest funnel insight here came from separating the scaled funnel (0%) from the network funnel (71%) rather than reporting a single blended activation rate. Blending would have hidden the actual problem.

## Action Items / Follow-ons

- If the operator assigns a GitHub issue number, rename the 0- prefixed artifacts (deck and evidence doc) to match.
- Recommended next jobs, in priority order: funnel-driven, run a discovery or outreach job to relaunch ICP-matched outreach (Intervention 1); business-banking-setup to stand up payment rails (the named hard blocker); a content or thought-leadership job for the community channel test (Intervention 2).
