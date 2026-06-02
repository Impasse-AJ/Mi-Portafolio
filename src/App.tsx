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
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#111111] text-[#1d1d1f] dark:text-[#f5f5f7] flex flex-col font-sans antialiased selection:bg-[#0891b2]/15 dark:selection:bg-accent-cyan/20 print:bg-white print:text-slate-800">

      <Navegacion
        onOpenCV={() => setIsCVOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 w-full relative z-10 print:p-0 print:m-0">

        {/* Hero — page bg */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20">
          <Inicio onOpenCV={() => setIsCVOpen(true)} />
        </div>

        {/* Experiencia — sección alternante */}
        <div className="bg-white dark:bg-[#171717]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Experiencia />
          </div>
        </div>

        {/* Proyectos — page bg */}
        <div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Proyectos />
          </div>
        </div>

        {/* Tecnologias — sección alternante */}
        <div className="bg-white dark:bg-[#171717]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Tecnologias />
          </div>
        </div>

        {/* Formacion — page bg */}
        <div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-24">
            <Formacion />
          </div>
        </div>

        {/* Contacto — sección alternante */}
        <div className="bg-white dark:bg-[#171717]">
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
