
# Pyromi — Premium SaaS Redesign

A conversion-focused, product-led redesign in the spirit of Opus (product-forward), with NotebookLM's restraint and a touch of Higgsfield polish — fully wrapped in the Pyromi GSM ("Tech Fire") system.

> **Stack note:** This project runs on **TanStack Start + React 19 + Tailwind v4 + shadcn/ui** (not Next.js — that's not supported here). Same component/animation libraries you asked for (shadcn, Radix, lucide-react, framer-motion, cva, clsx, tailwind-merge, react-hook-form, zod, recharts, embla-carousel-react). Routing uses TanStack file routes; images use plain `<img>` with assets imported from `src/assets`.

---

## 1. Design Direction

**Brand feeling:** Tech Fire — ignition, momentum, premium confidence. Dark Obsidian foundation, Smoke White surfaces for clarity blocks, **signature Pyromi gradient** (Deep Blue → Tech Purple → Spark Red → Solar Gold) used sparingly on hero glow, CTAs, key numerals, and the supergraphic.

**Visual system**
- **Foundation:** Obsidian `#0A0B10` / Charcoal `#14161E` base, Smoke White `#F6F6F4` light blocks
- **Accents:** Deep Blue `#1E2A78`, Tech Purple `#6E3BFF`, Spark Red `#FF3B2F`, Solar Gold `#FFB627`
- **Gradient:** 135° Deep Blue → Purple → Spark Red → Gold (used as glow, button hover, KPI numerals, divider lines)
- **Type:** Montserrat 700/800 for headlines (tight tracking, large display sizes up to 96px), Inter 400/500 for body & UI
- **Supergraphic:** Angular flame-derived geometric pattern as 4-6% opacity SVG overlays on dark sections, sharper diagonals as section dividers
- **Depth:** soft inner glows, 1px gradient borders on premium cards, frosted-glass product frames
- **Motion:** Framer Motion only for: hero glow drift, in-view fade/slide (y:24, 600ms), button shine on hover, tab cross-fade, dashboard counter tick. No parallax, no scroll-jacking.

---

## 2. Sitemap

- `/` Homepage
- `/product` Product deep-dive
- `/solutions/agencies`, `/solutions/streamers`, `/solutions/enterprise`
- `/pricing`
- `/resources` (examples + blog placeholder)
- `/contact` (demo request)
- `/login`, `/signup` (signup preserves the hero video URL via query param)

For this build I'll ship: Homepage (full), all 3 Solutions pages, Pricing, Enterprise-rich Product page, Contact/Demo, and stub Login/Signup that read the preserved link.

---

## 3. Homepage Structure & Copy

### A. Sticky Header
Logo · Product · Solutions (mega-menu: Agencies / Streamers / Enterprise) · Enterprise · Pricing · Resources · **Login** · **Try Pyromi →** (gradient button)

### B. Hero — "Try Box"
- **Eyebrow chip:** "✦ Workflow multiplier for video teams"
- **Headline:** **Turn a 3-hour video into 20 publish-ready clips.**
- **Subheadline:** Pyromi helps agencies, streamers, and teams turn high-volume raw footage into more content — faster, more consistently, without scaling edit hours.
- **Try box:** input "Paste a YouTube, Twitch, Vimeo, or Drive link" + **Try with my video →** (primary, gradient) + **See sample outputs** (ghost). Helper: "Free account required — your link is saved."
- **Audience tabs:** For Agencies / For Streamers / For Teams — each swaps the helper line and the hero mockup overlay caption.
- **Visual:** layered product mockup (timeline + generated clips grid) inside a frosted frame, soft Pyromi-gradient glow behind, supergraphic at 5% opacity.

### C. Trust Strip
"Trusted by content teams shipping at scale" + 8 monochrome logo placeholders + 3 inline stats: **12M+ minutes processed · 4.2M clips generated · 38hrs saved / week per team**.

### D. "Made with Pyromi" — Sample Outputs
Section title: **Made with Pyromi.** Subtitle: "Real outputs from real footage." Embla carousel of 9:16 clip cards with play overlay, caption style, source tag ("From a 2h47 podcast → 14 clips"). Filter chips: Podcast · Stream · Webinar · Interview · Long-form.

### E. Solutions — 3 Cards
Section: **One workflow. Three teams that ship more with it.**
- **For Agencies** — *More deliverables per client, less manual edit time.* Bullets: faster turnaround · higher margin per project · stronger retention. CTA: Explore for agencies →
- **For Streamers** — *Turn one stream into a week of content.* Bullets: post daily without an editor · grow on every platform · keep the energy of the live moment. CTA: Explore for streamers →
- **For Enterprise** — *Scalable content ops with admin visibility.* Bullets: consistent output across teams · centralized review · measurable ROI. CTA: Explore enterprise →

Each card: dark surface, 1px gradient border on hover, segment-tinted icon (Blue/Purple/Gold).

### F. Workflow — "Input → Ignition → Output"
Horizontal 6-step rail with connecting gradient line:
1. **Drop your footage** — paste a link or upload
2. **AI reads the footage** — moments, hooks, speakers, energy
3. **Clips generated** — best moments, framed and trimmed
4. **Polish applied** — captions, audio cleanup, brand styling
5. **Review & approve** — one-click edits, team comments
6. **Publish & measure** — export everywhere, track what works

### G. Outcomes / Benefits (the ROI section)
Section: **Output you can measure.** 4 large stat cards with gradient numerals:
- **10×** more clips per recording
- **–82%** manual edit time
- **3.4×** posting frequency
- **0** new headcount needed

Below: 3 outcome bullets in plain language ("Faster turnaround", "Consistent brand output", "Scale without scaling the team").

### H. Features Grid (supporting, not dominating)
6 cards, icon + 1-line outcome + 1-line feature:
- Smart clip generation · AI captions (40+ languages) · Audio cleanup · Visual enhancement & reframing · Team review & approvals · Bulk export & scheduling

### I. Enterprise / Admin Dashboard Teaser
Section: **Built for teams that ship at scale.**
Two-column: left = copy + 3 enterprise bullets (SSO/SAML · Roles & permissions · Usage analytics); right = **interactive Recharts dashboard mockup**:
- Top KPI tiles: Hours saved · Clips published · Active editors · Avg turnaround
- Area chart: Clips published / week (gradient fill)
- Bar chart: Output by team member
- Donut: Content mix by source

CTA row: **Book a demo** + **Talk to sales**.

### J. Testimonials / Proof
3 quote cards with avatar, name, role, company; one "before/after" pair (raw timeline → 6 generated vertical clips).

### K. Final CTA
Full-bleed dark section with supergraphic, gradient-glow headline:
**Stop editing more. Start shipping more.**
Sub: "Try Pyromi free — bring a real video and see your first clips in minutes."
Buttons: **Try with my video** · **Book a demo**.

### L. Footer
4-column: Product · Solutions · Company · Legal. Logo + tagline "Tech fire for video workflows." Social icons. Subtle supergraphic strip on top edge.

---

## 4. Supporting Pages (lighter, on-brand)

- **Solutions/[segment]** — segment hero + 3 outcome stats + workflow tailored to segment + 3 testimonials + CTA
- **Pricing** — 3 tiers (Starter / Studio / Enterprise) + feature matrix + FAQ + CTA
- **Product** — extended workflow + every feature with screenshot + integration logos + CTA
- **Contact/Demo** — react-hook-form + zod (name, work email, company, team size, use case, video link) → success state
- **Signup** — placeholder form that reads `?link=` from the hero try box and shows "We saved your video — finish signup to process it."

---

## 5. UI System (shadcn + cva)

- **Buttons:** `primary` (gradient bg, white text, subtle inner highlight, hover shine), `secondary` (Smoke White on dark), `ghost` (border 1px subtle), `link`. Sizes sm/md/lg.
- **Cards:** `dark-premium` (Charcoal + 1px gradient hover border + soft glow), `light-clarity` (Smoke White, soft shadow)
- **Inputs:** dark frosted, 1px border, focus ring uses Pyromi gradient
- **Badges/Chips:** pill, segment-tinted
- **Section spacing:** 96px desktop / 64px tablet / 48px mobile, max-w 1240px
- **Iconography:** lucide, 1.5px stroke, occasionally tinted with segment color

---

## 6. Implementation Plan

1. **Brand foundation** — copy logo from zip into `src/assets/brand/`, add Montserrat + Inter via Google Fonts in `__root.tsx`, extend `src/styles.css` with full GSM palette + gradient + supergraphic SVG, add dark-by-default theme.
2. **Install deps:** `framer-motion lucide-react class-variance-authority react-hook-form zod recharts embla-carousel-react` (clsx, tailwind-merge, shadcn already present).
3. **Shared components:** `Navbar`, `Footer`, `Container`, `SectionHeading`, `GradientButton`, `PremiumCard`, `Supergraphic`, `ProductMockup`, `TryBox`, `StatCard`.
4. **Homepage sections** built as modular components in `src/components/sections/` and composed in `src/routes/index.tsx`.
5. **Routes:** create `product.tsx`, `solutions.tsx` (layout) + `solutions.agencies.tsx`/`streamers.tsx`/`enterprise.tsx`, `pricing.tsx`, `resources.tsx`, `contact.tsx`, `login.tsx`, `signup.tsx`. Each gets unique `head()` meta (title, description, og).
6. **Hero try-box behavior:** form posts to `/signup?link=<encoded>`; signup page reads the param and shows it preserved.
7. **Enterprise dashboard:** Recharts area + bar + donut with brand-gradient fills; Framer Motion counter on KPI tiles when in view.
8. **Polish pass:** in-view animations, hover states, mobile layout, responsive type scale, accessibility (focus rings, alt text, semantic landmarks).
9. **QA:** every route renders, nav works, forms validate, Lighthouse-friendly (no oversized images, lazy-loaded carousel).

Result: a premium, product-led, conversion-focused Pyromi site that feels unmistakably "Tech Fire" and is ready to extend page-by-page.
