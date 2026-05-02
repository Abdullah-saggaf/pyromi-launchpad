import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Pyromi" },
      { name: "description", content: "Log in to your Pyromi workspace." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <Section className="pt-20">
      <Container className="max-w-md">
        <div className="text-center">
          <h1 className="font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            Welcome back
          </h1>
          <p className="mt-3 text-smoke/60">Log in to your workspace.</p>
        </div>
        <form className="mt-8 space-y-3">
          <input className={inp} placeholder="Email" type="email" />
          <input className={inp} placeholder="Password" type="password" />
          <GradientButton type="button" size="lg" className="w-full">Log in</GradientButton>
        </form>
        <p className="mt-6 text-center text-sm text-smoke/80">
          New here? <Link to="/signup" className="text-techpurple hover:underline">Create an account</Link>
        </p>
      </Container>
    </Section>
  );
}

const inp =
  "w-full rounded-xl border border-white/10 bg-charcoal/80 px-4 py-3 text-sm text-smoke placeholder:text-smoke/50 focus:border-techpurple/60 focus:outline-none";
