import { Printer, X, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

interface ModalCurriculumProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCurriculum({ isOpen, onClose }: ModalCurriculumProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fadeIn print:absolute print:inset-0 print:bg-white print:p-0" role="dialog" aria-modal="true" aria-label="Currículum vitae de Abraham Pauta">
      
      {/* Modal element */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden print:border-none print:shadow-none print:max-h-none print:overflow-visible print:bg-white print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header toolbar for web preview - Hidden when printing */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-slate-300">CURRÍCULUM VITAE JUNIOR</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Printer size={13} />
              Imprimir / Guardar como PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              title="Cerrar modal"
              aria-label="Cerrar CV"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Dynamic CV Canvas element - Rendered in a high contrast style */}
        <div className="p-6 md:p-10 overflow-y-auto bg-white text-slate-800 max-w-4xl mx-auto font-sans leading-relaxed tracking-normal print:p-0 print:overflow-visible">
          
          {/* Main header block */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-1.5">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-blue-700 font-mono text-sm uppercase font-bold tracking-wider">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-slate-500 font-medium max-w-xl">
                Desarrollador web full stack junior formado en DAW, con practicas en EXA Formacion y un proyecto full stack desplegado en produccion.
              </p>
            </div>

            {/* Quick contact tags */}
            <div className="space-y-1.5 text-xs text-slate-600 font-mono text-left md:text-right">
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>{PERSONAL_INFO.email}</span>
                <Mail size={12} className="text-blue-600" />
              </div>
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>linkedin.com/in/abraham-pauta</span>
                <Linkedin size={12} className="text-blue-600" />
              </div>
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>github.com/Impasse-AJ</span>
                <Github size={12} className="text-blue-600" />
              </div>
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>{PERSONAL_INFO.location}</span>
                <MapPin size={12} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Two Columns Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* COLUMN LEFT - Experience & Projects */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Experiencia */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-slate-900 border-b border-slate-350 pb-1.5 uppercase tracking-widest">
                  Experiencia Técnica Reciente
                </h3>
                
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-sm text-slate-900">Prácticas de Desarrollo Web</span>
                      <span className="font-mono text-slate-500 font-semibold">2025 - Presente</span>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[11px] font-bold text-blue-700 leading-none">
                      <span>EXA Formación</span>
                      <span className="font-normal text-slate-500">Madrid, España</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                    <li>Analisis de fuentes y datos para <strong className="text-slate-800">web scraping</strong>.</li>
                    <li>Diseño de estructuras <strong className="text-slate-800">JSON</strong> reutilizables para organizar informacion.</li>
                    <li>Automatizacion y preparacion de datos con <strong className="text-slate-800">Python</strong>.</li>
                    <li>Apoyo en modulos e interfaces utilizando <strong className="text-slate-800">TypeScript y React</strong>.</li>
                    <li>Monitorizacion mediante <strong className="text-slate-800">cPanel</strong>.</li>
                    <li>Gestion de documentacion, tareas y comunicacion con <strong className="text-slate-800">Microsoft 365</strong> (OneDrive, Planner, Teams, Outlook, Excel).</li>
                  </ul>
                </div>
              </div>

              {/* Proyectos */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-slate-900 border-b border-slate-350 pb-1.5 uppercase tracking-widest">
                  Proyectos Técnicos Destacados
                </h3>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-900 text-sm">Pokémon World Map</span>
                      <span className="font-mono text-[10px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded border border-green-200">En Producción</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal">
                      Aplicación web full stack desplegada en producción que combina mapa mundial interactivo, datos reales de países, clima actual y recomendaciones Pokémon según la temperatura.
                    </p>
                    <div className="font-mono text-[11px] text-slate-500 leading-normal pl-2.5 border-l-2 border-blue-500 space-y-0.5">
                      <p>• <strong className="text-slate-700">Frontend:</strong> React + Vite</p>
                      <p>• <strong className="text-slate-700">Backend & API:</strong> Java, Spring Boot, registro, login, sesiones y confirmación por email</p>
                      <p>• <strong className="text-slate-700">Base de datos:</strong> MySQL</p>
                      <p>• <strong className="text-slate-700">Infraestructura:</strong> Docker Compose, VPS Linux, Caddy y Cloudflare</p>
                      <p>• <strong className="text-slate-700">Email SMTP:</strong> Brevo SMTP para confirmación de cuenta</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* COLUMN RIGHT - Skills and Education */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Formación */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-slate-900 border-b border-slate-350 pb-1.5 uppercase tracking-widest">
                  Formación
                </h3>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-900 leading-snug">Grado Superior en Desarrollo de Aplicaciones Web (DAW)</p>
                    <p className="text-[10px] font-semibold text-blue-700 font-mono">IES Clara del Rey</p>
                    <p className="text-[10px] text-slate-400 font-mono">2023 - 2025 | Completado</p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-900 leading-snug">Bachillerato de Ciencias</p>
                    <p className="text-[10px] font-semibold text-slate-500 font-mono">Col. Natividad de Nuestra Señora</p>
                    <p className="text-[10px] text-slate-400 font-mono">Hasta 2023 | Completado</p>
                  </div>
                </div>
              </div>

              {/* Aptitudes / Skill Hub */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-slate-900 border-b border-slate-350 pb-1.5 uppercase tracking-widest">
                  Tecnologías & Stack
                </h3>

                <div className="space-y-3 font-mono text-[11px] text-slate-700">
                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-blue-700">Frontend:</span>
                    <p className="leading-snug">React, TypeScript, JavaScript, Vite, Tailwind</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-blue-700">Backend & DB:</span>
                    <p className="leading-snug">Java, Spring Boot, PHP, Symfony, APIs REST, MySQL</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-blue-700">Sistemas & DevOps:</span>
                    <p className="leading-snug">Docker, Docker Compose, Linux, VPS, Caddy, Cloudflare, cPanel</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-blue-700">Datos & Scraping:</span>
                    <p className="leading-snug">Python, scraping, JSON, MySQL</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-slate-900 uppercase text-[10px] tracking-wider text-blue-700">Herramientas:</span>
                    <p className="leading-snug">Git/GitHub, Microsoft 365, Android Studio, Odoo basico</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Footer warning inside printable template */}
          <div className="border-t border-slate-200 mt-8 pt-4 text-center text-[10px] text-slate-400 font-mono">
            Documento generado desde abrahampauta.com. No incluye telefono publico por privacidad.
          </div>

        </div>

        {/* Modal web footer bar - Hidden when printing */}
        <div className="flex items-center justify-end px-6 py-4 bg-slate-950 border-t border-slate-800 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer"
          >
            Cerrar vista previa
          </button>
        </div>

      </div>

    </div>
  );
}
