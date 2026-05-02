import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Search, Wand2, Captions, Music, Scissors, FileText,
} from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const coreFeatures = [
  {
    icon: Search,
    t: "Find moments instantly",
    d: "Type what happened and Pyromi finds the exact clip in seconds.",
  },
  {
    icon: Wand2,
    t: "Build edits with AI",
    d: "Describe the edit you want and Pyromi builds the first cut on your timeline.",
  },
  {
    icon: Captions,
    t: "Auto-captions",
    d: "Generate on-brand animated captions in 40+ languages, fully editable.",
  },
  {
    icon: Music,
    t: "Beat sync",
    d: "Sync cuts to music automatically with frame-accurate timing.",
  },
  {
    icon: Scissors,
    t: "Remove filler words",
    d: "Clean up pauses, filler words, and dead air in one click.",
  },
  {
    icon: FileText,
    t: "Edit by transcript",
    d: "Edit the video by editing text. Delete or rearrange words and the timeline updates.",
  },
];

export function Features() {
  return (
    <Section className="bg-charcoal/40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            Everything you need. Nothing locked.
          </h2>
          <p className="mt-3 text-smoke/60">
            Search, edit, caption, animate, and publish — all in one place.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="gradient-border group rounded-2xl bg-charcoal/80 p-6 min-h-[178px]"
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

        <div className="mt-8 text-center">
          <Link
            to="/product"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-smoke/80 transition hover:border-white/30 hover:text-smoke"
          >
            Explore all product features
          </Link>
        </div>
      </Container>
    </Section>
  );
}
