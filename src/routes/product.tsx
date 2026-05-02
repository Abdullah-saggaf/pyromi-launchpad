import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { Workflow } from "@/components/sections/Workflow";
import { Features } from "@/components/sections/Features";
import { EnterpriseDashboard } from "@/components/sections/EnterpriseDashboard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Supergraphic } from "@/components/brand/Supergraphic";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Pyromi" },
      { name: "description", content: "Explore the complete Pyromi product: AI clip generation, captions, audio cleanup, reframing, team workflow, and admin analytics." },
      { property: "og:title", content: "Product — Pyromi" },
      { property: "og:description", content: "Every feature, the full workflow, and the admin layer for teams shipping video at scale." },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-16">
        <Supergraphic className="opacity-[0.05]" />
        <Container className="relative text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-sparkred">Product</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold text-smoke sm:text-6xl">
            One platform from <span className="text-pyromi">raw footage to published clip.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-smoke/65">
            Pyromi handles ingest, AI analysis, clipping, captions, polish, review and publishing —
            so your team can focus on what to make next.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <GradientButton asChild><Link to="/signup">Start free</Link></GradientButton>
            <GradientButton asChild variant="ghost"><Link to="/contact">Book a demo</Link></GradientButton>
          </div>
        </Container>
      </Section>
      <Workflow />
      <Features />
      <EnterpriseDashboard />
      <FinalCta />
    </>
  );
}
