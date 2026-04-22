import logoWhite from "@/assets/brand/logo-white.svg";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <div className={"flex items-center gap-2 " + className}>
      <img src={logoWhite} alt="Pyromi" className="h-full w-auto" />
      <span className="font-display text-xl font-extrabold tracking-tight text-smoke">
        Pyromi
      </span>
    </div>
  );
}
