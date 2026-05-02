import { Container } from "@/components/brand/Container";

const stats = [
  { v: "Search footage fast", l: "Find moments with plain language." },
  { v: "Build edits with AI", l: "Generate a real timeline, not a locked render." },
  { v: "Keep full control", l: "Adjust every AI cut, caption, and transition." },
];

export function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-charcoal/30 py-10">
      <Container>
        <p className="text-center text-xs uppercase tracking-[0.18em] text-smoke/75">
          Built for creators, streamers, and video teams
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-lg font-extrabold text-pyromi">{s.v}</div>
              <div className="mt-1 text-xs text-smoke/75">{s.l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
