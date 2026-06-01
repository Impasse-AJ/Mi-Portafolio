import { Calendar, MapPin, Building, ChevronDown, ChevronUp, Code, Database, Server, ClipboardCheck } from 'lucide-react';
import { EXPERIENCE, WHAT_I_BRING } from '../data.ts';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Experiencia() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="text-blue-400" size={20} />;
      case 'database':
        return <Database className="text-teal-400" size={20} />;
      case 'server':
        return <Server className="text-indigo-400" size={20} />;
      default:
        return <ClipboardCheck className="text-purple-400" size={20} />;
    }
  };

  const toggleExpand = (idx: number) => {
    setExpanded(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <section id="experience" className="space-y-12 scroll-mt-24">
      <motion.div 
        className="space-y-2 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">trayectoria</span>
        <h3 className="text-3xl font-display font-semibold text-slate-100">Experiencia y aportación</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Experiencia practica reciente en desarrollo web, tratamiento de datos y herramientas de trabajo profesional.
        </p>
      </motion.div>

      <div className="relative pl-6 sm:pl-8 border-l border-slate-900 space-y-12 py-2">
        {EXPERIENCE.map((item, idx) => {
          const isItemExpanded = expanded[idx];
          return (
            <motion.div 
              key={idx} 
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center top-1.5 z-10 group-hover:scale-125 transition-transform duration-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              </div>

              {/* Card wrapper */}
              <div className="rounded-2xl bg-slate-950/40 hover:bg-slate-950/60 border border-slate-900 hover:border-slate-800/80 transition-all duration-300 p-6 md:p-8 space-y-5 shadow-lg shadow-blue-500/1">
                
                {/* Header section of experience card */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="p-1 px-2.5 rounded bg-blue-600/10 text-blue-400 border border-blue-500/15 text-[10px] font-mono font-bold tracking-wide uppercase">
                        Prácticas Profesionales
                      </span>
                    </div>
                    <h4 className="text-slate-100 font-display font-semibold text-xl tracking-tight">
                      {item.role}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Building size={13} className="text-slate-500" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-slate-500" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-slate-500" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex md:hidden items-center justify-center gap-1 px-3 py-1.5 border border-slate-800 hover:border-slate-700 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 cursor-pointer w-fit self-start"
                  >
                    <span>{isItemExpanded ? 'Ocultar info' : 'Ver más detalles'}</span>
                    {isItemExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                </div>

                {/* Body, text list */}
                {isItemExpanded && (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-3 pt-1">
                      <h5 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">Actividades principales:</h5>
                      <ul className="space-y-2.5">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-400 leading-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 mt-1.5 flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Chips Grid */}
                    <div className="space-y-2 pt-4 border-t border-slate-900/60">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Herramientas utilizadas:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="px-2.5 py-1 rounded-lg bg-blue-950/15 border border-blue-500/15 text-xs text-blue-400 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">qué puedo aportar</span>
          <h3 className="text-2xl font-display font-semibold text-slate-100">Base práctica para integrarme en un equipo</h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
            Cuatro áreas donde puedo aportar desde un rol junior, con margen para seguir aprendiendo y asumir más responsabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHAT_I_BRING.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-slate-800/80 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-100 font-semibold text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.techs.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
