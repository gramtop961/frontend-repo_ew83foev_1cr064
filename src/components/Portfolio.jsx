import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Checkout App (AI + UX Case Study)',
    desc: 'Simplified the self-checkout process with AI-driven insights — reduced wait time by 40%.',
  },
  {
    title: 'B2B SaaS Dashboard Redesign',
    desc: 'Enhanced usability and visual clarity for enterprise users — increased task efficiency by 28%.',
  },
  {
    title: 'Creative Brand System',
    desc: 'Developed modular visual identity system adaptable to multiple digital platforms.',
  },
];

const Tile = ({ title, desc }) => (
  <div className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 text-white transition hover:border-white/20 hover:bg-white/[0.08]">
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
    <div className="mt-4 flex items-center gap-2 text-cyan-300">
      <span className="text-sm">View Case</span>
      <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative bg-[#0b0b10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-['Space_Grotesk',ui-sans-serif] text-3xl font-semibold text-white sm:text-4xl">
              Selected Works
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">
              A curated collection of digital products and experiences I’ve designed — combining visual storytelling, UX strategy, and creative experimentation.
            </p>
          </div>
          <a
            href="#portfolio"
            className="hidden items-center gap-2 rounded-lg border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 md:flex"
          >
            Explore All Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Tile key={p.title} title={p.title} desc={p.desc} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <a
            href="#portfolio"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/60 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-300"
          >
            Explore All Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
