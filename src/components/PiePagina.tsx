import { Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

export default function PiePagina() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 px-6 print:hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-display font-bold text-slate-100 tracking-tight">
            {PERSONAL_INFO.name}
          </span>
          <p className="text-[11px] font-mono text-slate-500">
            Desarrollador Web Full Stack Junior
          </p>
        </div>

        {/* Technical tag */}
        <div className="text-center font-mono text-xs text-slate-400">
          <p>© {currentYear} {PERSONAL_INFO.name}. Reservados todos los derechos.</p>
          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-600 mt-1">
            <Terminal size={10} className="text-blue-500" />
            <span>Portfolio estatico preparado para Docker, Caddy y Cloudflare.</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-mono">
          <a 
            href={PERSONAL_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a 
            href={PERSONAL_INFO.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://pokemon-world.es" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-green-400 transition-colors"
          >
            Pokémon World Map 
          </a>
        </div>

      </div>
    </footer>
  );
}
