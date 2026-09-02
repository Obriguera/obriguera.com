import React from 'react';

// Le pasamos el ID del video como prop para que sea reutilizable
interface YoutubeFeaturedProps {
  videoId: string;
  title?: string;
}

export default function YoutubeFeatured({ videoId, title = "Video destacado" }: YoutubeFeaturedProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      {/* Título opcional */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#c2c5a0] mb-6 tracking-tight">
        {title}
      </h2>
      
      {/* Contenedor del video con el mismo estilo de borde que usás en tu foto de perfil */}
      <div className="relative w-full aspect-video border-2 border-[#3e423e] shadow-[0_0_30px_rgba(194,197,160,0.05)] overflow-hidden bg-[#1a1c1a] group">
        
        {/* Iframe de YouTube optimizado */}
        <iframe
          className="absolute top-0 left-0 w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-[filter] duration-500"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        ></iframe>
        
      </div>
    </div>
  );
}