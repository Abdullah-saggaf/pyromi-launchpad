import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Pyromi" },
      { name: "description", content: "Simple plans for creators, studios, and enterprise teams. Start free, scale as you ship more." },
      { property: "og:title", content: "Pricing — Pyromi" },
      { property: "og:description", content: "Three plans built around output, not seat count." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    n: "Starter", p: "$0", per: "/mo", checkClass: "text-techpurple",
    desc: "For solo creators testing Pyromi.",
    cta: "Start free",
    features: ["3 videos / month", "Up to 30 min per video", "Auto-captions (10 languages)", "9:16 / 1:1 / 16:9 export"],
  },
  {
    n: "Studio", p: "$49", per: "/mo per editor", featured: true, checkClass: "text-solargold",
    desc: "For agencies and high-volume creators.",
    cta: "Start Studio",
    features: ["Unlimited videos", "Up to 4h per video", "Captions (any language)", "Brand kits & presets", "Team review & approvals", "Bulk export & scheduling"],
  },
  {
    n: "Enterprise", p: "Custom", per: "", checkClass: "text-pyromi",
    desc: "For company content operations.",
    cta: "Talk to sales",
    features: ["Everything in Studio", "Enterprise access controls", "Roles & permissions", "Usage analytics", "Dedicated success manager", "Custom MSA & DPA"],
  },
];

const faqs = [
  { q: "Do you offer annual billing?", a: "Yes — Studio is 20% off annually. Enterprise is annual or multi-year." },
  { q: "What counts as a 'video'?", a: "A single source upload. You can generate dozens of clips from one source." },
  { q: "Can I bring my brand kit?", a: "Yes, on Studio and Enterprise. Caption styles, colors, fonts, logos." },
  { q: "Is my footage private?", a: "Yes. Footage stays in your workspace, with enterprise security and access controls available." },
];

function PricingPage() {
  return (
    <>
      <Section className="pt-16">
        <Container className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-sparkred">Pricing</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-smoke sm:text-6xl">
            Built around <span className="text-pyromi">output, not seats.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-smoke/65">
            Start free. Upgrade when you're shipping more.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.n}
                className={
                  "gradient-border relative flex flex-col rounded-2xl bg-charcoal/80 p-7 " +
                  (t.featured
                    ? "bg-[radial-gradient(120%_80%_at_50%_0%,rgba(42,18,117,0.32),transparent_72%)] lg:-translate-y-3 lg:shadow-[0_30px_80px_-30px_rgba(42,18,117,0.55)]"
                    : "")
                }
              >
                {t.featured && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden rounded-b-2xl bg-pyromi"
                  />
                )}
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-pyromi px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_8px_24px_-8px_rgba(196,32,32,0.6)]">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-smoke">{t.n}</h3>
                <p className="mt-1 text-sm text-smoke/80">{t.desc}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-smoke">{t.p}</span>
                  <span className="text-sm text-smoke/75">{t.per}</span>
                </div>
                <GradientButton
                  asChild
                  variant={t.featured ? "primary" : "ghost"}
                  className="mt-6 w-full"
                >
                  <Link to={t.n === "Enterprise" ? "/contact" : "/signup"}>{t.cta}</Link>
                </GradientButton>
                <ul className="mt-6 space-y-3 border-t border-white/5 pt-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-smoke/80">
                      <Check size={14} className={`mt-1 flex-shrink-0 ${t.checkClass}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-charcoal/40">
        <Container className="max-w-3xl">
          <h2 className="text-center font-display text-3xl font-extrabold text-smoke sm:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-10 divide-y divide-white/5 rounded-2xl border border-white/5">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-smoke">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-techpurple transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-smoke/65">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
