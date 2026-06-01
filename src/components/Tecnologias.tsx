import { 
  Layout, 
  Database, 
  Binary, 
  Server, 
  Settings, 
  Layers,
  Sparkles 
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data.ts';

export default function Tecnologias() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout':
        return <Layout className="text-blue-400" size={20} />;
      case 'database':
        return <Database className="text-teal-400" size={20} />;
      case 'binary':
        return <Binary className="text-emerald-400" size={20} />;
      case 'server':
        return <Server className="text-indigo-400" size={20} />;
      case 'settings':
        return <Settings className="text-purple-400" size={20} />;
      default:
        return <Layers className="text-blue-400" size={20} />;
    }
  };

  return (
    <section id="tech" className="space-y-10 scroll-mt-24">
      
      {/* Title block */}
      <div className="space-y-2 text-left">
        <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">stack técnico</span>
        <h3 className="text-3xl font-display font-semibold text-slate-100">Tecnologías y herramientas</h3>
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
          Stack agrupado por áreas para mostrar lo que uso en prácticas, proyectos académicos y despliegues propios.
        </p>
      </div>

      {/* Grid of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {TECH_CATEGORIES.map((category) => (
          <div 
            key={category.id}
            className="p-5 rounded-2xl bg-slate-950/40 hover:bg-slate-950/60 border border-slate-900 hover:border-slate-800/80 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h4 className="text-slate-100 font-semibold text-sm tracking-tight">{category.title}</h4>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-900/60">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-2 py-1 rounded font-mono text-[10px] tracking-wide bg-slate-900 text-slate-400 border border-slate-800/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* DevOps highlight note */}
      <div className="p-4 rounded-xl bg-indigo-950/10 border border-indigo-500/10 flex items-start gap-3">
        <Sparkles size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-normal text-slate-400 font-mono">
          <span className="text-slate-200 font-semibold">Nota de despliegue:</span> Mantengo proyectos propios en una VPS Linux con Docker Compose, Caddy y Cloudflare, una base practica para entender entornos de produccion reales.
        </div>
      </div>

    </section>
  );
}
