import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-pyromi">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold text-smoke">Page not found</h2>
        <p className="mt-2 text-sm text-smoke/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-pyromi px-5 py-2.5 text-sm font-medium text-white"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pyromi — Half AI. Half you. All editable." },
      {
        name: "description",
        content:
          "Pyromi is the AI video editor that builds edits directly on your timeline. Search 100 hours of footage in seconds, describe what you want, and keep every cut, caption, and transition fully editable.",
      },
      { name: "author", content: "Pyromi" },
      { property: "og:title", content: "Pyromi — Half AI. Half you. All editable." },
      {
        property: "og:description",
        content:
          "Pyromi is the AI video editor that builds edits directly on your timeline. Search 100 hours of footage in seconds, describe what you want, and keep every cut, caption, and transition fully editable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Pyromi" },
      { name: "twitter:title", content: "Pyromi — Half AI. Half you. All editable." },
      {
        name: "twitter:description",
        content:
          "Pyromi is the AI video editor that builds edits directly on your timeline. Search 100 hours of footage in seconds, describe what you want, and keep every cut, caption, and transition fully editable.",
      },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51157685-3207-4fdb-a781-9b23d6e2af5d/id-preview-d0e52b0e--ff1a56d6-667a-4093-abca-e33ae64e3046.lovable.app-1776885000489.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51157685-3207-4fdb-a781-9b23d6e2af5d/id-preview-d0e52b0e--ff1a56d6-667a-4093-abca-e33ae64e3046.lovable.app-1776885000489.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="text-smoke">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
