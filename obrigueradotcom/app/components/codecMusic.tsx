import React, { useState } from 'react'; // Ya no necesitamos useEffect para esto
import { Radio, Music } from 'lucide-react';

interface Cancion {
  title: string;
  artist: string;
}

const MY_PLAYLIST: Cancion[] = [
  { title: "Mentía", artist: "Miranda! y Chano" },
  { title: "Under Pressure", artist: "Queen & David Bowie" },
  { title: "War", artist: "Vince DiCola" },
  { title: "Fantasmas", artist: "Miranda!" },
  { title: "Everything She Wants", artist: "Sophie Grey" },
  { title: "Your Code", artist: "Sophie Grey" },
  { title: "Burning Heart", artist: "Survivor" },
  { title: "Metal Gear Solid 2 Theme", artist: "Harry Gregson-Williams" },
  { title: "Don't Stop Me Now", artist: "Queen" },
  { title: "Hellraiser", artist: "Ozzy Osbourne" },
  { title: "No More Tears", artist: "Ozzy Osbourne" },
  { title: "Somebody That I Used To Know", artist: "Gotye & Kimbra" },
  { title: "Tu Misterioso Alguien", artist: "Miranda!" },
  { title: "Symphony of Destruction", artist: "Megadeth" },
  { title: "The Girl From Ipanema", artist: "Frank Sinatra" },
  { title: "Good Intent", artist: "Kimbra" },
  { title: "Dreamer", artist: "Ozzy Osbourne" },
  { title: "Crazy Train", artist: "Ozzy Osbourne" },
  { title: "Great Days", artist: "Karen Aoki & Daisuke Hasegawa" }
];

// Función auxiliar para obtener datos iniciales aleatorios
const getInitialData = () => {
  const randomIndex = Math.floor(Math.random() * MY_PLAYLIST.length);
  const randomFreq = (Math.random() * (145.00 - 140.00) + 140.00).toFixed(2);
  return { song: MY_PLAYLIST[randomIndex], freq: randomFreq };
};

export default function CodecMusic() {
  // Inicializamos el estado directamente con la función. 
  // React ejecutará esto solo una vez en el montaje.
  const [initialData] = useState(getInitialData);
  const [song] = useState<Cancion>(initialData.song);
  const [frequency] = useState(initialData.freq);

  return (
    <div className="bg-[#1a1c1a] border-2 border-[#3e423e] p-6 rounded-sm font-mono text-[#c2c5a0] relative overflow-hidden shadow-[0_0_15px_rgba(62,66,62,0.3)]">
      {/* Efecto visual de Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-4 border-b border-[#3e423e] pb-2">
          <div className="flex items-center gap-2">
            <Radio size={18} className="animate-pulse" />
            <span className="text-xs tracking-[0.3em] uppercase">FAVORITE SONGS!!</span>
          </div>
          <span className="text-xl font-black">{frequency}</span>
        </div>

        <div className="flex gap-6 items-center">
          <div className="w-20 h-20 bg-[#242622] border border-[#c2c5a0]/30 flex items-center justify-center rounded-lg shadow-inner">
            <Music size={40} className="text-[#c2c5a0]/40" />
          </div>

          <div className="flex-1">
            <div className="text-[10px] uppercase opacity-50 tracking-widest mb-1 font-bold">Incoming Audio Stream</div>
            <div className="text-lg font-black leading-tight tracking-tight">{song.title}</div>
            <div className="text-sm opacity-80 italic text-blue-400/70">--- {song.artist}</div>
            
            {/* Visualizador de ondas táctico */}
            <div className="flex gap-1 mt-4 h-4 items-end">
              {[...Array(16)].map((_, i) => (
                <div 
                  key={i} 
                  className="w-1 bg-[#c2c5a0] animate-bounce" 
                  style={{ 
                    height: `${(i % 3 === 0 ? 30 : 70)}%`, 
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: '1s'
                  }} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}