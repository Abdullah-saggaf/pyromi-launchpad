import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Demo — Pyromi" },
      { name: "description", content: "Book a demo or talk to the Pyromi team about scaling your video workflow." },
      { property: "og:title", content: "Contact Pyromi" },
      { property: "og:description", content: "Book a demo with the Pyromi team." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().min(1, "Required").max(120),
  teamSize: z.enum(["1-5", "6-20", "21-100", "100+"]),
  useCase: z.string().trim().min(10, "Tell us a bit more").max(800),
  videoLink: z.string().trim().url("Valid URL").max(500).optional().or(z.literal("")),
});
type FormData = z.infer<typeof schema>;

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { teamSize: "6-20" },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };

  return (
    <Section className="pt-16">
      <Container className="max-w-2xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-techpurple">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-smoke sm:text-5xl">
            Talk to the <span className="text-pyromi">Pyromi team.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-smoke/60">
            Book a demo, ask about Enterprise, or send us your toughest workflow problem.
          </p>
        </div>

        {sent ? (
          <div className="gradient-border mt-12 rounded-2xl bg-charcoal/80 p-10 text-center">
            <CheckCircle2 size={36} className="mx-auto text-techpurple" />
            <h2 className="mt-4 font-display text-2xl font-bold text-smoke">Message received.</h2>
            <p className="mt-2 text-smoke/60">We'll be in touch within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-4">
            <Field label="Your name" error={errors.name?.message}>
              <input {...register("name")} className={inputCls} placeholder="Jane Doe" />
            </Field>
            <Field label="Work email" error={errors.email?.message}>
              <input {...register("email")} type="email" className={inputCls} placeholder="jane@company.com" />
            </Field>
            <Field label="Company" error={errors.company?.message}>
              <input {...register("company")} className={inputCls} placeholder="Acme Studios" />
            </Field>
            <Field label="Team size" error={errors.teamSize?.message}>
              <select {...register("teamSize")} className={inputCls}>
                <option value="1-5">1–5</option>
                <option value="6-20">6–20</option>
                <option value="21-100">21–100</option>
                <option value="100+">100+</option>
              </select>
            </Field>
            <Field label="Use case" error={errors.useCase?.message}>
              <textarea {...register("useCase")} rows={4} className={inputCls} placeholder="Tell us how your team produces video today." />
            </Field>
            <Field label="Video link (optional)" error={errors.videoLink?.message}>
              <input {...register("videoLink")} className={inputCls} placeholder="https://..." />
            </Field>
            <GradientButton type="submit" size="lg" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Book a demo"}
            </GradientButton>
          </form>
        )}
      </Container>
    </Section>
  );
}

const inputCls =
  "w-full rounded-xl border border-white/10 bg-charcoal/80 px-4 py-3 text-sm text-smoke placeholder:text-smoke/40 focus:border-techpurple/60 focus:outline-none focus:ring-2 focus:ring-techpurple/30";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-smoke/50">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-sparkred">{error}</span>}
    </label>
  );
}
