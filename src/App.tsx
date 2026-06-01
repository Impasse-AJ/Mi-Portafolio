import { useState, useEffect } from 'react';
import Navegacion from './components/Navegacion.tsx';
import Inicio from './components/Inicio.tsx';
import Experiencia from './components/Experiencia.tsx';
import Tecnologias from './components/Tecnologias.tsx';
import Proyectos from './components/Proyectos.tsx';
import Formacion from './components/Formacion.tsx';
import Contacto from './components/Contacto.tsx';
import PiePagina from './components/PiePagina.tsx';
import ModalCurriculum from './components/ModalCurriculum.tsx';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] flex flex-col font-sans antialiased selection:bg-[#0891b2]/15 dark:selection:bg-accent-cyan/20 print:bg-white print:text-slate-800">

      {/* Ambient top glow — subtle pastel, both modes */}
      <div className="fixed top-0 inset-x-0 h-[420px] pointer-events-none z-0 overflow-hidden print:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(39,245,238,0.04)_0%,rgba(196,181,253,0.03)_40%,transparent_65%)] dark:bg-[linear-gradient(160deg,rgba(39,245,238,0.06)_0%,rgba(196,181,253,0.04)_40%,transparent_65%)]" />
      </div>

      <Navegacion
        onOpenCV={() => setIsCVOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 w-full relative z-10 print:p-0 print:m-0">

        {/* Hero */}
        <div className="pt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
            <Inicio onOpenCV={() => setIsCVOpen(true)} />
          </div>
        </div>

        {/* Experience — white / dark surface */}
        <div className="bg-white dark:bg-[#111111]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Experiencia />
          </div>
        </div>

        {/* Project */}
        <div className="bg-white dark:bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Proyectos />
          </div>
        </div>

        {/* Technologies — page bg */}
        <div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Tecnologias />
          </div>
        </div>

        {/* Formation — white / dark surface */}
        <div className="bg-white dark:bg-[#111111]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Formacion />
          </div>
        </div>

        {/* Contact — page bg */}
        <div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Contacto onOpenCV={() => setIsCVOpen(true)} />
          </div>
        </div>

      </main>

      <PiePagina />

      <ModalCurriculum isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
