import { Code, Database, Server, Compass, CheckCircle2, Cpu } from 'lucide-react';
import { PERSONAL_INFO, WHAT_I_BRING } from '../data.ts';

export default function About() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="text-blue-400" size={24} />;
      case 'database':
        return <Database className="text-teal-400" size={24} />;
      case 'server':
        return <Server className="text-indigo-400" size={24} />;
      case 'users':
        return <Cpu className="text-purple-400" size={24} />;
      default:
        return <Compass className="text-blue-400" size={24} />;
    }
  };

  return (
    <section id="about" className="space-y-16 scroll-mt-24">
      {/* Grid of Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Decorative code block */}
        <div className="col-span-1 lg:col-span-5 relative group order-last lg:order-first">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800/80 p-5 font-mono text-xs leading-relaxed text-slate-300 shadow-xl overflow-hidden min-h-[280px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-3">
              <span className="text-[11px] text-slate-500 font-semibold tracking-wider">developer_profile.ts</span>
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            </div>
            
            <div className="space-y-1 my-3 text-[11px] leading-relaxed">
              <p><span className="text-blue-400">const</span> <span className="text-purple-400">developer</span> = &#123;</p>
              <p className="pl-4"><span className="text-slate-400">fullName:</span> <span className="text-green-300">"{PERSONAL_INFO.name}"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">dawDegree:</span> <span className="text-blue-300">true</span>,</p>
              <p className="pl-4"><span className="text-slate-400">location:</span> <span className="text-green-300">"{PERSONAL_INFO.location}"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">coreFocus:</span> <span className="text-slate-100">[</span><span className="text-green-300">"FullStack-Web"</span>, <span className="text-green-300">"Scraping"</span>, <span className="text-green-300">"DevOps"</span><span className="text-slate-100">]</span>,</p>
              <p className="pl-4"><span className="text-slate-400">currentPractices:</span> <span className="text-green-300">"EXA Formacion"</span>,</p>
              <p className="pl-4"><span className="text-slate-400">autonomousDeployment:</span> <span className="text-blue-300">true</span>,</p>
              <p className="pl-4"><span className="text-slate-400">interest:</span> <span className="text-green-300">"Web apps, data and practical deployments"</span></p>
              <p>&#125;;</p>
            </div>

            <div className="border-t border-slate-900 pt-3 text-[10px] text-slate-500 flex items-center justify-between leading-none mt-2">
              <span>LINES: 10</span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>

        {/* Text Area */}
        <div className="col-span-1 lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">perfil profesional</span>
            <h3 className="text-3xl font-display font-semibold text-slate-100">Sobre mí</h3>
          </div>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-xs text-slate-200 uppercase font-mono tracking-wider">Desarrollo Web Full Stack</h4>
                <p className="text-xs text-slate-400 mt-0.5">Creación de sistemas completos (Frontend, backend, bases de datos).</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-xs text-slate-200 uppercase font-mono tracking-wider">Datos e Ingeniería JSON</h4>
                <p className="text-xs text-slate-400 mt-0.5">Analisis para scraping, automatizacion con Python y estructuracion JSON.</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-xs text-slate-200 uppercase font-mono tracking-wider">Despliegue e Infraestructura</h4>
                <p className="text-xs text-slate-400 mt-0.5">Despliegues propios en VPS, contenedores Docker y proxy inverso.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-xs text-slate-200 uppercase font-mono tracking-wider">Metodologías Colaborativas</h4>
                <p className="text-xs text-slate-400 mt-0.5">Trabajo organizado con Microsoft 365, Planner, Teams, Outlook y OneDrive.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Qué puedo aportar */}
      <div className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">valor diferencial</span>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-slate-100">¿Qué puedo aportar a tu equipo?</h3>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto">
            Habilidades practicas y realistas para integrarme en equipos de desarrollo y seguir creciendo con buenas bases tecnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WHAT_I_BRING.map((item, idx) => (
            <div 
              key={idx} 
              className="group p-6 rounded-2xl bg-slate-950/40 hover:bg-slate-950/70 border border-slate-900 hover:border-slate-800/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-2">
                  <h4 className="text-slate-100 font-semibold text-base tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Technologies array in card footer */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-900">
                {item.techs.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
