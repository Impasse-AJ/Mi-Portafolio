import { ExternalLink, Github, Server, Terminal, Network, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data.ts';
import { motion } from 'motion/react';

export default function Proyectos() {
  const mainProject = PROJECTS.find(p => p.id === 'pokemon-world')!;

  return (
    <section id="projects" className="space-y-12 scroll-mt-24">
      <motion.div
        className="space-y-2 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan uppercase">proyecto principal</span>
        <h3 className="text-3xl font-display font-semibold text-white">Pokémon World Map</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Proyecto real desarrollado, desplegado y mantenido en una VPS propia, con frontend, backend, base de datos y correo transaccional.
        </p>
      </motion.div>

      <motion.div
        className="relative group rounded-2xl bg-slate-900/40 border border-white/8 overflow-hidden shadow-2xl shadow-black/40 transition-all duration-500 hover:border-accent-cyan/20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Banner */}
        <div className="h-52 md:h-64 bg-gradient-to-br from-slate-900 via-blue-950/30 to-slate-900 relative border-b border-white/6 flex items-center justify-center p-4 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(39,245,238,0.06)_0%,transparent_65%)] pointer-events-none" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.06)_1px,transparent_0)] bg-[size:20px_20px] opacity-60" />

          {/* Status badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider font-bold bg-green-500/10 border border-green-500/25 text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              EN PRODUCCIÓN
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider font-bold bg-accent-cyan/8 border border-accent-cyan/20 text-accent-cyan">
              <Server size={10} />
              VPS PROPIA
            </span>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/8 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              Proyecto Final de DAW · Full Stack
            </span>
          </div>

          {/* Domain showcase */}
          <div className="text-center space-y-2 z-10">
            <div className="text-accent-cyan text-2xl sm:text-4xl font-mono tracking-tight select-none font-bold drop-shadow-sm">
              pokemon-world.es
            </div>
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              React · Spring Boot · MySQL · Docker Compose
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Description column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1.5">
              <h4 className="text-white font-display font-bold text-2xl tracking-tight">
                {mainProject.title}
              </h4>
              <p className="text-accent-cyan/80 text-xs font-mono font-semibold">
                {mainProject.tagline}
              </p>
            </div>

            <div className="space-y-3 text-sm leading-relaxed">
              <p className="text-slate-300">{mainProject.description}</p>
              <p className="text-slate-400 text-xs md:text-sm">
                {mainProject.extendedDescription}
              </p>
            </div>

            {/* Architecture grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                ['Frontend', mainProject.architecture.frontend],
                ['Backend', mainProject.architecture.backend],
                ['Base de datos', mainProject.architecture.database],
                ['Infraestructura', mainProject.architecture.infrastructure],
                ['Proxy/SSL/DNS', mainProject.architecture.proxy],
                ['Email', mainProject.architecture.email],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white/3 border border-white/7 p-3 hover:border-accent-cyan/20 transition-colors">
                  <div className="text-[10px] uppercase tracking-wider font-mono text-accent-cyan/70 font-bold mb-0.5">{label}</div>
                  <div className="text-slate-300 text-xs">{value}</div>
                </div>
              ))}
            </div>

            {/* What it shows */}
            <div className="rounded-xl bg-accent-cyan/3 border border-accent-cyan/12 p-4 space-y-3">
              <h5 className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold">Qué demuestra</h5>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                {[
                  'Desarrollo frontend y backend.',
                  'Integración con APIs externas.',
                  'Persistencia en MySQL.',
                  'Autenticación y confirmación por email.',
                  'Despliegue real con Docker, Caddy, Cloudflare y VPS.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-accent-cyan/70 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-white/6">
              <a
                href={mainProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Pokémon World Map en producción"
                className="flex items-center gap-2 px-5 py-2.5 bg-accent-cyan hover:bg-accent-cyan/85 text-slate-950 rounded-xl text-xs font-mono font-bold transition-all shadow-lg shadow-accent-cyan/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <ExternalLink size={13} />
                Ver demo
              </a>

              <a
                href={mainProject.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver código de Pokémon World Map en GitHub"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white border border-white/10 hover:border-white/20 rounded-xl text-xs font-mono font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Github size={13} />
                Ver GitHub
              </a>
            </div>
          </div>

          {/* DevOps visualizer */}
          <div className="lg:col-span-5 bg-slate-950/70 border border-white/7 rounded-xl p-5 space-y-4 font-mono text-xs">
            <div className="flex items-center gap-2 border-b border-white/6 pb-2.5">
              <Network size={14} className="text-accent-cyan" />
              <span className="text-slate-200 font-bold text-[11px] uppercase tracking-wide">Esquema DevOps y Backend</span>
            </div>

            <div className="space-y-3.5">
              {[
                { label: 'FRONTEND', value: mainProject.architecture.frontend, color: 'bg-accent-cyan' },
                { label: 'BACKEND', value: mainProject.architecture.backend, color: 'bg-accent-violet' },
                { label: 'BASE DE DATOS', value: mainProject.architecture.database, color: 'bg-accent-mint' },
                { label: 'PROXY / SSL INVERSO', value: mainProject.architecture.proxy, color: 'bg-orange-400' },
                { label: 'CORREO SMTP & TOKENS', value: mainProject.architecture.email, color: 'bg-blue-400' },
              ].map(({ label, value, color }) => (
                <div key={label} className="space-y-0.5">
                  <span className={`text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${color}`}></span>
                    {label}
                  </span>
                  <p className="text-[11px] text-slate-300 pl-3 leading-snug">{value}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-900/80 border border-white/6 p-2.5 rounded-lg text-[10px] text-slate-400 mt-2 flex items-start gap-1.5">
              <Terminal size={12} className="text-accent-cyan flex-shrink-0 mt-0.5" />
              <span>Administración interna de base de datos mediante phpMyAdmin accesible por túnel SSH.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
