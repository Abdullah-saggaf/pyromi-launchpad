import { motion } from "framer-motion";
import {
  Search, Wand2, Captions, Music, Scissors, FileText, Repeat, Sparkles, Link2, AudioLines, ShieldCheck,
} from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const deepFeatures = [
  {
    icon: Search,
    t: "Find Any Moment in 100 Hours of Footage",
    d: "Describe what happened and Pyromi surfaces the exact clip in seconds without manual scrubbing.",
  },
  {
    icon: Wand2,
    t: "Describe the Edit. Pyromi Builds It on Your Timeline",
    d: "Tell Pyromi what you want and it assembles a real first cut you can edit immediately.",
  },
  {
    icon: Captions,
    t: "Auto-Captions in 40+ Languages",
    d: "Generate on-brand animated captions with frame-accurate timing and full edit control.",
  },
  {
    icon: Music,
    t: "Every Cut Syncs to Your Beat",
    d: "Align cuts to drops, beats, and rhythm changes automatically with frame-level precision.",
  },
  {
    icon: Scissors,
    t: "Remove Filler Words, Pauses, and Dead Seconds",
    d: "Clean up awkward silences and verbal filler in one pass so your edit stays tight.",
  },
  {
    icon: FileText,
    t: "Edit the Transcript. The Video Edits Itself",
    d: "Delete or move words in text view and Pyromi updates the timeline accordingly.",
  },
  {
    icon: Repeat,
    t: "Set a Rule Once. Pyromi Applies It Everywhere",
    d: "Define repeated editing rules once and apply them across your entire video automatically.",
  },
  {
    icon: Sparkles,
    t: "2D and 3D Animations Inside Pyromi",
    d: "Create motion graphics, animated text, and camera moves directly in the editor.",
  },
  {
    icon: Link2,
    t: "Paste a YouTube Link Into Your Project",
    d: "Import source video or audio from links directly into your workspace and start editing.",
  },
  {
    icon: AudioLines,
    t: "Consistent Voiceovers and Smart Music Selection",
    d: "Use AI voiceovers and adaptive music suggestions to keep pacing and tone consistent.",
  },
  {
    icon: ShieldCheck,
    t: "Everything the AI Touches, You Own Completely",
    d: "Every cut, caption, transition, and effect remains fully editable on your timeline.",
  },
];

export function ProductDeepFeatures() {
  return (
    <Section className="bg-charcoal/40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-sparkred">Complete Feature Set</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            The full AI Video IDE.
          </h2>
          <p className="mt-3 text-smoke/60">
            Everything from search and rough cut to motion, audio, and export in one timeline.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deepFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
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
