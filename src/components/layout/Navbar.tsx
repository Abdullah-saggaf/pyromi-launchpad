import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { GradientButton } from "@/components/brand/GradientButton";
import { Container } from "@/components/brand/Container";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/solutions", label: "Solutions" },
  { to: "/solutions/enterprise", label: "Enterprise" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-obsidian/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo className="h-7" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-smoke/70 transition-colors hover:text-smoke"
              activeProps={{ className: "text-smoke" }}
              activeOptions={item.to === "/" ? { exact: true } : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/login" className="text-sm text-smoke/80 hover:text-smoke">
            Login
          </Link>
          <GradientButton asChild size="sm">
            <Link to="/signup">Try Pyromi Now</Link>
          </GradientButton>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-smoke"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-obsidian/95 backdrop-blur-xl">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-smoke/80 hover:bg-white/5 hover:text-smoke"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm text-smoke/80 hover:bg-white/5"
            >
              Login
            </Link>
            <GradientButton asChild size="md" className="mt-2">
              <Link to="/signup" onClick={() => setOpen(false)}>
                Try Pyromi Now
              </Link>
            </GradientButton>
          </Container>
        </div>
      )}
    </header>
  );
}
