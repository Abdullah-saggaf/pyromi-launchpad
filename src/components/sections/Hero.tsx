import { useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Play } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { Supergraphic } from "@/components/brand/Supergraphic";
import { HeroVideo } from "@/components/brand/HeroVideo";

const audiences = [
  { id: "gamers", label: "For Gamers & YouTubers", helper: "Find highlights and build faster edits from long recordings." },
  { id: "editors", label: "For Editors & Teams", helper: "Automate repetitive work while keeping full creative control." },
  { id: "orgs", label: "For Video Organizations", helper: "Standardize high-quality output across every editor and project." },
] as const;

export function Hero() {
  const [link, setLink] = useState("");
  const [audience, setAudience] = useState<(typeof audiences)[number]["id"]>("gamers");
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
            The AI Video IDE
          </span>
          <h1 className="mx-auto mt-6 max-w-5xl text-center font-display text-[36px] font-extrabold leading-[1.08] text-smoke sm:text-5xl lg:text-6xl">
            Pyromi -Half Al. Half you. All editable.
          </h1>
          <p className="mx-auto mt-5 max-w-[650px] text-base leading-6 text-smoke/70 sm:text-lg">
            Search hours of footage by describing what happened. Pyromi builds the first cut on
            your timeline, then lets you edit every cut, caption, effect, and transition.
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
              Edit My First Video Free
            </GradientButton>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-smoke/75">
            <Link to="/resources" className="inline-flex items-center gap-1 hover:text-smoke">
              <Play size={12} /> Watch a Real Edit
            </Link>
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
          <p className="mt-3 text-center text-xs text-smoke/70">
            Search 100 hours of footage in seconds. Nothing locked. Everything editable.
          </p>
        </motion.form>

        <HeroVideo />
      </Container>
    </Section>
  );
}
