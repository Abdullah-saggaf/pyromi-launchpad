import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Section, C as Container } from "./router-BaaNoXEN.mjs";
import { h as Upload, i as Brain, j as Scissors, c as Sparkles, b as CircleCheck, S as Send, d as Captions, V as Volume2, W as WandSparkles, k as UsersRound, l as Calendar } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const steps = [
  { icon: Upload, title: "Drop your footage", sub: "Paste a link or upload" },
  { icon: Brain, title: "AI reads the footage", sub: "Moments, hooks, energy" },
  { icon: Scissors, title: "Clips generated", sub: "Best moments, framed" },
  { icon: Sparkles, title: "Polish applied", sub: "Captions, audio, brand" },
  { icon: CircleCheck, title: "Review & approve", sub: "Edits + team comments" },
  { icon: Send, title: "Publish & measure", sub: "Export and track results" }
];
function Workflow() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-charcoal/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Workflow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
        "Input → ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "Ignition" }),
        " → Output."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-smoke/60", children: "A simple, repeatable pipeline your team can trust." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-6 hidden h-px bg-pyromi opacity-40 lg:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-6", children: steps.map((s, i) => {
        const Icon = s.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.06 },
            className: "relative text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-obsidian text-techpurple shadow-[0_8px_24px_-8px_rgba(110,59,255,0.5)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[10px] font-semibold tracking-widest text-smoke/40", children: [
                "STEP ",
                i + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-sm font-bold text-smoke", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-smoke/55", children: s.sub })
            ]
          },
          s.title
        );
      }) })
    ] })
  ] }) });
}
const features = [
  { icon: Scissors, t: "Smart clip generation", d: "AI finds the moments worth posting — and frames them right." },
  { icon: Captions, t: "AI captions, 40+ languages", d: "Branded subtitle styles, frame-perfect timing." },
  { icon: Volume2, t: "Audio cleanup", d: "Remove noise, balance levels, enhance voice clarity." },
  { icon: WandSparkles, t: "Reframe & enhance", d: "Vertical, square, or wide — auto-tracked and color-graded." },
  { icon: UsersRound, t: "Team review & approvals", d: "Comments, statuses, and one-click edits in-app." },
  { icon: Calendar, t: "Bulk export & schedule", d: "Push everywhere — or schedule directly to socials." }
];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-charcoal/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
        "Built to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "support the outcome." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => {
      const Icon = f.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.05 },
          className: "gradient-border rounded-2xl bg-charcoal/80 p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-techpurple", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-base font-bold text-smoke", children: f.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-smoke/60", children: f.d })
          ]
        },
        f.t
      );
    }) })
  ] }) });
}
export {
  Features as F,
  Workflow as W
};
