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
    <section id="home" className="scroll-mt-24 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left */}
        <div className="col-span-1 lg:col-span-7 space-y-7">

          {/* Availability */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-500/8 border border-green-200 dark:border-green-500/20 rounded-full text-xs font-mono font-semibold text-green-700 dark:text-green-400 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Disponible para oportunidades junior
          </div>

          {/* Headline with rainbow gradient */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-[3.5rem] font-display font-bold tracking-tight leading-none text-[#1d1d1f] dark:text-[#f5f5f7]">
              Hola, soy<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] via-[#7c3aed] to-[#1d1d1f] dark:from-accent-cyan dark:via-accent-violet dark:to-white">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#6e6e73] dark:text-[#a1a1a6] font-medium pt-1">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <p className="text-[#1d1d1f] dark:text-[#d1d1d6] text-base md:text-lg leading-relaxed max-w-xl">
            {PERSONAL_INFO.headline}
          </p>

          <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm max-w-xl leading-relaxed">
            He completado mis prácticas en EXA Formación, donde desarrollé tres plataformas full stack desplegadas en producción, y tengo un proyecto propio finalizado y desplegado.
          </p>

          {/* Quick stack pills with category colors */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {[
              { label: 'React · TS', light: 'bg-sky-50 border-sky-200 text-sky-700', dark: 'dark:bg-[#0891b2]/10 dark:border-[#0891b2]/25 dark:text-[#27F5EE]' },
              { label: 'Spring Boot', light: 'bg-violet-50 border-violet-200 text-violet-700', dark: 'dark:bg-accent-violet/8 dark:border-accent-violet/20 dark:text-accent-violet' },
              { label: 'Python', light: 'bg-emerald-50 border-emerald-200 text-emerald-700', dark: 'dark:bg-accent-mint/8 dark:border-accent-mint/20 dark:text-accent-mint' },
              { label: 'Docker · VPS', light: 'bg-orange-50 border-orange-200 text-orange-700', dark: 'dark:bg-orange-500/8 dark:border-orange-400/20 dark:text-orange-300' },
            ].map(({ label, light, dark }) => (
              <span key={label} className={`px-3 py-1.5 rounded-full border font-medium ${light} ${dark}`}>
                {label}
              </span>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => handleNavClick('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-[#0891b2] dark:bg-accent-cyan hover:bg-[#0e7490] dark:hover:bg-accent-cyan/85 text-white dark:text-[#1d1d1f] rounded-xl text-sm font-semibold transition-colors duration-150 shadow-sm shadow-[#0891b2]/20 dark:shadow-accent-cyan/20 hover:-translate-y-px cursor-pointer"
            >
              Ver proyecto
              <ArrowRight size={15} />
            </button>

            <button
              onClick={onOpenCV}
              className="flex items-center gap-2 px-5 py-3 bg-[#1d1d1f] dark:bg-[#f5f5f7] hover:bg-[#3a3a3c] dark:hover:bg-white text-white dark:text-[#1d1d1f] rounded-xl text-sm font-semibold transition-colors duration-150 shadow-sm hover:-translate-y-px cursor-pointer"
            >
              <FileText size={15} />
              Ver CV
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 px-5 py-3 border border-[#d2d2d7] dark:border-[#3a3a3c] text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-[#f5f5f7] dark:hover:bg-white/5 rounded-xl text-sm font-semibold transition-colors duration-150 cursor-pointer"
            >
              <Mail size={15} />
              Contactar
            </button>
          </div>

          {/* Social links — with personality */}
          <div className="flex flex-wrap gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Abraham Pauta"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[#1d1d1f] dark:bg-[#f5f5f7] hover:bg-[#3a3a3c] dark:hover:bg-white text-white dark:text-[#1d1d1f] rounded-xl text-sm font-semibold transition-colors duration-150 hover:-translate-y-px shadow-sm"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Abraham Pauta"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[#0066cc]/8 dark:bg-[#2997ff]/10 hover:bg-[#0066cc]/15 dark:hover:bg-[#2997ff]/18 border border-[#0066cc]/20 dark:border-[#2997ff]/25 text-[#0055aa] dark:text-[#2997ff] rounded-xl text-sm font-semibold transition-colors duration-150 hover:-translate-y-px"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Enviar email a Abraham Pauta"
              className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[#0891b2]/6 dark:bg-accent-cyan/8 hover:bg-[#0891b2]/12 dark:hover:bg-accent-cyan/15 border border-[#0891b2]/20 dark:border-accent-cyan/25 text-[#0891b2] dark:text-accent-cyan rounded-xl text-sm font-semibold transition-colors duration-150 hover:-translate-y-px"
            >
              <Mail size={15} />
              Email
            </a>
          </div>
        </div>

        {/* Right — tech card */}
        <div className="col-span-1 lg:col-span-5 relative z-10">
          <div className="rounded-2xl border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white dark:bg-[#1c1c1e] shadow-sm dark:shadow-none overflow-hidden">

            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#f5f5f7] dark:bg-[#2c2c2e] border-b border-[#d2d2d7] dark:border-[#3a3a3c]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                <span className="text-[#6e6e73] text-[11px] font-mono ml-2 flex items-center gap-1.5 font-medium">
                  <Terminal size={11} /> Web Console
                </span>
              </div>
              <div className="font-mono text-[10px] text-[#86868b] bg-white dark:bg-[#1c1c1e] px-2 py-0.5 rounded border border-[#d2d2d7] dark:border-[#3a3a3c]">
                127.0.0.1:3000
              </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-[#f5f5f7] dark:bg-[#2c2c2e] border-b border-[#d2d2d7] dark:border-[#3a3a3c] px-2 text-xs font-mono">
              {[
                { id: 'architecture' as const, icon: <Layers size={11} />, label: 'Servidor' },
                { id: 'terminal' as const, icon: <Activity size={11} />, label: 'Diagnóstico' },
              ].map(({ id, icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`px-3 py-2 flex items-center gap-1.5 border-b-2 cursor-pointer transition-colors ${
                    activeTab === id
                      ? 'border-[#0891b2] dark:border-accent-cyan text-[#0891b2] dark:text-accent-cyan font-semibold'
                      : 'border-transparent text-[#6e6e73] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7]'
                  }`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>

            {/* Panel */}
            <div className="p-5 h-[240px] overflow-y-auto text-xs font-mono bg-white dark:bg-[#1c1c1e]">
              {activeTab === 'architecture' && (
                <div className="space-y-4">
                  <p className="text-[11px] text-[#6e6e73]">Ruta de despliegue usada en proyectos propios</p>

                  <div className="space-y-2.5">
                    <div className="flex justify-between gap-2.5">
                      <div className="flex-1 p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-500/20 text-center">
                        <div className="text-[10px] text-orange-600 dark:text-orange-400 font-bold uppercase tracking-wider">Cloudflare</div>
                        <div className="text-[#6e6e73] text-[10px] mt-0.5">DNS y proxy</div>
                      </div>
                      <div className="flex items-center p-1 text-[#86868b]">→</div>
                      <div className="flex-1 p-2 rounded-lg bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-500/20 text-center">
                        <div className="text-[10px] text-teal-700 dark:text-teal-400 font-bold uppercase tracking-wider">Caddy</div>
                        <div className="text-[#6e6e73] text-[10px] mt-0.5">Reverse proxy</div>
                      </div>
                    </div>

                    <div className="text-center text-[#d2d2d7] dark:text-[#3a3a3c] py-0.5">↓</div>

                    <div className="p-2.5 rounded-lg bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#0891b2]/20 dark:border-accent-cyan/20">
                      <div className="flex items-center justify-between border-b border-[#0891b2]/15 dark:border-accent-cyan/15 pb-1.5 mb-1.5">
                        <span className="text-[10px] font-bold text-[#0891b2] dark:text-accent-cyan uppercase tracking-widest flex items-center gap-1">
                          <Server size={10} /> VPS Linux (Docker Compose)
                        </span>
                        <span className="text-[9px] bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-1.5 py-0.5 rounded font-semibold border border-green-200 dark:border-green-500/20">Activo</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-[10px] font-semibold">
                        {[
                          { label: 'React App', sub: 'Vite · FE', color: 'text-[#0891b2] dark:text-accent-cyan' },
                          { label: 'Spring Boot', sub: 'Java API', color: 'text-violet-600 dark:text-accent-violet' },
                          { label: 'MySQL DB', sub: 'Persistente', color: 'text-emerald-600 dark:text-accent-mint' },
                        ].map(({ label, sub, color }) => (
                          <div key={label} className="p-1 rounded bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] text-center">
                            <div className={color}>{label}</div>
                            <div className="text-[#86868b] text-[8px] font-normal">{sub}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="space-y-3">
                  {probeStatus === 'idle' && (
                    <div className="flex flex-col items-center justify-center h-[200px] text-center space-y-3">
                      <Terminal size={28} className="text-[#d2d2d7] dark:text-[#3a3a3c]" />
                      <div className="space-y-1">
                        <p className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold text-xs">Simulador de Verificación</p>
                        <p className="text-[10px] text-[#6e6e73]">Simulación de comprobación de despliegue.</p>
                      </div>
                      <button
                        onClick={handleRunProbe}
                        className="px-4 py-2 bg-[#f5f5f7] dark:bg-[#2c2c2e] hover:bg-[#e8e8ed] dark:hover:bg-[#3a3a3c] border border-[#0891b2]/30 dark:border-accent-cyan/30 text-[#0891b2] dark:text-accent-cyan rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <RotateCw size={11} /> Ejecutar diagnóstico
                      </button>
                    </div>
                  )}

                  {probeStatus === 'running' && (
                    <div className="space-y-2 text-[11px]">
                      {probeLogs.map((log, i) => (
                        <div key={i} className="text-[#1d1d1f] dark:text-[#d1d1d6] animate-slideUp">{log}</div>
                      ))}
                      <div className="flex items-center gap-1.5 text-[#0891b2] dark:text-accent-cyan pt-1">
                        <RotateCw size={11} className="animate-spin" /> Escaneando...
                      </div>
                    </div>
                  )}

                  {probeStatus === 'success' && (
                    <div className="space-y-2 text-[11px] h-full flex flex-col justify-between">
                      <div className="space-y-1.5 max-h-[170px] overflow-y-auto">
                        {probeLogs.map((log, i) => (
                          <div key={i} className={i === probeLogs.length - 1 ? 'text-emerald-600 dark:text-accent-mint font-semibold' : 'text-[#6e6e73]'}>
                            {log}
                          </div>
                        ))}
                      </div>
                      <div className="mt-auto border-t border-[#d2d2d7] dark:border-[#3a3a3c] pt-2 flex items-center justify-between">
                        <span className="text-[10px] text-emerald-600 dark:text-accent-mint flex items-center gap-1">
                          <ShieldCheck size={13} /> PING: 24ms · HTTPS: ACTIVE
                        </span>
                        <button
                          onClick={() => setProbeStatus('idle')}
                          className="text-[10px] text-[#0891b2] dark:text-accent-cyan hover:underline cursor-pointer"
                        >
                          Limpiar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Status bar */}
            <div className="px-4 py-2 bg-[#f5f5f7] dark:bg-[#2c2c2e] border-t border-[#d2d2d7] dark:border-[#3a3a3c] flex justify-between items-center text-[10px] font-mono text-[#86868b]">
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
