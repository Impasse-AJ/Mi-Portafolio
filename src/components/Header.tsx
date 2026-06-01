import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenCV: () => void;
}

export default function Header({ onOpenCV }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'tech', label: 'Stack Técnico' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'formation', label: 'Formación' },
    { id: 'contact', label: 'Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
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
      const topOffset = 80; // height of floating navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: offsetPosition,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 print:hidden px-4 py-3 md:py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 bg-slate-950/70 border-slate-800/80 backdrop-blur-md px-4 md:px-6 py-2.5 flex items-center justify-between ${
          scrolled ? 'shadow-lg shadow-blue-500/5 border-slate-700/60' : ''
        }`}
      >
        {/* Brand Name */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-500 transition-colors">
            AP
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-slate-100 tracking-tight text-sm leading-tight group-hover:text-blue-400 transition-colors">
              Abraham Pauta
            </span>
            <span className="text-[10px] text-green-400 font-mono tracking-wider flex items-center gap-1 leading-none mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              FULL STACK JUNIOR
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  isActive ? 'text-blue-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-blue-500/5 border border-blue-500/20 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCV}
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono tracking-wide font-semibold transition-all duration-200 shadow-md shadow-blue-500/15 cursor-pointer active:scale-95"
          >
            <FileText size={14} />
            Ver CV
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-400 hover:text-slate-200 cursor-pointer rounded-lg hover:bg-slate-800/50"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 z-50 md:hidden bg-slate-950/95 border border-slate-800 backdrop-blur-lg rounded-2xl p-4 shadow-xl shadow-blue-500/5"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full p-2.5 rounded-lg text-sm text-left transition-colors ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-400 font-semibold'
                        : 'text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} className={isActive ? 'text-blue-400' : 'text-slate-600'} />
                  </button>
                );
              })}
              <div className="border-t border-slate-900 mt-2 pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCV();
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-mono font-bold transition-all"
                >
                  <FileText size={14} />
                  Ver / Imprimir CV
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
