/**
 * Ambient animated backdrop — replaces the old diagonal-stripe pattern.
 * Renders a few softly drifting ember orbs in the brand palette.
 * Pointer-events disabled, sits behind content (parent should be `relative`).
 */
export function Supergraphic({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={
        "pointer-events-none absolute inset-0 overflow-hidden " + className
      }
    >
      <span className="ember ember-a" />
      <span className="ember ember-b" />
      <span className="ember ember-c" />
      <span className="ember ember-d" />
      <span className="ember ember-e" />
    </div>
  );
}
