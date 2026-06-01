/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExperienceItem, ProjectItem, TechCategory, AcademicItem } from './types.ts';

export const PERSONAL_INFO = {
  name: 'Abraham Pauta',
  title: 'Desarrollador Web Full Stack Junior',
  headline: 'Desarrollo aplicaciones web completas, trabajo con datos y scraping, y despliego proyectos reales en VPS con Docker, Caddy y Cloudflare.',
  email: 'abraham.pauta81@gmail.com',// Derived from agent request metadata
  github: 'https://github.com/abrahampauta',
  linkedin: 'https://www.linkedin.com/in/abraham-pauta',
  location: 'Madrid, España',
  bio: 'Soy desarrollador web junior formado en Desarrollo de Aplicaciones Web, con experiencia práctica en proyectos reales y despliegues en producción. Me interesa construir aplicaciones completas, desde el análisis y la estructuración de datos hasta el desarrollo frontend/backend y el despliegue en servidores Linux con control total sobre la infraestructura.',
};

export const WHAT_I_BRING = [
  {
    title: 'Desarrollo Web Full Stack',
    icon: 'code',
    description: 'Diseño e implemento interfaces de usuario SPA modernas con React y TypeScript, y construyo backends robustos con Java (Spring Boot) o PHP (Symfony) que consumen bases de datos relacionales de forma eficiente.',
    techs: ['React', 'TypeScript', 'Spring Boot', 'PHP', 'Symfony', 'APIs REST']
  },
  {
    title: 'Datos y Automatización',
    icon: 'database',
    description: 'Especialista en extracción de datos complejos (Web Scraping) con Python, procesamiento estructurado y diseño de esquemas JSON optimizados para albergar grandes volúmenes de información.',
    techs: ['Python', 'Web Scraping', 'Análisis de datos', 'JSON Architecture']
  },
  {
    title: 'Despliegue y Sistemas',
    icon: 'server',
    description: 'Configuro entornos de producción reales integrando contenedores Docker, ruteo TLS con Caddy (HTTPS automático), túneles SSH remotos, DNS seguro de Cloudflare, y soporte en servidores VPS de Linux o cPanel.',
    techs: ['Docker', 'VPS Linux', 'Caddy Reverse Proxy', 'Cloudflare', 'cPanel']
  },
  {
    title: 'Productividad y Gestión',
    icon: 'users',
    description: 'Uso ágil de herramientas colaborativas empresariales para el seguimiento riguroso de proyectos, documentación sincronizada y gestión organizada de equipos multidisciplinares.',
    techs: ['OneDrive', 'Planner', 'Outlook', 'Excel', 'Teams', 'Git / GitHub']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Prácticas de Desarrollo Web',
    company: 'EXA Formación',
    location: 'Madrid, España',
    period: '2025 - Presente',
    isCurrent: true,
    description: 'Desarrollo técnico e integración de soluciones web en entornos de producción, con especial foco en el manejo de datos dinámicos y la arquitectura de servidores.',
    bullets: [
      'Análisis profundo de flujos de datos y páginas objetivo para procesos avanzados de web scraping.',
      'Diseño y modelado de arquitecturas JSON modulares y reutilizables para estructurar información de scraping.',
      'Automatización y soporte utilizando Python para la extracción, limpieza e importación de información.',
      'Desarrollo colaborativo en aplicaciones web utilizando TypeScript, React y empaquetadores como Vite.',
      'Supervisión y control de plataformas desplegadas mediante monitorización en cPanel.',
      'Organización, planificación de hitos de entrega y gestión documental empresarial diaria con Microsoft 365 (Planner, Teams, OneDrive, Excel, Outlook).'
    ],
    skills: ['Python', 'Web Scraping', 'TypeScript', 'React', 'JSON', 'cPanel', 'Microsoft 365', 'Planner', 'Excel']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Creación de SPAs dinámicas, modulares, con lógica reactiva potente y maquetación responsive excelente.',
    iconName: 'layout',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS']
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Desarrollo de servicios robustos y seguros, con endpoints RESTful bien documentados y estructurados.',
    iconName: 'database',
    skills: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'APIs REST', 'MySQL']
  },
  {
    id: 'scraping',
    title: 'Datos & Scraping',
    description: 'Análisis, extracción masiva de información y formateo para motores de búsqueda o bases de datos.',
    iconName: 'binary',
    skills: ['Python', 'Web Scraping', 'Análisis de datos', 'Diseño de JSONs', 'Estructurador de Información']
  },
  {
    id: 'devops',
    title: 'DevOps & DevOps',
    description: 'Despliegue autónomo en servidores en la nube, optimización de redes y automatización de certificados SSL.',
    iconName: 'server',
    skills: ['Docker & Compose', 'VPS Linux', 'Caddy Reverse Proxy', 'Cloudflare TLS', 'cPanel', 'SSH Keys']
  },
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Entorno de trabajo organizado enfocado a la productividad profesional y a metodologías ágiles.',
    iconName: 'settings',
    skills: ['Git & GitHub', 'VS Code', 'Microsoft OneDrive', 'MS Planner', 'Odoo Básico', 'Android Studio']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pokemon-world',
    title: 'Pokémon World Map',
    tagline: 'Mapa interactivo global & recomendaciones basadas en clima real',
    description: 'Una completa plataforma web full stack en producción que permite explorar un globo terráqueo dinámico, seleccionar países, obtener la temperatura real de su capital, y sugerir automáticamente Pokémon idóneos según esas condiciones meteorológicas.',
    extendedDescription: 'Aplicación desplegada autónomamente que utiliza una arquitectura contenerizada. Incluye un módulo de autenticación con doble factor, registro seguro, confirmación de correo mediante Brevo SMTP, y phpMyAdmin interno securizado mediante un túnel SSH dedicado para la administración de la base de datos.',
    status: 'In Production',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Docker Compose', 'Caddy', 'Cloudflare', 'Linux VPS', 'Brevo SMTP'],
    liveUrl: 'https://pokemon-world.es',
    category: 'Full Stack',
    architecture: {
      frontend: 'React + Vite (TypeScript, Tailwind, Lucide Icons)',
      backend: 'Spring Boot (Java 17, JPA, Hibernate, REST API)',
      database: 'MySQL 8 (En contenedor aislado, persistente)',
      infrastructure: 'Alojado en VPS Linux propia con Docker Compose',
      proxy: 'Caddy (Reverse Proxy con autorenovación de SSL por Let\'s Encrypt) + Cloudflare (Protección Proxy & DNS)',
      email: 'Brevo SMTP API (Tokens seguros de confirmación de cuenta en registro)'
    }
  },
  {
    id: 'portfolio',
    title: 'Abraham Pauta Portfolio',
    tagline: 'Mi portfolio personal y CV técnico online',
    description: 'Diseño e implementación de esta página web personal optimizada para conversión en procesos de reclutamiento tecnológico.',
    extendedDescription: 'Desplegado en un contenedor ligero Docker sobre mi propia VPS Linux, servido bajo Caddy con compresión automática y gestionado bajo el proxy seguro de Cloudflare con CDN optimizada.',
    status: 'In Development',
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Docker', 'Linux VPS', 'Caddy', 'Cloudflare', 'motion'],
    liveUrl: 'https://abrahampauta.com',
    category: 'Frontend',
    architecture: {
      frontend: 'React + Vite + Tailwind CSS + motion',
      infrastructure: 'Docker Engine corriendo en VPS propia de Linux',
      proxy: 'Caddy con configuración granular del archivo Caddyfile'
    }
  }
];

export const ACADEMIC_BACKGROUND: AcademicItem[] = [
  {
    degree: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
    institution: 'IES Clara del Rey',
    location: 'Madrid, España',
    period: '2023 - 2025',
    status: 'Completed',
    description: 'Formación profesional reglada orientada a la programación orientada a objetos, bases de datos relacionales y no relacionales, diseño de interfaces web, metodologías ágiles, lenguajes de marcas y despliegue autónomo en servidores de red.'
  },
  {
    degree: 'ESO y Bachillerato de Ciencias',
    institution: 'Colegio Natividad de Nuestra Señora',
    location: 'Madrid, España',
    period: 'Hasta 2023',
    status: 'Completed',
    description: 'Formación académica generalizada con base analítica en matemáticas, física y tecnologías de la comunicación.'
  }
];
