# Cold Email — Launch Assets (Channel Test 2026-07)

**List:** your existing scored prospect CSV — `docs/customer-development/users-to-target-2026-04-27.csv` (40 contacts). Start with the highest-scored ICP matches.
**Voice:** 3 sentences, their pain first, one ask. No attachments, no images, plain text.
**Volume/hygiene:** ≤20–30/day from a warmed inbox. **CAN-SPAM required:** real name, physical mailing address in footer, working unsubscribe. Verify addresses first (bounces wreck deliverability).
**Tooling (from budget):** an inbox warmer + sequencer (Instantly/Smartlead ~$30–97/mo) + list verification (~$30). Log these in the tracker Expenses tab.

---

## Email 1 — Opener (Day 0)
**Subject lines to A/B:**
- `"I'm losing money and I don't know where"`
- Quick question about [Practice Name]'s billing
- The $200K most independent docs never see coming

**Body:**
> Dr. [LastName] — most independent [specialty] practices are quietly losing five figures a year to denied claims, under-coding, and patients who drop their plan of care early — and can't see it until the accountant says so months later.
>
> I'm building PhysicianLabs to surface that in real time, and we'll find the revenue you're not collecting or you don't pay. I'm looking for a few [PT/chiro/primary-care] owners to run it with.
>
> Worth a 20-minute look? Here's the 60-second version: BASE/?utm_source=coldemail&utm_medium=email&utm_campaign=channel-test-2026-07&utm_content=seq-email1
>
> — [Your name], [title], PhysicianLabs
> [physical mailing address] · unsubscribe: [link]

## Email 2 — Nudge (Day 3, reply on same thread)
**Subject:** re: [same]
> Quick follow-up, Dr. [LastName] — the practices getting the most out of this are ones opening or recently launched, where catching a billing leak early changes the whole first year.
>
> If revenue visibility isn't the pain right now, no worries — what *is* the thing eating your week? Overview if useful: BASE/?utm_source=coldemail&utm_medium=email&utm_campaign=channel-test-2026-07&utm_content=seq-email2

## Email 3 — Breakup (Day 7)
**Subject:** re: [same]
> Last one, Dr. [LastName] — I'll get out of your inbox. If real-time financial clarity for your practice is ever worth 20 minutes, the door's open: BASE/?utm_source=coldemail&utm_medium=email&utm_campaign=channel-test-2026-07&utm_content=seq-email3
>
> Either way, wishing you and [Practice Name] a strong year.

---

## Personalization tokens (fill per contact)
`[LastName]`, `[Practice Name]`, `[specialty]`, and one line referencing their specific situation from the CSV notes column (Reddit quote, recent launch, etc.). Generic sends convert far worse — 2 minutes of personalization per contact is the difference.

**Log:** sent, opens, replies, link clicks (Plausible source=coldemail) + signups (Netlify) → tracker.
