import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { z as zodValidator, f as fallback } from "../_libs/tanstack__zod-adapter.mjs";
import { X, M as Menu, S as Send, a as MessageCircle, G as Globe, R as Rss } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType, e as enumType } from "../_libs/zod.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
const logoWhite = "data:image/svg+xml,%3csvg%20width='3000'%20height='3000'%20viewBox='0%200%203000%203000'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M745%201193.3L1417.73%201829.77L1421.76%203000L745%202347.41V1193.3Z'%20fill='white'/%3e%3cpath%20d='M1421.76%203000L745%202347.41V1193.3L984.277%201419.86C984.277%201419.86%20831.85%201801.38%201078.38%202258.65C1324.91%202715.92%201421.76%203000%201421.76%203000Z'%20fill='%23F1F1F1'/%3e%3cpath%20d='M2255.81%201003.69L1583.08%201640.17L1579.06%202810.39L2255.81%202157.81V1003.69Z'%20fill='white'/%3e%3cpath%20d='M1579.06%202810.4L2255.81%202157.81V1003.7L1883.47%201356.86C1883.47%201356.86%202051.64%201670.61%202006.82%202043.63C1962%202416.64%201579.06%202810.4%201579.06%202810.4Z'%20fill='%23F1F1F1'/%3e%3cpath%20d='M1125.65%200L1824.56%20652.587V1120.77L1405.5%201532.42L1121.62%201256.83L1125.65%200Z'%20fill='%23F1F1F1'/%3e%3cpath%20d='M1121.62%201256.83L1125.65%200C1170.06%20451.73%201349.14%20649.131%201606.79%20946.8C1689.93%201042.85%201737.89%201122.09%201765.24%201178.29C1765.22%201178.24%201525.46%201414.41%201405.59%201532.5L1121.62%201256.83Z'%20fill='white'/%3e%3c/svg%3e";
function Logo({ className = "h-8 w-auto" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 " + className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoWhite, alt: "Pyromi", className: "h-full w-auto" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-extrabold tracking-tight text-smoke", children: "Pyromi" })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-techpurple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "relative text-white bg-pyromi shadow-[0_10px_30px_-10px_rgba(110,59,255,0.6)] hover:shadow-[0_20px_50px_-10px_rgba(255,59,47,0.5)] hover:-translate-y-0.5",
        secondary: "bg-smoke text-obsidian hover:bg-white",
        ghost: "text-smoke border border-white/15 hover:border-white/40 hover:bg-white/5",
        link: "text-smoke underline-offset-4 hover:text-white hover:underline px-0"
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-7 text-base py-3.5"
      }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
);
const GradientButton = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        ref,
        className: cn(buttonVariants({ variant, size }), className),
        ...props
      }
    );
  }
);
GradientButton.displayName = "GradientButton";
function Container({
  children,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8", className), children });
}
function Section({
  children,
  className,
  id
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id,
      className: cn("relative py-16 sm:py-20 lg:py-28", className),
      children
    }
  );
}
const nav = [
  { to: "/product", label: "Product" },
  { to: "/solutions/agencies", label: "Solutions" },
  { to: "/solutions/enterprise", label: "Enterprise" },
  { to: "/pricing", label: "Pricing" },
  { to: "/resources", label: "Resources" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "border-b border-white/5 bg-obsidian/80 backdrop-blur-xl" : "bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "flex h-16 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-7" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 lg:flex", children: nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              className: "text-sm text-smoke/70 transition-colors hover:text-smoke",
              activeProps: { className: "text-smoke" },
              children: item.label
            },
            item.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-3 lg:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-sm text-smoke/80 hover:text-smoke", children: "Login" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Try Pyromi →" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Toggle menu",
              className: "lg:hidden text-smoke",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-white/5 bg-obsidian/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "flex flex-col gap-1 py-4", children: [
          nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: item.to,
              onClick: () => setOpen(false),
              className: "rounded-lg px-3 py-2 text-sm text-smoke/80 hover:bg-white/5 hover:text-smoke",
              children: item.label
            },
            item.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/login",
              onClick: () => setOpen(false),
              className: "rounded-lg px-3 py-2 text-sm text-smoke/80 hover:bg-white/5",
              children: "Login"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GradientButton, { asChild: true, size: "md", className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", onClick: () => setOpen(false), children: "Try Pyromi →" }) })
        ] }) })
      ]
    }
  );
}
const cols = [
  {
    title: "Product",
    links: [
      { to: "/product", label: "Overview" },
      { to: "/pricing", label: "Pricing" },
      { to: "/resources", label: "Examples" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions/agencies", label: "For Agencies" },
      { to: "/solutions/streamers", label: "For Streamers" },
      { to: "/solutions/enterprise", label: "For Enterprise" }
    ]
  },
  {
    title: "Company",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/resources", label: "Blog" },
      { to: "/contact", label: "Book a demo" }
    ]
  },
  {
    title: "Legal",
    links: [
      { to: "/", label: "Privacy" },
      { to: "/", label: "Terms" },
      { to: "/", label: "Security" }
    ]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-20 border-t border-white/5 bg-obsidian", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 -top-px h-px bg-pyromi opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Container, { className: "py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "h-7" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-smoke/60", children: "Tech fire for video workflows. Turn raw footage into publish-ready content at scale." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3 text-smoke/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "X", className: "hover:text-smoke", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "hover:text-smoke", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "YouTube", className: "hover:text-smoke", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 18 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "RSS", className: "hover:text-smoke", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Rss, { size: 18 }) })
          ] })
        ] }),
        cols.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-4 text-xs font-semibold uppercase tracking-widest text-smoke/40", children: col.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: col.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: "text-sm text-smoke/70 transition-colors hover:text-smoke",
              children: l.label
            }
          ) }, l.label)) })
        ] }, col.title))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-smoke/40 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Pyromi. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Made with Pyromi · Tech Fire for video teams." })
      ] })
    ] })
  ] });
}
const appCss = "/assets/styles-DbntPjmq.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-obsidian px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl font-extrabold text-pyromi", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-xl font-semibold text-smoke", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-smoke/60", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-full bg-pyromi px-5 py-2.5 text-sm font-medium text-white",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$b = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pyromi — Turn hours of footage into publish-ready clips in minutes" },
      {
        name: "description",
        content: "Pyromi is the workflow multiplier for high-volume video teams. Turn raw footage into more clips, faster, with consistent quality."
      },
      { name: "author", content: "Pyromi" },
      { property: "og:title", content: "Pyromi — Turn hours of footage into publish-ready clips in minutes" },
      {
        property: "og:description",
        content: "Turn a 3-hour video into 20 publish-ready clips. Built for agencies, streamers, and enterprise teams."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Pyromi" },
      { name: "twitter:title", content: "Pyromi — Turn hours of footage into publish-ready clips in minutes" },
      { name: "description", content: "Pyromi is an AI-powered workflow multiplier for high-volume video teams, creators, and companies." },
      { property: "og:description", content: "Pyromi is an AI-powered workflow multiplier for high-volume video teams, creators, and companies." },
      { name: "twitter:description", content: "Pyromi is an AI-powered workflow multiplier for high-volume video teams, creators, and companies." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51157685-3207-4fdb-a781-9b23d6e2af5d/id-preview-d0e52b0e--ff1a56d6-667a-4093-abca-e33ae64e3046.lovable.app-1776885000489.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51157685-3207-4fdb-a781-9b23d6e2af5d/id-preview-d0e52b0e--ff1a56d6-667a-4093-abca-e33ae64e3046.lovable.app-1776885000489.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "bg-obsidian text-smoke", children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col bg-obsidian", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const $$splitComponentImporter$a = () => import("./solutions-BFsOu0JM.mjs");
const Route$a = createFileRoute("/solutions")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./signup-LxyC42wr.mjs");
const search = objectType({
  link: fallback(stringType(), "").default("")
});
const Route$9 = createFileRoute("/signup")({
  validateSearch: zodValidator(search),
  head: () => ({
    meta: [{
      title: "Start free — Pyromi"
    }, {
      name: "description",
      content: "Create your free Pyromi account and process your first video in minutes."
    }, {
      property: "og:title",
      content: "Start free — Pyromi"
    }, {
      property: "og:description",
      content: "Create a free account and turn your first video into clips."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./resources-DAjfDWjo.mjs");
const Route$8 = createFileRoute("/resources")({
  head: () => ({
    meta: [{
      title: "Resources — Pyromi"
    }, {
      name: "description",
      content: "Sample outputs, guides and inspiration from teams shipping video with Pyromi."
    }, {
      property: "og:title",
      content: "Resources — Pyromi"
    }, {
      property: "og:description",
      content: "See real outputs and learn how teams scale video with Pyromi."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./product-PhOSaJe6.mjs");
const Route$7 = createFileRoute("/product")({
  head: () => ({
    meta: [{
      title: "Product — Pyromi"
    }, {
      name: "description",
      content: "Explore the complete Pyromi product: AI clip generation, captions, audio cleanup, reframing, team workflow, and admin analytics."
    }, {
      property: "og:title",
      content: "Product — Pyromi"
    }, {
      property: "og:description",
      content: "Every feature, the full workflow, and the admin layer for teams shipping video at scale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./pricing-j9VBfW4J.mjs");
const Route$6 = createFileRoute("/pricing")({
  head: () => ({
    meta: [{
      title: "Pricing — Pyromi"
    }, {
      name: "description",
      content: "Simple plans for creators, studios, and enterprise teams. Start free, scale as you ship more."
    }, {
      property: "og:title",
      content: "Pricing — Pyromi"
    }, {
      property: "og:description",
      content: "Three plans built around output, not seat count."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./login-BX8nq0m8.mjs");
const Route$5 = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Login — Pyromi"
    }, {
      name: "description",
      content: "Log in to your Pyromi workspace."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-HKboO0wG.mjs");
const Route$4 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact & Demo — Pyromi"
    }, {
      name: "description",
      content: "Book a demo or talk to the Pyromi team about scaling your video workflow."
    }, {
      property: "og:title",
      content: "Contact Pyromi"
    }, {
      property: "og:description",
      content: "Book a demo with the Pyromi team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
objectType({
  name: stringType().trim().min(2, "Required").max(100),
  email: stringType().trim().email("Valid email required").max(255),
  company: stringType().trim().min(1, "Required").max(120),
  teamSize: enumType(["1-5", "6-20", "21-100", "100+"]),
  useCase: stringType().trim().min(10, "Tell us a bit more").max(800),
  videoLink: stringType().trim().url("Valid URL").max(500).optional().or(literalType(""))
});
const $$splitComponentImporter$3 = () => import("./index-C4TEkVf0.mjs");
const Route$3 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Pyromi — Turn a 3-hour video into 20 publish-ready clips"
    }, {
      name: "description",
      content: "The workflow multiplier for high-volume video teams. Turn raw footage into more content — faster, more consistently, without scaling edit hours."
    }, {
      property: "og:title",
      content: "Pyromi — Turn a 3-hour video into 20 publish-ready clips"
    }, {
      property: "og:description",
      content: "Built for agencies, streamers, and enterprise teams shipping video at scale."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./solutions.streamers-YBhLAoIG.mjs");
const Route$2 = createFileRoute("/solutions/streamers")({
  head: () => ({
    meta: [{
      title: "Pyromi for Streamers — Turn one stream into a week of clips"
    }, {
      name: "description",
      content: "Post daily without an editor. Grow on every platform. Keep the energy of the live moment."
    }, {
      property: "og:title",
      content: "Pyromi for Streamers"
    }, {
      property: "og:description",
      content: "Grow on every platform without hiring an editor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./solutions.enterprise-BFqtJWMJ.mjs");
const Route$1 = createFileRoute("/solutions/enterprise")({
  head: () => ({
    meta: [{
      title: "Pyromi for Enterprise — Scalable content ops with admin visibility"
    }, {
      name: "description",
      content: "Consistent output across teams, centralized review and measurable ROI for company content operations."
    }, {
      property: "og:title",
      content: "Pyromi for Enterprise"
    }, {
      property: "og:description",
      content: "SSO, roles, analytics, and the workflow your content team actually wants."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./solutions.agencies-D1vHDRmX.mjs");
const Route = createFileRoute("/solutions/agencies")({
  head: () => ({
    meta: [{
      title: "Pyromi for Agencies — More deliverables, less manual edit time"
    }, {
      name: "description",
      content: "Faster turnaround, higher margin per project, stronger client retention. Pyromi multiplies output for video agencies."
    }, {
      property: "og:title",
      content: "Pyromi for Agencies"
    }, {
      property: "og:description",
      content: "Multiply deliverables per client without growing your edit team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SolutionsRoute = Route$a.update({
  id: "/solutions",
  path: "/solutions",
  getParentRoute: () => Route$b
});
const SignupRoute = Route$9.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$b
});
const ResourcesRoute = Route$8.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$b
});
const ProductRoute = Route$7.update({
  id: "/product",
  path: "/product",
  getParentRoute: () => Route$b
});
const PricingRoute = Route$6.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$b
});
const LoginRoute = Route$5.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const SolutionsStreamersRoute = Route$2.update({
  id: "/streamers",
  path: "/streamers",
  getParentRoute: () => SolutionsRoute
});
const SolutionsEnterpriseRoute = Route$1.update({
  id: "/enterprise",
  path: "/enterprise",
  getParentRoute: () => SolutionsRoute
});
const SolutionsAgenciesRoute = Route.update({
  id: "/agencies",
  path: "/agencies",
  getParentRoute: () => SolutionsRoute
});
const SolutionsRouteChildren = {
  SolutionsAgenciesRoute,
  SolutionsEnterpriseRoute,
  SolutionsStreamersRoute
};
const SolutionsRouteWithChildren = SolutionsRoute._addFileChildren(
  SolutionsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  ContactRoute,
  LoginRoute,
  PricingRoute,
  ProductRoute,
  ResourcesRoute,
  SignupRoute,
  SolutionsRoute: SolutionsRouteWithChildren
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Container as C,
  GradientButton as G,
  Route$9 as R,
  Section as S,
  router as r
};
