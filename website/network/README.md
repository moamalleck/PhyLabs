# UnuMedic — `malleckclinics.org`

**UnuMedic — The Physician Circle of Ambitious Practitioners.**
A **separate, self-contained static site** for Ash Malleck's personal domain (`malleckclinics.org`).
It is deliberately **not** part of `website/site/` (the PhysicianLabs marketing site on
`physicianlab.com`) because it is a different brand on a different domain — but it is a **funnel**
into both the Circle *and* PhysicianLabs OS as a design partner.

Modeled structurally on Vula Medical (a health-professional network site), repositioned as a
selective network that empowers physicians with **financial freedom, career growth, and community
influence**.

## What it is
A single-page, no-build static site. Deploys as **one folder**.

| File | Role |
|---|---|
| `index.html` | The landing page (hero, 3 ICP tracks, 6 benefit pillars, PhysicianLabs OS funnel, founder letter, investor track, how-to-join, application form, FAQ) |
| `css/network.css` | Design system — premium evergreen + gold on near-black navy (distinct from PhysicianLabs indigo) |
| `js/network.js` | Nav shadow, scroll reveal, FAQ accordion, first-touch UTM attribution, Netlify AJAX form |
| `netlify.toml` | Deploy config for **this** folder (kept local so it doesn't collide with the root `netlify.toml` that publishes `website/site`) |

## The three ICP tracks (the funnel's segmentation)
1. **Going independent** — experienced doctors starting a concierge / private practice
2. **Recently launched** — doctors 0–24 months into their own clinic
3. **Physician investors** — established doctors backing clinics for cause + return

The application form captures which track the applicant selects, so leads are segmented on intake.

## Before going live — checklist
- [ ] **Rename** if desired: the network is named *"UnuMedic"* throughout `index.html`, with the
      tagline *"The Physician Circle of Ambitious Practitioners"* in the logo subtitle. Find/replace
      both strings to rebrand. Note the body copy also uses *"the Circle"* as an affectionate shorthand.
- [ ] **Replace testimonials**: the `#voices` section uses **illustrative archetype composites**,
      clearly labeled as such. Swap in real, permissioned, named member quotes as the cohort forms,
      then remove the `.tst-note` line and the HTML comment above the section.
- [x] **Analytics**: `data-domain` is set to `malleckclinics.org`. Create the matching free Plausible
      (or Cloudflare Web Analytics) site so the tag has somewhere to report; until then it no-ops.
- [ ] **Forms**: Netlify auto-detects `data-netlify="true"` on deploy and collects submissions in
      Forms → dashboard. Turn on an email notification so applications reach Ash. No PHI is collected.
- [ ] **Contact email**: `hello@malleckclinics.org` is used in the footer/FAQ — set up the mailbox or
      change it.
- [ ] **Legal**: the investor track carries a plain-English "not a securities offering / not advice"
      disclaimer. Have counsel review before promoting Track 3 to investors.

## Deploy
Because the repo root `netlify.toml` already publishes `website/site`, this site is a **second
Netlify site** pointed at `publish = "website/network"` (config in `website/network/netlify.toml`),
mapped to the `malleckclinics.org` domain. When migrating to AWS, this folder maps cleanly to its own
S3 bucket behind CloudFront — keep it a single static folder so the deploy stays a plain sync.

## Local preview
`.claude/launch.json` → **`physicians-circle`** serves this folder on port **3745**.
