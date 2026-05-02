/**
 * Supergraphic — ambient ember-orb backdrop.
 * Replaces the old diagonal stripes with screen-blended floating embers.
 */
export function Supergraphic({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={"pointer-events-none absolute inset-0 overflow-hidden " + className}
    >
      <span className="ember ember-a" />
      <span className="ember ember-b" />
      <span className="ember ember-c" />
      <span className="ember ember-d" />
      <span className="ember ember-e" />
    </div>
  );
}
