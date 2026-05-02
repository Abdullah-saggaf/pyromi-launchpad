import { motion } from "framer-motion";
import { Upload, Brain, Scissors, Sparkles, CheckCircle2, Send } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const steps = [
  { icon: Upload, title: "Upload Your Footage or Paste a YouTube Link", sub: "Drop a file or paste a link. Both work. Always." },
  { icon: Brain, title: "Pyromi Reads Your Footage", sub: "Speech, faces, emotion, action — it understands your video, not just the audio." },
  { icon: Scissors, title: "Describe the Edit You Want", sub: "Plain language. No commands. “Make it punchy with jump cuts and music drops” is enough." },
  { icon: Sparkles, title: "AI Cleans Everything in One Pass", sub: "Captions, filler removal, beat sync — done simultaneously. Not one by one." },
  { icon: CheckCircle2, title: "Adjust Anything on Your Timeline", sub: "This is where Pyromi beats every AI-only tool. The edit is still yours." },
  { icon: Send, title: "Export and Ship", sub: "Export your finished edit and share it wherever your audience is." },
];

export function Workflow() {
  return (
    <Section className="bg-charcoal/40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            From raw footage to finished video. Here’s what happens.
          </h2>
          <p className="mt-3 text-smoke/60">No tutorials. No learning curve. Just describe what you want.</p>
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
                  className="hover-pop relative text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-obsidian text-techpurple shadow-[0_8px_24px_-8px_rgba(110,59,255,0.5)] transition-all duration-300 group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-widest text-smoke/75">
                    STEP {i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-sm font-bold text-smoke">{s.title}</h3>
                  <p className="mt-1 text-xs text-smoke/80">{s.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
