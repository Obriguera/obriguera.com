import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Perfil() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
      {/* Texto - 2/3 de la pantalla en escritorio */}
      <div className="md:col-span-8">
        <h1 className="text-5xl font-extrabold tracking-tight">Octavio Briguera</h1>
        <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mt-2">
          Estudiante de Ingeniería | Desarrollador Fullstack
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
          <a href="#" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:tu-email@ejemplo.com" className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:text-blue-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>

      {/* Imagen - 1/3 de la pantalla en escritorio */}
      <div className="md:col-span-4 flex justify-center">
        <div className="w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-2xl border-4 border-blue-500 shadow-2xl overflow-hidden flex items-center justify-center text-gray-500 italic text-center p-4">
           {/* Cuando tengas tu foto, usá: <img src="/tu-foto.jpg" alt="Octavio" className="object-cover w-full h-full" /> */}
           Foto de Octavio
        </div>
      </div>
    </section>
  );
}