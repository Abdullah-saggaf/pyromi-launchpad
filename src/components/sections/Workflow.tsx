import { motion } from "framer-motion";
import { Upload, Brain, Scissors, Sparkles, CheckCircle2, Send } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const steps = [
  { icon: Upload, title: "Drop your footage", sub: "Paste a link or upload" },
  { icon: Brain, title: "AI reads the footage", sub: "Moments, hooks, energy" },
  { icon: Scissors, title: "Clips generated", sub: "Best moments, framed" },
  { icon: Sparkles, title: "Polish applied", sub: "Captions, audio, brand" },
  { icon: CheckCircle2, title: "Review & approve", sub: "Edits + team comments" },
  { icon: Send, title: "Publish & measure", sub: "Export and track results" },
];

export function Workflow() {
  return (
    <Section className="bg-charcoal/40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-techpurple">Workflow</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            Input → <span className="text-pyromi">Ignition</span> → Output.
          </h2>
          <p className="mt-3 text-smoke/60">A simple, repeatable pipeline your team can trust.</p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-pyromi opacity-40 lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-obsidian text-techpurple shadow-[0_8px_24px_-8px_rgba(110,59,255,0.5)]">
                    <Icon size={18} />
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-widest text-smoke/40">
                    STEP {i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-sm font-bold text-smoke">{s.title}</h3>
                  <p className="mt-1 text-xs text-smoke/55">{s.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
