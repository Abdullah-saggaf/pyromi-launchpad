import { motion } from "framer-motion";
import {
  Scissors, Captions, Volume2, Wand2, Users2, Calendar,
} from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const features = [
  { icon: Scissors, t: "Smart clip generation", d: "AI finds the moments worth posting — and frames them right." },
  { icon: Captions, t: "AI captions, 40+ languages", d: "Branded subtitle styles, frame-perfect timing." },
  { icon: Volume2, t: "Audio cleanup", d: "Remove noise, balance levels, enhance voice clarity." },
  { icon: Wand2, t: "Reframe & enhance", d: "Vertical, square, or wide — auto-tracked and color-graded." },
  { icon: Users2, t: "Team review & approvals", d: "Comments, statuses, and one-click edits in-app." },
  { icon: Calendar, t: "Bulk export & schedule", d: "Push everywhere — or schedule directly to socials." },
];

export function Features() {
  return (
    <Section className="bg-charcoal/40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-techpurple">Features</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            Built to <span className="text-pyromi">support the outcome.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="gradient-border group rounded-2xl bg-charcoal/80 p-6"
              >
                <div className="hover-pop inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-techpurple group-hover:border-techpurple/60">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-smoke">{f.t}</h3>
                <p className="mt-1.5 text-sm text-smoke/60">{f.d}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
