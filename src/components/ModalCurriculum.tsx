import { Printer, X, Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data.ts';

interface ModalCurriculumProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalCurriculum({ isOpen, onClose }: ModalCurriculumProps) {
  if (!isOpen) return null;

  const handlePrint = () => window.print();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn print:absolute print:inset-0 print:bg-white print:p-0"
      role="dialog"
      aria-modal="true"
      aria-label="Currículum vitae de Abraham Pauta"
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-[#d2d2d7] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden print:border-none print:shadow-none print:max-h-none print:overflow-visible print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#f5f5f7] border-b border-[#d2d2d7] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span>
            <span className="text-xs font-mono font-bold text-[#1d1d1f]">CURRÍCULUM VITAE JUNIOR</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#0066cc] hover:bg-[#0077ed] text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <Printer size={13} />
              Imprimir / PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-[#e8e8ed] rounded-lg transition-colors cursor-pointer"
              aria-label="Cerrar CV"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* CV content — always white for print */}
        <div className="p-6 md:p-10 overflow-y-auto bg-white text-[#1d1d1f] max-w-4xl mx-auto font-sans leading-relaxed print:p-0 print:overflow-visible">

          {/* Header */}
          <div className="border-b-2 border-[#1d1d1f] pb-5 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-1.5">
              <h1 className="text-3xl font-extrabold text-[#1d1d1f] tracking-tight leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-[#0066cc] font-mono text-sm uppercase font-bold tracking-wider">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-[#6e6e73] font-medium max-w-xl">
                Desarrollador web full stack junior finalizando DAW, con prácticas en EXA Formación y un proyecto full stack desplegado en producción.
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-[#6e6e73] font-mono text-left md:text-right">
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>{PERSONAL_INFO.email}</span>
                <Mail size={12} className="text-[#0066cc]" />
              </div>
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>linkedin.com/in/abraham-pauta</span>
                <Linkedin size={12} className="text-[#0066cc]" />
              </div>
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>github.com/Impasse-AJ</span>
                <Github size={12} className="text-[#0066cc]" />
              </div>
              <div className="flex items-center md:justify-end gap-2 leading-none">
                <span>{PERSONAL_INFO.location}</span>
                <MapPin size={12} className="text-[#0066cc]" />
              </div>
            </div>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* Left — Experience & Projects */}
            <div className="md:col-span-8 space-y-6">

              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-[#1d1d1f] border-b border-[#d2d2d7] pb-1.5 uppercase tracking-widest">
                  Experiencia Técnica Reciente
                </h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-sm text-[#1d1d1f]">Prácticas de Desarrollo Web</span>
                      <span className="font-mono text-[#6e6e73] font-semibold">2025 - Presente</span>
                    </div>
                    <div className="flex items-center justify-between font-mono text-[11px] font-bold text-[#0066cc] leading-none">
                      <span>EXA Formación</span>
                      <span className="font-normal text-[#6e6e73]">Madrid, España</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#6e6e73] list-disc list-inside">
                    <li>Análisis de fuentes y datos para <strong className="text-[#1d1d1f]">web scraping</strong>.</li>
                    <li>Diseño de estructuras <strong className="text-[#1d1d1f]">JSON</strong> reutilizables para organizar información.</li>
                    <li>Automatización y preparación de datos con <strong className="text-[#1d1d1f]">Python</strong>.</li>
                    <li>Apoyo en módulos e interfaces utilizando <strong className="text-[#1d1d1f]">TypeScript y React</strong>.</li>
                    <li>Monitorización mediante <strong className="text-[#1d1d1f]">cPanel</strong>.</li>
                    <li>Gestión de documentación y comunicación con <strong className="text-[#1d1d1f]">Microsoft 365</strong> (OneDrive, Planner, Teams, Outlook, Excel).</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-[#1d1d1f] border-b border-[#d2d2d7] pb-1.5 uppercase tracking-widest">
                  Proyectos Técnicos Destacados
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#1d1d1f] text-sm">Pokémon World Map</span>
                    <span className="font-mono text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded border border-green-200">En Producción</span>
                  </div>
                  <p className="text-xs text-[#6e6e73] leading-normal">
                    Aplicación web full stack desplegada en producción que combina mapa mundial interactivo, datos reales de países, clima actual y recomendaciones Pokémon según la temperatura.
                  </p>
                  <div className="font-mono text-[11px] text-[#6e6e73] leading-normal pl-2.5 border-l-2 border-[#0066cc] space-y-0.5">
                    <p>• <strong className="text-[#1d1d1f]">Frontend:</strong> React + Vite</p>
                    <p>• <strong className="text-[#1d1d1f]">Backend & API:</strong> Java, Spring Boot, registro, login, sesiones y confirmación por email</p>
                    <p>• <strong className="text-[#1d1d1f]">Base de datos:</strong> MySQL</p>
                    <p>• <strong className="text-[#1d1d1f]">Infraestructura:</strong> Docker Compose, VPS Linux, Caddy y Cloudflare</p>
                    <p>• <strong className="text-[#1d1d1f]">Email SMTP:</strong> Brevo SMTP para confirmación de cuenta</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Formation & Stack */}
            <div className="md:col-span-4 space-y-6">

              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-[#1d1d1f] border-b border-[#d2d2d7] pb-1.5 uppercase tracking-widest">
                  Formación
                </h3>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#1d1d1f] leading-snug">Grado Superior en Desarrollo de Aplicaciones Web (DAW)</p>
                    <p className="text-[10px] font-semibold text-[#0066cc] font-mono">IES Clara del Rey</p>
                    <p className="text-[10px] text-[#86868b] font-mono">2024 - 2026 | Finalizando</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[#1d1d1f] leading-snug">Bachillerato de Ciencias</p>
                    <p className="text-[10px] font-semibold text-[#6e6e73] font-mono">Col. Natividad de Nuestra Señora</p>
                    <p className="text-[10px] text-[#86868b] font-mono">Hasta 2023 | Completado</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold text-[#1d1d1f] border-b border-[#d2d2d7] pb-1.5 uppercase tracking-widest">
                  Tecnologías & Stack
                </h3>
                <div className="space-y-3 font-mono text-[11px] text-[#6e6e73]">
                  {[
                    { label: 'Frontend:', value: 'React, TypeScript, JavaScript, Vite, Tailwind' },
                    { label: 'Backend & DB:', value: 'Java, Spring Boot, PHP, Symfony, APIs REST, MySQL' },
                    { label: 'Sistemas & DevOps:', value: 'Docker, Docker Compose, Linux, VPS, Caddy, Cloudflare, cPanel' },
                    { label: 'Datos & Scraping:', value: 'Python, scraping, JSON, MySQL' },
                    { label: 'Herramientas:', value: 'Git/GitHub, Microsoft 365, Android Studio, Odoo básico' },
                  ].map(({ label, value }) => (
                    <div key={label} className="space-y-0.5">
                      <span className="font-bold text-[#0066cc] uppercase text-[10px] tracking-wider">{label}</span>
                      <p className="leading-snug">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#d2d2d7] mt-8 pt-4 text-center text-[10px] text-[#86868b] font-mono">
            Documento generado desde abrahampauta.com. No incluye teléfono público por privacidad.
          </div>
        </div>

        {/* Modal footer */}
        <div className="flex items-center justify-end px-6 py-4 bg-[#f5f5f7] border-t border-[#d2d2d7] print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#d2d2d7] hover:border-[#86868b] bg-white hover:bg-[#f5f5f7] text-[#1d1d1f] rounded-lg text-xs font-semibold transition-all cursor-pointer"
          >
            Cerrar vista previa
          </button>
        </div>
      </div>
    </div>
  );
}
