import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { Workflow } from "@/components/sections/Workflow";
import { ProductDeepFeatures } from "@/components/sections/ProductDeepFeatures";
import { EnterpriseDashboard } from "@/components/sections/EnterpriseDashboard";
import { FinalCta } from "@/components/sections/FinalCta";
import { Supergraphic } from "@/components/brand/Supergraphic";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Pyromi" },
      { name: "description", content: "Explore the complete AI Video IDE: search footage, build AI edits on a real timeline, animate, caption, and export while keeping everything editable." },
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
            The complete <span className="text-pyromi">AI Video IDE.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-smoke/65">
            From import to export, Pyromi helps you search footage, generate first cuts, and refine
            every detail on a fully editable timeline.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <GradientButton asChild><Link to="/signup">Start free</Link></GradientButton>
            <GradientButton asChild variant="ghost"><Link to="/contact">Book a demo</Link></GradientButton>
          </div>
        </Container>
      </Section>
      <Workflow />
      <ProductDeepFeatures />
      <EnterpriseDashboard />
      <FinalCta />
    </>
  );
}
