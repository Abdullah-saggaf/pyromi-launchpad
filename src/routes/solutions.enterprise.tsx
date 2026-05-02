import { createFileRoute } from "@tanstack/react-router";
import { SegmentLayout } from "@/components/sections/SegmentLayout";
import { EnterpriseDashboard } from "@/components/sections/EnterpriseDashboard";
import { FinalCta } from "@/components/sections/FinalCta";

export const Route = createFileRoute("/solutions/enterprise")({
  head: () => ({
    meta: [
      { title: "Pyromi for Enterprise — Scalable content ops with admin visibility" },
      { name: "description", content: "Consistent output across teams, centralized review and measurable ROI for company content operations." },
      { property: "og:title", content: "Pyromi for Enterprise" },
      { property: "og:description", content: "Roles, analytics, and the workflow your content team actually wants." },
    ],
  }),
  component: () => (
    <>
      <SegmentLayout
        eyebrow="For Enterprise"
        headline={<>Scalable content ops with <span className="text-pyromi">admin visibility.</span></>}
        sub="Standardize how your teams produce video — and prove the ROI to leadership."
        stats={[
          { v: "1,200+", l: "hrs saved / quarter" },
          { v: "+220%", l: "team output" },
          { v: "24/7", l: "ops visibility" },
        ]}
        bullets={[
          { t: "Consistent output", d: "Brand-safe, on-spec, every time." },
          { t: "Centralized review", d: "Comments, approvals, audit trail." },
          { t: "Roles & permissions", d: "Editors, reviewers, admins, viewers." },
          { t: "Secure access controls", d: "Manage how users sign in and collaborate." },
          { t: "Usage analytics", d: "Output by team, member, brand." },
          { t: "Procurement-friendly", d: "Annual billing, MSA, security review." },
        ]}
        quote={{
          q: "We finally have a single, measurable content pipeline our marketing, product and exec teams all rely on.",
          n: "Pyromi customer", r: "Enterprise content lead",
        }}
      />
      <EnterpriseDashboard />
      <FinalCta />
    </>
  ),
});
