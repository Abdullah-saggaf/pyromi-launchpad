import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { a } from "../_libs/hookform__resolvers.mjs";
import { S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
import { b as CircleCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const schema = objectType({
  name: stringType().trim().min(2, "Required").max(100),
  email: stringType().trim().email("Valid email required").max(255),
  company: stringType().trim().min(1, "Required").max(120),
  teamSize: enumType(["1-5", "6-20", "21-100", "100+"]),
  useCase: stringType().trim().min(10, "Tell us a bit more").max(800),
  videoLink: stringType().trim().url("Valid URL").max(500).optional().or(literalType(""))
});
function ContactPage() {
  const [sent, setSent] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting
    }
  } = useForm({
    resolver: a(schema),
    defaultValues: {
      teamSize: "6-20"
    }
  });
  const onSubmit = async (_data) => {
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl font-extrabold text-smoke sm:text-5xl", children: [
        "Talk to the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "Pyromi team." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-md text-smoke/60", children: "Book a demo, ask about Enterprise, or send us your toughest workflow problem." })
    ] }),
    sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border mt-12 rounded-2xl bg-charcoal/80 p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { size: 36, className: "mx-auto text-techpurple" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl font-bold text-smoke", children: "Message received." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-smoke/60", children: "We'll be in touch within one business day." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "mt-10 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your name", error: errors.name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("name"), className: inputCls, placeholder: "Jane Doe" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("email"), type: "email", className: inputCls, placeholder: "jane@company.com" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", error: errors.company?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("company"), className: inputCls, placeholder: "Acme Studios" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Team size", error: errors.teamSize?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...register("teamSize"), className: inputCls, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "1-5", children: "1–5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "6-20", children: "6–20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "21-100", children: "21–100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "100+", children: "100+" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Use case", error: errors.useCase?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ...register("useCase"), rows: 4, className: inputCls, placeholder: "Tell us how your team produces video today." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Video link (optional)", error: errors.videoLink?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...register("videoLink"), className: inputCls, placeholder: "https://..." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { type: "submit", size: "lg", disabled: isSubmitting, className: "w-full", children: isSubmitting ? "Sending..." : "Book a demo" })
    ] })
  ] }) });
}
const inputCls = "w-full rounded-xl border border-white/10 bg-charcoal/80 px-4 py-3 text-sm text-smoke placeholder:text-smoke/40 focus:border-techpurple/60 focus:outline-none focus:ring-2 focus:ring-techpurple/30";
function Field({
  label,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1.5 block text-xs font-medium uppercase tracking-widest text-smoke/50", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-sparkred", children: error })
  ] });
}
export {
  ContactPage as component
};
