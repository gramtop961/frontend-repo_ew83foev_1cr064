import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b10] text-white">
      {/* Background glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.35),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center lg:py-28">
        <div className="relative z-10">
          <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur">
            Creative Design • UI/UX • AI Integration
          </p>
          <h1 className="font-['Space_Grotesk',ui-sans-serif] text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Designing Tomorrow — Today.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            I’m Pandian — a Creative Designer & UX Problem Solver with 10+ years of experience shaping digital experiences that merge design, logic, and AI innovation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#portfolio"
              className="group relative rounded-lg border border-cyan-400/60 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-cyan-300/40" />
            </a>

            <a
              href="#contact"
              className="group rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white/30"
            >
              <span className="flex items-center gap-2">
                Let’s Connect
                <Mail className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[380px] w-full rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1 md:h-[520px]">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Soft overlay to blend with background (does not block interaction) */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0b0b10] via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
