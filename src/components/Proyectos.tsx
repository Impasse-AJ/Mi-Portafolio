import { ExternalLink, Github, Server, Terminal, Network, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data.ts';
import { motion } from 'motion/react';

export default function Proyectos() {
  const mainProject = PROJECTS.find(p => p.id === 'pokemon-world')!;

  return (
    <section id="projects" className="scroll-mt-24">

      <motion.div
        className="space-y-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono font-bold tracking-widest text-[#0891b2] dark:text-accent-cyan uppercase">proyecto principal</span>
        <h3 className="text-3xl font-display font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">Pokémon World Map</h3>
        <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm md:text-base max-w-2xl">
          Proyecto real desarrollado, desplegado y mantenido en una VPS propia, con frontend, backend, base de datos y correo transaccional.
        </p>
      </motion.div>

      <motion.div
        className="rounded-2xl border border-[#d2d2d7] dark:border-white/10 overflow-hidden shadow-sm dark:shadow-none"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Banner */}
        <div className="h-44 md:h-52 bg-[#f5f5f7] dark:bg-[#111111] relative border-b border-[#d2d2d7] dark:border-white/8 flex items-center justify-center p-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,145,178,0.06)_0%,transparent_65%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(39,245,238,0.07)_0%,transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.04)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[size:20px_20px]" />

          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/25 text-green-700 dark:text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              EN PRODUCCIÓN
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold bg-[#0891b2]/8 dark:bg-accent-cyan/10 border border-[#0891b2]/20 dark:border-accent-cyan/25 text-[#0891b2] dark:text-accent-cyan">
              <Server size={10} />
              VPS PROPIA
            </span>
          </div>

          <div className="absolute bottom-4 left-4 z-10">
            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/80 dark:bg-black/60 border border-[#d2d2d7] dark:border-white/10 text-[10px] font-mono text-[#6e6e73] dark:text-[#a1a1a6] font-medium uppercase tracking-wider">
              Proyecto Final de DAW · Full Stack
            </span>
          </div>

          <div className="text-center space-y-1.5 z-10">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] via-[#7c3aed] to-[#1d1d1f] dark:from-accent-cyan dark:via-accent-violet dark:to-white text-3xl sm:text-4xl font-mono font-bold tracking-tight select-none">
              pokemon-world.es
            </div>
            <p className="text-[10px] font-mono text-[#86868b] dark:text-[#6e6e73] uppercase tracking-widest">
              React · Spring Boot · MySQL · Docker Compose
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 bg-white dark:bg-[#111111]">

          {/* Título encima de las columnas */}
          <div className="mb-6">
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-display font-bold text-2xl tracking-tight">{mainProject.title}</h4>
            <p className="text-[#0891b2] dark:text-accent-cyan text-xs font-mono font-medium mt-1">{mainProject.tagline}</p>
          </div>

          {/* Dos columnas: izquierda crece, derecha se estira verticalmente */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Izquierda — flex-col para que "Qué demuestra" llene el espacio restante */}
            <div className="flex-1 flex flex-col gap-6">

              <div className="space-y-2 text-sm leading-relaxed">
                <p className="text-[#1d1d1f] dark:text-[#d1d1d6]">{mainProject.description}</p>
                <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-xs md:text-sm">{mainProject.extendedDescription}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  ['Frontend', mainProject.architecture.frontend],
                  ['Backend', mainProject.architecture.backend],
                  ['Base de datos', mainProject.architecture.database],
                  ['Infraestructura', mainProject.architecture.infrastructure],
                  ['Proxy/SSL/DNS', mainProject.architecture.proxy],
                  ['Email', mainProject.architecture.email],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-[#f5f5f7] dark:bg-white/4 border border-[#d2d2d7] dark:border-white/8 p-3 hover:border-[#0891b2]/30 dark:hover:border-accent-cyan/20 transition-colors">
                    <div className="text-[10px] uppercase tracking-wider font-mono text-[#0891b2] dark:text-accent-cyan font-bold mb-0.5">{label}</div>
                    <div className="text-[#1d1d1f] dark:text-[#d1d1d6] text-xs">{value}</div>
                  </div>
                ))}
              </div>

              {/* flex-1: ocupa el espacio que sobra igualando la altura del panel derecho */}
              <div className="flex-1 rounded-xl bg-[#f5f5f7] dark:bg-white/3 border border-[#d2d2d7] dark:border-white/8 p-5 space-y-3">
                <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#86868b] dark:text-[#6e6e73] font-bold">Qué demuestra</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#6e6e73] dark:text-[#a1a1a6]">
                  {[
                    'Desarrollo frontend y backend.',
                    'Integración con APIs externas.',
                    'Persistencia en MySQL.',
                    'Autenticación y confirmación por email.',
                    'Despliegue real con Docker, Caddy, Cloudflare y VPS.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Derecha — se estira verticalmente para igualar la columna izquierda */}
            <div className="flex-none w-full lg:w-72 bg-[#f5f5f7] dark:bg-white/3 border border-[#d2d2d7] dark:border-white/8 rounded-xl p-5 font-mono text-xs flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b border-[#d2d2d7] dark:border-white/8 pb-3">
                <Network size={14} className="text-[#0891b2] dark:text-accent-cyan" />
                <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-bold text-[11px] uppercase tracking-wide">Esquema DevOps</span>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'FRONTEND',      value: mainProject.architecture.frontend,  color: 'bg-[#0891b2] dark:bg-accent-cyan' },
                  { label: 'BACKEND',       value: mainProject.architecture.backend,   color: 'bg-violet-500 dark:bg-accent-violet' },
                  { label: 'BASE DE DATOS', value: mainProject.architecture.database,  color: 'bg-emerald-500 dark:bg-accent-mint' },
                  { label: 'PROXY / SSL',   value: mainProject.architecture.proxy,     color: 'bg-orange-400' },
                  { label: 'CORREO SMTP',   value: mainProject.architecture.email,     color: 'bg-teal-400' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="space-y-0.5">
                    <span className="text-[10px] text-[#86868b] dark:text-[#6e6e73] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${color}`}></span>
                      {label}
                    </span>
                    <p className="text-[11px] text-[#1d1d1f] dark:text-[#d1d1d6] pl-3 leading-snug">{value}</p>
                  </div>
                ))}
              </div>

              {/* Nota al fondo del panel */}
              <div className="mt-auto bg-white dark:bg-white/4 border border-[#d2d2d7] dark:border-white/8 p-2.5 rounded-lg text-[10px] text-[#6e6e73] flex items-start gap-1.5">
                <Terminal size={11} className="text-[#0891b2] dark:text-accent-cyan flex-shrink-0 mt-0.5" />
                <span>Administración de base de datos mediante phpMyAdmin por túnel SSH.</span>
              </div>
            </div>

          </div>

          {/* Botones centrados debajo de ambas columnas */}
          <div className="flex flex-wrap justify-center gap-4 pt-8 mt-2 border-t border-[#d2d2d7] dark:border-white/8">
            <a
              href={mainProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar Pokémon World Map en producción"
              className="flex items-center gap-2 px-8 py-3 bg-[#0891b2] dark:bg-accent-cyan hover:bg-[#0e7490] dark:hover:bg-accent-cyan/85 text-white dark:text-[#1d1d1f] rounded-xl text-sm font-semibold transition-colors duration-150 shadow-sm hover:-translate-y-px cursor-pointer"
            >
              <ExternalLink size={15} />
              Ver demo
            </a>
            <a
              href={mainProject.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código en GitHub"
              className="flex items-center gap-2 px-8 py-3 bg-[#1d1d1f] dark:bg-white/8 hover:bg-[#3a3a3c] dark:hover:bg-white/12 text-white border border-transparent dark:border-white/15 rounded-xl text-sm font-semibold transition-colors duration-150 hover:-translate-y-px cursor-pointer"
            >
              <Github size={15} />
              Ver GitHub
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
