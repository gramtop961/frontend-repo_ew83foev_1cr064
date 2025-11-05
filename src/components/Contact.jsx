import React from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#0b0b10] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/3 h-72 w-72 -translate-x-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-['Space_Grotesk',ui-sans-serif] text-3xl font-semibold text-white sm:text-4xl">
          Let’s Build the Future of Design.
        </h2>
        <p className="mt-3 text-white/70">
          Whether you’re building a new product, refining an existing experience, or exploring AI-driven creativity — I’d love to collaborate.
          Let’s create something that blends logic, art, and innovation.
        </p>

        <form className="mt-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="group relative block">
              <span className="mb-1 block text-sm text-white/70">Name</span>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-cyan-300/60">
                <User className="h-4 w-4 text-white/60" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none"
                />
              </div>
            </label>
            <label className="group relative block">
              <span className="mb-1 block text-sm text-white/70">Email</span>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-cyan-300/60">
                <Mail className="h-4 w-4 text-white/60" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none"
                />
              </div>
            </label>
          </div>

          <label className="group relative block">
            <span className="mb-1 block text-sm text-white/70">Message</span>
            <div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:border-cyan-300/60">
              <MessageSquare className="mt-2 h-4 w-4 text-white/60" />
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me a bit about your project..."
                className="w-full resize-none bg-transparent text-sm text-white placeholder-white/40 outline-none"
              />
            </div>
          </label>

          <button
            type="submit"
            className="group relative inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/60 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] transition hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]"
          >
            Send Message
            <Mail className="h-4 w-4" />
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-cyan-300/40" />
          </button>
        </form>

        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © 2025 Pandian P. | Designed with AI & Coffee ☕
        </p>
      </div>
    </section>
  );
};

export default Contact;
