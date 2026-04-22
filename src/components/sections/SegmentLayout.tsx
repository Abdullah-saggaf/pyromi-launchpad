import { Link } from "@tanstack/react-router";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { Supergraphic } from "@/components/brand/Supergraphic";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type SegmentLayoutProps = {
  eyebrow: string;
  headline: ReactNode;
  sub: string;
  stats: { v: string; l: string }[];
  bullets: { t: string; d: string }[];
  quote: { q: string; n: string; r: string };
};

export function SegmentLayout({ eyebrow, headline, sub, stats, bullets, quote }: SegmentLayoutProps) {
  return (
    <>
      <Section className="relative overflow-hidden pt-16">
        <Supergraphic className="opacity-[0.05]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
             style={{ backgroundImage: "var(--gradient-pyromi-soft)" }} />
        <Container className="relative text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-techpurple">{eyebrow}</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold text-smoke sm:text-6xl">
            {headline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-smoke/65">{sub}</p>
          <div className="mt-8 flex justify-center gap-3">
            <GradientButton asChild><Link to="/signup">Try Pyromi free</Link></GradientButton>
            <GradientButton asChild variant="ghost"><Link to="/contact">Book a demo</Link></GradientButton>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="gradient-border rounded-2xl bg-charcoal/80 p-7 text-center"
              >
                <div className="font-display text-4xl font-extrabold text-pyromi">{s.v}</div>
                <div className="mt-1 text-sm text-smoke/60">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-charcoal/40">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/5 p-6">
                <h3 className="font-display text-base font-bold text-smoke">{b.t}</h3>
                <p className="mt-1.5 text-sm text-smoke/60">{b.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <figure className="gradient-border mx-auto max-w-3xl rounded-2xl bg-charcoal/80 p-8 text-center sm:p-12">
            <blockquote className="font-display text-xl font-semibold leading-snug text-smoke sm:text-2xl">
              "{quote.q}"
            </blockquote>
            <figcaption className="mt-5 text-sm text-smoke/60">
              <span className="font-medium text-smoke">{quote.n}</span> · {quote.r}
            </figcaption>
          </figure>
        </Container>
      </Section>
    </>
  );
}
