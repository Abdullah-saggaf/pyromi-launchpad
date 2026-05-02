import { createFileRoute, Link } from "@tanstack/react-router";
import { Tv, Clapperboard, Briefcase, Building2 } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { FinalCta } from "@/components/sections/FinalCta";

const segments = [
  {
    icon: Tv,
    title: "Gamers, Streamers & YouTubers",
    body: "Find highlights fast, automate repetitive edits, and publish more content from every stream.",
    to: "/solutions/streamers" as const,
    cta: "Explore streamer workflows",
  },
  {
    icon: Clapperboard,
    title: "Video Editors & Creative Teams",
    body: "Let AI handle assembly and cleanup while your team focuses on pacing, storytelling, and polish.",
    to: "/product" as const,
    cta: "See editor workflows",
  },
  {
    icon: Briefcase,
    title: "Agencies",
    body: "Increase deliverables per client with a repeatable workflow that preserves quality and margin.",
    to: "/solutions/agencies" as const,
    cta: "Explore agency solutions",
  },
  {
    icon: Building2,
    title: "Video Teams & Organizations",
    body: "Keep projects, assets, and editing standards aligned across every team and workspace.",
    to: "/solutions/enterprise" as const,
    cta: "Explore enterprise solutions",
  },
];

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions — Pyromi" },
      { name: "description", content: "Pyromi solutions for streamers, editors, agencies, and organizations producing video at scale." },
      { property: "og:title", content: "Solutions — Pyromi" },
      { property: "og:description", content: "Find the workflow that matches your team and output goals." },
    ],
  }),
  component: SolutionsOverviewPage,
});

function SolutionsOverviewPage() {
  return (
    <>
      <Section className="pt-16">
        <Container className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-sparkred">Solutions</p>
          <h1 className="mx-auto mt-3 max-w-4xl font-display text-4xl font-extrabold text-smoke sm:text-6xl">
            One AI Video IDE. <span className="text-pyromi">Built for every video workflow.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-smoke/65">
            Choose the path that fits your team, output goals, and production style.
          </p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {segments.map((segment) => {
              const Icon = segment.icon;
              return (
                <div key={segment.title} className="gradient-border rounded-2xl bg-charcoal/80 p-7">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-techpurple">
                    <Icon size={20} />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-smoke">{segment.title}</h2>
                  <p className="mt-2 text-sm text-smoke/70">{segment.body}</p>
                  <Link to={segment.to} className="mt-6 inline-flex text-sm font-medium text-smoke/85 hover:text-smoke">
                    {segment.cta}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <GradientButton asChild>
              <Link to="/signup">Edit My First Video Free</Link>
            </GradientButton>
          </div>
        </Container>
      </Section>

      <FinalCta />
    </>
  );
}
