import { ExperienceItem, ProjectItem, TechCategory, AcademicItem } from './types.ts';

export const PERSONAL_INFO = {
  name: 'Abraham Pauta',
  title: 'Desarrollador Web Full Stack Junior',
  headline: 'Desarrollo aplicaciones web completas, trabajo con datos y scraping, y despliego proyectos reales en VPS con Docker, Caddy y Cloudflare.',
  email: 'abraham-paula@hotmail.com',
  github: 'https://github.com/Impasse-AJ',
  linkedin: 'https://www.linkedin.com/in/abraham-pauta',
  location: 'Madrid, España',
  domain: 'https://abrahampauta.com',
  bio: 'Desarrollador junior formado en Desarrollo de Aplicaciones Web. Actualmente realizo practicas en EXA Formacion y tengo un proyecto full stack desplegado en produccion.',
};

export const WHAT_I_BRING = [
  {
    title: 'Desarrollo web full stack',
    icon: 'code',
    description: 'Apoyo en interfaces React/TypeScript y servicios backend con Java, Spring Boot, PHP o Symfony.',
    techs: ['React', 'TypeScript', 'Spring Boot', 'Symfony']
  },
  {
    title: 'Datos y scraping',
    icon: 'database',
    description: 'Analisis de fuentes, diseño de estructuras JSON y preparacion de datos con Python.',
    techs: ['Python', 'Scraping', 'JSON']
  },
  {
    title: 'Despliegue y mantenimiento',
    icon: 'server',
    description: 'Despliegues propios en VPS Linux con Docker Compose, Caddy y Cloudflare, y revision de aplicaciones con cPanel.',
    techs: ['Docker Compose', 'VPS', 'Caddy', 'Cloudflare', 'cPanel']
  },
  {
    title: 'Trabajo organizado',
    icon: 'users',
    description: 'Seguimiento de tareas, documentacion y comunicacion con Git, GitHub y Microsoft 365.',
    techs: ['Git', 'GitHub', 'Planner', 'OneDrive', 'Teams']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Prácticas de Desarrollo Web',
    company: 'EXA Formación',
    location: 'Madrid, España',
    period: '2025 - Presente',
    isCurrent: true,
    description: 'En EXA Formacion participo en tareas de apoyo al desarrollo y tratamiento de datos: analizo fuentes para scraping, diseño estructuras JSON para organizar informacion, utilizo Python para preparar datos, colaboro en interfaces con TypeScript y React, reviso aplicaciones desde cPanel y coordino tareas/documentacion con Microsoft 365.',
    bullets: [
      'Analisis de fuentes y datos para scraping.',
      'Diseño de estructuras JSON reutilizables.',
      'Automatizacion y preparacion de datos con Python.',
      'Apoyo frontend con TypeScript y React.',
      'Monitorizacion mediante cPanel.',
      'Organizacion con OneDrive, Planner, Outlook, Excel y Teams.'
    ],
    skills: ['Python', 'Scraping', 'JSON', 'TypeScript', 'React', 'cPanel', 'Microsoft 365', 'OneDrive', 'Planner', 'Outlook', 'Excel', 'Teams']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces web, componentes reutilizables y maquetacion responsive.',
    iconName: 'layout',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind']
  },
  {
    id: 'backend',
    title: 'Backend y APIs',
    description: 'APIs, logica de servidor y servicios conectados a base de datos.',
    iconName: 'database',
    skills: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'APIs REST']
  },
  {
    id: 'scraping',
    title: 'Datos',
    description: 'Preparacion, organizacion y persistencia de datos.',
    iconName: 'binary',
    skills: ['Python', 'Scraping', 'JSON', 'MySQL']
  },
  {
    id: 'devops',
    title: 'Despliegue',
    description: 'Publicacion y seguimiento de aplicaciones en servidores propios.',
    iconName: 'server',
    skills: ['Docker', 'Docker Compose', 'Linux', 'VPS', 'Caddy', 'Cloudflare', 'cPanel']
  },
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Control de versiones, productividad y herramientas profesionales.',
    iconName: 'settings',
    skills: ['Git', 'GitHub', 'Microsoft 365', 'Android Studio', 'Odoo básico']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'pokemon-world',
    title: 'Pokémon World Map',
    tagline: 'En producción · Proyecto Final de DAW · Full Stack',
    description: 'Aplicación web full stack desplegada en producción que combina mapa mundial interactivo, datos reales de países, clima actual y recomendaciones Pokémon según la temperatura.',
    extendedDescription: 'Incluye frontend, backend, base de datos, autenticación con registro, login, sesiones, confirmación de cuenta por email mediante Brevo SMTP y despliegue real en VPS Linux con Docker Compose, Caddy y Cloudflare.',
    status: 'In Production',
    tags: ['React', 'Vite', 'Java', 'Spring Boot', 'MySQL', 'Docker Compose', 'Caddy', 'Cloudflare', 'VPS Linux', 'Brevo SMTP'],
    liveUrl: 'https://pokemon-world.es',
    codeUrl: 'https://github.com/Impasse-AJ/Pokemon-World',
    category: 'Full Stack',
    architecture: {
      frontend: 'React + Vite',
      backend: 'Java + Spring Boot',
      database: 'MySQL',
      infrastructure: 'Docker Compose + VPS Linux',
      proxy: 'Caddy + Cloudflare',
      email: 'Brevo SMTP'
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
