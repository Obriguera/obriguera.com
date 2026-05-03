import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Perfil() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
      {/* Texto - 2/3 de la pantalla en escritorio */}
      <div className="md:col-span-8">
        <h1 className="text-5xl font-extrabold tracking-tight">Octavio Briguera</h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-2">
          Estudiante de Ingeniería | Desarrollador
        </p>
        <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
          Tengo 22 años y vivo en Córdoba. Me apasiona resolver problemas complejos mediante software. 
          Actualmente enfocado en sistemas robustos y alto rendimiento.
        </p>
        
        {/* Contacto rápido */}
        <div className="flex gap-4 mt-8">
          <a href="https://github.com/Obriguera" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/obriguera" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:obriguera03@gmail.com" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Imagen - 1/3 de la pantalla en escritorio */}
      <div className="md:col-span-4 flex justify-center">
        <div className="relative w-64 h-64 md:w-full md:max-w-xs aspect-square rounded-2xl border-4 border-blue-500 shadow-2xl overflow-hidden">
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