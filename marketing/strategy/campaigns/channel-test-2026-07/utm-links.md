# Canonical Tagged Links — Channel Test 2026-07

**Replace `BASE` with your live URL once deployed** (e.g. `https://physicianlabs.netlify.app` or `https://physicianlab.com`).
Every link below is pre-tagged so Plausible attributes the visit and the landing page stamps the signup with its source.
`utm_campaign` is the same for the whole test (`channel-test-2026-07`) so you can compare channels cleanly.

> Rule: **only ever share tagged links during the test.** A bare `BASE/` link lands in "direct" and loses attribution.

---

## LinkedIn  (`utm_source=linkedin`)

| Use | Link |
|---|---|
| Windshield-hook post | `BASE/?utm_source=linkedin&utm_medium=social&utm_campaign=channel-test-2026-07&utm_content=post-windshield` |
| Founder-fear post | `BASE/?utm_source=linkedin&utm_medium=social&utm_campaign=channel-test-2026-07&utm_content=post-founderfear` |
| Revenue-leak post | `BASE/?utm_source=linkedin&utm_medium=social&utm_campaign=channel-test-2026-07&utm_content=post-revenueleak` |
| Direct messages (1:1) | `BASE/?utm_source=linkedin&utm_medium=dm&utm_campaign=channel-test-2026-07&utm_content=dm-outreach` |
| Profile featured link | `BASE/?utm_source=linkedin&utm_medium=profile&utm_campaign=channel-test-2026-07&utm_content=profile-link` |

## Reddit + physician communities  (`utm_source=reddit` / `facebook`)

| Use | Link |
|---|---|
| r/physicaltherapy | `BASE/?utm_source=reddit&utm_medium=community&utm_campaign=channel-test-2026-07&utm_content=r-physicaltherapy` |
| r/chiropractic | `BASE/?utm_source=reddit&utm_medium=community&utm_campaign=channel-test-2026-07&utm_content=r-chiropractic` |
| Reddit DM | `BASE/?utm_source=reddit&utm_medium=dm&utm_campaign=channel-test-2026-07&utm_content=dm` |
| PT Owners Club (Facebook) | `BASE/?utm_source=facebook&utm_medium=community&utm_campaign=channel-test-2026-07&utm_content=ptoc-group` |

## Revenue-Leak Scorecard  (point channel traffic here instead of the homepage for higher intent)
The scorecard is a stronger click magnet than the homepage — same attribution, add `&content=scorecard-<channel>`.

| Use | Link |
|---|---|
| LinkedIn → scorecard | `BASE/scorecard.html?utm_source=linkedin&utm_medium=social&utm_campaign=channel-test-2026-07&utm_content=scorecard-linkedin` |
| Reddit → scorecard | `BASE/scorecard.html?utm_source=reddit&utm_medium=community&utm_campaign=channel-test-2026-07&utm_content=scorecard-reddit` |
| Cold email → scorecard | `BASE/scorecard.html?utm_source=coldemail&utm_medium=email&utm_campaign=channel-test-2026-07&utm_content=scorecard-email` |

## Cold email  (`utm_source=coldemail`)

| Use | Link |
|---|---|
| Email 1 (opener) | `BASE/?utm_source=coldemail&utm_medium=email&utm_campaign=channel-test-2026-07&utm_content=seq-email1` |
| Email 2 (nudge) | `BASE/?utm_source=coldemail&utm_medium=email&utm_campaign=channel-test-2026-07&utm_content=seq-email2` |
| Email 3 (breakup) | `BASE/?utm_source=coldemail&utm_medium=email&utm_campaign=channel-test-2026-07&utm_content=seq-email3` |

---

## Reserve — paid boost (only if you amplify a winning post)

| Use | Link |
|---|---|
| LinkedIn boosted post | `BASE/?utm_source=linkedin&utm_medium=paid-social&utm_campaign=channel-test-2026-07&utm_content=boost-<hook>` |
| Meta boosted post | `BASE/?utm_source=meta&utm_medium=paid-social&utm_campaign=channel-test-2026-07&utm_content=boost-<hook>` |

## Tip — shortening
LinkedIn/Reddit truncate long URLs. Use a free shortener (e.g. a Bitly free link) that **preserves the query string on redirect**, or LinkedIn's own link preview. Don't hand-shorten in a way that drops the `?utm_...` — that's the whole measurement.
