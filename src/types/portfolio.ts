export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface FooterLink {
  label: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  bio: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  footerLinks: FooterLink[];
}
