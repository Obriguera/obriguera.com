"use client";

import { useState } from "react";
import Perfil from "./components/perfil"; // Importamos el nuevo componente
import TarjetaProyecto from "./components/tarjetaProyecto";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profesional");

  const tabs = [
  { id: "profesional", label: "Proyectos de Ingeniería"},
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
    <main className="max-w-6xl mx-auto px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      
      {/* Llamamos al componente modular Perfil */}
      <Perfil />

      {/* --- SELECTOR (TABS) --- */}
      <section className="mb-12 flex justify-center">
    <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              relative flex items-center gap-2 px-6 py-2.5 text-sm font-bold transition-colors duration-300 rounded-full
              ${isActive ? "text-blue-700 dark:text-blue-300" : "text-gray-500 hover:text-blue-600 dark:hover:text-blue-300"}
            `}
          >
            {/* La pastilla activa sigue el acento azul de la página */}
            {isActive && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-blue-50 dark:bg-blue-900/35 border border-blue-200 dark:border-blue-800 shadow-sm rounded-full"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}

            {/* El contenido del botón (Z-index alto para que esté sobre la pastilla) */}
            <span className="relative z-10 flex items-center gap-2">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  </section>

      {/* --- CONTENIDO DINÁMICO --- */}
  <section className="min-h-[400px] mt-10">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab} // La 'key' le dice a Framer que el componente cambió
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {activeTab === "profesional" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectosProfesionales.map((proyecto, index) => (
              <TarjetaProyecto key={index} {...proyecto} />
            ))}
          </div>
        )}

        {activeTab === "hobbies" && (
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 italic">Fuerza y Rendimiento</h3>
            <p className="text-gray-500">
                Entrenamiento enfocado en Powerlifting. <br />
                Records actuales: Cluster Deadlift 144kg / Cluster Back Squat 113kg.
            </p>
          </div>
        )}

        {activeTab === "otros" && (
          <div className="p-20 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl text-center">
            <p className="text-gray-500 italic text-lg">Próximamente: Blog de ingeniería y hardware retro.</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  </section>

      <footer className="mt-32 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026 Octavio Briguera - Córdoba, Argentina</p>
      </footer>
    </main>
  );
}