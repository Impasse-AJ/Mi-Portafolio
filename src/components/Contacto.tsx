import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, MapPin, ExternalLink, Sparkles, FileText } from 'lucide-react';
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
    <section id="contact" className="space-y-12 scroll-mt-24">
      <div className="space-y-2 text-center">
        <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan uppercase">conexión rápida</span>
        <h3 className="text-3xl font-display font-semibold text-white">¿Trabajamos juntos?</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto">
          Si buscas un perfil junior con base full stack, experiencia práctica y ganas de seguir creciendo, puedes contactarme por email, LinkedIn o GitHub.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-2xl bg-slate-900/40 border border-white/8 p-6 md:p-10 space-y-8 overflow-hidden shadow-xl shadow-black/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(39,245,238,0.04)_0%,transparent_65%)] pointer-events-none z-0" />

          <div className="space-y-4 relative z-10 text-center">
            <h4 className="text-lg md:text-xl text-slate-200 font-display font-medium max-w-xl mx-auto leading-relaxed">
              Disponible para oportunidades como{' '}
              <span className="text-accent-cyan font-semibold">Desarrollador Web Junior</span>{' '}
              o prácticas profesionales.
            </h4>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-mono">
              <MapPin size={13} className="text-accent-cyan/60" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">

            {/* Email */}
            <button
              onClick={handleCopyEmail}
              className="group p-5 rounded-2xl bg-accent-cyan/5 hover:bg-accent-cyan/10 border border-accent-cyan/15 hover:border-accent-cyan/40 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer text-center hover:-translate-y-0.5"
              aria-label="Copiar email de contacto"
            >
              <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan group-hover:bg-accent-cyan/15 transition-colors">
                <Mail size={20} />
              </div>
              <div className="space-y-0.5">
                <span className="block font-bold text-white text-sm">Email</span>
                <p className="text-[10px] text-slate-500 font-mono tracking-normal block overflow-hidden text-ellipsis whitespace-nowrap max-w-[140px]">
                  {PERSONAL_INFO.email}
                </p>
              </div>
              <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono ${copied ? 'text-accent-mint' : 'text-accent-cyan/60 group-hover:text-accent-cyan'} transition-colors`}>
                {copied ? (
                  <><Check size={10} /> Copiado</>
                ) : (
                  <><Copy size={10} /> Copiar</>
                )}
              </span>
            </button>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn de Abraham Pauta"
              className="group p-5 rounded-2xl bg-blue-600/8 hover:bg-blue-600/15 border border-blue-500/20 hover:border-blue-400/45 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer text-center hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-blue-600/15 border border-blue-500/25 text-blue-300 group-hover:bg-blue-600/20 transition-colors">
                <Linkedin size={20} />
              </div>
              <div className="space-y-0.5">
                <span className="block font-bold text-white text-sm">LinkedIn</span>
                <p className="text-[10px] text-slate-500 font-mono">abraham-pauta</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono text-blue-400/60 group-hover:text-blue-300 transition-colors">
                Conectar <ExternalLink size={10} />
              </span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub de Abraham Pauta"
              className="group p-5 rounded-2xl bg-white/3 hover:bg-white/6 border border-white/10 hover:border-white/22 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer text-center hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-slate-800 border border-white/10 text-slate-200 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                <Github size={20} />
              </div>
              <div className="space-y-0.5">
                <span className="block font-bold text-white text-sm">GitHub</span>
                <p className="text-[10px] text-slate-500 font-mono">Impasse-AJ</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                Explorar <ExternalLink size={10} />
              </span>
            </a>

            {/* CV */}
            <button
              onClick={onOpenCV}
              aria-label="Ver o imprimir CV"
              className="group p-5 rounded-2xl bg-accent-violet/6 hover:bg-accent-violet/12 border border-accent-violet/18 hover:border-accent-violet/40 transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer text-center hover:-translate-y-0.5"
            >
              <div className="p-3 rounded-xl bg-accent-violet/12 border border-accent-violet/22 text-accent-violet group-hover:bg-accent-violet/18 transition-colors">
                <FileText size={20} />
              </div>
              <div className="space-y-0.5">
                <span className="block font-bold text-white text-sm">Currículum</span>
                <p className="text-[10px] text-slate-500 font-mono">PDF / imprimir</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider font-mono text-accent-violet/60 group-hover:text-accent-violet transition-colors">
                Abrir <ExternalLink size={10} />
              </span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-white/3 border border-white/7 flex items-start gap-2.5 text-left max-w-xl mx-auto relative z-10 text-xs text-slate-400 leading-relaxed font-mono">
            <Sparkles size={13} className="text-accent-cyan/60 flex-shrink-0 mt-0.5" />
            <span>
              <span className="text-slate-200 font-semibold">Nota de privacidad:</span>{' '}
              No publico mi número de teléfono en la web para evitar indexación automática. Si necesitas hablar conmigo, puedes escribirme por correo o LinkedIn.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
