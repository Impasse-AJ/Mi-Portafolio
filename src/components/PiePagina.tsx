import { PERSONAL_INFO } from '../data.ts';

export default function PiePagina() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-[#111111] border-t border-[#d2d2d7] dark:border-[#2c2c2e] py-10 px-6 print:hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-display font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            {PERSONAL_INFO.name}
          </span>
          <p className="text-[11px] font-mono text-[#86868b] dark:text-[#6e6e73]">
            Desarrollador Web Full Stack Junior
          </p>
        </div>

        <div className="text-center text-xs text-[#86868b] dark:text-[#6e6e73] font-mono">
          <p>© {currentYear} {PERSONAL_INFO.name}. Reservados todos los derechos.</p>
          <p className="text-[10px] mt-1 text-[#d2d2d7] dark:text-[#3a3a3c]">
            Portfolio estático · Docker · Caddy · Cloudflare
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Abraham Pauta"
            className="text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Abraham Pauta"
            className="text-[#86868b] hover:text-[#0066cc] dark:hover:text-[#2997ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://pokemon-world.es"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Pokémon World Map"
            className="text-[#86868b] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors"
          >
            Pokémon World Map
          </a>
        </div>

      </div>
    </footer>
  );
}
