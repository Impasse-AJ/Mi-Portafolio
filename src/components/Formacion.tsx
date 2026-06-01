import { GraduationCap, Landmark, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ACADEMIC_BACKGROUND } from '../data.ts';

export default function Formacion() {
  return (
    <section id="formation" className="space-y-12 scroll-mt-24">
      <div className="space-y-2 text-left">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">formación reglada</span>
        <h3 className="text-3xl font-display font-semibold text-slate-100">Formación</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Formacion academica reglada en desarrollo web, programacion, bases de datos y despliegue de aplicaciones.
        </p>
      </div>

      <div className="space-y-6">
        {ACADEMIC_BACKGROUND.map((item, idx) => {
          const isDAW = item.degree.includes('DAW');
          return (
            <div 
              key={idx}
              className={`p-6 md:p-8 rounded-2xl group border transition-all duration-300 flex flex-col md:flex-row md:items-start justify-between gap-6 ${
                isDAW 
                  ? 'bg-blue-950/10 border-blue-500/20 shadow-lg shadow-blue-500/1 hover:border-blue-500/30' 
                  : 'bg-slate-950/30 border-slate-900 hover:border-slate-800'
              }`}
            >
              <div className="space-y-3 md:max-w-3xl">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl border ${
                    isDAW ? 'bg-blue-900/20 border-blue-500/20 text-blue-400' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}>
                    <GraduationCap size={18} />
                  </div>
                  <h4 className="text-slate-100 font-display font-bold text-lg leading-snug">
                    {item.degree}
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Landmark size={13} className="text-slate-500" />
                    {item.institution}
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

                {item.description && (
                  <p className="text-xs md:text-sm leading-relaxed pt-1 text-slate-400">
                    {item.description}
                  </p>
                )}

                {isDAW && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-[10px] font-mono text-blue-400 font-semibold border border-blue-900/30">
                      Sistemas Informáticos
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-[10px] font-mono text-blue-400 font-semibold border border-blue-900/30">
                      Bases de Datos SQL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-[10px] font-mono text-blue-400 font-semibold border border-blue-900/30">
                      Entornos de Desarrollo
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-[10px] font-mono text-blue-400 font-semibold border border-blue-900/30">
                      Diseño de Interfaces Web
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-950 text-[10px] font-mono text-blue-400 font-semibold border border-blue-900/30">
                      Despliegue de Aplicaciones Web
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1.5 h-full self-start">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold bg-green-500/10 border border-green-500/20 text-green-400">
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
