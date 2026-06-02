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
  bio: 'Desarrollador junior finalizando Desarrollo de Aplicaciones Web. Actualmente realizo prácticas en EXA Formación y tengo un proyecto full stack finalizado y desplegado.',
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
    description: 'Análisis de fuentes, diseño de estructuras JSON y preparación de datos con Python.',
    techs: ['Python', 'Scraping', 'JSON']
  },
  {
    title: 'Despliegue y mantenimiento',
    icon: 'server',
    description: 'Despliegues propios en VPS Linux con Docker Compose, Caddy y Cloudflare, y revisión de aplicaciones con cPanel.',
    techs: ['Docker Compose', 'VPS', 'Caddy', 'Cloudflare', 'cPanel']
  },
  {
    title: 'Trabajo organizado',
    icon: 'users',
    description: 'Seguimiento de tareas, documentación y comunicación con Git, GitHub y Microsoft 365.',
    techs: ['Git', 'GitHub', 'Planner', 'OneDrive', 'Teams']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Prácticas de Desarrollo Web',
    company: 'EXA Formación',
    location: 'Madrid, España',
    period: '2026 - Actualidad',
    isCurrent: true,
    description: 'En EXA Formación participo en tareas de apoyo al desarrollo y tratamiento de datos: analizo fuentes para scraping, diseño estructuras JSON para organizar información, utilizo Python para preparar datos, colaboro en interfaces con TypeScript y React, reviso aplicaciones desde cPanel y coordino tareas/documentación con Microsoft 365.',
    bullets: [
      'Análisis de fuentes y datos para scraping.',
      'Diseño de estructuras JSON reutilizables.',
      'Automatización y preparación de datos con Python.',
      'Apoyo frontend con TypeScript y React.',
      'Monitorización mediante cPanel.',
      'Organización con OneDrive, Planner, Outlook, Excel y Teams.'
    ],
    skills: ['Python', 'Scraping', 'JSON', 'TypeScript', 'React', 'cPanel', 'Microsoft 365', 'OneDrive', 'Planner', 'Outlook', 'Excel', 'Teams']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces web, componentes reutilizables y maquetación responsive.',
    iconName: 'layout',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind']
  },
  {
    id: 'backend',
    title: 'Backend y APIs',
    description: 'APIs, lógica de servidor y servicios conectados a base de datos.',
    iconName: 'database',
    skills: ['Java', 'Spring Boot', 'PHP', 'Symfony', 'APIs REST']
  },
  {
    id: 'scraping',
    title: 'Datos',
    description: 'Preparación, organización y persistencia de datos.',
    iconName: 'binary',
    skills: ['Python', 'Scraping', 'JSON', 'MySQL']
  },
  {
    id: 'devops',
    title: 'Despliegue',
    description: 'Publicación y seguimiento de aplicaciones en servidores propios.',
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
    tagline: 'Proyecto Final de DAW · Full Stack · Desplegado',
    description: 'Aplicación web full stack finalizada y desplegada que combina mapa mundial interactivo, datos reales de países, clima actual y recomendaciones Pokémon según la temperatura.',
    extendedDescription: 'Incluye frontend, backend, base de datos, autenticación con registro, login, sesiones, confirmación de cuenta por email mediante Brevo SMTP y despliegue real en VPS Linux con Docker Compose, Caddy y Cloudflare.',
    status: 'Completed',
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
    period: '2024 - 2026',
    status: 'Current',
    description: 'Formación profesional en fase final, orientada a programación, bases de datos, desarrollo frontend y backend, interfaces web, despliegue de aplicaciones y trabajo con herramientas de desarrollo.'
  },
  {
    degree: 'Bachillerato de Ciencias',
    institution: 'Colegio Natividad de Nuestra Señora',
    location: 'Madrid, España',
    period: 'Graduado | 2020/2021',
    status: 'Completed',
    description: 'Base académica en materias científicas y tecnológicas.'
  }
];
