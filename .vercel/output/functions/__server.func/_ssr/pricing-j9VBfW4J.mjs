import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
import { F as FinalCta } from "./FinalCta-CxQSAsqf.mjs";
import { C as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
const tiers = [{
  n: "Starter",
  p: "$0",
  per: "/mo",
  desc: "For solo creators testing Pyromi.",
  cta: "Start free",
  features: ["3 videos / month", "Up to 30 min per video", "Auto-captions (10 languages)", "9:16 / 1:1 / 16:9 export"]
}, {
  n: "Studio",
  p: "$49",
  per: "/mo per editor",
  featured: true,
  desc: "For agencies and high-volume creators.",
  cta: "Start Studio",
  features: ["Unlimited videos", "Up to 4h per video", "Captions (40+ languages)", "Brand kits & presets", "Team review & approvals", "Bulk export & scheduling"]
}, {
  n: "Enterprise",
  p: "Custom",
  per: "",
  desc: "For company content operations.",
  cta: "Talk to sales",
  features: ["Everything in Studio", "SSO/SAML", "Roles & permissions", "Usage analytics", "Dedicated success manager", "Custom MSA & DPA"]
}];
const faqs = [{
  q: "Do you offer annual billing?",
  a: "Yes — Studio is 20% off annually. Enterprise is annual or multi-year."
}, {
  q: "What counts as a 'video'?",
  a: "A single source upload. You can generate dozens of clips from one source."
}, {
  q: "Can I bring my brand kit?",
  a: "Yes, on Studio and Enterprise. Caption styles, colors, fonts, logos."
}, {
  q: "Is my footage private?",
  a: "Yes. Footage stays in your workspace. Enterprise offers SSO and SOC 2 controls."
}];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl font-extrabold text-smoke sm:text-6xl", children: [
        "Built around ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "output, not seats." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-smoke/65", children: "Start free. Upgrade when you're shipping more." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:grid-cols-3", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border relative flex flex-col rounded-2xl bg-charcoal/80 p-7 " + (t.featured ? "lg:-translate-y-3 lg:shadow-[0_30px_80px_-30px_rgba(110,59,255,0.6)]" : ""), children: [
      t.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-pyromi px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white", children: "Most popular" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-smoke", children: t.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-smoke/55", children: t.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-extrabold text-smoke", children: t.p }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-smoke/50", children: t.per })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, variant: t.featured ? "primary" : "ghost", className: "mt-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: t.n === "Enterprise" ? "/contact" : "/signup", children: t.cta }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 border-t border-white/5 pt-6", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-smoke/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, className: "mt-1 text-techpurple flex-shrink-0" }),
        f
      ] }, f)) })
    ] }, t.n)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-charcoal/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-display text-3xl font-extrabold text-smoke sm:text-4xl", children: "Frequently asked" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 divide-y divide-white/5 rounded-2xl border border-white/5", children: faqs.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between text-smoke", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-techpurple transition group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-smoke/65", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCta, {})
  ] });
}
export {
  PricingPage as component
};
