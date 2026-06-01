import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data.ts';

interface NavegacionProps {
  onOpenCV: () => void;
}

export default function Navegacion({ onOpenCV }: NavegacionProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyecto' },
    { id: 'contact', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: offsetPosition, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 print:hidden px-4 py-3 md:py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 bg-slate-950/75 backdrop-blur-md px-4 md:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? 'border-white/10 shadow-lg shadow-black/30'
            : 'border-white/6'
        }`}
      >
        {/* Brand */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan/80 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-md shadow-accent-cyan/20 group-hover:shadow-accent-cyan/35 transition-shadow">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white tracking-tight text-sm leading-tight group-hover:text-accent-cyan transition-colors duration-200">
              Abraham Pauta
            </span>
            <span className="text-[10px] text-green-400 font-mono tracking-wider flex items-center gap-1 leading-none mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              FULL STACK JUNIOR
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive ? 'text-accent-cyan font-semibold' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-accent-cyan/6 border border-accent-cyan/20 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Social icons — desktop only */}
          <div className="hidden md:flex items-center gap-1 mr-1">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Abraham Pauta"
              className="p-1.5 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <Github size={15} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Abraham Pauta"
              className="p-1.5 text-slate-500 hover:text-blue-300 transition-colors rounded-lg hover:bg-white/5"
            >
              <Linkedin size={15} />
            </a>
          </div>

          <button
            onClick={onOpenCV}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-accent-cyan hover:bg-accent-cyan/85 text-slate-950 rounded-lg text-xs font-mono tracking-wide font-bold transition-all duration-200 shadow-md shadow-accent-cyan/20 cursor-pointer active:scale-95 hover:-translate-y-px"
          >
            <FileText size={13} />
            Ver CV
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-400 hover:text-slate-100 cursor-pointer rounded-lg hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 z-50 md:hidden bg-slate-950/96 border border-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-2xl shadow-black/50"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full p-3 rounded-xl text-sm text-left transition-colors ${
                      isActive
                        ? 'bg-accent-cyan/8 text-accent-cyan font-semibold'
                        : 'text-slate-300 hover:bg-white/4'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} className={isActive ? 'text-accent-cyan' : 'text-slate-600'} />
                  </button>
                );
              })}

              <div className="border-t border-white/8 mt-2 pt-3 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenCV(); }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent-cyan hover:bg-accent-cyan/90 text-slate-950 rounded-xl text-xs font-mono font-bold transition-all"
                >
                  <FileText size={14} />
                  Ver / Imprimir CV
                </button>

                <div className="flex gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/4 hover:bg-white/8 border border-white/8 rounded-xl text-xs font-mono font-semibold text-slate-300 transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/25 rounded-xl text-xs font-mono font-semibold text-blue-300 transition-colors"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
