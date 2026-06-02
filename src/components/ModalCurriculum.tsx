import type { LucideIcon } from 'lucide-react';
import { Github, Globe, Linkedin, Mail, MapPin, Phone, Printer, X } from 'lucide-react';
import type { ReactNode } from 'react';
import { PERSONAL_INFO } from '../data.ts';

interface ModalCurriculumProps {
  isOpen: boolean;
  onClose: () => void;
}

const SectionTitle = ({ children }: { children: string }) => (
  <h3 className="text-[13px] font-semibold text-[#1d1d1f] border-b border-[#d2d2d7] pb-1.5 cv-print-title">
    {children}
  </h3>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-1 text-[11px] text-[#6e6e73] list-disc pl-4 cv-print-list">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const ContactItem = ({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) => (
  <span className="flex min-w-0 items-center gap-1.5 text-[#6e6e73]">
    <Icon size={12} className="shrink-0 text-[#0066cc]" aria-hidden="true" />
    <span className="min-w-0 break-words">{children}</span>
  </span>
);

export default function ModalCurriculum({ isOpen, onClose }: ModalCurriculumProps) {
  if (!isOpen) return null;

  const handlePrint = () => window.print();

  return (
    <div
      className="cv-print-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm overflow-y-auto animate-fadeIn print:absolute print:inset-0 print:bg-white print:p-0"
      role="dialog"
      aria-modal="true"
      aria-label="Currículum vitae de Abraham Pauta"
    >
      <div
        className="cv-print-shell relative w-full max-w-4xl bg-white border border-[#d2d2d7] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden print:border-none print:shadow-none print:max-h-none print:overflow-visible print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cv-print-hidden flex items-center justify-between px-6 py-4 bg-[#f5f5f7] border-b border-[#d2d2d7] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span>
            <span className="text-xs font-semibold text-[#1d1d1f]">Currículum vitae junior</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#0066cc] hover:bg-[#0077ed] text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-sm"
            >
              <Printer size={13} />
              Guardar como PDF
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

        <div className="cv-print-page p-5 md:p-8 overflow-y-auto bg-white text-[#1d1d1f] max-w-4xl mx-auto font-sans leading-snug print:p-0 print:overflow-visible">
          <header className="cv-print-section border-b-2 border-[#1d1d1f] pb-4 mb-4 space-y-3">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <div className="space-y-1.5">
                <h1 className="text-3xl font-extrabold text-[#1d1d1f] tracking-tight leading-none">
                  Abraham Josué Pauta Paula
                </h1>
                <p className="text-[#0066cc] text-sm font-semibold">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              <div className="cv-print-contact grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5 text-[11px]">
                <ContactItem icon={MapPin}>Madrid, España</ContactItem>
                <ContactItem icon={Mail}>{PERSONAL_INFO.email}</ContactItem>
                <ContactItem icon={Phone}>+34 628 686 328</ContactItem>
                <ContactItem icon={Github}>github.com/Impasse-AJ</ContactItem>
                <ContactItem icon={Linkedin}>linkedin.com/in/abraham-pauta</ContactItem>
                <ContactItem icon={Globe}>abrahampauta.com</ContactItem>
              </div>
            </div>
          </header>

          <main className="space-y-4 text-[11px]">
            <section className="cv-print-section space-y-2">
              <SectionTitle>Perfil profesional</SectionTitle>
              <div className="space-y-1.5 text-[#6e6e73]">
                <p>
                  Desarrollador Web Full Stack Junior, finalizando el Grado Superior en Desarrollo de Aplicaciones Web. Actualmente realizo prácticas en EXA Formación, donde participo en análisis de datos para scraping, diseño de estructuras JSON, uso de Python, apoyo en aplicaciones con TypeScript y React, monitorización mediante cPanel y trabajo con herramientas Microsoft 365 en entorno empresarial.
                </p>
                <p>
                  Cuento con experiencia desarrollando y desplegando proyectos reales, incluyendo una aplicación full stack en producción con React, Spring Boot, MySQL, Docker, Caddy, Cloudflare y VPS Linux. Me considero una persona constante, responsable, con capacidad para resolver problemas, adaptarme a nuevos retos y trabajar tanto de forma autónoma como en equipo.
                </p>
              </div>
            </section>

            <section className="cv-print-section space-y-2">
              <SectionTitle>Experiencia técnica</SectionTitle>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <p className="font-bold text-[#1d1d1f]">Prácticas de Desarrollo Web | EXA Formación</p>
                    <p className="text-[#0066cc] font-semibold">Madrid, España</p>
                  </div>
                  <p className="text-[#6e6e73] font-semibold">2026 - Actualidad</p>
                </div>
                <BulletList
                  items={[
                    'Análisis de fuentes y datos para procesos de scraping.',
                    'Diseño de estructuras JSON reutilizables para organizar información.',
                    'Preparación y tratamiento de datos con Python.',
                    'Apoyo en aplicaciones web con TypeScript y React.',
                    'Monitorización de aplicaciones mediante cPanel.',
                    'Organización de tareas, documentación y comunicación con Microsoft 365 en entorno empresarial.',
                  ]}
                />
              </div>
            </section>

            <section className="cv-print-section space-y-2">
              <SectionTitle>Proyectos destacados</SectionTitle>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <p className="font-bold text-[#1d1d1f]">Pokémon World Map | Proyecto Final de DAW</p>
                    <p className="text-[#6e6e73]">Web: pokemon-world.es</p>
                    <p className="text-[#6e6e73]">Código: github.com/Impasse-AJ/Pokemon-World</p>
                  </div>
                  <span className="font-semibold text-green-700">Finalizado · Desplegado</span>
                </div>
                <p className="text-[#6e6e73]">Estado: Finalizado y desplegado</p>
                <p className="text-[#6e6e73]">
                  Aplicación web full stack finalizada y desplegada que combina un mapa mundial interactivo, datos reales de países, clima actual y recomendaciones Pokémon según la temperatura.
                </p>
                <BulletList
                  items={[
                    'Frontend desarrollado con React + Vite.',
                    'Backend desarrollado con Java + Spring Boot.',
                    'Base de datos MySQL.',
                    'Sistema de registro, login, sesiones y confirmación de cuenta por email.',
                    'Despliegue en VPS Linux mediante Docker Compose.',
                    'Reverse proxy, HTTPS y gestión DNS mediante Caddy y Cloudflare.',
                    'Envío de emails de activación mediante Brevo SMTP.',
                    'Administración interna de base de datos mediante phpMyAdmin y túnel SSH.',
                  ]}
                />
              </div>
            </section>

            <section className="cv-print-section space-y-2">
              <SectionTitle>Tecnologías</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[#6e6e73]">
                <p><strong className="text-[#1d1d1f]">Frontend:</strong> React, TypeScript, JavaScript, HTML, CSS, Vite, Tailwind.</p>
                <p><strong className="text-[#1d1d1f]">Backend:</strong> Java, Spring Boot, PHP, Symfony, APIs REST.</p>
                <p><strong className="text-[#1d1d1f]">Datos y bases de datos:</strong> Python, scraping, JSON, MySQL.</p>
                <p><strong className="text-[#1d1d1f]">Despliegue y sistemas:</strong> Docker, Docker Compose, Linux, VPS, Caddy, Cloudflare, cPanel.</p>
                <p><strong className="text-[#1d1d1f]">Herramientas:</strong> Git, GitHub, Microsoft 365, Android Studio, Odoo básico.</p>
              </div>
            </section>

            <section className="cv-print-section space-y-2">
              <SectionTitle>Formación</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#6e6e73]">
                <div>
                  <p className="font-bold text-[#1d1d1f]">Grado Superior en Desarrollo de Aplicaciones Web</p>
                  <p>IES Clara del Rey | Madrid, España</p>
                  <p>2024 - 2026 | Finalizando</p>
                </div>
                <div>
                  <p className="font-bold text-[#1d1d1f]">ESO y Bachillerato de Ciencias</p>
                  <p>Colegio Natividad de Nuestra Señora</p>
                  <p>Graduado | 2020/2021</p>
                </div>
              </div>
            </section>

            <section className="cv-print-section space-y-2">
              <SectionTitle>Experiencia laboral complementaria</SectionTitle>
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <p className="font-bold text-[#1d1d1f]">Técnico de 3ª | Casino Gran Madrid</p>
                  <p className="text-[#6e6e73] font-semibold">Sep 2024 - Actualidad</p>
                </div>
                <BulletList
                  items={[
                    'Gestión y control del desarrollo de juegos de mesa, garantizando el cumplimiento de normas y procedimientos establecidos.',
                    'Control de apuestas, pagos y movimientos de juego, asegurando la correcta realización del juego.',
                    'Resolución de incidencias operativas y técnicas durante el desarrollo del juego.',
                    'Atención al detalle y toma de decisiones en tiempo real en un entorno de alta responsabilidad.',
                    'Trabajo coordinado con el equipo para asegurar la fluidez de las operaciones.',
                  ]}
                />
              </div>
            </section>

            <section className="cv-print-section cv-print-final grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <SectionTitle>Habilidades</SectionTitle>
                <ul className="cv-print-skills-list grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1 text-[11px] text-[#6e6e73] list-disc pl-4">
                  {[
                    'Resolución de incidencias.',
                    'Responsabilidad.',
                    'Trabajo en equipo.',
                    'Adaptabilidad.',
                    'Gestión del tiempo.',
                    'Precisión y rigurosidad.',
                    'Control de procesos.',
                    'Trabajo bajo presión.',
                  ].map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <SectionTitle>Idiomas</SectionTitle>
                <div className="space-y-1.5 text-[#6e6e73]">
                  <p><strong className="text-[#1d1d1f]">Castellano:</strong> nativo.</p>
                  <p><strong className="text-[#1d1d1f]">Inglés:</strong> nivel intermedio B1.</p>
                </div>
              </div>
            </section>
          </main>
        </div>

        <div className="cv-print-hidden flex items-center justify-end px-6 py-4 bg-[#f5f5f7] border-t border-[#d2d2d7] print:hidden">
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
