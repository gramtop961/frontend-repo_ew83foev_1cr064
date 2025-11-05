import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0b0b10] antialiased">
      {/* Global top gradient accent */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent" />

      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
