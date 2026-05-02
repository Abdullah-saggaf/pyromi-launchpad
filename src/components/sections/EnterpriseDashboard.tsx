import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis,
  Tooltip, PieChart, Pie, Cell,
} from "recharts";
import { Shield, Users, BarChart3, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/brand/Container";
import { GradientButton } from "@/components/brand/GradientButton";

const weekly = [
  { w: "W1", clips: 38 }, { w: "W2", clips: 64 }, { w: "W3", clips: 81 },
  { w: "W4", clips: 92 }, { w: "W5", clips: 124 }, { w: "W6", clips: 168 },
  { w: "W7", clips: 201 }, { w: "W8", clips: 247 },
];

const team = [
  { n: "Maya", c: 84 }, { n: "Theo", c: 71 }, { n: "Sara", c: 63 },
  { n: "Leo", c: 58 }, { n: "Iris", c: 49 }, { n: "Kai", c: 41 },
];

const mix = [
  { name: "Podcast", value: 38, color: "#6E3BFF" },
  { name: "Stream", value: 27, color: "#FF3B2F" },
  { name: "Webinar", value: 19, color: "#FFB627" },
  { name: "Other", value: 16, color: "#1E2A78" },
];

const kpis = [
  { l: "Hours saved", v: "1,284" },
  { l: "Clips published", v: "2,491" },
  { l: "Active editors", v: "18" },
  { l: "Avg turnaround", v: "47m" },
];

export function EnterpriseDashboard() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-sparkred">Enterprise</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-smoke sm:text-5xl">
              Built for teams that <span className="text-pyromi">ship at scale.</span>
            </h2>
            <p className="mt-4 max-w-md text-smoke/65">
              Visibility, control, and consistency for company content operations — without
              slowing your team down.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                { icon: Shield, t: "SSO/SAML & SOC 2-ready", d: "Secure access at company scale." },
                { icon: Users, t: "Roles & permissions", d: "Editors, reviewers, admins, viewers." },
                { icon: BarChart3, t: "Usage analytics", d: "See output by team, member and brand." },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.t} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-solargold">
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="font-medium text-smoke">{b.t}</p>
                      <p className="text-sm text-smoke/80">{b.d}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <GradientButton asChild><Link to="/contact">Book a demo <ArrowRight size={16} /></Link></GradientButton>
              <GradientButton asChild variant="ghost"><Link to="/contact">Talk to sales</Link></GradientButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gradient-border relative rounded-2xl bg-charcoal/90 p-4"
          >
            <div className="rounded-xl border border-white/5 bg-obsidian/80 p-5">
              <div className="mb-4 flex items-center justify-between text-xs text-smoke/75">
                <span>Pyromi · Admin overview</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-400">Live</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {kpis.map((k) => (
                  <div key={k.l} className="rounded-lg border border-white/5 bg-charcoal/60 p-3">
                    <div className="text-[10px] uppercase tracking-widest text-smoke/75">{k.l}</div>
                    <div className="mt-1 font-display text-xl font-extrabold text-pyromi">{k.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-3 lg:grid-cols-[1.4fr_1fr]">
                <div className="rounded-lg border border-white/5 bg-charcoal/60 p-3">
                  <div className="mb-1 text-[11px] text-smoke/75">Clips published / week</div>
                  <div className="h-36">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={weekly}>
                        <defs>
                          <linearGradient id="gpur" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6E3BFF" stopOpacity={0.7} />
                            <stop offset="100%" stopColor="#FF3B2F" stopOpacity={0.05} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="w" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis hide />
                        <Tooltip
                          cursor={{ stroke: "rgba(110,59,255,0.35)", strokeWidth: 1, fill: "rgba(110,59,255,0.08)" }}
                          contentStyle={{ background: "#14161E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
                        />
                        <Area type="monotone" dataKey="clips" stroke="#6E3BFF" strokeWidth={2} fill="url(#gpur)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="rounded-lg border border-white/5 bg-charcoal/60 p-3">
                  <div className="mb-1 text-[11px] text-smoke/75">Content mix</div>
                  <div className="h-36">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={mix} dataKey="value" innerRadius={32} outerRadius={56} paddingAngle={3} stroke="none">
                          {mix.map((m) => <Cell key={m.name} fill={m.color} />)}
                        </Pie>
                        <Tooltip
                          cursor={{ fill: "transparent" }}
                          contentStyle={{ background: "#14161E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-white/5 bg-charcoal/60 p-3">
                <div className="mb-1 text-[11px] text-smoke/75">Output by member</div>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={team}>
                      <XAxis dataKey="n" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis hide />
                        <Tooltip
                          cursor={{ fill: "rgba(110,59,255,0.10)", radius: 6 }}
                          contentStyle={{ background: "#14161E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }}
                        />
                      <Bar dataKey="c" fill="#FFB627" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
