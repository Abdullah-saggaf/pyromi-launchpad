import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";

const quotes = [
  {
    q: "We turned a single 2-hour podcast into 14 ready-to-post clips before lunch. It used to take us a week.",
    n: "Maya Okafor", r: "Head of Content, Northwave Studios",
  },
  {
    q: "Our editors stopped doing the boring 80% and finally focus on the creative parts. Output tripled.",
    n: "Theo Lindqvist", r: "Founder, Atlas Agency",
  },
  {
    q: "I stream 4 nights a week. Pyromi turns each one into a full week of vertical clips. No editor needed.",
    n: "Sara Voss", r: "Streamer, 480k followers",
  },
];

export function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-techpurple">Proof</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
            Teams that ship more, <span className="text-pyromi">say it best.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="gradient-border flex flex-col rounded-2xl bg-charcoal/80 p-6"
            >
              <div className="flex gap-0.5 text-solargold">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="mt-4 flex-1 text-smoke/85">"{q.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-9 w-9 rounded-full bg-pyromi" />
                <div>
                  <div className="text-sm font-semibold text-smoke">{q.n}</div>
                  <div className="text-xs text-smoke/50">{q.r}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
