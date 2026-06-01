import { useState } from 'react';
import Navegacion from './components/Navegacion.tsx';
import Inicio from './components/Inicio.tsx';
import Experiencia from './components/Experiencia.tsx';
import Tecnologias from './components/Tecnologias.tsx';
import Proyectos from './components/Proyectos.tsx';
import Formacion from './components/Formacion.tsx';
import Contacto from './components/Contacto.tsx';
import PiePagina from './components/PiePagina.tsx';
import ModalCurriculum from './components/ModalCurriculum.tsx';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-600/30 selection:text-white print:bg-white print:text-slate-800">
      
      {/* Background visual glow accents */}
      <div className="absolute top-0 inset-x-0 h-[800px] pointer-events-none z-0 overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,64,175,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.08)_1px,transparent_0)] bg-[size:28px_28px] opacity-40" />
      </div>

      {/* Floating navigation header */}
      <Navegacion onOpenCV={() => setIsCVOpen(true)} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-20 space-y-24 relative z-10 print:p-0 print:m-0 print:max-w-none">
        <Inicio onOpenCV={() => setIsCVOpen(true)} />

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        <Experiencia />

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        <Proyectos />

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        <Tecnologias />

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        <Formacion />

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800/60 to-transparent print:hidden" />

        <Contacto onOpenCV={() => setIsCVOpen(true)} />

      </main>

      {/* Web Footer */}
      <PiePagina />

      {/* Professional print-ready CV creator Modal overlay */}
      <ModalCurriculum isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />

    </div>
  );
}
