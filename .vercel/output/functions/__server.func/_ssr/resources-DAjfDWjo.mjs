import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
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
import "../_libs/lucide-react.mjs";
const examples = Array.from({
  length: 9
}).map((_, i) => ({
  id: i,
  tag: ["Podcast", "Stream", "Webinar"][i % 3],
  title: ["The 1 reframe that 10×'d output", "Clutch moment, perfectly cut", "AI workflow most teams miss"][i % 3]
}));
function ResourcesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Resources" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl font-extrabold text-smoke sm:text-6xl", children: [
        "See what Pyromi ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "actually ships." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-smoke/65", children: "Real outputs from podcasts, streams, and webinars. Steal the format." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: examples.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border overflow-hidden rounded-2xl bg-charcoal/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[9/16] bg-pyromi-soft" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-techpurple", children: e.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display font-bold text-smoke", children: e.title })
        ] })
      ] }, e.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Try with my video" }) }) })
    ] }) })
  ] });
}
export {
  ResourcesPage as component
};
