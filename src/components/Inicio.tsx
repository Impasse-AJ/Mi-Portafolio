import { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  FileText,
  Server,
  Terminal,
  ShieldCheck,
  Activity,
  RotateCw,
  Layers,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

interface InicioProps {
  onOpenCV: () => void;
}

export default function Inicio({ onOpenCV }: InicioProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'terminal'>('architecture');
  const [probeStatus, setProbeStatus] = useState<'idle' | 'running' | 'success'>('idle');
  const [probeLogs, setProbeLogs] = useState<string[]>([]);

  const handleRunProbe = () => {
    if (probeStatus === 'running') return;
    setProbeStatus('running');
    setProbeLogs([]);

    const steps = [
      '[DNS] Resolviendo dominio y proxy de Cloudflare...',
      '[SSL] Revisando ruta HTTPS gestionada por Caddy...',
      '[VPS] Comprobando servicio en servidor Linux...',
      '[Docker] Verificando red de Docker Compose...',
      '[API] Revisando disponibilidad del backend Spring Boot...',
      '[DB] Confirmando persistencia de MySQL...',
      '[OK] pokemon-world.es disponible.',
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setProbeLogs(prev => [...prev, step]);
        if (index === steps.length - 1) setProbeStatus('success');
      }, (index + 1) * 600);
    });
  };

  const handleNavClick = (id: string) => {
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
    <section id="home" className="relative min-h-[78vh] flex flex-col justify-center pt-20 pb-6 md:py-12 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-accent-cyan/5 via-blue-900/8 to-transparent pointer-events-none z-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 w-full">

        {/* Left column */}
        <div className="col-span-1 lg:col-span-7 space-y-6 text-left">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/8 border border-green-500/20 rounded-full text-[11px] font-mono font-semibold text-green-400 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
            Disponible para oportunidades junior
          </div>

          {/* Name & title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-display font-bold text-white tracking-tight leading-tight">
              Hola, soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-violet to-white">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-accent-cyan/90 font-semibold tracking-wide">
              {PERSONAL_INFO.title}
            </h2>
          </div>

          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            {PERSONAL_INFO.headline}
          </p>

          <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
            Actualmente realizo prácticas en EXA Formación y mantengo Pokémon World Map, una aplicación full stack desplegada en producción.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl text-xs font-mono">
            {[
              { label: 'FRONTEND', value: 'React · TS · Vite', color: 'text-accent-cyan' },
              { label: 'BACKEND', value: 'Spring Boot · PHP', color: 'text-accent-violet' },
              { label: 'DATOS', value: 'Python Scraping', color: 'text-accent-mint' },
              { label: 'INFRA', value: 'Docker · VPS', color: 'text-blue-300' },
            ].map(({ label, value, color }) => (
              <div key={label} className="p-2.5 rounded-xl bg-white/3 border border-white/8 backdrop-blur-sm hover:border-white/15 transition-colors">
                <div className={`font-bold ${color}`}>{label}</div>
                <div className="text-slate-400 mt-0.5 text-[10px] leading-snug">{value}</div>
              </div>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => handleNavClick('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-accent-cyan hover:bg-accent-cyan/90 text-slate-950 rounded-xl text-xs font-mono font-bold tracking-wider transition-all duration-200 shadow-lg shadow-accent-cyan/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Ver proyecto
              <ArrowRight size={14} />
            </button>

            <button
              onClick={onOpenCV}
              className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/8 border border-white/15 hover:border-white/25 text-slate-200 rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer"
            >
              <FileText size={14} />
              Ver CV
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 px-5 py-3 bg-transparent hover:bg-white/4 border border-slate-700/60 hover:border-slate-600 text-slate-300 rounded-xl text-xs font-mono font-bold tracking-wider transition-all cursor-pointer"
            >
              <Mail size={14} />
              Contactar
            </button>
          </div>

          {/* Prominent social links */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Abraham Pauta"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-500 text-slate-100 hover:text-white rounded-xl text-xs font-mono font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Abraham Pauta"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/35 hover:border-blue-400/60 text-blue-200 hover:text-blue-100 rounded-xl text-xs font-mono font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm shadow-blue-500/10"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Enviar email a Abraham Pauta"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-accent-cyan/8 hover:bg-accent-cyan/15 border border-accent-cyan/25 hover:border-accent-cyan/50 text-accent-cyan hover:text-white rounded-xl text-xs font-mono font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm shadow-accent-cyan/10"
            >
              <Mail size={15} />
              Email
            </a>
          </div>
        </div>

        {/* Right column — interactive console */}
        <div className="col-span-1 lg:col-span-5 h-full flex flex-col justify-center">
          <div className="relative w-full rounded-2xl bg-slate-950/90 border border-white/8 shadow-2xl shadow-black/40 overflow-hidden">

            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-white/6 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                <span className="text-slate-400 text-[11px] font-mono ml-2 flex items-center gap-1.5 font-semibold">
                  <Terminal size={12} className="text-accent-cyan" /> Web Console v2.0
                </span>
              </div>
              <div className="flex items-center gap-1 bg-slate-950 px-2 py-0.5 rounded border border-white/8 font-mono text-[10px] text-slate-500">
                127.0.0.1:3000
              </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-slate-900/30 border-b border-white/6 px-2 text-xs font-mono">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-2 flex items-center gap-1.5 border-b-2 cursor-pointer transition-all ${
                  activeTab === 'architecture'
                    ? 'border-accent-cyan text-accent-cyan font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <Layers size={11} /> Configuración de Servidor
              </button>
              <button
                onClick={() => setActiveTab('terminal')}
                className={`px-3 py-2 flex items-center gap-1.5 border-b-2 cursor-pointer transition-all ${
                  activeTab === 'terminal'
                    ? 'border-accent-cyan text-accent-cyan font-semibold'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <Activity size={11} /> Prueba de Despliegue
              </button>
            </div>

            {/* Panel content */}
            <div className="p-5 h-[240px] overflow-y-auto text-xs leading-relaxed font-mono">

              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <div className="text-[11px] text-slate-400 leading-normal mb-1 flex items-center gap-1 bg-slate-900/50 p-2 rounded border border-white/5">
                    <Sparkles size={12} className="text-accent-cyan flex-shrink-0" />
                    <span>Ruta de despliegue usada en proyectos propios</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex justify-between gap-2.5">
                      <div className="flex-1 p-2 rounded-lg bg-orange-950/20 border border-orange-500/20 text-center">
                        <div className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">Cloudflare</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">DNS y proxy</div>
                      </div>
                      <div className="flex items-center justify-center p-1 text-slate-600">→</div>
                      <div className="flex-1 p-2 rounded-lg bg-teal-950/20 border border-teal-500/20 text-center">
                        <div className="text-[10px] text-teal-400 font-bold uppercase tracking-wider">Caddy</div>
                        <div className="text-slate-400 text-[10px] mt-0.5">Reverse proxy</div>
                      </div>
                    </div>

                    <div className="text-center text-slate-700 py-0.5">↓</div>

                    <div className="p-2.5 rounded-lg bg-accent-cyan/4 border border-accent-cyan/15">
                      <div className="flex items-center justify-between border-b border-accent-cyan/15 pb-1.5 mb-1.5">
                        <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest flex items-center gap-1">
                          <Server size={10} /> VPS Linux (Docker Compose)
                        </span>
                        <span className="text-[9px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded font-semibold border border-green-500/20">Activo</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] font-semibold">
                        <div className="p-1 rounded bg-slate-900/80 border border-white/6 text-center">
                          <div className="text-accent-cyan/80">React App</div>
                          <div className="text-slate-500 text-[8px] font-normal">Vite · FE</div>
                        </div>
                        <div className="p-1 rounded bg-slate-900/80 border border-white/6 text-center">
                          <div className="text-accent-violet/80">Spring Boot</div>
                          <div className="text-slate-500 text-[8px] font-normal">Java API</div>
                        </div>
                        <div className="p-1 rounded bg-slate-900/80 border border-white/6 text-center">
                          <div className="text-accent-mint/80">MySQL DB</div>
                          <div className="text-slate-500 text-[8px] font-normal">Persistente</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="space-y-3">
                  {probeStatus === 'idle' && (
                    <div className="flex flex-col items-center justify-center h-[200px] text-slate-500 text-center space-y-3">
                      <Terminal size={32} className="text-slate-700 animate-pulse" />
                      <div className="space-y-1">
                        <p className="text-slate-300 font-semibold text-xs">Simulador de Verificación de Producción</p>
                        <p className="text-[10px] max-w-xs text-slate-500">Pulsa para ver una simulación de comprobación de despliegue.</p>
                      </div>
                      <button
                        onClick={handleRunProbe}
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-accent-cyan/40 text-accent-cyan rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <RotateCw size={12} /> Ejecutar diagnóstico
                      </button>
                    </div>
                  )}

                  {probeStatus === 'running' && (
                    <div className="space-y-2 font-mono text-[11px]">
                      {probeLogs.map((log, index) => (
                        <div key={index} className="text-slate-300 animate-slideUp">{log}</div>
                      ))}
                      <div className="flex items-center gap-1.5 text-accent-cyan pt-1">
                        <RotateCw size={12} className="animate-spin" /> Escaneando la infraestructura...
                      </div>
                    </div>
                  )}

                  {probeStatus === 'success' && (
                    <div className="space-y-2 font-mono text-[11px] h-full flex flex-col justify-between">
                      <div className="space-y-1.5 max-h-[170px] overflow-y-auto">
                        {probeLogs.map((log, index) => (
                          <div
                            key={index}
                            className={index === probeLogs.length - 1 ? 'text-accent-mint font-bold' : 'text-slate-400'}
                          >
                            {log}
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto border-t border-white/6 pt-2 flex items-center justify-between">
                        <span className="text-[10px] text-accent-mint flex items-center gap-1">
                          <ShieldCheck size={14} /> PING: 24ms · HTTPS: ACTIVE
                        </span>
                        <button
                          onClick={() => setProbeStatus('idle')}
                          className="text-[10px] text-accent-cyan hover:underline cursor-pointer"
                        >
                          Limpiar consola
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer bar */}
            <div className="px-4 py-2 bg-slate-950/90 border-t border-white/4 flex justify-between items-center text-[10px] font-mono text-slate-500">
              <span>HOST: VPS-LINUX</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span> docker compose activo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
