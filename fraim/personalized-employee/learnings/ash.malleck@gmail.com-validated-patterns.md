# Validated Patterns — ash.malleck@gmail.com

Durable judgment calls and successful unusual-but-correct decisions worth reproducing.

Last synthesized: 2026-05-06

---

#### [P-HIGH] Front-loaded reference site discovery prevents structural rework

**Score**: 7.6
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the website-creation session, spending Phase 1 visiting three reference sites via Playwright browser (Viedoc, Inshur, Datel) before writing any code extracted specific design patterns — alternating pillar rows, dark-themed mock UI cards, dual CTA structure — that directly shaped the final design. The user approved at first submission with zero structural revisions. Skipping this step to save time would have produced a more generic result and likely triggered revision rounds. For any design-before-build job, browser visits to reference sites are mandatory, not optional.

---

#### [P-HIGH] Front-load context scan before asking the operator any questions

**Score**: 12.4
**Last seen**: 2026-04-30
**Recurrences**: 2
**First synthesized**: 2026-05-06

Before asking the operator anything, scan all available repo artifacts (docs/, config, prior job outputs, retrospectives) for context relevant to the current task. In both the website-creation and marketing-strategy-definition sessions, this scan reduced the question set to only what was genuinely unanswerable from the repo — 0 structural revisions in both sessions. The cost of a context scan is low; the cost of asking questions the repo already answers is operator friction and longer sessions.

---

#### [P-HIGH] LinkedIn People Search for practitioner demographic qualification

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

After LinkedIn content search returned irrelevant results, pivoting to People Search (`/search/results/people/?keywords=<role>+<city>`) immediately returned relevant practitioners with verifiable title, location, and profile. The switch was triggered by recognising a platform-level failure (zero medical context in results) rather than a query failure. People Search is the correct LinkedIn tool for healthcare professional discovery; content search is not viable for pain keyword research.

---

#### [P-HIGH] Reddit JavaScript DOM extraction via browser_run_code

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Reddit's shreddit-based rendering requires JavaScript DOM traversal for reliable data extraction. The pattern that works: `browser_run_code` with `page.evaluate()` querying `shreddit-post` elements for post titles and authors, and `document.body.innerText` for comment content. `browser_snapshot` returns sparse ARIA data on these pages and should not be used as the primary extraction method. Using `browser_run_code` was triggered by cross-checking that the page had loaded (title visible) before accepting an empty snapshot. This pattern is required for all Reddit prospect discovery and content research tasks.

---

#### [P-HIGH] Verbatim pain quotes from Reddit as a compounding outreach asset

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Capturing verbatim Reddit pain quotes alongside prospect demographic data creates a compounding outreach asset — the quote becomes the personalised cold outreach angle without additional research. In the PhysicianLabs prospect discovery run, all 40 CSV rows included a direct public quote, enabling immediate, credible personalisation. Always include a PainQuote column in prospect CSVs when Reddit is a discovery source.

---

#### [P-MED] Physician-specific language outperforms generic SaaS copy for this ICP

**Score**: 7.7
**Last seen**: 2026-04-30
**Recurrences**: 2
**First synthesized**: 2026-05-06

Copy that uses exact physician vocabulary ("credentialing", "payer enrollment", "clean claim", "month-three cash crisis") lands harder than generic operational language ("reduce costs", "streamline workflows"). "Profits bleeding from both ends" was approved immediately and not revised; "Clinical Operating System" was adopted as the category label without pushback. When writing for PhysicianLabs, always draft copy using the physician's own words from the pain quotes in the prospect CSV and business-validation-report before reaching for SaaS defaults.

---

#### [P-MED] Precision outreach is the right strategy for pilot recruitment sprints

**Score**: 4.9
**Last seen**: 2026-04-30
**Recurrences**: 1
**First synthesized**: 2026-05-06

When the goal is a small number of committed pilot customers (3 to 6) on a short timeline (3 weeks), the correct channel strategy is precision outreach — personalized DMs, warm intros, community trust-building — not broadcast marketing. Paid ads, newsletters, and public launches are compounding assets that do not convert fast enough for pilot sprints. Excluding these channels explicitly in the strategy brief was correct and went uncontested by the operator.

---

#### [P-MED] Distinguish platform-level search failure from query-level failure

**Score**: 4.8
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

When search results are completely off-domain (none of the results belong to the target professional community in any way), the failure is at the platform level, not the query level. Trying different keyword variants will not fix a platform-level problem. The signal to watch for: zero results from the target domain across multiple query formats. When this occurs, switch platforms rather than iterating on query wording.

---

#### [P-MED] Mock UI cards with realistic data outperform placeholders for pre-product marketing sites

**Score**: 4.8
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

When no live product exists to screenshot, dark-themed mock UI cards containing realistic domain data (claim rates, denial percentages, checklist items, dollar amounts) communicate product maturity more effectively than placeholder images or illustrations. The operator did not request any visual improvements after this approach was used on the PhysicianLabs website, confirming it carried sufficient credibility. Apply this pattern in any website-creation or marketing asset job where the product is pre-launch.

---

## P-HIGH LinkedIn People Search for practitioner demographic qualification

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

After LinkedIn content search returned irrelevant results, pivoting to People Search (`/search/results/people/?keywords=<role>+<city>`) immediately returned relevant practitioners with verifiable title, location, and profile. The switch was triggered by recognising a platform-level failure (zero medical context in results) rather than a query failure. People Search is the correct LinkedIn tool for healthcare professional discovery; content search is not viable for pain keyword research.

---

## P-HIGH Verbatim pain quotes from Reddit as a compounding outreach asset

**Score**: 7.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Capturing verbatim Reddit pain quotes alongside prospect demographic data creates a compounding outreach asset — the quote becomes the personalised cold outreach angle without additional research. In the PhysicianLabs prospect discovery run, all 40 CSV rows included a direct public quote, enabling immediate, credible personalisation. Always include a PainQuote column in prospect CSVs when Reddit is a discovery source.

---

## P-MED Proactive WCAG form label audit before submission

**Score**: 4.8
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the website-creation session, a proactive WCAG 2.1 AA audit during the optimisation phase caught form inputs with no associated label elements — a genuine accessibility failure — before submission, without being asked. The sr-only label pattern was applied immediately. For any UI work involving form elements, always audit for label associations as part of the pre-submission checklist, not as an afterthought during review.

---

## P-MED Evidence doc before commit preserves the audit trail

**Score**: 4.8
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

Creating the evidence document first and committing it alongside the feature files ensures the audit trail is always intact in the same atomic commit. In the PhysicianLabs website session, the evidence doc was written before the commit — no separate clean-up step required. Reversing this order (code first, evidence later) risks forgetting the evidence doc entirely or creating a dangling commit.
