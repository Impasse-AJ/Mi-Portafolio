import { Calendar, MapPin, Building, ChevronDown, ChevronUp, Code, Database, Server, ClipboardCheck } from 'lucide-react';
import { EXPERIENCE, WHAT_I_BRING } from '../data.ts';
import { useState } from 'react';
import { motion } from 'motion/react';

export default function Experiencia() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="text-accent-cyan" size={18} />;
      case 'database':
        return <Database className="text-accent-mint" size={18} />;
      case 'server':
        return <Server className="text-accent-violet" size={18} />;
      default:
        return <ClipboardCheck className="text-blue-400" size={18} />;
    }
  };

  const getCardAccent = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return 'border-accent-cyan/15 hover:border-accent-cyan/30 bg-accent-cyan/3';
      case 'database':
        return 'border-accent-mint/15 hover:border-accent-mint/30 bg-accent-mint/3';
      case 'server':
        return 'border-accent-violet/15 hover:border-accent-violet/30 bg-accent-violet/3';
      default:
        return 'border-blue-500/15 hover:border-blue-400/30 bg-blue-500/3';
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return 'bg-accent-cyan/10 border-accent-cyan/20';
      case 'database':
        return 'bg-accent-mint/10 border-accent-mint/20';
      case 'server':
        return 'bg-accent-violet/10 border-accent-violet/20';
      default:
        return 'bg-blue-500/10 border-blue-500/20';
    }
  };

  const toggleExpand = (idx: number) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="experience" className="space-y-12 scroll-mt-24">
      <motion.div
        className="space-y-2 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan uppercase">trayectoria</span>
        <h3 className="text-3xl font-display font-semibold text-white">Experiencia y aportación</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Experiencia práctica reciente en desarrollo web, tratamiento de datos y herramientas de trabajo profesional.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-accent-cyan/15 space-y-12 py-2">
        {EXPERIENCE.map((item, idx) => {
          const isItemExpanded = expanded[idx];
          return (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] w-4 h-4 rounded-full bg-slate-950 border-2 border-accent-cyan flex items-center justify-center top-1.5 z-10 group-hover:scale-125 transition-transform duration-200 shadow-sm shadow-accent-cyan/30">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
              </div>

              {/* Card */}
              <div className="rounded-2xl bg-slate-900/40 hover:bg-slate-900/60 border border-white/8 hover:border-white/15 transition-all duration-300 p-6 md:p-8 space-y-5 shadow-lg shadow-black/20">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-accent-cyan/8 text-accent-cyan border border-accent-cyan/20 text-[10px] font-mono font-bold tracking-wide uppercase">
                        Prácticas Profesionales
                      </span>
                    </div>
                    <h4 className="text-white font-display font-semibold text-xl tracking-tight">
                      {item.role}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1.5">
                        <Building size={12} className="text-slate-500" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-slate-500" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-slate-500" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex md:hidden items-center justify-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-accent-cyan/30 bg-white/4 hover:bg-accent-cyan/5 rounded-lg text-xs font-mono text-slate-300 cursor-pointer w-fit self-start transition-colors"
                  >
                    <span>{isItemExpanded ? 'Ocultar info' : 'Ver más detalles'}</span>
                    {isItemExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                  </button>
                </div>

                {isItemExpanded && (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-3 pt-1">
                      <h5 className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold">Actividades principales:</h5>
                      <ul className="space-y-2.5">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-400 leading-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 mt-1.5 flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-white/6">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Herramientas utilizadas:</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-accent-cyan/6 border border-accent-cyan/15 text-xs text-accent-cyan/90 font-mono"
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

      {/* What I bring */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan uppercase">qué puedo aportar</span>
          <h3 className="text-2xl font-display font-semibold text-white">Base práctica para integrarme en un equipo</h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
            Cuatro áreas donde puedo aportar desde un rol junior, con margen para seguir aprendiendo y asumir más responsabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHAT_I_BRING.map((item) => (
            <div
              key={item.title}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${getCardAccent(item.icon)}`}
            >
              <div className="flex items-start gap-3.5">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${getIconBg(item.icon)}`}>
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-2 min-w-0">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.techs.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded-lg bg-slate-900/80 border border-white/8 text-[10px] font-mono text-slate-400">
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
