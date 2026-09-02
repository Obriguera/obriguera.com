import React from 'react';
import { Activity } from 'lucide-react';

export default function Training() {
  return (
    <div className="border border-[#4b4b4b] bg-[#151515] rounded-sm overflow-hidden mt-6">
      <div className="flex flex-col md:flex-row">
        {/* Lado del Video */}
        <div className="relative w-full md:w-2/3 border-b md:border-b-0 md:border-r border-[#4b4b4b]">
          <video 
            className="w-full h-full object-cover opacity-70 grayscale"
            autoPlay muted loop playsInline
          >
            <source src="/videos/deadlift.mp4" type="video/mp4" />
          </video>
          {/* Solo el punto rojo */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-[#f2f2ee] rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.35)]" />
          </div>
        </div>

        {/* Lado de Estadísticas */}
        <div className="w-full md:w-1/3 p-6 font-mono text-[#f2f2ee] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8 border-b border-[#4b4b4b] pb-2 text-[#b7b3af]">
              <Activity size={14} />
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold">MY RECORDS</span>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-baseline border-b border-[#f2f2ee]/20 pb-1">
                <span className="text-xs uppercase opacity-70">Deadlift</span>
                <span className="text-2xl font-black italic">155kg</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-[#f2f2ee]/20 pb-1">
                <span className="text-xs uppercase opacity-70">Back Squat</span>
                <span className="text-2xl font-black italic">125kg</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-[#f2f2ee]/20 pb-1">
                <span className="text-xs uppercase opacity-70">Bench Press</span>
                <span className="text-2xl font-black italic">90kg</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-[9px] uppercase tracking-widest opacity-40 italic text-right text-[#b7b3af]">
            Status: Still Going
          </div>
        </div>
      </div>
    </div>
  );
}