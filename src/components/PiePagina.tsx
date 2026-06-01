import { Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

export default function PiePagina() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-white/6 py-10 px-6 print:hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-display font-bold text-white tracking-tight">
            {PERSONAL_INFO.name}
          </span>
          <p className="text-[11px] font-mono text-slate-500">
            Desarrollador Web Full Stack Junior
          </p>
        </div>

        <div className="text-center font-mono text-xs text-slate-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. Reservados todos los derechos.</p>
          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-600 mt-1">
            <Terminal size={10} className="text-accent-cyan/50" />
            <span>Portfolio estático preparado para Docker, Caddy y Cloudflare.</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            aria-label="GitHub de Abraham Pauta"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-300 transition-colors"
            aria-label="LinkedIn de Abraham Pauta"
          >
            LinkedIn
          </a>
          <a
            href="https://pokemon-world.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent-cyan transition-colors"
            aria-label="Ver Pokémon World Map en producción"
          >
            Pokémon World Map
          </a>
        </div>
      </div>
    </footer>
  );
}
