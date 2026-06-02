import { GraduationCap, Landmark, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ACADEMIC_BACKGROUND } from '../data.ts';

export default function Formacion() {
  return (
    <section id="formation" className="space-y-10 scroll-mt-24">
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0891b2] dark:text-accent-cyan uppercase">formación reglada</span>
        <h3 className="text-3xl font-display font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">Formación</h3>
        <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm md:text-base max-w-2xl">
          Formación académica reglada en desarrollo web, programación, bases de datos y despliegue de aplicaciones.
        </p>
      </div>

      <div className="space-y-4">
        {ACADEMIC_BACKGROUND.map((item, idx) => {
          const isDAW = item.degree.includes('DAW');
          return (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 flex flex-col md:flex-row md:items-start justify-between gap-6 shadow-sm dark:shadow-none bg-[#0891b2]/4 dark:bg-accent-cyan/6 border-[#0891b2]/15 dark:border-accent-cyan/20 hover:border-[#0891b2]/25 dark:hover:border-accent-cyan/35"
            >
              <div className="space-y-3 md:max-w-3xl">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl border flex-shrink-0 bg-[#0891b2]/8 dark:bg-accent-cyan/10 border-[#0891b2]/15 dark:border-accent-cyan/20">
                    <GraduationCap size={18} className="text-[#0891b2] dark:text-accent-cyan" />
                  </div>
                  <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-display font-bold text-lg leading-snug">
                    {item.degree}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#6e6e73] dark:text-[#6e6e73]">
                  <span className="flex items-center gap-1.5"><Landmark size={12} />{item.institution}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={12} />{item.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={12} />{item.period}</span>
                </div>

                {item.description && (
                  <p className="text-sm leading-relaxed text-[#6e6e73] dark:text-[#a1a1a6]">
                    {item.description}
                  </p>
                )}

                {isDAW && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      'Sistemas Informáticos',
                      'Bases de Datos SQL',
                      'Entornos de Desarrollo',
                      'Diseño de Interfaces Web',
                      'Despliegue de Aplicaciones Web',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium bg-[#0891b2]/8 dark:bg-accent-cyan/10 border border-[#0891b2]/15 dark:border-accent-cyan/20 text-[#0891b2] dark:text-accent-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="self-start">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-green-50 dark:bg-green-500/8 border border-green-200 dark:border-green-500/20 text-green-700 dark:text-green-400">
                  <CheckCircle size={10} />
                  COMPLETADO
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
