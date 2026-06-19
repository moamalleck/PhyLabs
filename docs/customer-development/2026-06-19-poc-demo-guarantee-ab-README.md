# PoC Demo — Money-Back Guarantee A/B Test

**Started:** 2026-06-19
**Tracker:** `2026-06-19-poc-demo-guarantee-ab-tracker.csv` (open in Excel or Google Sheets)
**Question:** Does the $1,000 money-back guarantee signal *confidence* (helps close) or read as a *gimmick* (hurts trust)?

## How to run it
1. For each prospect demo, decide **before the call** whether you show the guarantee.
   - **On:** present the walkthrough / estimator as-is.
   - **Off:** open the estimator at `estimate.html#guarantee=off` (hides the guarantee banner).
   - Roughly alternate so you get both conditions across prospects.
2. When you present the guarantee, **say it once and stop talking.** Write their *first unprompted reaction verbatim* — that's the highest-signal column.
3. Log behavior, not opinions. The column that decides this is **PoC committed** (and ultimately **card charged**), not "did they like it."
4. Ask the past-behavior probe, not a hypothetical: *"Have you ever paid for something with a money-back guarantee — did it actually change your decision, or was it noise?"*

## Reaction read — how to score
- **Confidence:** "that's fair," "you're clearly confident," nods and moves on.
- **Gimmick:** "what's the catch?", "how do you define 'find'?", "seems too good to be true."
- **Neutral:** no reaction either way.

## Pre-committed read (decide now, don't move the goalposts later)
This is qualitative at small N — treat it as directional, weight live reactions and real commitments over stated preference.

- **Guarantee is load-bearing (keep it):** "On" demos close at a clearly higher rate AND most reactions read Confidence/Neutral.
- **Guarantee is a gimmick tax (drop or reframe it):** "Off" demos close as well or better, OR ≥ half of "On" reactions read Gimmick.
- **Inconclusive:** mixed — then test the **reframes** (success-contingent "$1K only once we show you $20K"; "$1 to start, balance on results") against the plain guarantee.

## Minimum to call it
Aim for ~6–10 logged demos (≈ 3–5 per condition) before drawing any conclusion. Until a **non-family card is charged**, every "committed" stays directional, not hard-validated.

Links: prototype + estimator live in `docs/prototypes/physicianlabs-poc/`.
