# Channel Test — Measurement Setup & Runbook
**Test window:** 2026-07-01 → 2026-07-21 (3 weeks)
**Channels under test:** LinkedIn (organic + DMs) · Reddit + physician communities · Cold email
**Goal:** Push as much qualified traffic as possible to the landing page from each channel, and measure traffic + email signups + spend per channel on an ongoing basis.
**Primary metric:** Cost-per-signup and signups→ (paid $1,000 PoC conversations) per channel.

> This test runs the three free/organic inner-ring channels from
> `docs/marketing/channel-strategy-2026-06-30.md`. The $300–$1,000 budget funds *enablement*
> (tooling below) and a reserve to paid-boost the single best-performing organic post once a winner emerges.

---

## What's already been built (in the repo)

| Piece | Where | What it does |
|---|---|---|
| **Prominent hero email form** | `PhysicianLabs/index.html` | Above-the-fold signup, plus the waitlist + design-partner forms |
| **Form capture (Netlify Forms)** | all 3 forms have `data-netlify="true"` | Every signup lands in Netlify → Forms, with email notifications. No extra service needed. |
| **Channel attribution** | hidden `utm_*` fields + JS | First-touch UTM source is captured on arrival and submitted *with each signup*, so you see which channel produced each email |
| **Traffic analytics** | Plausible tag in `<head>` | Cookie-less, HIPAA-appropriate pageview + UTM tracking (needs activation, below) |
| **Deploy config** | `netlify.toml` | Publishes the `PhysicianLabs/` folder as a static site |
| **Bot protection** | honeypot field on each form | Filters spam submissions |

---

## Step 1 — Deploy the landing page (≈10 min)

The page is static, so hosting is free. **Netlify** is recommended because it also gives you the forms dashboard for free.

**Option A — Netlify (recommended):**
1. Go to app.netlify.com → **Add new site → Import from Git** → connect the `moamalleck/PhyLabs` repo.
2. Netlify reads `netlify.toml` automatically (publish dir = `PhysicianLabs`, no build). Click **Deploy**.
3. You get a live URL like `https://physicianlabs.netlify.app`. (Optional: add your `physicianlab.com` custom domain under **Domain settings**.)
4. **Forms → Verify:** submit a test signup on the live site; it should appear under **Forms → hero-signup**. Turn on **email notifications** (Forms → Settings → Form notifications) so every signup emails you.

> No-Git alternative: drag the `PhysicianLabs` folder onto app.netlify.com/drop for an instant deploy (re-drag to update).

**Option B — GitHub Pages / Cloudflare Pages:** also free, but Netlify Forms won't work — swap the form backend to Formspree (see "Swapping the form backend" below).

## Step 2 — Turn on traffic analytics (≈5 min)

1. Create a free/low-cost **Plausible** site (~$9/mo, within budget) OR **Cloudflare Web Analytics** (free) for your live domain.
2. In `PhysicianLabs/index.html` `<head>`, replace `REPLACE_WITH_LIVE_DOMAIN` with your live domain (e.g. `physicianlabs.netlify.app` or `physicianlab.com`), then redeploy.
3. Plausible now auto-segments traffic by `utm_source`, so you'll see LinkedIn vs. Reddit vs. email visits, plus a **"Signup"** goal event fired on each form success.

*Why not Google Analytics? Plausible/Cloudflare are cookie-less and collect no personal data — the right default for a HIPAA-aware brand, and no cookie banner required.*

## Step 3 — Launch each channel with its tagged links

Use the exact URLs in [`utm-links.md`](utm-links.md). Every link is pre-tagged so traffic and signups are attributed automatically. **Never share the untagged bare URL during the test** — it lands in "direct / none" and you lose the attribution.

Channel-ready copy:
- [`linkedin.md`](linkedin.md) — posts + DM scripts
- [`reddit.md`](reddit.md) — value-first posts/comments (community rules matter — read them)
- [`cold-email.md`](cold-email.md) — 3-step sequence for your scored prospect CSV

## Step 4 — Log results in the tracker (ongoing)

Analytics + Netlify capture traffic and signups automatically. The one thing they *can't* see is your **spend and effort**, so log those in [`channel-test-tracker.xlsx`](channel-test-tracker.xlsx):
- **Channel Log tab:** one row per posting/sending run — impressions/reach, clicks, spend, signups. CTR, CVR, and cost-per-signup calculate automatically.
- **Weekly Rollup tab:** auto-summarizes each channel so you can compare cost-per-signup at a glance.
- **Expenses tab:** all tooling + ad spend, so the test has a true all-in cost.

**Cadence:** update the tracker at the end of each posting day; review the Rollup every Friday. Cross-check signup counts against Netlify Forms and traffic against Plausible.

---

## Weekly Results (auto-generated)

This section is written by [`generate-results.js`](generate-results.js) straight from the raw inputs you log
in the tracker's **Channel Log** tab — so you never hand-calculate the comparison. After a posting day (or weekly):

1. Enter that run's **Date / Channel / Reach / Clicks / Spend / Signups** in `channel-test-tracker.xlsx` → Channel Log.
2. Refresh this section by running:
   `node docs/marketing/channel-test-2026-07/generate-results.js`
   *(or just paste the week's numbers to me and I'll refresh it for you.)*

Everything between the markers below is regenerated on each run — **don't hand-edit it.**

<!-- RESULTS:START -->
_No data logged yet. Add rows to the Channel Log tab and run `generate-results.js` to populate this._
<!-- RESULTS:END -->

---

## How attribution works (so you trust the numbers)

- A physician clicks your tagged LinkedIn link → lands on `/?utm_source=linkedin&...`.
- The page stores that source (first-touch) in their browser and in every form's hidden fields.
- If they sign up now — or come back three days later and sign up — the Netlify submission still shows `utm_source=linkedin`. First touch wins, so the channel that *originally* earned the visit gets the credit.
- Plausible independently counts the *visit* under `linkedin`. Two independent measurements (traffic vs. signups) that you reconcile weekly.

## Swapping the form backend (only if you don't use Netlify)

If you host on GitHub Pages/Cloudflare instead, Netlify Forms won't capture. In `index.html`, the `wireForm()` function currently POSTs to `/`. Point it at a Formspree endpoint instead:
`fetch('https://formspree.io/f/YOUR_FORM_ID', { method:'POST', headers:{'Accept':'application/json'}, body: new FormData(form) })`.
The hidden `utm_*` fields still travel with the submission, so attribution is preserved.

## Guardrails
- **No PHI, ever.** Forms collect only email / name / specialty / practice stage — no patient data. Keep it that way.
- **Community rules first.** Reddit and the PT Owners Club ban overt self-promotion. Lead with value; the tagged link goes in context or via DM, not spammed. A ban burns the channel.
- **CAN-SPAM for cold email:** real sender identity, a physical mailing address, and a working unsubscribe in every send.
