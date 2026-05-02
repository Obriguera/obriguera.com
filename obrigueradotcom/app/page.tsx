"use client";

import { useState } from "react";
import Perfil from "./components/perfil"; // Importamos el nuevo componente
import TarjetaProyecto from "./components/tarjetaProyecto";

export default function Home() {
  const [activeTab, setActiveTab] = useState("profesional");

  const proyectosProfesionales = [
    {
      titulo: "StatMuzza",
      descripcion: "Plataforma de estadísticas deportivas para torneos locales.",
      tecnologias: ["FastAPI", "Next.js", "PostgreSQL"],
      link: "https://github.com/Obriguera/StatMuzza-Backend"
    },
    {
      titulo: "Gestión de Gimnasio",
      descripcion: "Sistema para administración de socios y pagos.",
      tecnologias: ["C#", "Blazor", "SQL Server"],
      link: "#" 
    },
    {
        titulo: "Tu Compu Ideal",
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
      <section className="mb-12">
        <div className="flex border-b border-gray-200 dark:border-gray-800 gap-8">
          {["profesional", "hobbies", "otros"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all ${
                activeTab === tab 
                ? "border-b-2 border-blue-500 text-blue-500" 
                : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* --- CONTENIDO DINÁMICO --- */}
      <section className="min-h-[400px]">
        {activeTab === "profesional" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
            {proyectosProfesionales.map((proyecto, index) => (
              <TarjetaProyecto 
                key={index}
                {...proyecto} // Truco: esto pasa todas las propiedades del objeto automáticamente
              />
            ))}
          </div>
        )}

        {/* ... Resto de las pestañas ... */}
      </section>

      <footer className="mt-32 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm">
        <p>© 2026 Octavio Briguera - Córdoba, Argentina</p>
      </footer>
    </main>
  );
}