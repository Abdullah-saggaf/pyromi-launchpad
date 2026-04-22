import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
import { m as Shield, U as Users, n as ChartColumn, A as ArrowRight } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { R as ResponsiveContainer, A as AreaChart, X as XAxis, Y as YAxis, T as Tooltip, a as Area, P as PieChart, b as Pie, C as Cell, B as BarChart, c as Bar } from "../_libs/recharts.mjs";
const weekly = [
  { w: "W1", clips: 38 },
  { w: "W2", clips: 64 },
  { w: "W3", clips: 81 },
  { w: "W4", clips: 92 },
  { w: "W5", clips: 124 },
  { w: "W6", clips: 168 },
  { w: "W7", clips: 201 },
  { w: "W8", clips: 247 }
];
const team = [
  { n: "Maya", c: 84 },
  { n: "Theo", c: 71 },
  { n: "Sara", c: 63 },
  { n: "Leo", c: 58 },
  { n: "Iris", c: 49 },
  { n: "Kai", c: 41 }
];
const mix = [
  { name: "Podcast", value: 38, color: "#6E3BFF" },
  { name: "Stream", value: 27, color: "#FF3B2F" },
  { name: "Webinar", value: 19, color: "#FFB627" },
  { name: "Other", value: 16, color: "#1E2A78" }
];
const kpis = [
  { l: "Hours saved", v: "1,284" },
  { l: "Clips published", v: "2,491" },
  { l: "Active editors", v: "18" },
  { l: "Avg turnaround", v: "47m" }
];
function EnterpriseDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Container, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-solargold", children: "Enterprise" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
        "Built for teams that ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "ship at scale." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-smoke/65", children: "Visibility, control, and consistency for company content operations — without slowing your team down." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: [
        { icon: Shield, t: "SSO/SAML & SOC 2-ready", d: "Secure access at company scale." },
        { icon: Users, t: "Roles & permissions", d: "Editors, reviewers, admins, viewers." },
        { icon: ChartColumn, t: "Usage analytics", d: "See output by team, member and brand." }
      ].map((b) => {
        const Icon = b.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-solargold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-smoke", children: b.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-smoke/55", children: b.d })
          ] })
        ] }, b.t);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
          "Book a demo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Talk to sales" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "gradient-border relative rounded-2xl bg-charcoal/90 p-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/5 bg-obsidian/80 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between text-xs text-smoke/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pyromi · Admin overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-400", children: "Live" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4", children: kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-white/5 bg-charcoal/60 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-smoke/40", children: k.l }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-xl font-extrabold text-pyromi", children: k.v })
          ] }, k.l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 lg:grid-cols-[1.4fr_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-white/5 bg-charcoal/60 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[11px] text-smoke/50", children: "Clips published / week" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: weekly, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gpur", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#6E3BFF", stopOpacity: 0.7 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#FF3B2F", stopOpacity: 0.05 })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "w", stroke: "#666", fontSize: 10, tickLine: false, axisLine: false }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { hide: true }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#14161E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "clips", stroke: "#6E3BFF", strokeWidth: 2, fill: "url(#gpur)" })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-white/5 bg-charcoal/60 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[11px] text-smoke/50", children: "Content mix" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: mix, dataKey: "value", innerRadius: 32, outerRadius: 56, paddingAngle: 3, stroke: "none", children: mix.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: m.color }, m.name)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#14161E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 } })
              ] }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-lg border border-white/5 bg-charcoal/60 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-[11px] text-smoke/50", children: "Output by member" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: team, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "n", stroke: "#666", fontSize: 10, tickLine: false, axisLine: false }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { hide: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: { background: "#14161E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "c", fill: "#FFB627", radius: [4, 4, 0, 0] })
            ] }) }) })
          ] })
        ] })
      }
    )
  ] }) }) });
}
export {
  EnterpriseDashboard as E
};
