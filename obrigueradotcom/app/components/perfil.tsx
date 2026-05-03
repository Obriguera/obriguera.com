import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Perfil() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
      {/* Texto - 2/3 de la pantalla en escritorio */}
      <div className="md:col-span-8">
        <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-[0.28em] text-[#c2c5a0]">
          Octavio Briguera
        </h1>
        <p className="text-lg md:text-xl text-[#c2c5a0] font-medium mt-3 uppercase tracking-[0.22em]">
          Estudiante de Ingeniería Informática
        </p>
        <p className="mt-6 text-[#7a827a] leading-relaxed max-w-2xl">
          Hola!! Tengo 22 años y vivo en Córdoba, Argentina. Soy una persona que le gustan los desafíos y resolver problemas creativamente.
          Me apasiona el mundo del software y videojuegos, entre otras cosas. 
          Actualemnte estoy cursando el último año de mi carrera y dispuesto a afrontar nuevos proyectos y actividades.
        </p>
        
        {/* Contacto rápido */}
        <div className="flex gap-4 mt-8">
          <a href="https://github.com/Obriguera" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#242622] border border-[#3e423e] text-[#c2c5a0] hover:border-[#c2c5a0] transition-colors rounded-none">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/obriguera" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#242622] border border-[#3e423e] text-[#c2c5a0] hover:border-[#c2c5a0] transition-colors rounded-none">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:obriguera03@gmail.com" className="p-2 bg-[#242622] border border-[#3e423e] text-[#c2c5a0] hover:border-[#c2c5a0] transition-colors rounded-none">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Imagen - 1/3 de la pantalla en escritorio */}
      <div className="md:col-span-4 flex justify-center">
        <div className="relative w-64 h-64 md:w-full md:max-w-xs aspect-square border-2 border-[#c2c5a0] shadow-[0_0_24px_rgba(194,197,160,0.18)] overflow-hidden bg-[#1a1c1a] rounded-none grayscale-[35%] hover:grayscale-0 hover:saturate-110 transition-[filter] duration-300">
          <Image 
            src="/foto-perfil.jpeg" 
            alt="Octavio Briguera"
            fill 
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}