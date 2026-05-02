import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Briefcase, Tv, Building2, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const cards = [
  {
    icon: Briefcase,
    tint: "text-deepblue",
    glow: "from-deepblue/30",
    title: "For Agencies",
    sub: "More deliverables per client, less manual edit time.",
    bullets: ["Faster turnaround", "Higher margin per project", "Stronger client retention"],
    to: "/solutions/agencies" as const,
    cta: "Explore for agencies",
  },
  {
    icon: Tv,
    tint: "text-techpurple",
    glow: "from-techpurple/30",
    title: "For Streamers",
    sub: "Turn one stream into a week of content.",
    bullets: ["Post daily without an editor", "Grow on every platform", "Keep the live energy"],
    to: "/solutions/streamers" as const,
    cta: "Explore for streamers",
  },
  {
    icon: Building2,
    tint: "text-solargold",
    glow: "from-solargold/30",
    title: "For Enterprise",
    sub: "Scalable content ops with admin visibility.",
    bullets: ["Consistent output across teams", "Centralized review", "Measurable ROI"],
    to: "/solutions/enterprise" as const,
    cta: "Explore enterprise",
  },
];

export function Solutions() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-sparkred">Solutions</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            One workflow. <span className="text-pyromi">Three teams that ship more with it.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="gradient-border group relative overflow-hidden rounded-2xl bg-charcoal/80 p-7"
              >
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.glow} to-transparent opacity-50 blur-2xl`} />
                <div className="relative">
                  <div className={`hover-pop inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 ${c.tint} group-hover:border-white/30`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-smoke">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-smoke/60">{c.sub}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-smoke/80">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-pyromi flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={c.to}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-smoke transition-colors hover:text-techpurple"
                  >
                    {c.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
