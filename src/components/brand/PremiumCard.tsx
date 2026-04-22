import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PremiumCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "gradient-border relative overflow-hidden rounded-2xl bg-charcoal/80 p-6 transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
