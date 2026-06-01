/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  level?: 'Intermediate' | 'Advanced' | 'Basis' | 'Práctico';
  description?: string;
  icon?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  bullets: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  status: 'In Production' | 'In Development' | 'Completed';
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  category: 'Full Stack' | 'Frontend' | 'Backend' | 'Scraping';
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    infrastructure?: string;
    proxy?: string;
    email?: string;
  };
}

export interface AcademicItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'Completed' | 'Current';
  description?: string;
}
