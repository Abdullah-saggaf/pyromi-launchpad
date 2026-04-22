import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
import { S as Supergraphic } from "./FinalCta-CxQSAsqf.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SegmentLayout({ eyebrow, headline, sub, stats, bullets, quote }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "relative overflow-hidden pt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Supergraphic, { className: "opacity-[0.05]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl",
          style: { backgroundImage: "var(--gradient-pyromi-soft)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "relative text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mx-auto mt-3 max-w-3xl font-display text-4xl font-extrabold text-smoke sm:text-6xl", children: headline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-smoke/65", children: sub }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Try Pyromi free" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book a demo" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        className: "gradient-border rounded-2xl bg-charcoal/80 p-7 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-extrabold text-pyromi", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-smoke/60", children: s.l })
        ]
      },
      s.l
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-charcoal/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/5 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-smoke", children: b.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-smoke/60", children: b.d })
    ] }, b.t)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "gradient-border mx-auto max-w-3xl rounded-2xl bg-charcoal/80 p-8 text-center sm:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "font-display text-xl font-semibold leading-snug text-smoke sm:text-2xl", children: [
        '"',
        quote.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 text-sm text-smoke/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-smoke", children: quote.n }),
        " · ",
        quote.r
      ] })
    ] }) }) })
  ] });
}
export {
  SegmentLayout as S
};
