import { motion } from "framer-motion";
import { Zap, Palette, Users } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const stats = [
  { v: "10×", l: "more clips per recording" },
  { v: "–82%", l: "manual edit time" },
  { v: "3.4×", l: "posting frequency" },
  { v: "0", l: "new headcount needed" },
];

const benefits = [
  { icon: Zap, t: "Faster turnaround", d: "Move from raw footage to publish in minutes — not days." },
  { icon: Palette, t: "Consistent brand output", d: "Captions, framing and styling stay on-brand at scale." },
  { icon: Users, t: "Scale without scaling the team", d: "Ship more without hiring more editors." },
];

export function Outcomes() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-techpurple">Outcomes</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            Output you can <span className="text-pyromi">measure.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="gradient-border rounded-2xl bg-charcoal/80 p-7 text-center"
            >
              <div className="font-display text-5xl font-extrabold text-pyromi sm:text-6xl">
                {s.v}
              </div>
              <div className="mt-2 text-sm text-smoke/60">{s.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.t}
                className="gradient-border group rounded-2xl bg-charcoal/60 p-6"
              >
                <div className="hover-pop inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-solargold group-hover:border-solargold/60 group-hover:text-solargold">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-display font-bold text-smoke">{b.t}</h3>
                <p className="mt-1.5 text-sm text-smoke/60">{b.d}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
