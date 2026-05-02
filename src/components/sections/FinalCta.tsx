import { Link } from "@tanstack/react-router";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";
import { Supergraphic } from "@/components/brand/Supergraphic";

export function FinalCta() {
  return (
    <Section className="relative overflow-hidden">
      <Supergraphic className="opacity-[0.07]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
           style={{ backgroundImage: "var(--gradient-pyromi-soft)" }} />
      <Container className="relative">
        <div className="gradient-border mx-auto max-w-4xl rounded-3xl bg-charcoal/80 p-10 text-center sm:p-16">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-smoke sm:text-6xl">
            The edit is still yours. <br />
            <span className="text-pyromi">The hard part isn’t.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-smoke/65">
            Upload any video and Pyromi builds a first cut automatically. Every cut, caption, and
            transition it creates is yours to adjust, move, or delete. Start free.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <GradientButton asChild size="lg">
              <Link to="/signup">Start editing free</Link>
            </GradientButton>
            <GradientButton asChild size="lg" variant="ghost">
              <Link to="/contact">Book a demo</Link>
            </GradientButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
