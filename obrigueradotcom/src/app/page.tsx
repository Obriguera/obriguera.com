"use client";

import { useState } from "react";
import Perfil from "../components/Perfil"; // Importamos el nuevo componente
import TarjetaProyecto from "../components/TarjetaProyecto";
import AcademicTimeline from "../components/AcademicTimeline";
import CodecMusic from "../components/CodecMusic";
import Training from "../components/Training";
import Videogames from "../components/Videogames";
import ProjectModal from "../components/ProjectModal";
import { motion, AnimatePresence } from "framer-motion";
import YoutubeFeatured from "@/components/YoutubeFeatured";

interface Project {
  title: string;
  description: string;
  contentPath: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("profesional");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const tabs = [
  { id: "profesional", label: "Ingeniería"},
  { id: "hobbies", label: "Hobbies"},
  { id: "otros", label: "Otros"},
  ];

  const proyectosProfesionales: Project[] = [
    {
      title: "StatMuzza",
      description: "Plataforma de estadísticas deportivas para torneos locales.",
      contentPath: "/project-info/STATMUZZA.md",
      tech: ["FastAPI", "Next.js", "PostgreSQL"],
      image: "",
      link: "https://github.com/StatMuzza/StatMuzza-Backend"
    },
    {
        title: "PC Por Córdoba (PCPC)",
        description: "Recomendador de hardware con IA utilizando la API de Gemini.",
        contentPath: "/project-info/PCPC.md",
        tech: ["Python", "MongoDB", "AI"],
        image: "",
        link: "#"
    },    
    {
        title: "TOSTADASO",
        description: "Ranking de los mejores todados que probé en Córdoba.",
        contentPath: "/project-info/TOSTADASO.md",
        tech: ["React"],
        image: "/img/Logo.svg",
        link: "https://www.obriguera.com/tostadaso"
    }
  ];

  return (
    <>
    <main className="max-w-6xl mx-auto px-6 py-12 text-[#c2c5a0] transition-colors font-mono">
      
      {/* Llamamos al componente modular Perfil */}
      <Perfil />
      <YoutubeFeatured title="VIDEO: ¿Qué es un compilador?¿Para que sirve?" videoId="SB9LXpO6yWo"/>
      {/* --- SELECTOR (TABS) --- */}
      <section className="mb-12 flex justify-center">
    <div className="inline-flex gap-1 p-1 bg-[#242622] border border-[#3e423e] rounded-none shadow-[0_0_0_1px_rgba(194,197,160,0.08)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.28em] transition-colors duration-300 rounded-none
              ${isActive ? "text-[#1a1c1a]" : "text-[#7a827a] hover:text-[#c2c5a0]"}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-[#c2c5a0] border border-[#c2c5a0] rounded-none shadow-[0_0_18px_rgba(194,197,160,0.22)]"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}

            <span className="relative z-10 flex items-center gap-2">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  </section>

      {/* --- CONTENIDO DINÁMICO --- */}
  <section className="mt-10" style={{ minHeight: 400 }}>
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab} // La 'key' le dice a Framer que el componente cambió
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {activeTab === "profesional" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proyectosProfesionales.map((proyecto, index) => (
                <TarjetaProyecto
                  key={index}
                  titulo={proyecto.title}
                  descripcion={proyecto.description}
                  tecnologias={proyecto.tech}
                  link={proyecto.link ?? "#"}
                  imagenPlaceholder={proyecto.image || undefined}
                  onVerProyecto={() => setSelectedProject(proyecto)}
                />
              ))}
            </div>

            {/* Academic timeline appears below the project cards only for 'Proyectos de Ingeniería' */}
            <AcademicTimeline />
          </>
        )}



        {activeTab === "hobbies" && (
          <div className="space-y-8">
            <CodecMusic />
            <Training />
            <Videogames />
          </div>
        )}

        {activeTab === "otros" && (
          <div className="p-20 border border-dashed border-[#3e423e] rounded-none text-center bg-[#242622]">
            <p className="text-[#7a827a] uppercase tracking-[0.22em] text-lg">Próximamente: Blog de ingeniería y hardware retro.</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  </section>

  <ProjectModal
    isOpen={!!selectedProject}
    onClose={() => setSelectedProject(null)}
    project={selectedProject}
  />

    </main>

    <footer
      className="w-full"
      style={{ background: 'linear-gradient(180deg, rgba(194,197,160,0.06), rgba(194,197,160,0.035))' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <p className="text-[#c2c5a0]/40 text-sm uppercase tracking-[0.2em]">© 2026 Octavio Briguera - Córdoba, Argentina</p>
      </div>
    </footer>
    </>
  );
}