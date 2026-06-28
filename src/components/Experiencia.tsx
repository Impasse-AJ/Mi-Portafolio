import { Calendar, MapPin, Building, ChevronDown, ChevronUp, Code, Database, Server, ClipboardCheck } from 'lucide-react';
import { EXPERIENCE, WHAT_I_BRING } from '../data.ts';
import { TECH_ICONS } from '../techIcons.ts';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export default function Experiencia() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 28,
    mass: 0.55,
  });
  const timelineDotCenterY = useTransform(smoothScrollProgress, (progress) => {
    const travel = Math.max(timelineHeight - 16, 0);
    return 8 + progress * travel;
  });
  const timelineDotY = useTransform(timelineDotCenterY, (centerY) => centerY - 8);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const updateHeight = () => {
      setTimelineHeight(timeline.offsetHeight);
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(timeline);
    window.addEventListener('resize', updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':     return <Code      className="text-[#0891b2] dark:text-accent-cyan" size={18} />;
      case 'database': return <Database  className="text-[#0891b2] dark:text-accent-cyan" size={18} />;
      case 'server':   return <Server    className="text-[#0891b2] dark:text-accent-cyan" size={18} />;
      default:         return <ClipboardCheck className="text-[#0891b2] dark:text-accent-cyan" size={18} />;
    }
  };

  const toggleExpand = (idx: number) => {
    setExpanded(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="experience" className="space-y-12 scroll-mt-24">
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-mono font-bold tracking-widest text-[#0891b2] dark:text-accent-cyan uppercase">trayectoria</span>
        <h3 className="text-3xl font-display font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">Experiencia y aportación</h3>
        <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm md:text-base max-w-2xl">
          Experiencia práctica reciente en desarrollo web, tratamiento de datos y herramientas de trabajo profesional.
        </p>
      </motion.div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative pl-6 sm:pl-8 space-y-10 py-2">
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#d2d2d7] dark:bg-[#3a3a3c]" aria-hidden="true" />
        <motion.div
          className="absolute left-0 top-0 w-[2px] bg-[#0891b2] dark:bg-accent-cyan"
          style={{ height: timelineDotCenterY }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute -left-[7px] top-0 z-20 w-4 h-4 rounded-full bg-white dark:bg-[#111111] border-2 border-[#0891b2] dark:border-accent-cyan shadow-sm pointer-events-none"
          style={{ y: timelineDotY }}
          aria-hidden="true"
        >
          <span className="absolute inset-0.5 rounded-full bg-[#0891b2] dark:bg-accent-cyan" />
        </motion.div>

        {EXPERIENCE.map((item, idx) => {
          const isExpanded = expanded[idx];
          return (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              {/* Card */}
              <div className="rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] hover:border-[#86868b] dark:hover:border-[#6e6e73] transition-all duration-300 p-6 md:p-8 space-y-5 shadow-sm dark:shadow-none">

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-[#0891b2]/8 dark:bg-accent-cyan/10 border border-[#0891b2]/15 dark:border-accent-cyan/20 text-[10px] font-mono font-bold tracking-wide uppercase text-[#0891b2] dark:text-accent-cyan">
                      Prácticas Profesionales
                    </span>
                    <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-display font-bold text-xl tracking-tight">
                      {item.role}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-[#6e6e73] dark:text-[#6e6e73] font-mono">
                      <span className="flex items-center gap-1.5"><Building size={12} />{item.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={12} />{item.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar size={12} />{item.period}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleExpand(idx)}
                    className="flex md:hidden items-center gap-1.5 px-3 py-1.5 border border-[#d2d2d7] dark:border-[#3a3a3c] bg-white dark:bg-[#1c1c1e] hover:bg-[#f5f5f7] dark:hover:bg-[#2c2c2e] rounded-lg text-xs font-mono text-[#1d1d1f] dark:text-[#f5f5f7] cursor-pointer w-fit transition-colors"
                  >
                    {isExpanded ? <><span>Ocultar</span><ChevronUp size={12} /></> : <><span>Ver más</span><ChevronDown size={12} /></>}
                  </button>
                </div>

                {isExpanded && (
                  <div className="space-y-4 animate-fadeIn">
                    <p className="text-[#1d1d1f] dark:text-[#d1d1d6] text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2.5">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#86868b] dark:text-[#6e6e73] font-bold">Actividades principales</h5>
                      <ul className="space-y-2">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-sm text-[#6e6e73] dark:text-[#a1a1a6] leading-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0891b2] dark:bg-accent-cyan mt-1.5 flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
                      <h5 className="text-[10px] font-mono uppercase tracking-widest text-[#86868b] dark:text-[#6e6e73] font-bold">Herramientas utilizadas</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => {
                          const Icon = TECH_ICONS[skill];
                          return (
                            <span
                              key={sIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] text-xs font-mono text-[#1d1d1f] dark:text-[#f5f5f7]"
                            >
                              {Icon && <Icon size={11} className="flex-shrink-0 opacity-70" />}
                              {skill}
                            </span>
                          );
                        })}
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
      <div className="space-y-6 pt-4">
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#0891b2] dark:text-accent-cyan uppercase">qué puedo aportar</span>
          <h3 className="text-2xl font-display font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">Base práctica para integrarme en un equipo</h3>
          <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm max-w-2xl">
            Cuatro áreas donde puedo aportar desde un rol junior, con margen para seguir aprendiendo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHAT_I_BRING.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] hover:border-[#86868b] dark:hover:border-[#6e6e73] hover:-translate-y-0.5 transition-all duration-200 shadow-sm dark:shadow-none"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] flex items-center justify-center flex-shrink-0">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-2 min-w-0">
                  <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold text-sm">{item.title}</h4>
                  <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-xs leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.techs.map((tech) => {
                      const Icon = TECH_ICONS[tech];
                      return (
                        <span key={tech} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] text-[10px] font-mono text-[#6e6e73] dark:text-[#a1a1a6]">
                          {Icon && <Icon size={10} className="flex-shrink-0 opacity-70" />}
                          {tech}
                        </span>
                      );
                    })}
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
