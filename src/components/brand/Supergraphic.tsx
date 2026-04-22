export function Supergraphic({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={"pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] " + className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="pyromi-flame" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M0 120 L60 0 L72 0 L12 120 Z" fill="white" />
          <path d="M60 120 L120 0 L132 0 L72 120 Z" fill="white" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pyromi-flame)" />
    </svg>
  );
}
