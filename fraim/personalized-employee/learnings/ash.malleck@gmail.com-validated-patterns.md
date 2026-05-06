# Validated Patterns

Durable judgment calls and successful unusual-but-correct decisions worth reproducing.

**Last synthesized**: 2026-05-06

---

#### P-HIGH Reference site analysis via browser is mandatory before designing any marketing website

**Score**: 8.0
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

Visiting reference sites via Playwright browser before beginning design extracted specific, actionable patterns (alternating pillar rows, mock UI cards, dual CTA structure, grid overlays) that a text search would not have captured. Skipping this step would have produced a more generic result. In website-creation jobs, always visit at least 3 reference or competitor sites via browser before any design or copy decisions. This is not optional -- it is a prerequisite.

---

#### P-HIGH Mock UI cards with realistic data outperform placeholders for pre-product marketing sites

**Score**: 8.0
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

When no live product exists to screenshot, dark-themed mock UI cards with realistic data (percentages, dollar amounts, checklist items, claim rates) convey product maturity more effectively than placeholder illustrations or generic screenshots. The user approved the site at first submission with zero visual revision requests. This pattern is the default for any pre-product marketing site where pillar sections need visual proof of concept.

---

#### P-HIGH LinkedIn People Search for demographics + Reddit for verbatim pain signal

**Score**: 8.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

For healthcare professional prospect discovery, LinkedIn People Search reliably returns practitioners filterable by role, specialty, and location. Reddit surfaces verbatim public pain quotes that enable immediate, personalized outreach. These two platforms are complementary: LinkedIn for who they are, Reddit for what they say about their problems. This combination is validated over LinkedIn content search (irrelevant results) and X/Twitter (degraded signal quality).

---

#### P-HIGH browser_run_code with JavaScript DOM traversal for web-component-heavy pages

**Score**: 8.0
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

On pages using modern JavaScript frameworks with web components (Reddit's shreddit architecture, LinkedIn's dynamic rendering), browser_snapshot returns sparse or empty data. Using browser_run_code with page.evaluate() and targeted DOM queries (document.querySelectorAll(), innerText extraction, href harvesting) reliably extracts content. This is the validated pattern for Reddit and LinkedIn data extraction. Apply it immediately when a browser_snapshot returns unexpectedly sparse content.

---

#### P-HIGH WTP validation hypothesis must test real past behavior, not counterfactuals

**Score**: 8.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

A validation hypothesis using "would you have paid?" or "would you pay?" tests a hypothetical, which is a Mom Test violation. The validated correction is to frame the hypothesis around observable past behavior: money or time actually spent trying to solve the problem (hired a consultant, paid for a guide, spent 10+ hours on unguided research). This was caught mid-synthesis and corrected before the document was finalized. Apply this check to every validation hypothesis written during customer development work.

---

#### P-HIGH Preserving genuine unknowns keeps interview questions open and unbiased

**Score**: 8.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

When key unknowns (wallet moment, specialty differential, current workarounds) are explicitly flagged as unknown rather than filled with plausible guesses, all downstream interview questions remain genuinely exploratory. Guessing produces confirmation-biased questions that surface what the interviewer believes, not what the customer experiences. In customer development artifacts, flag unknowns explicitly with their validation path rather than substituting assumptions.

---

#### P-MED Define target market as a capability class, not a specialty list

**Score**: 5.0
**Last seen**: 2026-05-01
**Recurrences**: 1
**First synthesized**: 2026-05-06

A target market defined by shared operational characteristics (low capital expenditure, high setup complexity) is more durable than a named specialty list. When the market expands to new specialties, the capability-class framing requires no repositioning -- the new specialty simply fits or doesn't fit the existing criteria. A specialty list, by contrast, must be explicitly extended with each expansion. Offer the capability-class framing as an option whenever a target market definition is being written.
