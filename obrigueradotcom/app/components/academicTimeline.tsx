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
    <div className="bg-[#c2c5a0] p-8 rounded-2xl border border-[#3e423e] text-[#1a1c1a] font-mono shadow-inner mt-10">
      <h2 className="text-2xl font-black mb-8 tracking-tighter uppercase border-b-2 border-[#1a1c1a]/20 pb-2">
        Timeline Académico
      </h2>
      
      <div className="relative border-l-2 border-[#1a1c1a]/30 ml-3 space-y-10 pb-4">
        {eventos.map((evento, index) => (
          <div key={index} className="relative pl-8">
            {/* El punto del timeline */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#1a1c1a] rounded-full border-2 border-[#c2c5a0]" />
            
            <span className="text-[10px] font-bold tracking-widest opacity-70">
              {evento.fecha}
            </span>
            <h3 className="text-lg font-black leading-none mt-1">
              {evento.titulo}
            </h3>
            <p className="text-sm mt-2 leading-relaxed font-medium opacity-80 max-w-2xl">
              {evento.descripcion}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-[9px] uppercase tracking-[0.2em] opacity-50 text-right">
        End of Record // Confidential
      </div>
    </div>
  );
}