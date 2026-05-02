import { Container } from "@/components/brand/Container";

const stats = [
  { v: "12M+", l: "minutes processed" },
  { v: "4.2M", l: "clips generated" },
  { v: "38hrs", l: "saved / week per team" },
];

const logos = ["Northwave", "Atlas", "Verge", "Helix", "Beacon", "Mode", "Signal", "Pulse"];

export function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-charcoal/30 py-10">
      <Container>
        <p className="text-center text-xs uppercase tracking-[0.18em] text-smoke/75">
          Trusted by content teams shipping at scale
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 md:grid-cols-8">
          {logos.map((l) => (
            <div
              key={l}
              className="font-display text-center text-sm font-bold uppercase tracking-widest text-smoke/70 transition-colors hover:text-smoke/60"
            >
              {l}
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl font-extrabold text-pyromi">{s.v}</div>
              <div className="mt-1 text-xs text-smoke/75">{s.l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
