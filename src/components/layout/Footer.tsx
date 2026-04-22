import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/brand/Container";
import { Send, MessageCircle, Globe, Rss } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { to: "/product", label: "Overview" },
      { to: "/pricing", label: "Pricing" },
      { to: "/resources", label: "Examples" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions/agencies", label: "For Agencies" },
      { to: "/solutions/streamers", label: "For Streamers" },
      { to: "/solutions/enterprise", label: "For Enterprise" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/resources", label: "Blog" },
      { to: "/contact", label: "Book a demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/", label: "Privacy" },
      { to: "/", label: "Terms" },
      { to: "/", label: "Security" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-obsidian">
      <div className="absolute inset-x-0 -top-px h-px bg-pyromi opacity-50" />
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo className="h-7" />
            <p className="mt-4 max-w-xs text-sm text-smoke/60">
              Tech fire for video workflows. Turn raw footage into publish-ready content at scale.
            </p>
            <div className="mt-6 flex gap-3 text-smoke/50">
              <a href="#" aria-label="X" className="hover:text-smoke"><Send size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-smoke"><MessageCircle size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-smoke"><Globe size={18} /></a>
              <a href="#" aria-label="RSS" className="hover:text-smoke"><Rss size={18} /></a>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-smoke/40">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-smoke/70 transition-colors hover:text-smoke"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-smoke/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Pyromi. All rights reserved.</p>
          <p>Made with Pyromi · Tech Fire for video teams.</p>
        </div>
      </Container>
    </footer>
  );
}
