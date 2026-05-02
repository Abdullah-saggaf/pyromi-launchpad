import { createFileRoute } from "@tanstack/react-router";
import { SegmentLayout } from "@/components/sections/SegmentLayout";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/solutions/streamers")({
  head: () => ({
    meta: [
      { title: "Pyromi for Streamers — Turn one stream into a week of clips" },
      { name: "description", content: "Post daily without an editor. Grow on every platform. Keep the energy of the live moment." },
      { property: "og:title", content: "Pyromi for Streamers" },
      { property: "og:description", content: "Grow on every platform without hiring an editor." },
    ],
  }),
  component: () => (
    <>
      <SegmentLayout
        eyebrow="For Streamers"
        headline={<>Turn one stream into <span className="text-pyromi">a week of content.</span></>}
        sub="Pyromi finds the clutch moments, frames them vertical and adds branded captions — automatically."
        stats={[
          { v: "20+", l: "clips per stream" },
          { v: "7×", l: "more posts per week" },
          { v: "0", l: "editors required" },
        ]}
        bullets={[
          { t: "Post daily", d: "Stay top-of-feed without grinding edits." },
          { t: "Every platform", d: "TikTok, Shorts, Reels — auto-formatted." },
          { t: "Live energy preserved", d: "AI keeps reactions and hype intact." },
          { t: "Branded captions", d: "Your style on every clip, automatically." },
          { t: "Bulk schedule", d: "Queue a week's worth in one sitting." },
          { t: "Trend-ready hooks", d: "AI surfaces shareable moments first." },
        ]}
        quote={{
          q: "I stream 4 nights a week. Pyromi turns each one into a full week of vertical clips. No editor needed.",
          n: "Pyromi customer", r: "Gaming creator",
        }}
      />
      <FinalCta />
    </>
  ),
});
