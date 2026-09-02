import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react"; // Asumiendo que usás lucide-react para el ícono de Mail

export default function Header() {
  return (
    <header className="w-full bg-[#1a1c1a] border-b border-[#3e423e] py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Lado Izquierdo: Logo / Favicon */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-8 h-8">
            <Image
              src="/favicon.svg" // Cambiá esto si tu archivo se llama distinto (.ico, .png, etc.)
              alt="Octavio Briguera Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[#c2c5a0] font-bold text-lg hidden sm:block">
            Obriguera
          </span>
        </Link>

        {/* Lado Derecho: Redes Sociales (Mismos estilos que tu Perfil.tsx) */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Obriguera"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#242622] border border-[#3e423e] text-[#c2c5a0] hover:border-[#c2c5a0] transition-colors rounded-none flex items-center justify-center"
            aria-label="GitHub de Octavio Briguera"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/obriguera"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#242622] border border-[#3e423e] text-[#c2c5a0] hover:border-[#c2c5a0] transition-colors rounded-none flex items-center justify-center"
            aria-label="LinkedIn de Octavio Briguera"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:obriguera03@gmail.com"
            className="p-2 bg-[#242622] border border-[#3e423e] text-[#c2c5a0] hover:border-[#c2c5a0] transition-colors rounded-none flex items-center justify-center"
            aria-label="Enviar email a Octavio Briguera"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </header>
  );
}