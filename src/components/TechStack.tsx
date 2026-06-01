/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Layout, 
  Database, 
  Binary, 
  Server, 
  Settings, 
  Search, 
  X,
  Layers,
  Sparkles 
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data.ts';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

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

  const categories = [
    { id: 'all', label: 'Todo el Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'scraping', label: 'Datos & Scraping' },
    { id: 'devops', label: 'Sistemas & VPS' },
    { id: 'tools', label: 'Productividad' },
  ];

  // Filtering logic
  const filteredCategories = TECH_CATEGORIES.filter(cat => {
    // Category match
    const categoryMatch = selectedCategory === 'all' || cat.id === selectedCategory;
    
    // Search match
    if (!searchQuery) return categoryMatch;
    
    const query = searchQuery.toLowerCase();
    const titleMatch = cat.title.toLowerCase().includes(query);
    const descMatch = cat.description.toLowerCase().includes(query);
    const skillsMatch = cat.skills.some(skill => skill.toLowerCase().includes(query));
    
    return categoryMatch && (titleMatch || descMatch || skillsMatch);
  });

  // Calculate total distinct skills for resume/quick info
  const totalSkills = TECH_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="tech" className="space-y-12 scroll-mt-24">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2 text-left">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">ecosistema de trabajo</span>
          <h3 className="text-3xl font-display font-semibold text-slate-100">Stack Técnico & Herramientas</h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl">
            Herramientas y tecnologías que domino y utilizo activamente para dar vida a proyectos estables, escalables y monitorizados.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar tecnología (ej. Docker)..."
            className="w-full pl-9 pr-8 py-2 bg-slate-950 border border-slate-800 focus:border-blue-500/50 rounded-xl text-xs font-mono text-slate-300 placeholder-slate-600 focus:outline-none transition-all"
          />
          <Search size={14} className="absolute left-3 top-3 text-slate-600" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Tabs list filter */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-900 pb-1 font-mono text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-2 border-b-2 font-medium tracking-wide transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of categories */}
      {filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div 
              key={category.id}
              className="p-6 rounded-2xl bg-slate-950/40 hover:bg-slate-950/60 border border-slate-900 hover:border-slate-800/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h4 className="text-slate-100 font-semibold text-sm tracking-tight">{category.title}</h4>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed min-h-[40px]">
                  {category.description}
                </p>
              </div>

              {/* Tag collection */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-900/60">
                {category.skills.map((skill, sIdx) => {
                  const isMatch = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                  return (
                    <span 
                      key={sIdx} 
                      className={`px-2 py-1 rounded font-mono text-[10px] tracking-wide transition-all ${
                        isMatch
                          ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/60'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-slate-900 rounded-2xl bg-slate-950/20 space-y-2">
          <p className="text-slate-400 text-sm font-mono font-semibold">No se encontraron tecnologías coincidentes.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            className="text-xs text-blue-400 hover:underline hover:text-blue-300 font-mono"
          >
            Restaurar filtros de búsqueda
          </button>
        </div>
      )}

      {/* DevOps highlight note */}
      <div className="p-4 rounded-xl bg-indigo-950/10 border border-indigo-500/10 flex items-start gap-3">
        <Sparkles size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-normal text-slate-400 font-mono">
          <span className="text-slate-200 font-semibold">Nota de Producción:</span> Toda esta infraestructura, incluidos mis dominios DNS de Cloudflare, proxies inversos HTTPS con renovación periódica y redes contenerizadas Docker, está configurada manualmente en mi propia VPS Linux para replicar entornos de producción empresariales de forma real.
        </div>
      </div>

    </section>
  );
}
