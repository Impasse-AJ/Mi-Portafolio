import { ExperienceItem, ProjectItem, TechCategory, AcademicItem } from './types.ts';

export const PERSONAL_INFO = {
  name: 'Abraham Pauta',
  title: 'Técnico Superior en Desarrollo de Aplicaciones Web | Desarrollador Full Stack Junior',
  headline: 'He diseñado y desarrollado desde cero tres plataformas web full stack durante mis prácticas en EXA Formación, cubriendo scraping/ETL, backend, frontend, autenticación y despliegue en VPS.',
  email: 'abraham-paula@hotmail.com',
  github: 'https://github.com/Impasse-AJ',
  linkedin: 'https://www.linkedin.com/in/abraham-pauta',
  location: 'Madrid, España',
  domain: 'https://abrahampauta.com',
  bio: 'Técnico Superior en Desarrollo de Aplicaciones Web y desarrollador full stack junior. Durante mis prácticas en EXA Formación diseñé y desarrollé desde cero tres plataformas web de explotación de datos públicos (subastas del BOE, subvenciones BDNS y licitaciones), trabajando todo el ciclo: scraping/ETL, backend, base de datos, frontend, autenticación y despliegue en VPS. También tengo un proyecto full stack propio desplegado.',
};

export const WHAT_I_BRING = [
  {
    title: 'Plataformas de datos públicos',
    icon: 'database',
    description: 'Diseñé y desarrollé tres plataformas full stack de extremo a extremo en EXA Formación: scraping/ETL, backend API, frontend, autenticación y despliegue en producción.',
    techs: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Python', 'MariaDB', 'Docker', 'Traefik']
  },
  {
    title: 'Desarrollo web full stack',
    icon: 'code',
    description: 'Interfaces con React/TypeScript/Vite y servicios backend con Java/Spring Boot, con APIs REST, autenticación, filtros, paginación y exportación.',
    techs: ['React', 'TypeScript', 'Vite', 'Spring Boot', 'Spring Security', 'JWT']
  },
  {
    title: 'Scraping, ETL y datos',
    icon: 'server',
    description: 'Extracción con Python, Playwright y BeautifulSoup. Consumo de APIs públicas (BOE, BDNS) y normalización e ingesta incremental en MySQL/MariaDB.',
    techs: ['Python', 'Playwright', 'BeautifulSoup', 'ETL', 'MySQL', 'MariaDB']
  },
  {
    title: 'Despliegue y entornos',
    icon: 'users',
    description: 'Docker Compose, Traefik y Nginx para proyectos de empresa; Caddy y Cloudflare para proyectos propios. Túneles SSH y despliegue validado en VPS Linux.',
    techs: ['Docker Compose', 'Traefik', 'Nginx', 'Caddy', 'VPS Linux', 'SSH Tunnel']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Desarrollador Full Stack Junior en prácticas',
    company: 'EXA Formación',
    location: 'Madrid, España',
    period: 'Marzo 2026 – Junio 2026',
    isCurrent: false,
    description: 'Diseñé y desarrollé plataformas web reales para la explotación de datos públicos, combinando scraping/ETL, backend Java/Spring Boot, frontend React/TypeScript, bases de datos MySQL/MariaDB y despliegue en VPS. Productos MVP/beta funcionales, desplegados y en evolución.',
    bullets: [
      'Diseñé y desarrollé desde cero plataformas web full stack para datos públicos.',
      'Definí la arquitectura: frontend, backend, scripts de datos, base de datos y despliegue.',
      'Desarrollé backend con Java 21 y Spring Boot (entidades, repositorios, servicios, DTOs, controladores).',
      'Desarrollé frontend con React, TypeScript y Vite (listados, filtros, paginación, detalle, paneles).',
      'Diseñé APIs REST para búsqueda, filtros, detalle, autenticación y exportación.',
      'Diseñé y normalicé bases de datos relacionales MySQL/MariaDB.',
      'Implementé scraping e ingesta de datos públicos con Python (Playwright, BeautifulSoup, APIs públicas, JSON/CSV, ETL).',
      'Implementé registro, login, activación por correo y, según proyecto, JWT.',
      'Preparé Dockerfiles, Docker Compose local/VPS y configuración Traefik.',
      'Centralicé configuración con .env/.env.example y validé túneles SSH a MariaDB remota.',
      'Desplegué y validé las aplicaciones en VPS Linux.',
    ],
    skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Vite', 'Python', 'Playwright',
      'BeautifulSoup', 'MySQL', 'MariaDB', 'SQL', 'Docker', 'Docker Compose', 'Traefik',
      'Nginx', 'Git', 'VPS Linux', 'SSH Tunnel', 'APIs públicas', 'JSON', 'CSV']
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Interfaces web, componentes reutilizables y maquetación responsive.',
    iconName: 'layout',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'React Router', 'Tailwind', 'Bootstrap']
  },
  {
    id: 'backend',
    title: 'Backend y APIs',
    description: 'APIs REST, lógica de servidor, autenticación y servicios.',
    iconName: 'database',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'JWT', 'PHP', 'Symfony']
  },
  {
    id: 'datos',
    title: 'Datos',
    description: 'Extracción, transformación y persistencia de datos públicos y estructurados.',
    iconName: 'binary',
    skills: ['Python', 'Playwright', 'BeautifulSoup', 'ETL', 'MySQL', 'MariaDB', 'SQL', 'JSON', 'CSV']
  },
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Despliegue, proxy, VPS y entornos reproducibles con variables de entorno.',
    iconName: 'server',
    skills: ['Docker', 'Docker Compose', 'Traefik', 'Nginx', 'Caddy', 'Cloudflare', 'VPS Linux', 'SSH']
  },
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Control de versiones, productividad y herramientas profesionales.',
    iconName: 'settings',
    skills: ['Git', 'GitHub', 'Microsoft 365', 'cPanel', 'OneDrive', 'Teams', 'Android Studio']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'exa-subastas',
    title: 'Exaformación Subastas',
    tagline: 'Plataforma de subastas públicas del BOE · MVP full stack desplegado',
    description: 'Plataforma para extraer, normalizar, consultar y explotar subastas públicas (principalmente inmobiliarias del BOE), con autenticación, filtros, listado y detalle de expedientes.',
    extendedDescription: 'Diseñé y desarrollé la arquitectura completa: scraping del BOE por provincias con Python/Playwright/BeautifulSoup; normalización HTML→JSON→MariaDB; modelo relacional de subastas, bienes, lotes y autoridades; backend Spring Boot; frontend React/TypeScript con filtros y paginación; registro/login/activación por email; despliegue Docker/VPS con Traefik.',
    status: 'In Production',
    tags: ['Java 21', 'Spring Boot', 'React', 'TypeScript', 'Vite', 'Tailwind', 'Python', 'Playwright', 'BeautifulSoup', 'MariaDB', 'Docker', 'Traefik'],
    liveUrl: 'https://subastas.exaformacion.com',
    category: 'Full Stack',
    architecture: {
      frontend: 'React 19 + TypeScript + Vite 6 + Tailwind 4',
      backend: 'Java 21 + Spring Boot 3.5',
      database: 'MariaDB',
      infrastructure: 'Docker Compose + VPS Linux',
      proxy: 'Traefik + Nginx',
      email: 'Spring Mail'
    }
  },
  {
    id: 'exa-subvenciones',
    title: 'Exaformación Subvenciones',
    tagline: 'Plataforma de subvenciones BDNS · ETL + recomendación · MVP desplegado',
    description: 'Plataforma para explotar, buscar y seguir convocatorias públicas de subvenciones (BDNS / InfoSubvenciones), con perfil de usuario, buscador FULLTEXT, detalle de expedientes y feed recomendado.',
    extendedDescription: 'Diseñé y desarrollé la plataforma desde cero: ETL Python contra la API oficial BDNS con actualización incremental; normalización de convocatorias, documentos, anuncios, sectores, regiones y beneficiarios; backend Spring Boot con JWT y Spring Security; onboarding de perfil; buscador SQL FULLTEXT; feed recomendado; frontend React; despliegue Docker/VPS/Traefik.',
    status: 'In Production',
    tags: ['Java 21', 'Spring Boot', 'JWT', 'React', 'Vite', 'React Router', 'Bootstrap', 'Python', 'ETL', 'MariaDB', 'FULLTEXT', 'Docker', 'Traefik'],
    liveUrl: 'https://subvenciones.exaformacion.com',
    category: 'Full Stack',
    architecture: {
      frontend: 'React 19 + Vite + React Router 7 + Bootstrap 5',
      backend: 'Java 21 + Spring Boot 3.5 (JWT, Spring Security)',
      database: 'MariaDB 10.11 (FULLTEXT)',
      infrastructure: 'Docker Compose + VPS Linux',
      proxy: 'Traefik + Nginx',
      email: 'Resend'
    }
  },
  {
    id: 'exa-licitaciones',
    title: 'Exaformación Licitaciones',
    tagline: 'Plataforma de licitaciones · +1M de registros · MVP desplegado',
    description: 'Plataforma para consultar, analizar y explotar licitaciones públicas y contratos menores, con dashboard, catálogo, filtros avanzados, detalle, exportación CSV, favoritos y organismos.',
    extendedDescription: 'Diseñé y desarrollé la plataforma desde cero: modelo canónico de anuncios e ingesta de datasets públicos grandes (JSON/CSV/ATOM) a MariaDB; backend Spring Boot con consultas dinámicas (JpaSpecificationExecutor) y exportación CSV filtrada; frontend React/TypeScript con dashboard, catálogo, detalle y favoritos; despliegue Docker/VPS con Traefik.',
    status: 'In Production',
    tags: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'React', 'TypeScript', 'Vite', 'Tailwind', 'MariaDB', 'Docker', 'Traefik', 'CSV', 'ATOM'],
    liveUrl: 'https://licitaciones.exaformacion.com',
    category: 'Full Stack',
    architecture: {
      frontend: 'React 19 + TypeScript + Vite 6 + Tailwind 4',
      backend: 'Java 21 + Spring Boot 4 (Spring Security, JPA)',
      database: 'MariaDB (+1M registros)',
      infrastructure: 'Docker Compose + VPS Linux',
      proxy: 'Traefik + Nginx',
      email: 'Spring Mail'
    }
  },
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
    status: 'Completed',
    description: 'Formación profesional completada, orientada a programación, bases de datos, desarrollo frontend y backend, interfaces web, despliegue de aplicaciones y trabajo con herramientas de desarrollo.'
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
