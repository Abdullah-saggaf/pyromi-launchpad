import { useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Play, ArrowRight, Wand2, LayoutGrid, Captions } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { Supergraphic } from "@/components/brand/Supergraphic";

const audiences = [
  { id: "agencies", label: "For Agencies", helper: "Turn client footage into more deliverables." },
  { id: "streamers", label: "For Streamers", helper: "Turn one stream into a week of clips." },
  { id: "teams", label: "For Teams", helper: "Create more content with consistent output." },
] as const;

export function Hero() {
  const [link, setLink] = useState("");
  const [audience, setAudience] = useState<(typeof audiences)[number]["id"]>("agencies");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/signup", search: { link } });
  };

  const helper = audiences.find((a) => a.id === audience)!.helper;

  return (
    <Section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-20">
      {/* Glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ backgroundImage: "var(--gradient-pyromi-soft)" }}
        animate={{ opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <Supergraphic className="opacity-[0.05]" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-smoke/80">
            <Sparkles size={12} className="text-solargold" />
            Workflow multiplier for video teams
          </span>
          <h1 className="mt-6 font-display text-[40px] font-extrabold leading-[1.05] text-smoke sm:text-6xl lg:text-7xl">
            Turn a 3-hour video into{" "}
            <span className="text-pyromi">20 publish-ready clips.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-smoke/70 sm:text-lg">
            Pyromi helps agencies, streamers, and teams turn high-volume raw footage into more
            content — faster, more consistently, without scaling edit hours.
          </p>
        </motion.div>

        {/* Try box */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="gradient-border glass relative flex flex-col gap-3 rounded-2xl bg-charcoal/80 p-3 sm:flex-row sm:items-center">
            <input
              type="url"
              value={link}
              onChange={(e) => setLink(e.target.value.slice(0, 500))}
              placeholder="Paste a YouTube, Twitch, Vimeo, or Drive link"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-smoke placeholder:text-smoke/40 focus:outline-none"
              aria-label="Video link"
            />
            <GradientButton type="submit" size="md" className="shrink-0">
              Try with my video <ArrowRight size={16} />
            </GradientButton>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-smoke/50">
            <Link to="/resources" className="inline-flex items-center gap-1 hover:text-smoke">
              <Play size={12} /> See sample outputs
            </Link>
            <span>· Free account required — your link is saved.</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {audiences.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setAudience(a.id)}
                className={
                  "rounded-full border px-3.5 py-1.5 text-xs transition-all " +
                  (audience === a.id
                    ? "border-transparent bg-pyromi text-white"
                    : "border-white/10 text-smoke/70 hover:border-white/30")
                }
              >
                {a.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-smoke/50">{helper}</p>
        </motion.form>

        {/* Product mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="gradient-border relative overflow-hidden rounded-2xl bg-charcoal/90 p-3 shadow-[0_40px_120px_-40px_rgba(110,59,255,0.6)]">
            <div className="rounded-xl border border-white/5 bg-obsidian/80 p-4">
              {/* fake window controls */}
              <div className="mb-4 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-sparkred/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-solargold/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-[11px] text-smoke/40">pyromi.app · session-247.mp4</span>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
                {/* Timeline */}
                <div className="rounded-lg border border-white/5 bg-charcoal/60 p-3">
                  <div className="flex items-center justify-between text-[11px] text-smoke/50">
                    <span className="inline-flex items-center gap-1.5">
                      <Wand2 size={12} className="text-techpurple" /> AI moments detected
                    </span>
                    <span>14 highlights</span>
                  </div>
                  <div className="mt-3 h-24 rounded-md bg-obsidian/60 p-2">
                    <div className="relative h-full w-full overflow-hidden rounded">
                      {/* waveform */}
                      <div className="absolute inset-0 flex items-end gap-[2px] px-1">
                        {Array.from({ length: 80 }).map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-pyromi"
                            style={{ height: `${20 + Math.abs(Math.sin(i / 3)) * 70}%`, opacity: 0.5 }}
                          />
                        ))}
                      </div>
                      {/* highlight markers */}
                      {[15, 32, 48, 67].map((p) => (
                        <div
                          key={p}
                          className="absolute top-0 h-full w-[3px] bg-solargold"
                          style={{ left: `${p}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-[11px] text-smoke/50">
                    <Captions size={12} /> Auto-captions · 40 languages
                    <span className="ml-auto rounded bg-white/5 px-2 py-0.5">2:47:13</span>
                  </div>
                </div>

                {/* Clip grid */}
                <div className="rounded-lg border border-white/5 bg-charcoal/60 p-3">
                  <div className="mb-2 flex items-center gap-1.5 text-[11px] text-smoke/50">
                    <LayoutGrid size={12} /> Generated clips
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-[9/16] rounded-md bg-pyromi-soft p-1.5"
                      >
                        <div className="flex h-full w-full items-end rounded-sm bg-obsidian/40 p-1">
                          <span className="text-[8px] text-smoke/80">Clip {i + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
