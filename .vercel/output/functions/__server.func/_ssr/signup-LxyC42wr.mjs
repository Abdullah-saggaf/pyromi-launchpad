import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$9, S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
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
function SignupPage() {
  const {
    link
  } = Route$9.useSearch();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
        "Create your ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "Pyromi" }),
        " account"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-smoke/60", children: "Free to start — no card required." })
    ] }),
    link && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border mt-8 rounded-xl bg-charcoal/80 p-4 text-sm text-smoke/80", children: [
      "✦ We saved your video — finish signup to process it.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 truncate text-xs text-smoke/50", children: link })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inp, placeholder: "Work email", type: "email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inp, placeholder: "Password", type: "password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { type: "button", size: "lg", className: "w-full", children: "Create account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-smoke/55", children: [
      "Already have an account? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-techpurple hover:underline", children: "Log in" })
    ] })
  ] }) });
}
const inp = "w-full rounded-xl border border-white/10 bg-charcoal/80 px-4 py-3 text-sm text-smoke placeholder:text-smoke/40 focus:border-techpurple/60 focus:outline-none";
export {
  SignupPage as component
};
