import { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data.ts';

interface NavegacionProps {
  onOpenCV: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navegacion({ onOpenCV, theme, onToggleTheme }: NavegacionProps) {
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

  const pillBase = `bg-white/85 dark:bg-black/85 backdrop-blur-xl border border-[#d2d2d7] dark:border-[#2c2c2e] transition-all duration-200${scrolled ? ' shadow-sm' : ''}`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 print:hidden px-4 py-3 md:py-3.5">
      <div className="max-w-6xl mx-auto flex items-center gap-2.5">

        {/* Nav pill */}
        <div className={`flex-1 rounded-2xl px-4 md:px-6 py-2.5 flex items-center justify-between ${pillBase}`}>

          {/* Brand */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0891b2] to-[#7c3aed] dark:from-accent-cyan dark:to-accent-violet flex items-center justify-center font-bold text-white dark:text-[#1d1d1f] text-sm shadow-sm group-hover:opacity-85 transition-opacity">
              AP
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight text-sm leading-tight group-hover:text-[#0891b2] dark:group-hover:text-accent-cyan transition-colors duration-150">
                Abraham Pauta
              </span>
              <span className="text-[10px] text-[#6e6e73] dark:text-[#6e6e73] font-mono tracking-wider flex items-center gap-1 leading-none mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                FULL STACK JUNIOR
              </span>
            </div>
          </div>

          {/* Desktop nav — centrado */}
          <nav className="hidden md:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2" aria-label="Navegación principal">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-1.5 text-sm rounded-lg transition-colors cursor-pointer font-medium ${
                    isActive
                      ? 'text-[#0891b2] dark:text-accent-cyan'
                      : 'text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="navActive"
                      className="absolute inset-0 bg-[#0891b2]/6 dark:bg-accent-cyan/10 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1.5">
            {/* Social icons — desktop */}
            <div className="hidden md:flex items-center gap-0.5 mr-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Abraham Pauta"
                className="p-1.5 text-[#6e6e73] dark:text-[#6e6e73] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1c1c1e]"
              >
                <Github size={15} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Abraham Pauta"
                className="p-1.5 text-[#6e6e73] dark:text-[#6e6e73] hover:text-[#0891b2] dark:hover:text-accent-cyan transition-colors rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1c1c1e]"
              >
                <Linkedin size={15} />
              </a>
            </div>

            {/* CV button */}
            <button
              onClick={onOpenCV}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-[#f5f5f7] dark:bg-[#f5f5f7] dark:hover:bg-white text-[#1d1d1f] border border-[#d2d2d7] dark:border-transparent rounded-lg text-sm font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <FileText size={13} />
              Ver CV
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-white cursor-pointer rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1c1c1e] transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Círculo flotante del tema — fuera del pill, mismo cristal */}
        <button
          onClick={onToggleTheme}
          aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
          className={`flex-none w-10 h-10 rounded-full flex items-center justify-center text-[#6e6e73] dark:text-[#a1a1a6] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] cursor-pointer transition-all duration-200 ${pillBase}`}
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-[72px] left-4 right-4 z-50 md:hidden bg-white/95 dark:bg-[#1c1c1e]/95 border border-[#d2d2d7] dark:border-[#3a3a3c] backdrop-blur-xl rounded-2xl p-4 shadow-lg dark:shadow-none"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm text-left transition-colors ${
                      isActive
                        ? 'bg-[#0891b2]/6 dark:bg-accent-cyan/8 text-[#0891b2] dark:text-accent-cyan font-semibold'
                        : 'text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} className={isActive ? 'text-[#0891b2] dark:text-accent-cyan' : 'text-[#86868b]'} />
                  </button>
                );
              })}

              <div className="border-t border-[#d2d2d7] dark:border-[#3a3a3c] mt-2 pt-3 space-y-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenCV(); }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white hover:bg-[#f5f5f7] dark:bg-[#f5f5f7] dark:hover:bg-white text-[#1d1d1f] border border-[#d2d2d7] dark:border-transparent rounded-xl text-sm font-semibold transition-colors duration-150"
                >
                  <FileText size={14} />
                  Ver / Imprimir CV
                </button>

                <div className="flex gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] rounded-xl text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors"
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#0891b2]/6 dark:bg-accent-cyan/10 border border-[#0891b2]/20 dark:border-accent-cyan/20 rounded-xl text-sm font-medium text-[#0891b2] dark:text-accent-cyan transition-colors"
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
