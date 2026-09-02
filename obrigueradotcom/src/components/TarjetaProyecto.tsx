import { ExternalLink } from "lucide-react";

// Definimos qué datos necesita recibir cada tarjeta
interface ProyectoProps {
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  link: string;
  imagenPlaceholder?: string;
  onVerProyecto: () => void;
}

export default function TarjetaProyecto({ titulo, descripcion, tecnologias, imagenPlaceholder, onVerProyecto }: ProyectoProps) {
  return (
    <div className="bg-[#151515] p-6 rounded-sm border border-[#4b4b4b] flex flex-col h-full shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      {/* Espacio para la imagen */}
      <div className="h-40 bg-[#090909] border border-[#4b4b4b] rounded-sm mb-4 flex items-center justify-center overflow-hidden">
        {imagenPlaceholder ? (
          <img
            src={imagenPlaceholder}
            alt={`${titulo} preview`}
            className="h-full w-full object-contain p-3"
          />
        ) : (
          <span className="text-[#b7b3af] italic">Imagen Proyecto</span>
        )}
      </div>

      {/* Info del proyecto */}
      <h3 className="text-xl font-bold uppercase tracking-widest text-[#f2f2ee]">{titulo}</h3>
      <p className="text-[#b7b3af] mt-2 text-sm leading-relaxed grow">{descripcion}</p>

      {/* Tags de Tecnologías */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tecnologias.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 bg-transparent border border-[#f2f2ee] text-[#f2f2ee] text-xs uppercase tracking-[0.18em] rounded-none font-bold"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botón de acción */}
      <button
        type="button"
        onClick={onVerProyecto}
        className="mt-6 w-full py-2 bg-[#f2f2ee] text-[#090909] rounded-none font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2 transition-colors hover:bg-white"
      >
        Ver Proyecto <ExternalLink size={16} />
      </button>
    </div>
  );
}