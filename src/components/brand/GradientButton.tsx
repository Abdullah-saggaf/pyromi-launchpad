import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-techpurple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "relative text-white bg-pyromi shadow-[0_10px_30px_-10px_rgba(110,59,255,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(255,59,47,0.5)] hover:-translate-y-0.5",
        secondary:
          "bg-smoke text-obsidian hover:bg-white",
        ghost:
          "text-smoke border border-white/15 hover:border-white/40 hover:bg-white/5",
        link: "text-smoke underline-offset-4 hover:text-white hover:underline px-0",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-7 text-base py-3.5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
GradientButton.displayName = "GradientButton";

export { buttonVariants };
