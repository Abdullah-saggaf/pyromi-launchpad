import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Pyromi" },
      { name: "description", content: "Sample outputs, guides and inspiration from teams shipping video with Pyromi." },
      { property: "og:title", content: "Resources — Pyromi" },
      { property: "og:description", content: "See real outputs and learn how teams scale video with Pyromi." },
    ],
  }),
  component: ResourcesPage,
});

const examples = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  tag: ["Podcast", "Stream", "Webinar"][i % 3],
  title: ["The 1 reframe that 10×'d output", "Clutch moment, perfectly cut", "AI workflow most teams miss"][i % 3],
}));

function ResourcesPage() {
  return (
    <>
      <Section className="pt-16">
        <Container className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-techpurple">Resources</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-smoke sm:text-6xl">
            See what Pyromi <span className="text-pyromi">actually ships.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-smoke/65">
            Real outputs from podcasts, streams, and webinars. Steal the format.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((e) => (
              <div key={e.id} className="gradient-border overflow-hidden rounded-2xl bg-charcoal/80">
                <div className="aspect-[9/16] bg-pyromi-soft" />
                <div className="p-4">
                  <span className="text-[10px] uppercase tracking-widest text-techpurple">{e.tag}</span>
                  <h3 className="mt-1 font-display font-bold text-smoke">{e.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <GradientButton asChild><Link to="/signup">Try with my video</Link></GradientButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
