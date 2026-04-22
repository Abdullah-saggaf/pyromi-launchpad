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
function LoginPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: "Welcome back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-smoke/60", children: "Log in to your workspace." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-8 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inp, placeholder: "Email", type: "email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inp, placeholder: "Password", type: "password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { type: "button", size: "lg", className: "w-full", children: "Log in" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-sm text-smoke/55", children: [
      "New here? ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "text-techpurple hover:underline", children: "Create an account" })
    ] })
  ] }) });
}
const inp = "w-full rounded-xl border border-white/10 bg-charcoal/80 px-4 py-3 text-sm text-smoke placeholder:text-smoke/40 focus:border-techpurple/60 focus:outline-none";
export {
  LoginPage as component
};
