'use client';

import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import type { Project, Skill } from "../types/portfolio";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ScrollLink from "../components/ScrollLink";
import ProfileImage from "../components/ProfileImage";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectCard from "../components/ProjectCard";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-900 to-blue-900">
      <Section title="Inicio" id="inicio">
        <div className="text-center py-20 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="relative w-40 h-40 mb-8 rounded-full border-4 border-cyan-500/30 p-1 shadow-2xl"
            >
              <ProfileImage
                src="/profile.jpg"
                alt="Ignacio Gareca"
                size={160}
              />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 mb-6 drop-shadow-sm tracking-tight"
            >
              Ignacio Gareca
            </motion.h1>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl text-cyan-50 font-medium mb-8 tracking-wide"
            >
              Desarrollador <span className="text-cyan-400">Frontend</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
            >
              {portfolioData.bio}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4"
            >
              <ScrollLink href="#proyectos" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1" primary={true}>
                Ver Proyectos
              </ScrollLink>
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-indigo-500/50 hover:-translate-y-1 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Descargar CV
              </a>
              <ScrollLink href="#contacto" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 rounded-full hover:-translate-y-1">
                ¿Charlamos?
              </ScrollLink>
            </motion.div>
          </div>
        </div>

        <div className="relative z-10 mt-12 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta de Destacado / Info rapida */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Stack Principal</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.slice(0, 5).map((skill: Skill, index: number) => (
                  <span key={index} className="px-4 py-2 bg-blue-900/50 text-cyan-100 rounded-full text-sm border border-blue-500/30 font-medium">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tarjeta de Estadisticas o Resumen */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Experiencia</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white/90">{portfolioData.experience[0]?.title || "Desarrollador"}</h4>
                  <p className="text-blue-200/70 text-sm">{portfolioData.experience[0]?.company || "Freelance"} • {portfolioData.experience[0]?.period || "Actualidad"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Resto de secciones... las voy a ajustar un poco el padding si hace falta */}
      <div className="mt-20">
        <Section title="Sobre mí" id="sobre-mi">
          <About bio={portfolioData.bio} />
        </Section>
      </div>

      <Section title="Habilidades" id="habilidades">
        <Skills skills={portfolioData.skills} />
      </Section>

      <Section title="Experiencia" id="experiencia">
        <Experience experience={portfolioData.experience} />
      </Section>

      <Section title="Proyectos" id="proyectos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {portfolioData.projects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>
      </Section>

      <Section title="Contacto" id="contacto">
        <Contact />
      </Section>

      <Footer links={portfolioData.footerLinks} />
    </main>
  );
}
