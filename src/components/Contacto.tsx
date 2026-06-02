import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, MapPin, ExternalLink, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

interface ContactoProps {
  onOpenCV: () => void;
}

export default function Contacto({ onOpenCV }: ContactoProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-10">
      <div className="space-y-2 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0891b2] dark:text-accent-cyan uppercase">conexión rápida</span>
        <h3 className="text-3xl font-display font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">¿Trabajamos juntos?</h3>
        <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm md:text-base max-w-xl mx-auto">
          Si buscas un perfil junior con base full stack, experiencia práctica y ganas de seguir creciendo, puedes contactarme por email, LinkedIn o GitHub.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] p-6 md:p-10 space-y-8 shadow-sm dark:shadow-none">

          <div className="space-y-3 text-center">
            <h4 className="text-lg md:text-xl text-[#1d1d1f] dark:text-[#f5f5f7] font-display font-semibold max-w-lg mx-auto leading-relaxed">
              Disponible para oportunidades como{' '}
              <span className="text-[#0891b2] dark:text-accent-cyan">Desarrollador Web Junior</span>{' '}
              o prácticas profesionales.
            </h4>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#6e6e73] dark:text-[#6e6e73] font-mono">
              <MapPin size={12} className="text-[#0891b2] dark:text-accent-cyan" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

            {/* Email */}
            <button
              onClick={handleCopyEmail}
              aria-label="Copiar email de contacto"
              className="group p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] hover:border-[#0891b2]/30 dark:hover:border-accent-cyan/30 hover:bg-[#0891b2]/4 dark:hover:bg-accent-cyan/5 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] group-hover:border-[#0891b2]/25 dark:group-hover:border-accent-cyan/25 text-[#0891b2] dark:text-accent-cyan transition-colors">
                <Mail size={20} />
              </div>
              <div className="space-y-0.5 text-center">
                <span className="block font-semibold text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">Email</span>
                <p className="text-[10px] text-[#86868b] font-mono overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px]">
                  {PERSONAL_INFO.email}
                </p>
              </div>
              <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono transition-colors ${
                copied ? 'text-green-600 dark:text-green-400' : 'text-[#0891b2] dark:text-accent-cyan'
              }`}>
                {copied ? <><Check size={10} /> Copiado</> : <><Copy size={10} /> Copiar</>}
              </span>
            </button>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn de Abraham Pauta"
              className="group p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] hover:border-[#0891b2]/30 dark:hover:border-accent-cyan/30 hover:bg-[#0891b2]/4 dark:hover:bg-accent-cyan/5 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] group-hover:border-[#0891b2]/25 dark:group-hover:border-accent-cyan/25 text-[#0891b2] dark:text-accent-cyan transition-colors">
                <Linkedin size={20} />
              </div>
              <div className="space-y-0.5 text-center">
                <span className="block font-semibold text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">LinkedIn</span>
                <p className="text-[10px] text-[#86868b] font-mono">abraham-pauta</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono text-[#0891b2] dark:text-accent-cyan">
                Conectar <ExternalLink size={9} />
              </span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub de Abraham Pauta"
              className="group p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] hover:border-[#0891b2]/30 dark:hover:border-accent-cyan/30 hover:bg-[#0891b2]/4 dark:hover:bg-accent-cyan/5 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] group-hover:border-[#0891b2]/25 dark:group-hover:border-accent-cyan/25 text-[#0891b2] dark:text-accent-cyan transition-colors">
                <Github size={20} />
              </div>
              <div className="space-y-0.5 text-center">
                <span className="block font-semibold text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">GitHub</span>
                <p className="text-[10px] text-[#86868b] font-mono">Impasse-AJ</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono text-[#0891b2] dark:text-accent-cyan">
                Explorar <ExternalLink size={9} />
              </span>
            </a>

            {/* CV */}
            <button
              onClick={onOpenCV}
              aria-label="Ver o imprimir currículum"
              className="group p-5 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] hover:border-[#0891b2]/30 dark:hover:border-accent-cyan/30 hover:bg-[#0891b2]/4 dark:hover:bg-accent-cyan/5 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] group-hover:border-[#0891b2]/25 dark:group-hover:border-accent-cyan/25 text-[#0891b2] dark:text-accent-cyan transition-colors">
                <FileText size={20} />
              </div>
              <div className="space-y-0.5 text-center">
                <span className="block font-semibold text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">Currículum</span>
                <p className="text-[10px] text-[#86868b] font-mono">PDF / imprimir</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono text-[#0891b2] dark:text-accent-cyan">
                Abrir <ExternalLink size={9} />
              </span>
            </button>
          </div>

          <p className="text-center text-xs text-[#86868b] dark:text-[#6e6e73] font-mono">
            No publico mi número de teléfono para evitar indexación automática. Escríbeme por email o LinkedIn.
          </p>
        </div>
      </div>
    </section>
  );
}
