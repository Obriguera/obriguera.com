import React from 'react';

interface Evento {
  fecha: string;
  titulo: string;
  descripcion: string;
}

const eventos: Evento[] = [
  {
    fecha: "2022 - Actualidad",
    titulo: "Igeniería Informática en Universidad Blas Pascal",
    descripcion: "Continúa actualmente, ultimo año de cursado."
  },
  {
    fecha: "2016 - 2021",
    titulo: "Bachiller en economía y administración",
    descripcion: "Colegio Corazón de María."
  }
];

export default function AcademicTimeline() {
  return (
    <div className="bg-[#151515] p-8 rounded-sm border border-[#4b4b4b] text-[#f2f2ee] font-mono shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] mt-10">
      <h2 className="text-2xl font-black mb-8 tracking-tighter uppercase border-b-2 border-[#f2f2ee]/20 pb-2">
        Timeline Académico
      </h2>
      
      <div className="relative border-l-2 border-[#f2f2ee]/25 ml-3 space-y-10 pb-4">
        {eventos.map((evento, index) => (
          <div key={index} className="relative pl-8">
            {/* El punto del timeline */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#f2f2ee] rounded-full border-2 border-[#151515]" />
            
            <span className="text-[10px] font-bold tracking-widest opacity-70 text-[#b7b3af]">
              {evento.fecha}
            </span>
            <h3 className="text-lg font-black leading-none mt-1 text-[#f2f2ee]">
              {evento.titulo}
            </h3>
            <p className="text-sm mt-2 leading-relaxed font-medium opacity-80 max-w-2xl text-[#d5d1ce]">
              {evento.descripcion}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}