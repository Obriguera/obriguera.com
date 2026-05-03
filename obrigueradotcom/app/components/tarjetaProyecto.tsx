import { ExternalLink } from "lucide-react";

// Definimos qué datos necesita recibir cada tarjeta
interface ProyectoProps {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  link: string;
  imagenPlaceholder?: string;
}

export default function TarjetaProyecto({ titulo, descripcion, tecnologias, link, imagenPlaceholder }: ProyectoProps) {
  return (
    <div className="bg-[#242622] p-6 rounded-sm border border-[#3e423e] flex flex-col h-full">
      {/* Espacio para la imagen */}
      <div className="h-40 bg-[#1a1c1a] border border-[#3e423e] rounded-sm mb-4 flex items-center justify-center text-[#7a827a] italic">
        {imagenPlaceholder || "Imagen Proyecto"}
      </div>

      {/* Info del proyecto */}
      <h3 className="text-xl font-bold uppercase tracking-widest text-[#c2c5a0]">{titulo}</h3>
      <p className="text-[#7a827a] mt-2 text-sm leading-relaxed grow">{descripcion}</p>

      {/* Tags de Tecnologías */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tecnologias.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 bg-transparent border border-[#c2c5a0] text-[#c2c5a0] text-xs uppercase tracking-[0.18em] rounded-none font-bold"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botón de acción */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 w-full py-2 bg-[#c2c5a0] text-[#1a1c1a] rounded-none font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-colors hover:bg-[#d2d5b0]"
      >
        Ver Proyecto <ExternalLink size={16} />
      </a>
    </div>
  );
}