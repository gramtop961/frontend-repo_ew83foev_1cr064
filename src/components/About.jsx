import React from 'react';
import { Brain, Layers, Rocket, Award } from 'lucide-react';

const StatCard = ({ icon: Icon, label }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white/90 transition hover:border-white/20 hover:bg-white/[0.08]">
    <div className="mb-3 flex items-center gap-3">
      <div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300 ring-1 ring-cyan-300/30">
        <Icon className="h-5 w-5" />
      </div>
      <p className="font-medium">{label}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative bg-[#0b0b10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-['Space_Grotesk',ui-sans-serif] text-3xl font-semibold text-white sm:text-4xl">
          Bridging Design, Strategy & AI
        </h2>
        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-white/75">
            <p>
              For over a decade, I’ve been crafting digital products that connect creativity and usability. My approach is simple — design should not just look good; it should <em className="text-white">work beautifully</em>.
            </p>
            <p>
              From concept to launch, I help businesses and teams translate complex ideas into clear, intuitive user experiences. Now, with AI integrated into my workflow, I’m exploring faster, smarter ways to create and solve design problems at scale.
            </p>
            <p>
              Whether it’s reimagining an app interface, improving usability, or building AI-driven design systems, I focus on designing experiences that make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard icon={Award} label="10+ Years Experience" />
            <StatCard icon={Rocket} label="100+ Projects Completed" />
            <StatCard icon={Layers} label="20+ Industries Served" />
            <StatCard icon={Brain} label="5+ AI Tools Integrated" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
