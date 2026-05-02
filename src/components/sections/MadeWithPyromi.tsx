import { useState, useMemo } from "react";
import { Play } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const filters = ["All", "Podcast", "Stream", "Webinar", "Interview", "Long-form"];

const clips = [
  { tag: "Podcast", source: "From a 2h47 podcast → 14 clips", title: "The 1 reframe that 10×'d output", color: "from-techpurple to-sparkred" },
  { tag: "Stream", source: "From a 6h Twitch VOD → 22 clips", title: "Clutch moment, perfectly cut", color: "from-deepviolet to-techpurple" },
  { tag: "Webinar", source: "From a 90-min webinar → 9 clips", title: "The AI workflow most teams miss", color: "from-sparkred to-solargold" },
  { tag: "Interview", source: "From a 45-min interview → 7 clips", title: "Founder on shipping faster", color: "from-techpurple to-solargold" },
  { tag: "Long-form", source: "From a 3h essay → 18 clips", title: "Why volume beats polish", color: "from-deepviolet to-sparkred" },
  { tag: "Podcast", source: "From a 1h53 episode → 11 clips", title: "Our biggest workflow unlock", color: "from-techpurple to-sparkred" },
  { tag: "Stream", source: "From a 4h stream → 16 clips", title: "Speedrun PB, captioned + framed", color: "from-deepviolet to-techpurple" },
];

export function MadeWithPyromi() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () => (filter === "All" ? clips : clips.filter((c) => c.tag === filter)),
    [filter]
  );
  // Duplicate the list so the -50% translate produces a seamless loop.
  const looped = useMemo(() => [...visible, ...visible], [visible]);

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-techpurple">Made with Pyromi</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
              Real outputs. <span className="text-pyromi">Real footage.</span>
            </h2>
            <p className="mt-3 max-w-xl text-smoke/60">
              See what comes out of Pyromi for podcasts, streams, webinars and more.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={
                  "hover-pop rounded-full border px-3 py-1.5 text-xs " +
                  (filter === f
                    ? "border-transparent bg-pyromi text-white"
                    : "border-white/10 text-smoke/60 hover:border-white/40 hover:text-smoke")
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </Container>

      {/* Full-bleed marquee */}
      <div className="marquee-wrap relative mt-10 overflow-hidden">
        {/* Edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-obsidian to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-obsidian to-transparent"
        />

        <div className="marquee gap-5 px-5">
          {looped.map((c, i) => (
            <article
              key={c.title + i}
              tabIndex={0}
              className="group relative w-[220px] shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-techpurple/60 sm:w-[260px]"
            >
              <div className={`gradient-border relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br ${c.color}`}>
                <div className="absolute inset-0 bg-obsidian/30" />
                <div className="absolute inset-x-3 top-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/80">
                  <span className="rounded-full bg-black/40 px-2 py-0.5 backdrop-blur">{c.tag}</span>
                  <span>9:16</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="hover-pop flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur group-hover:bg-white/20">
                    <Play size={18} className="ml-0.5 text-white" />
                  </div>
                </div>
                <div className="absolute inset-x-3 bottom-3">
                  <p className="text-sm font-semibold leading-tight text-white">{c.title}</p>
                </div>
              </div>
              <p className="mt-3 px-1 text-xs text-smoke/50">{c.source}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
