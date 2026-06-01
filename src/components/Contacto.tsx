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
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">conexión rápida</span>
        <h3 className="text-3xl font-display font-semibold text-slate-100">¿Trabajamos juntos?</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto">
          Si buscas un perfil junior con base full stack, experiencia practica y ganas de seguir creciendo, puedes contactarme por email, LinkedIn o GitHub.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-center">
        {/* Contact main card */}
        <div className="relative rounded-2xl bg-slate-950/40 border border-slate-900 p-6 md:p-10 space-y-8 overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none z-0" />
          
          <div className="space-y-4 relative z-10">
            <h4 className="text-lg md:text-xl text-slate-200 font-display font-medium max-w-xl mx-auto leading-relaxed">
              Disponible para oportunidades como <span className="text-blue-400 font-semibold">Desarrollador Web Junior</span> o practicas profesionales.
            </h4>
            <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-mono">
              <MapPin size={14} className="text-blue-500" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Interactive Call-To-Action channel grid */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative z-10 font-mono text-xs max-w-3xl mx-auto">
            {/* EMAIL COPY CARD */}
            <button
              onClick={handleCopyEmail}
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col items-center gap-2.5 cursor-pointer text-center"
              aria-label="Copiar email de contacto"
            >
              <div className="p-2.5 rounded-lg bg-blue-900/10 text-blue-400 border border-blue-500/10 transition-colors group-hover:bg-blue-600/10">
                <Mail size={16} />
              </div>
              <div className="space-y-0.5">
                <span className="font-bold text-slate-200">Email</span>
                <p className="text-[10px] text-slate-500 tracking-normal block text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
                  {PERSONAL_INFO.email}
                </p>
              </div>
              <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider mt-auto ${copied ? 'text-green-400' : 'text-blue-400 opacity-60 group-hover:opacity-100'}`}>
                {copied ? (
                  <>
                    <Check size={10} /> Copiado
                  </>
                ) : (
                  <>
                    <Copy size={10} /> Copiar
                  </>
                )}
              </span>
            </button>

            {/* LINKEDIN */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col items-center gap-2.5 cursor-pointer text-center"
            >
              <div className="p-2.5 rounded-lg bg-blue-900/10 text-blue-400 border border-blue-500/10 transition-colors group-hover:bg-blue-600/10">
                <Linkedin size={16} />
              </div>
              <div className="space-y-0.5 mt-auto">
                <span className="font-bold text-slate-200">LinkedIn</span>
                <p className="text-[10px] text-slate-500">abraham-pauta</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-blue-400 opacity-60 group-hover:opacity-100 tracking-wider mt-auto">
                Conectar <ExternalLink size={10} />
              </span>
            </a>

            {/* GITHUB */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col items-center gap-2.5 cursor-pointer text-center"
            >
              <div className="p-2.5 rounded-lg bg-blue-900/10 text-blue-400 border border-blue-500/10 transition-colors group-hover:bg-blue-600/10">
                <Github size={16} />
              </div>
              <div className="space-y-0.5 mt-auto">
                <span className="font-bold text-slate-200">GitHub</span>
                <p className="text-[10px] text-slate-500">Impasse-AJ</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-blue-400 opacity-60 group-hover:opacity-100 tracking-wider mt-auto">
                Explorar <ExternalLink size={10} />
              </span>
            </a>

            <button
              onClick={onOpenCV}
              className="group p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col items-center gap-2.5 cursor-pointer text-center"
              aria-label="Ver o imprimir CV"
            >
              <div className="p-2.5 rounded-lg bg-blue-900/10 text-blue-400 border border-blue-500/10 transition-colors group-hover:bg-blue-600/10">
                <FileText size={16} />
              </div>
              <div className="space-y-0.5 mt-auto">
                <span className="font-bold text-slate-200">CV</span>
                <p className="text-[10px] text-slate-500">PDF / imprimir</p>
              </div>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-blue-400 opacity-60 group-hover:opacity-100 tracking-wider mt-auto">
                Abrir <ExternalLink size={10} />
              </span>
            </button>
          </div>

          <div className="p-4 rounded-xl bg-blue-950/10 border border-blue-500/10 flex items-start gap-2.5 text-left max-w-xl mx-auto relative z-10 text-xs text-slate-400 leading-relaxed font-mono">
            <Sparkles size={14} className="text-yellow-400 flex-shrink-0 mt-0.5" />
            <span>
              <span className="text-slate-200 font-semibold">Nota de privacidad:</span> No publico mi numero de telefono en la web para evitar indexacion automatica. Si necesitas hablar conmigo, puedes escribirme por correo o LinkedIn.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
