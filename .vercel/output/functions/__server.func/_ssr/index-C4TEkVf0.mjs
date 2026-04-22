import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as Section, C as Container, G as GradientButton } from "./router-BaaNoXEN.mjs";
import { F as FinalCta, S as Supergraphic } from "./FinalCta-CxQSAsqf.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { W as Workflow, F as Features } from "./Features-B2iRXrcI.mjs";
import { E as EnterpriseDashboard } from "./EnterpriseDashboard-C2MWrojV.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { c as Sparkles, A as ArrowRight, P as Play, W as WandSparkles, d as Captions, L as LayoutGrid, B as Briefcase, T as Tv, e as Building2, Z as Zap, f as Palette, U as Users, g as Star } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/recharts.mjs";
import "../_libs/es-toolkit.mjs";
import "../_libs/reselect.mjs";
import "../_libs/react-is.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/reduxjs__toolkit.mjs";
import "../_libs/redux.mjs";
import "../_libs/immer.mjs";
import "../_libs/redux-thunk.mjs";
import "../_libs/react-redux.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const audiences = [
  { id: "agencies", label: "For Agencies", helper: "Turn client footage into more deliverables." },
  { id: "streamers", label: "For Streamers", helper: "Turn one stream into a week of clips." },
  { id: "teams", label: "For Teams", helper: "Create more content with consistent output." }
];
function Hero() {
  const [link, setLink] = reactExports.useState("");
  const [audience, setAudience] = reactExports.useState("agencies");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    navigate({ to: "/signup", search: { link } });
  };
  const helper = audiences.find((a) => a.id === audience).helper;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "relative overflow-hidden pt-10 sm:pt-14 lg:pt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-60 blur-3xl",
        style: { backgroundImage: "var(--gradient-pyromi-soft)" },
        animate: { opacity: [0.45, 0.7, 0.45] },
        transition: { duration: 8, repeat: Infinity }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Supergraphic, { className: "opacity-[0.05]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mx-auto max-w-3xl text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-smoke/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12, className: "text-solargold" }),
              "Workflow multiplier for video teams"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-[40px] font-extrabold leading-[1.05] text-smoke sm:text-6xl lg:text-7xl", children: [
              "Turn a 3-hour video into",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "20 publish-ready clips." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-smoke/70 sm:text-lg", children: "Pyromi helps agencies, streamers, and teams turn high-volume raw footage into more content — faster, more consistently, without scaling edit hours." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          onSubmit: submit,
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.15 },
          className: "mx-auto mt-10 max-w-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-border glass relative flex flex-col gap-3 rounded-2xl bg-charcoal/80 p-3 sm:flex-row sm:items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "url",
                  value: link,
                  onChange: (e) => setLink(e.target.value.slice(0, 500)),
                  placeholder: "Paste a YouTube, Twitch, Vimeo, or Drive link",
                  className: "min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-smoke placeholder:text-smoke/40 focus:outline-none",
                  "aria-label": "Video link"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(GradientButton, { type: "submit", size: "md", className: "shrink-0", children: [
                "Try with my video ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-smoke/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/resources", className: "inline-flex items-center gap-1 hover:text-smoke", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 12 }),
                " See sample outputs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Free account required — your link is saved." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-2", children: audiences.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setAudience(a.id),
                className: "rounded-full border px-3.5 py-1.5 text-xs transition-all " + (audience === a.id ? "border-transparent bg-pyromi text-white" : "border-white/10 text-smoke/70 hover:border-white/30"),
                children: a.label
              },
              a.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-smoke/50", children: helper })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.3 },
          className: "relative mx-auto mt-16 max-w-5xl",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gradient-border relative overflow-hidden rounded-2xl bg-charcoal/90 p-3 shadow-[0_40px_120px_-40px_rgba(110,59,255,0.6)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-white/5 bg-obsidian/80 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-sparkred/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-solargold/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/80" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-[11px] text-smoke/40", children: "pyromi.app · session-247.mp4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 lg:grid-cols-[1.5fr_1fr]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-white/5 bg-charcoal/60 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[11px] text-smoke/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { size: 12, className: "text-techpurple" }),
                    " AI moments detected"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "14 highlights" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-24 rounded-md bg-obsidian/60 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full overflow-hidden rounded", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-end gap-[2px] px-1", children: Array.from({ length: 80 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex-1 rounded-sm bg-pyromi",
                      style: { height: `${20 + Math.abs(Math.sin(i / 3)) * 70}%`, opacity: 0.5 }
                    },
                    i
                  )) }),
                  [15, 32, 48, 67].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 h-full w-[3px] bg-solargold",
                      style: { left: `${p}%` }
                    },
                    p
                  ))
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2 text-[11px] text-smoke/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Captions, { size: 12 }),
                  " Auto-captions · 40 languages",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded bg-white/5 px-2 py-0.5", children: "2:47:13" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-white/5 bg-charcoal/60 p-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-1.5 text-[11px] text-smoke/50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: 12 }),
                  " Generated clips"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "aspect-[9/16] rounded-md bg-pyromi-soft p-1.5",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-end rounded-sm bg-obsidian/40 p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[8px] text-smoke/80", children: [
                      "Clip ",
                      i + 1
                    ] }) })
                  },
                  i
                )) })
              ] })
            ] })
          ] }) })
        }
      )
    ] })
  ] });
}
const stats$1 = [
  { v: "12M+", l: "minutes processed" },
  { v: "4.2M", l: "clips generated" },
  { v: "38hrs", l: "saved / week per team" }
];
const logos = ["Northwave", "Atlas", "Verge", "Helix", "Beacon", "Mode", "Signal", "Pulse"];
function TrustStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-white/5 bg-charcoal/30 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs uppercase tracking-[0.18em] text-smoke/40", children: "Trusted by content teams shipping at scale" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 items-center gap-6 sm:grid-cols-4 md:grid-cols-8", children: logos.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "font-display text-center text-sm font-bold uppercase tracking-widest text-smoke/30 transition-colors hover:text-smoke/60",
        children: l
      },
      l
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3", children: stats$1.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold text-pyromi", children: s.v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-smoke/50", children: s.l })
    ] }, s.l)) })
  ] }) });
}
const filters = ["All", "Podcast", "Stream", "Webinar", "Interview", "Long-form"];
const clips = [
  { tag: "Podcast", source: "From a 2h47 podcast → 14 clips", title: "The 1 reframe that 10×'d output", color: "from-techpurple to-sparkred" },
  { tag: "Stream", source: "From a 6h Twitch VOD → 22 clips", title: "Clutch moment, perfectly cut", color: "from-deepblue to-techpurple" },
  { tag: "Webinar", source: "From a 90-min webinar → 9 clips", title: "The AI workflow most teams miss", color: "from-sparkred to-solargold" },
  { tag: "Interview", source: "From a 45-min interview → 7 clips", title: "Founder on shipping faster", color: "from-techpurple to-solargold" },
  { tag: "Long-form", source: "From a 3h essay → 18 clips", title: "Why volume beats polish", color: "from-deepblue to-sparkred" },
  { tag: "Podcast", source: "From a 1h53 episode → 11 clips", title: "Our biggest workflow unlock", color: "from-techpurple to-sparkred" },
  { tag: "Stream", source: "From a 4h stream → 16 clips", title: "Speedrun PB, captioned + framed", color: "from-deepblue to-techpurple" }
];
function MadeWithPyromi() {
  const [filter, setFilter] = reactExports.useState("All");
  const [emblaRef] = useEmblaCarousel({ align: "start", dragFree: true, loop: false });
  const visible = filter === "All" ? clips : clips.filter((c) => c.tag === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Made with Pyromi" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
          "Real outputs. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "Real footage." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-smoke/60", children: "See what comes out of Pyromi for podcasts, streams, webinars and more." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(f),
          className: "rounded-full border px-3 py-1.5 text-xs transition " + (filter === f ? "border-transparent bg-pyromi text-white" : "border-white/10 text-smoke/60 hover:border-white/30 hover:text-smoke"),
          children: f
        },
        f
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden", ref: emblaRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-5", children: visible.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.04 },
        className: "group relative w-[220px] shrink-0 sm:w-[260px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `gradient-border relative aspect-[9/16] overflow-hidden rounded-2xl bg-gradient-to-br ${c.color}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-obsidian/30" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-3 top-3 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-black/40 px-2 py-0.5 backdrop-blur", children: c.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "9:16" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur transition group-hover:scale-110 group-hover:bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 18, className: "ml-0.5 text-white" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-3 bottom-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-tight text-white", children: c.title }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-smoke/50", children: c.source })
        ]
      },
      c.title + i
    )) }) })
  ] }) });
}
const cards = [
  {
    icon: Briefcase,
    tint: "text-deepblue",
    glow: "from-deepblue/30",
    title: "For Agencies",
    sub: "More deliverables per client, less manual edit time.",
    bullets: ["Faster turnaround", "Higher margin per project", "Stronger client retention"],
    to: "/solutions/agencies",
    cta: "Explore for agencies"
  },
  {
    icon: Tv,
    tint: "text-techpurple",
    glow: "from-techpurple/30",
    title: "For Streamers",
    sub: "Turn one stream into a week of content.",
    bullets: ["Post daily without an editor", "Grow on every platform", "Keep the live energy"],
    to: "/solutions/streamers",
    cta: "Explore for streamers"
  },
  {
    icon: Building2,
    tint: "text-solargold",
    glow: "from-solargold/30",
    title: "For Enterprise",
    sub: "Scalable content ops with admin visibility.",
    bullets: ["Consistent output across teams", "Centralized review", "Measurable ROI"],
    to: "/solutions/enterprise",
    cta: "Explore enterprise"
  }
];
function Solutions() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Solutions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
        "One workflow. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "Three teams that ship more with it." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 lg:grid-cols-3", children: cards.map((c, i) => {
      const Icon = c.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "gradient-border group relative overflow-hidden rounded-2xl bg-charcoal/80 p-7 transition-all hover:-translate-y-1",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.glow} to-transparent opacity-50 blur-2xl` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ${c.tint}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-bold text-smoke", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-smoke/60", children: c.sub }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 border-t border-white/5 pt-5", children: c.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-smoke/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1 w-1 rounded-full bg-pyromi flex-shrink-0" }),
                b
              ] }, b)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: c.to,
                  className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-smoke transition-colors hover:text-techpurple",
                  children: [
                    c.cta,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
                  ]
                }
              )
            ] })
          ]
        },
        c.title
      );
    }) })
  ] }) });
}
const stats = [
  { v: "10×", l: "more clips per recording" },
  { v: "–82%", l: "manual edit time" },
  { v: "3.4×", l: "posting frequency" },
  { v: "0", l: "new headcount needed" }
];
const benefits = [
  { icon: Zap, t: "Faster turnaround", d: "Move from raw footage to publish in minutes — not days." },
  { icon: Palette, t: "Consistent brand output", d: "Captions, framing and styling stay on-brand at scale." },
  { icon: Users, t: "Scale without scaling the team", d: "Ship more without hiring more editors." }
];
function Outcomes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Outcomes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
        "Output you can ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "measure." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        className: "gradient-border rounded-2xl bg-charcoal/80 p-7 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-extrabold text-pyromi sm:text-6xl", children: s.v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-smoke/60", children: s.l })
        ]
      },
      s.l
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-6 sm:grid-cols-3", children: benefits.map((b) => {
      const Icon = b.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/5 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, className: "text-solargold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display font-bold text-smoke", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-smoke/60", children: b.d })
      ] }, b.t);
    }) })
  ] }) });
}
const quotes = [
  {
    q: "We turned a single 2-hour podcast into 14 ready-to-post clips before lunch. It used to take us a week.",
    n: "Maya Okafor",
    r: "Head of Content, Northwave Studios"
  },
  {
    q: "Our editors stopped doing the boring 80% and finally focus on the creative parts. Output tripled.",
    n: "Theo Lindqvist",
    r: "Founder, Atlas Agency"
  },
  {
    q: "I stream 4 nights a week. Pyromi turns each one into a full week of vertical clips. No editor needed.",
    n: "Sara Voss",
    r: "Streamer, 480k followers"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.18em] text-techpurple", children: "Proof" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl", children: [
        "Teams that ship more, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-pyromi", children: "say it best." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 lg:grid-cols-3", children: quotes.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.figure,
      {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        className: "gradient-border flex flex-col rounded-2xl bg-charcoal/80 p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-solargold", children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, fill: "currentColor" }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 flex-1 text-smoke/85", children: [
            '"',
            q.q,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-center gap-3 border-t border-white/5 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-pyromi" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-smoke", children: q.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-smoke/50", children: q.r })
            ] })
          ] })
        ]
      },
      q.n
    )) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MadeWithPyromi, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Solutions, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outcomes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseDashboard, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCta, {})
  ] });
}
export {
  Index as component
};
