import { useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Play, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { Supergraphic } from "@/components/brand/Supergraphic";
import { HeroVideo } from "@/components/brand/HeroVideo";

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
          <p className="mt-4 text-xs text-smoke/60">DEPLOY TEST - latest version</p>
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
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-smoke placeholder:text-smoke/50 focus:outline-none"
              aria-label="Video link"
            />
            <GradientButton type="submit" size="md" className="shrink-0">
              Try with my video <ArrowRight size={16} />
            </GradientButton>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-smoke/75">
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
                  "rounded-full px-3.5 py-1.5 text-xs transition-all " +
                  (audience === a.id
                    ? "bg-pyromi text-white shadow-[0_4px_18px_-6px_rgba(196,32,32,0.55)]"
                    : "border border-white/10 text-smoke/70 hover:border-white/30")
                }
              >
                {a.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-smoke/75">{helper}</p>
        </motion.form>

        <HeroVideo />
      </Container>
    </Section>
  );
}
