/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import TechStack from './components/TechStack.tsx';
import Projects from './components/Projects.tsx';
import Formation from './components/Formation.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ResumeModal from './components/ResumeModal.tsx';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none antialiased selection:bg-blue-600/30 selection:text-white print:bg-white print:text-slate-800">
      
      {/* Background visual glow accents */}
      <div className="absolute top-0 inset-x-0 h-[800px] pointer-events-none z-0 overflow-hidden print:hidden">
        <div className="absolute top-[-100px] left-[50%] -translate-x-[50%] w-[1000px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-44 left-[15%] w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-96 right-[15%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating navigation header */}
      <Header onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Single-Screen Grid Stack */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-20 space-y-28 relative z-10 print:p-0 print:m-0 print:max-w-none">
        
        {/* Hero Section */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        {/* Sobre mí & Contribución Section */}
        <About />

        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        {/* Experiencia Section (Practices) */}
        <Experience />

        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        {/* Tech Stack Category Hub */}
        <TechStack />

        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        {/* Core Projects (Pokémon World Map emphasis) */}
        <Projects />

        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        {/* Academics Formation (DAW emphasis) */}
        <Formation />

        {/* Divider line */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        {/* Quick Contact & Calls */}
        <Contact />

      </main>

      {/* Web Footer */}
      <Footer />

      {/* Professional print-ready CV creator Modal overlay */}
      <ResumeModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

    </div>
  );
}
