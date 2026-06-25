import { Layout, Database, Binary, Server, Settings } from 'lucide-react';
import { TECH_CATEGORIES } from '../data.ts';
import { TECH_ICONS } from '../techIcons.ts';

export default function Tecnologias() {
  const getCategoryIcon = (iconName: string) => {
    const size = 18;
    switch (iconName) {
      case 'layout':   return <Layout   className="text-[#0891b2] dark:text-accent-cyan"   size={size} />;
      case 'binary':   return <Binary   className="text-violet-600 dark:text-accent-violet" size={size} />;
      case 'database': return <Database className="text-emerald-600 dark:text-accent-mint"  size={size} />;
      case 'server':   return <Server   className="text-orange-500 dark:text-orange-300"    size={size} />;
      case 'settings': return <Settings className="text-[#6e6e73] dark:text-[#a1a1a6]"     size={size} />;
      default:         return <Layout   className="text-[#0891b2] dark:text-accent-cyan"   size={size} />;
    }
  };

  return (
    <section id="tech" className="space-y-10 scroll-mt-24">

      <div className="space-y-2">
        <span className="text-xs font-mono font-bold tracking-widest text-[#0891b2] dark:text-accent-cyan uppercase">stack técnico</span>
        <h3 className="text-3xl font-display font-bold text-[#1d1d1f] dark:text-[#f5f5f7]">Tecnologías y herramientas</h3>
        <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm md:text-base max-w-2xl">
          Stack agrupado por áreas para mostrar lo que uso en prácticas, proyectos académicos y despliegues propios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {TECH_CATEGORIES.map((category) => (
          <div
            key={category.id}
            className="p-5 rounded-2xl bg-white dark:bg-[#1c1c1e] border border-[#d2d2d7] dark:border-[#3a3a3c] hover:border-[#86868b] dark:hover:border-[#6e6e73] hover:-translate-y-0.5 transition-colors duration-150 shadow-sm dark:shadow-none"
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#f5f5f7] dark:bg-white/5 border border-[#d2d2d7] dark:border-[#3a3a3c] flex items-center justify-center">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold text-sm leading-tight">{category.title}</h4>
              </div>

              <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-xs leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#d2d2d7] dark:border-[#3a3a3c]">
                {category.skills.map((skill) => {
                  const Icon = TECH_ICONS[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg font-mono text-[10px] bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-[#d2d2d7] dark:border-[#3a3a3c] text-[#1d1d1f] dark:text-[#d1d1d6]"
                    >
                      {Icon && <Icon size={10} className="flex-shrink-0 opacity-75" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-[#0066cc]/4 dark:bg-[#2997ff]/6 border border-[#0066cc]/12 dark:border-[#2997ff]/15 flex items-start gap-3">
        <Server size={15} className="text-[#0891b2] dark:text-accent-cyan flex-shrink-0 mt-0.5" />
        <p className="text-xs leading-normal text-[#1d1d1f] dark:text-[#d1d1d6]">
          <span className="font-semibold">Nota de despliegue:</span>{' '}
          Mantengo proyectos propios en una VPS Linux con Docker Compose, Caddy y Cloudflare, una base práctica para entender entornos de producción reales.
        </p>
      </div>
    </section>
  );
}
