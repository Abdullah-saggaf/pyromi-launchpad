import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { MadeWithPyromi } from "@/components/sections/MadeWithPyromi";
import { Solutions } from "@/components/sections/Solutions";
import { Workflow } from "@/components/sections/Workflow";
import { Outcomes } from "@/components/sections/Outcomes";
import { Features } from "@/components/sections/Features";
import { EnterpriseDashboard } from "@/components/sections/EnterpriseDashboard";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pyromi — Turn a 3-hour video into 20 publish-ready clips" },
      {
        name: "description",
        content:
          "The workflow multiplier for high-volume video teams. Turn raw footage into more content — faster, more consistently, without scaling edit hours.",
      },
      { property: "og:title", content: "Pyromi — Turn a 3-hour video into 20 publish-ready clips" },
      {
        property: "og:description",
        content: "Built for agencies, streamers, and enterprise teams shipping video at scale.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <MadeWithPyromi />
      <Solutions />
      <Workflow />
      <Outcomes />
      <Features />
      <EnterpriseDashboard />
      <Testimonials />
      <FinalCta />
    </>
  );
}
