import {
  Layout,
  Database,
  Binary,
  Server,
  Settings,
  Sparkles
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data.ts';

const categoryStyles: Record<string, { icon: string; border: string; bg: string; dot: string }> = {
  layout:   { icon: 'text-accent-cyan',   border: 'border-accent-cyan/15 hover:border-accent-cyan/30',   bg: 'bg-accent-cyan/4',   dot: 'bg-accent-cyan' },
  binary:   { icon: 'text-accent-violet', border: 'border-accent-violet/15 hover:border-accent-violet/30', bg: 'bg-accent-violet/4', dot: 'bg-accent-violet' },
  database: { icon: 'text-accent-mint',   border: 'border-accent-mint/15 hover:border-accent-mint/30',   bg: 'bg-accent-mint/4',   dot: 'bg-accent-mint' },
  server:   { icon: 'text-blue-300',      border: 'border-blue-400/15 hover:border-blue-400/30',          bg: 'bg-blue-400/4',      dot: 'bg-blue-400' },
  settings: { icon: 'text-slate-300',     border: 'border-slate-500/20 hover:border-slate-400/35',        bg: 'bg-slate-400/3',     dot: 'bg-slate-400' },
};

export default function Tecnologias() {
  const getCategoryIcon = (iconName: string, styleClass: string) => {
    const size = 18;
    switch (iconName) {
      case 'layout':   return <Layout   className={styleClass} size={size} />;
      case 'database': return <Database className={styleClass} size={size} />;
      case 'binary':   return <Binary   className={styleClass} size={size} />;
      case 'server':   return <Server   className={styleClass} size={size} />;
      case 'settings': return <Settings className={styleClass} size={size} />;
      default:         return <Layout   className={styleClass} size={size} />;
    }
  };

  return (
    <section id="tech" className="space-y-10 scroll-mt-24">

      <div className="space-y-2 text-left">
        <span className="text-xs font-mono font-bold tracking-widest text-accent-cyan uppercase">stack técnico</span>
        <h3 className="text-3xl font-display font-semibold text-white">Tecnologías y herramientas</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Stack agrupado por áreas para mostrar lo que uso en prácticas, proyectos académicos y despliegues propios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {TECH_CATEGORIES.map((category) => {
          const style = categoryStyles[category.iconName] ?? categoryStyles.settings;
          return (
            <div
              key={category.id}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${style.border} ${style.bg}`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${style.bg} ${style.border}`}>
                    {getCategoryIcon(category.iconName, style.icon)}
                  </div>
                  <h4 className="text-white font-semibold text-sm tracking-tight leading-tight">{category.title}</h4>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-lg font-mono text-[10px] tracking-wide bg-slate-900/80 text-slate-300 border border-white/7"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-accent-cyan/4 border border-accent-cyan/12 flex items-start gap-3">
        <Sparkles size={15} className="text-accent-cyan flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-normal text-slate-400 font-mono">
          <span className="text-white font-semibold">Nota de despliegue:</span>{' '}
          Mantengo proyectos propios en una VPS Linux con Docker Compose, Caddy y Cloudflare, una base práctica para entender entornos de producción reales.
        </div>
      </div>
    </section>
  );
}
