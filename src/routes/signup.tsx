import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";

const search = z.object({
  link: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/signup")({
  validateSearch: zodValidator(search),
  head: () => ({
    meta: [
      { title: "Start free — Pyromi" },
      { name: "description", content: "Create your free Pyromi account and process your first video in minutes." },
      { property: "og:title", content: "Start free — Pyromi" },
      { property: "og:description", content: "Create a free account and turn your first video into clips." },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const { link } = Route.useSearch();
  return (
    <Section className="pt-20">
      <Container className="max-w-md">
        <div className="text-center">
          <h1 className="font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            Create your <span className="text-pyromi">Pyromi</span> account
          </h1>
          <p className="mt-3 text-smoke/60">Free to start — no card required.</p>
        </div>

        {link && (
          <div className="gradient-border mt-8 rounded-xl bg-charcoal/80 p-4 text-sm text-smoke/80">
            ✦ We saved your video — finish signup to process it.
            <div className="mt-1 truncate text-xs text-smoke/50">{link}</div>
          </div>
        )}

        <form className="mt-8 space-y-3">
          <input className={inp} placeholder="Work email" type="email" />
          <input className={inp} placeholder="Password" type="password" />
          <GradientButton type="button" size="lg" className="w-full">
            Create account
          </GradientButton>
        </form>

        <p className="mt-6 text-center text-sm text-smoke/55">
          Already have an account? <Link to="/login" className="text-techpurple hover:underline">Log in</Link>
        </p>
      </Container>
    </Section>
  );
}

const inp =
  "w-full rounded-xl border border-white/10 bg-charcoal/80 px-4 py-3 text-sm text-smoke placeholder:text-smoke/40 focus:border-techpurple/60 focus:outline-none";
