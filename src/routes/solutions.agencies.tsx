import { createFileRoute } from "@tanstack/react-router";
import { SegmentLayout } from "@/components/sections/SegmentLayout";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/solutions/agencies")({
  head: () => ({
    meta: [
      { title: "Pyromi for Agencies — More deliverables, less manual edit time" },
      { name: "description", content: "Faster turnaround, higher margin per project, stronger client retention. Pyromi multiplies output for video agencies." },
      { property: "og:title", content: "Pyromi for Agencies" },
      { property: "og:description", content: "Multiply deliverables per client without growing your edit team." },
    ],
  }),
  component: () => (
    <>
      <SegmentLayout
        eyebrow="For Agencies"
        headline={<>More deliverables per client. <span className="text-pyromi">Less manual edit time.</span></>}
        sub="Turn client footage into a steady stream of clips, reels and shorts — without burning your editors out."
        stats={[
          { v: "4×", l: "deliverables per client" },
          { v: "–60%", l: "edit hours per project" },
          { v: "+38%", l: "project margin" },
        ]}
        bullets={[
          { t: "Faster turnaround", d: "Send first cuts in hours, not days." },
          { t: "Higher margin", d: "Same retainer, far less edit cost." },
          { t: "Client retention", d: "Consistent quality keeps clients renewing." },
          { t: "Brand consistency", d: "Per-client caption + style presets." },
          { t: "Team review", d: "Internal QC before client sees it." },
          { t: "Scalable workflow", d: "Onboard new clients without new editors." },
        ]}
        quote={{
          q: "Our editors stopped doing the boring 80% and finally focus on the creative parts. Output tripled.",
          n: "Theo Lindqvist", r: "Founder, Atlas Agency",
        }}
      />
      <FinalCta />
    </>
  ),
});
