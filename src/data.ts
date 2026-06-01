import { ExperienceItem, ProjectItem, TechCategory, AcademicItem } from './types.ts';

export const PERSONAL_INFO = {
  name: 'Abraham Pauta',
  title: 'Desarrollador Web Full Stack Junior',
  headline: 'Construyo aplicaciones web con React, TypeScript, Java, Spring Boot y MySQL, y tengo experiencia practica con scraping, datos y despliegues en VPS Linux.',
  email: 'abraham.pauta81@gmail.com',
  github: 'https://github.com/Impasse-AJ',
  linkedin: 'https://www.linkedin.com/in/abraham-pauta',
  location: 'Madrid, España',
  domain: 'https://abrahampauta.com',
  bio: 'Soy desarrollador web full stack junior, formado en Desarrollo de Aplicaciones Web. Me interesa trabajar en productos web mantenibles, con una base tecnica clara: interfaces cuidadas, APIs sencillas, datos bien estructurados y despliegues reproducibles. Actualmente hago practicas en EXA Formacion, donde participo en tareas de scraping, estructuracion JSON, Python, TypeScript, React, cPanel y herramientas Microsoft 365.',
};

export const WHAT_I_BRING = [
  {
    title: 'Desarrollo web full stack',
    icon: 'code',
    description: 'Puedo colaborar en interfaces con React y TypeScript, y en servicios backend con Java, Spring Boot, PHP o Symfony, manteniendo una comunicacion clara entre frontend, API y base de datos.',
    techs: ['React', 'TypeScript', 'Spring Boot', 'PHP', 'Symfony', 'APIs REST']
  },
  {
    title: 'Datos y scraping',
    icon: 'database',
    description: 'Tengo experiencia practica analizando datos para scraping, preparando estructuras JSON y usando Python para automatizar procesos de extraccion, limpieza y organizacion de informacion.',
    techs: ['Python', 'Scraping', 'Analisis de datos', 'JSON']
  },
  {
    title: 'Despliegue y sistemas',
    icon: 'server',
    description: 'He desplegado proyectos propios en VPS Linux con Docker Compose, Caddy y Cloudflare, cuidando la separacion de servicios y la administracion basica de entornos.',
    techs: ['Docker', 'VPS Linux', 'Caddy', 'Cloudflare', 'cPanel']
  },
  {
    title: 'Trabajo organizado',
    icon: 'users',
    description: 'Uso herramientas profesionales para documentar, coordinar tareas y mantener seguimiento: Git, GitHub, OneDrive, Planner, Outlook, Excel y Teams.',
    techs: ['Git', 'GitHub', 'OneDrive', 'Planner', 'Outlook', 'Excel', 'Teams']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Prácticas de Desarrollo Web',
    company: 'EXA Formación',
    location: 'Madrid, España',
    period: '2025 - Presente',
    isCurrent: true,
    description: 'Practicas centradas en apoyo al desarrollo web, tratamiento de datos para scraping y seguimiento de aplicaciones en entornos reales.',
    bullets: [
      'Analisis de fuentes y estructuras de datos para preparar procesos de scraping.',
      'Diseño de estructuras JSON claras para organizar datos extraidos y facilitar su reutilizacion.',
      'Uso de Python para apoyo en tareas de extraccion, limpieza y preparacion de informacion.',
      'Apoyo en desarrollo frontend con TypeScript y React dentro de flujos de trabajo existentes.',
      'Monitorizacion y revision de aplicaciones mediante cPanel.',
      'Gestion diaria de documentacion, tareas y comunicacion con Microsoft 365: OneDrive, Planner, Outlook, Excel y Teams.'
    ],
    skills: ['Python', 'Scraping', 'JSON', 'TypeScript', 'React', 'cPanel', 'Microsoft 365', 'OneDrive', 'Planner', 'Outlook', 'Excel', 'Teams']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces web con componentes reutilizables, estado claro y maquetacion responsive.',
    iconName: 'layout',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Tailwind CSS']
  },
  {
    id: 'backend',
    title: 'Backend y APIs',
    description: 'Servicios web, APIs REST y persistencia en bases de datos relacionales.',
    iconName: 'database',
    skills: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'APIs REST', 'MySQL']
  },
  {
    id: 'scraping',
    title: 'Datos y scraping',
    description: 'Analisis de datos, automatizacion con Python y diseño de estructuras JSON.',
    iconName: 'binary',
    skills: ['Python', 'Web Scraping', 'Analisis de datos', 'Diseño JSON']
  },
  {
    id: 'devops',
    title: 'Sistemas y despliegue',
    description: 'Despliegues propios y administracion basica de servicios web en Linux.',
    iconName: 'server',
    skills: ['Docker', 'Docker Compose', 'Linux', 'VPS', 'Caddy', 'Cloudflare', 'cPanel', 'SSH']
  },
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Control de versiones, productividad profesional y herramientas de desarrollo.',
    iconName: 'settings',
    skills: ['Git', 'GitHub', 'VS Code', 'Microsoft 365', 'OneDrive', 'Planner', 'Outlook', 'Excel', 'Teams', 'Android Studio', 'Odoo básico']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pokemon-world',
    title: 'Pokémon World Map',
    tagline: 'Aplicación web full stack desplegada como Proyecto Final de DAW',
    description: 'Aplicacion web full stack desarrollada como proyecto final de Desarrollo de Aplicaciones Web. Permite explorar un mapa interactivo, consultar informacion relacionada con paises y clima, y trabajar con recomendaciones dentro de la experiencia de usuario.',
    extendedDescription: 'El proyecto esta desplegado en produccion con una arquitectura contenerizada. Incluye frontend React + Vite, backend Java + Spring Boot, MySQL, registro, login, sesiones, confirmacion de cuenta por email mediante Brevo SMTP y administracion interna de base de datos mediante phpMyAdmin accesible por tunel SSH.',
    status: 'In Production',
    tags: ['React', 'Vite', 'Java', 'Spring Boot', 'MySQL', 'Docker Compose', 'Caddy', 'Cloudflare', 'VPS Linux', 'Brevo SMTP'],
    liveUrl: 'https://pokemon-world.es',
    codeUrl: 'https://github.com/Impasse-AJ',
    category: 'Full Stack',
    architecture: {
      frontend: 'React + Vite',
      backend: 'Java + Spring Boot con autenticacion, sesiones y confirmacion por email',
      database: 'MySQL en contenedor, con phpMyAdmin interno mediante tunel SSH',
      infrastructure: 'VPS Linux con Docker Compose',
      proxy: 'Caddy como reverse proxy y Cloudflare para DNS, SSL/proxy y proteccion basica',
      email: 'Brevo SMTP para confirmacion de cuenta por correo'
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
    description: 'Formacion profesional orientada a programacion, bases de datos, desarrollo frontend y backend, interfaces web, despliegue de aplicaciones y trabajo con herramientas de desarrollo.'
  },
  {
    degree: 'Bachillerato de Ciencias',
    institution: 'Colegio Natividad de Nuestra Señora',
    location: 'Madrid, España',
    period: 'Hasta 2023',
    status: 'Completed',
    description: 'Base academica en materias cientificas y tecnologicas.'
  }
];
