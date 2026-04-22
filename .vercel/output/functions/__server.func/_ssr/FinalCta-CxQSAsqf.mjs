import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
function Supergraphic({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      "aria-hidden": true,
      className: "pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] " + className,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pattern", { id: "pyromi-flame", x: "0", y: "0", width: "120", height: "120", patternUnits: "userSpaceOnUse", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 120 L60 0 L72 0 L12 120 Z", fill: "white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M60 120 L120 0 L132 0 L72 120 Z", fill: "white" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#pyromi-flame)" })
      ]
    }
  );
}
function FinalCta() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Supergraphic, { className: "opacity-[0.07]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl",
        style: { backgroundImage: "var(--gradient-pyromi-soft)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border mx-auto max-w-4xl rounded-3xl bg-charcoal/80 p-10 text-center sm:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-extrabold leading-tight text-smoke sm:text-6xl", children: [
        "Stop editing more. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "Start shipping more." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-smoke/65", children: "Try Pyromi free — bring a real video and see your first clips in minutes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", children: [
          "Try with my video ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, size: "lg", variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book a demo" }) })
      ] })
    ] }) })
  ] });
}
export {
  FinalCta as F,
  Supergraphic as S
};
