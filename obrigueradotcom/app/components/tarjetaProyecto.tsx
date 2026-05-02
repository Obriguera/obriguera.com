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
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col h-full hover:shadow-lg transition-shadow">
      {/* Espacio para la imagen */}
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-500 italic">
        {imagenPlaceholder || "Imagen Proyecto"}
      </div>

      {/* Info del proyecto */}
      <h3 className="text-xl font-bold">{titulo}</h3>
      <p className="text-gray-500 mt-2 text-sm flex-grow">{descripcion}</p>

      {/* Tags de Tecnologías */}
      <div className="flex flex-wrap gap-2 mt-4">
        {tecnologias.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs rounded font-bold"
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
        className="mt-6 w-full py-2 bg-blue-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
      >
        Ver Proyecto <ExternalLink size={16} />
      </a>
    </div>
  );
}