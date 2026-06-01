import { ExternalLink, Github, Server, Terminal, Network } from 'lucide-react';
import { PROJECTS } from '../data.ts';
import { motion } from 'motion/react';

export default function Projects() {
  const mainProject = PROJECTS.find(p => p.id === 'pokemon-world')!;

  return (
    <section id="projects" className="space-y-12 scroll-mt-24">
      <motion.div 
        className="space-y-2 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">proyectos reales</span>
        <h3 className="text-3xl font-display font-semibold text-slate-100">Proyectos Destacados</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Proyecto real desarrollado, desplegado y mantenido en una VPS propia, con frontend, backend, base de datos y correo transaccional.
        </p>
      </motion.div>

      <div className="space-y-8">
        
        <motion.div 
          className="relative group rounded-2xl bg-slate-950/40 border border-slate-900 overflow-hidden shadow-2xl transition-all duration-500 hover:border-slate-800/80"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          {/* Header/banner pattern */}
          <div className="h-44 md:h-52 bg-slate-900/60 relative border-b border-slate-900/60 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none z-0"></div>
            
            {/* Dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px_rgba(203,213,225,0.03)_1px,transparent_0)] bg-[size:16px_16px]"></div>
            
            {/* Floating tags */}
            <div className="absolute top-4 right-4 flex flex-wrap gap-2 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold bg-green-500/10 border border-green-500/20 text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                EN PRODUCCIÓN
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Server size={10} />
                VPS PROPIA
              </span>
            </div>

            <div className="absolute bottom-4 left-4 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-950/80 border border-slate-800 text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                Proyecto Final de DAW
              </span>
            </div>

            <div className="text-center space-y-2 z-10">
              <div className="text-blue-300/80 text-2xl sm:text-3xl font-mono tracking-normal select-none">pokemon-world.es</div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest max-w-sm mx-auto">React + Spring Boot + MySQL + Docker Compose</p>
            </div>
          </div>

          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Primary description column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h4 className="text-slate-100 font-display font-bold text-2xl tracking-tight">
                  {mainProject.title}
                </h4>
                <p className="text-blue-400 text-xs font-mono font-semibold">
                  {mainProject.tagline}
                </p>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>{mainProject.description}</p>
                <p className="text-slate-400 text-xs md:text-sm">
                  {mainProject.extendedDescription}
                </p>
              </div>

              {/* Technologies chip array */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {mainProject.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-900">
                <a 
                  href={mainProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold transition-all cursor-pointer shadow-md shadow-blue-500/10"
                  aria-label="Visitar Pokémon World Map"
                >
                  <ExternalLink size={13} />
                  Visitar pokemon-world.es
                </a>
                
                <a 
                  href={mainProject.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer"
                  aria-label="Ver perfil de Abraham Pauta en GitHub"
                >
                  <Github size={13} />
                  Ver GitHub
                </a>
              </div>
            </div>

            {/* Interactive architecture visualizer container */}
            <div className="lg:col-span-5 bg-slate-950/80 border border-slate-900/80 rounded-xl p-5 space-y-4 font-mono text-xs">
              <div className="flex items-center gap-2 border-b border-slate-900 pb-2.5">
                <Network size={14} className="text-blue-400" />
                <span className="text-slate-200 font-bold text-[11px] uppercase tracking-wide">Esquema DevOps y Backend</span>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> FRONTEND CLIENT
                  </span>
                  <p className="text-[11px] text-slate-300 pl-2.5 leading-snug">{mainProject.architecture.frontend}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> BACKEND APPLICATION
                  </span>
                  <p className="text-[11px] text-slate-300 pl-2.5 leading-snug">{mainProject.architecture.backend}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> BASE DE DATOS
                  </span>
                  <p className="text-[11px] text-slate-300 pl-2.5 leading-snug">{mainProject.architecture.database}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> PROXY / SSL INVERSO
                  </span>
                  <p className="text-[11px] text-slate-300 pl-2.5 leading-snug">{mainProject.architecture.proxy}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> CORREO SMTP & TOKENS
                  </span>
                  <p className="text-[11px] text-slate-300 pl-2.5 leading-snug">{mainProject.architecture.email}</p>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800/80 p-2.5 rounded text-[10px] text-slate-400 mt-2 flex items-start gap-1.5">
                <Terminal size={12} className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  Administración interna de base de datos mediante phpMyAdmin accesible por túnel SSH.
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
