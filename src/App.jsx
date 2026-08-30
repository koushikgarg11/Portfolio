import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InteractiveWidget from './components/InteractiveWidget';
import Experience from './components/Experience';
import EducationCerts from './components/EducationCerts';
import GitHubBanner from './components/GitHubBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060b14] text-white selection:bg-cyan-400/25 selection:text-cyan-200">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <MetricsBar />
        <About />
        <Skills />
        <Projects />
        <InteractiveWidget />
        <Experience />
        <EducationCerts />
        <GitHubBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
