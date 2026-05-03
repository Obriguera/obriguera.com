"use client";

import { useState } from "react";
import Perfil from "./components/perfil"; // Importamos el nuevo componente
import TarjetaProyecto from "./components/tarjetaProyecto";
import AcademicTimeline from "./components/academicTimeline";
import CodecMusic from "./components/codecMusic";
import Training from "./components/Training";
import Videogames from "./components/Videogames";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profesional");

  const tabs = [
  { id: "profesional", label: "Ingeniería"},
  { id: "hobbies", label: "Hobbies"},
  { id: "otros", label: "Otros"},
  ];

  const proyectosProfesionales = [
    {
      titulo: "StatMuzza",
      descripcion: "Plataforma de estadísticas deportivas para torneos locales.",
      tecnologias: ["FastAPI", "Next.js", "PostgreSQL"],
      link: "https://github.com/StatMuzza/StatMuzza-Backend"
    },
    {
        titulo: "PC Por Córdoba (PCPC)",
        descripcion: "Recomendador de hardware con IA utilizando la API de Gemini.",
        tecnologias: ["Python", "MongoDB", "AI"],
        link: "#"
    }
  ];

  return (
    <>
    <main className="max-w-6xl mx-auto px-6 py-12 text-[#c2c5a0] transition-colors font-mono">
      
      {/* Llamamos al componente modular Perfil */}
      <Perfil />

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
                <TarjetaProyecto key={index} {...proyecto} />
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