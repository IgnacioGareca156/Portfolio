import { FooterLink } from "../types/portfolio";

const socialLinks: FooterLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/IgnacioGareca156",
    icon: "github"
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/IgnacioGareca156",
    icon: "linkedin"
  }
];

const contactLinks: FooterLink[] = [
  {
    label: "Email",
    url: "mailto:newignaciogareca@gmail.com",
    icon: "mail"
  },
  {
    label: "Teléfono",
    url: "tel:+5491112345678",
    icon: "phone"
  }
];

const footerLinks: FooterLink[] = [...socialLinks, ...contactLinks];

const portfolioData = {
  bio: `Transformo ideas en interfaces que no dan vergüenza ajena. Frontend Developer con ganas y café de sobra.`,
  skills: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 15 },
    { name: "SQL", level: 70 },
    { name: "Git", level: 85 },
  ],
  experience: [
    {
      title: "Desarrollador Frontend",
      company: "Empresa XereX",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web con tecnologías modernas",
      achievements: [
        "Desarrollo de aplicaciones web con React y Node.js",
        "Implementación de APIs RESTful",
        "Optimización de rendimiento",
        "Realizacion de manual de usuario para el cliente",
        "Capacitacion al cliente sobre el uso de la aplicacion",
        "Mantenimiento y actualizacion de la aplicacion",
        "Trabajo en equipo con diseñadores y otros desarrolladores",
        "Mejora continua de la aplicacion",
        "Implementacion de nuevas tecnologias",
        "Implementacion de nuevas funcionalidades",
        "Implementacion de nuevas tecnologias",
        "Creacion de APIs RESTful",
      ],
    },
  ],
  projects: [
    {
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      image: "/project1.jpg"
    },
    {
      title: "Proyecto 2",
      description: "Descripción del proyecto 2",
      technologies: ["Python", "Django", "PostgreSQL"],
      github: "#",
      demo: "#",
      image: "/project2.jpg"
    },
    {
      title: "Proyecto 3",
      description: "Descripción del proyecto 3",
      technologies: ["JavaScript", "Vue.js", "Firebase"],
      github: "#",
      demo: "#",
      image: "/project3.jpg"
    }
  ],
  footerLinks
};

export default portfolioData;
