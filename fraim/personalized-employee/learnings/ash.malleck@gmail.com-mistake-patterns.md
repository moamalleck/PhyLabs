# Mistake Patterns — ash.malleck@gmail.com

Recurring agent mistakes and anti-patterns to avoid.

---

## P-HIGH Assuming gh CLI is available without checking at session start

**Score**: 7.2
**Last seen**: 2026-04-23
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the website-creation session, the PR submission step assumed `gh` was installed and only discovered it was missing at the moment of submission — causing a disruptive fallback to a manual URL handoff. The correct pattern is to run `which gh` at session start in any job that includes a PR submission step, and prepare the fallback plan before it is needed.

---

## P-HIGH LinkedIn content/post search for professional pain keywords

**Score**: 7.5
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the customer prospect discovery session, LinkedIn content/post search with healthcare pain keywords returned completely irrelevant results (AI companies, nonprofits) — a platform-level failure, not a query failure. The signal that identified this was that none of the results were from medical contexts whatsoever. LinkedIn content search does not filter by professional domain for pain keywords; always default to People Search for demographics and Reddit for pain signal.

---

## P-HIGH Using browser_snapshot on shreddit-based Reddit

**Score**: 7.5
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

Modern Reddit uses `shreddit-post` web components that the accessibility tree does not populate, causing `browser_snapshot` to return minimal or empty YAML. Attempting to proceed on sparse snapshot data risks missing all prospect data. The fix is to always use `browser_run_code` with JavaScript DOM traversal (`shreddit-post` elements, `a[data-testid="post-title"]` selectors) on Reddit — never rely on `browser_snapshot` for data extraction there.

---

## P-MED X/Twitter as a reliable channel for healthcare professional discovery

**Score**: 4.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

In the prospect discovery session, multiple X/Twitter query formats (hashtag, quoted phrase, People tab) returned irrelevant results for healthcare professional pain keywords. Platform search quality for professional communities in 2026 is insufficient for pain signal discovery. Treat X/Twitter as optional and skip after 2 failed query attempts; do not sink time trying additional keyword variants.

---

## P-MED Segment balance drift without a compensating pass

**Score**: 4.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

When the user explicitly requested equal segment distribution (chiro vs derm), the final prospect list came out 24 vs 16 — a 33% imbalance — because X/Twitter abandonment disproportionately reduced derm signal and no compensating LinkedIn pass was run. The correct pattern: if one segment is >20% below the other after Reddit discovery, run a compensating LinkedIn People Search pass before declaring completion.

---

## P-MED FRAIM session expiry in long multi-hour runs

**Score**: 4.7
**Last seen**: 2026-04-27
**Recurrences**: 1
**First synthesized**: 2026-05-06

During a multi-hour customer discovery session, the FRAIM session ID expired between `seekMentoring` calls. While no data was lost (work was saved to disk), it added friction and a brief interruption mid-run. In long sessions (>30 min since last `seekMentoring`), proactively call `fraim_connect` to renew the session before the next phase transition — don't assume the session established at the start is still active.

---
