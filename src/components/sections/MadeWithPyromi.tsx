import { useMemo, useState } from "react";
import { Container, Section } from "@/components/brand/Container";
import { OutputCard } from "@/components/brand/OutputCard";

const filters = ["All", "Podcast", "Stream", "Webinar", "Interview", "Long-form"];

const clips = [
  {
    tag: "Podcast",
    duration: "9:16",
    source: "From a 2h47 podcast → 14 clips",
    title: "The 1 reframe that 10×'d output",
    image: "/assets/cards/Card_Elon_Podcast.png?v=6243adb",
    video: "/assets/cards/Video_Elon_Podcast.mp4?v=6243adb",
  },
  {
    tag: "Stream",
    duration: "9:16",
    source: "From a 6h Twitch VOD → 22 clips",
    title: "Clutch moment, perfectly cut",
    image: "/assets/cards/Card_Fifa26_Game.png?v=6243adb",
    video: "/assets/cards/Video_Fifa26_Game.mp4?v=6243adb",
  },
  {
    tag: "Webinar",
    duration: "9:16",
    source: "From a 90-min webinar → 9 clips",
    title: "The AI workflow most teams miss",
    image: "/assets/cards/Card_JackMa_Webinar.png?v=6243adb",
    video: "/assets/cards/Video_JackMa_Webinar.mp4?v=6243adb",
  },
  {
    tag: "Interview",
    duration: "9:16",
    source: "From a 45-min interview → 7 clips",
    title: "Founder on shipping faster",
    image: "/assets/cards/Card_Naval_Interview.png?v=6243adb",
    video: "/assets/cards/video_naval_interview.mp4?v=6243adb",
  },
  {
    tag: "Long-form",
    duration: "9:16",
    source: "From a 3h essay → 18 clips",
    title: "Why volume beats polish",
    image: "/assets/cards/Card_Fallout_LongForm.png?v=6243adb",
    video: "/assets/cards/Video_Fallout_LongForm.mp4?v=6243adb",
  },
  {
    tag: "Podcast",
    duration: "9:16",
    source: "From a 1h53 episode → 11 clips",
    title: "Our biggest workflow unlock",
    image: "/assets/cards/Card_MrBeast_TalkingHead.png?v=6243adb",
    video: "/assets/cards/Video_MrBeast_TalkingHead.mp4?v=6243adb",
  },
] as const;

export function MadeWithPyromi() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? clips : clips.filter((c) => c.tag === filter);
  const items = useMemo(() => visible, [visible]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const autoEnabled = filter === "All";
  const isInteracting = activeIndex !== null || hoverIndex !== null;

  const trackClassName =
    "output-track flex w-max gap-5" +
    (autoEnabled ? " output-track--all" : "");

  const renderItems = (groupIndex = 0, hidden = false) =>
    items.map((c, i) => (
      <div
        key={`${groupIndex}-${c.title}`}
        aria-hidden={hidden ? true : undefined}
        className={hidden ? "pointer-events-none" : undefined}
        onMouseEnter={hidden ? undefined : () => setHoverIndex(i)}
        onMouseLeave={hidden ? undefined : () => setHoverIndex((prev) => (prev === i ? null : prev))}
        onFocusCapture={hidden ? undefined : () => setHoverIndex(i)}
        onBlurCapture={hidden ? undefined : () => setHoverIndex((prev) => (prev === i ? null : prev))}
      >
        <OutputCard
          active={activeIndex === i}
          tag={c.tag}
          duration={c.duration}
          source={c.source}
          title={c.title}
          image={c.image}
          video={c.video}
          onActivate={() => setActiveIndex(i)}
          onDeactivate={() => setActiveIndex((prev) => (prev === i ? null : prev))}
        />
      </div>
    ));

  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-sparkred">Made with Pyromi</p>
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
                  "rounded-full px-3 py-1.5 text-xs transition " +
                  (filter === f
                    ? "bg-pyromi text-white shadow-[0_4px_18px_-6px_rgba(196,32,32,0.55)]"
                    : "border border-white/10 text-smoke/60 hover:border-white/30 hover:text-smoke")
                }
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div
            className={
              trackClassName +
              (autoEnabled && isInteracting ? " output-track--paused" : "")
            }
          >
            {renderItems()}
            {autoEnabled && renderItems(1, true)}
          </div>
        </div>
      </Container>
    </Section>
  );
}
