import React, { useState } from "react";
import GitHubBanner from "./components/GitHubBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricsBar from "./components/MetricsBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import InteractiveWidget from "./components/InteractiveWidget";
import EducationCerts from "./components/EducationCerts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className="min-h-screen bg-[#060b14] text-slate-100 font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Banner */}
      <GitHubBanner />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <MetricsBar />
        <About />
        <Skills />
        <Projects onOpenCaseStudy={(project) => setSelectedCaseStudy(project)} />
        <InteractiveWidget />
        <EducationCerts />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep-Dive Case Study Modal Dialog */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </div>
  );
}
