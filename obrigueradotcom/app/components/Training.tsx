import React from 'react';
import { Activity } from 'lucide-react';

export default function Training() {
  return (
    <div className="border border-[#3e423e] bg-[#242622] rounded-sm overflow-hidden mt-6">
      <div className="flex flex-col md:flex-row">
        {/* Lado del Video */}
        <div className="relative w-full md:w-2/3 border-b md:border-b-0 md:border-r border-[#3e423e]">
          <video 
            className="w-full h-full object-cover opacity-70 grayscale"
            autoPlay muted loop playsInline
          >
            <source src="/videos/deadlift.mp4" type="video/mp4" />
          </video>
          {/* Solo el punto rojo */}
          <div className="absolute top-4 left-4">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
          </div>
        </div>

        {/* Lado de Estadísticas */}
        <div className="w-full md:w-1/3 p-6 font-mono text-[#c2c5a0] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-8 border-b border-[#3e423e] pb-2 text-[#7a827a]">
              <Activity size={14} />
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold">MY RECORDS</span>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-baseline border-b border-[#3e423e]/30 pb-1">
                <span className="text-xs uppercase opacity-70">Deadlift</span>
                <span className="text-2xl font-black italic">155kg</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-[#3e423e]/30 pb-1">
                <span className="text-xs uppercase opacity-70">Back Squat</span>
                <span className="text-2xl font-black italic">125kg</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-[#3e423e]/30 pb-1">
                <span className="text-xs uppercase opacity-70">Bench Press</span>
                <span className="text-2xl font-black italic">90kg</span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-[9px] uppercase tracking-widest opacity-40 italic text-right">
            Status: Still Going
          </div>
        </div>
      </div>
    </div>
  );
}