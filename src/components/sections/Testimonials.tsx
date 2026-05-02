import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/brand/Container";

const audiencePreview = [
  {
    title: "For Streamers",
    body: "Turn long streams into clips without scrubbing for hours.",
  },
  {
    title: "For Editors",
    body: "Let AI handle the repetitive work while you keep creative control.",
  },
  {
    title: "For Teams",
    body: "Keep every project, asset, and edit workflow in one shared place.",
  },
];

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">Who Pyromi is for.</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {audiencePreview.map((audience) => (
              <div key={audience.title} className="gradient-border rounded-2xl bg-charcoal/80 p-6">
                <h3 className="font-display text-xl font-bold text-smoke">{audience.title}</h3>
                <p className="mt-2 text-sm text-smoke/75">{audience.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/solutions"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-smoke/80 transition hover:border-white/30 hover:text-smoke"
            >
              See solutions
            </Link>
            <Link
              to="/solutions/enterprise"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-smoke/80 transition hover:border-white/30 hover:text-smoke"
            >
              Explore Enterprise
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
