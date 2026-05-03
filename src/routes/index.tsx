import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { MadeWithPyromi } from "@/components/sections/MadeWithPyromi";
import { Workflow } from "@/components/sections/Workflow";
import { Outcomes } from "@/components/sections/Outcomes";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pyromi — Half AI. Half you. All editable." },
      {
        name: "description",
        content:
          "Pyromi is the AI video editor that builds edits directly on your timeline. Search 100 hours of footage in seconds, describe what you want, and keep every cut, caption, and transition fully editable.",
      },
      { property: "og:title", content: "Pyromi — Half AI. Half you. All editable." },
      {
        property: "og:description",
        content:
          "Pyromi is the AI video editor that builds edits directly on your timeline. Search 100 hours of footage in seconds, describe what you want, and keep every cut, caption, and transition fully editable.",
      },
      { name: "twitter:title", content: "Pyromi — Half AI. Half you. All editable." },
      {
        name: "twitter:description",
        content:
          "Pyromi is the AI video editor that builds edits directly on your timeline. Search 100 hours of footage in seconds, describe what you want, and keep every cut, caption, and transition fully editable.",
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
      <Workflow />
      <Outcomes />
      <Features />
      <Testimonials />
      <FinalCta />
    </>
  );
}
