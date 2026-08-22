import React from 'react';
import { Gamepad2, Target} from 'lucide-react';

export default function Videogames() {
  const steamProfileUrl = 'https://steamcommunity.com/profiles/76561198866505009/';

  const missions = [
    { title: "Metal Gear Solid Series", status: "Active", type: "STEALTH" },
    { title: "The Elder Scrolls Series", status: "Active", type: "RPG" },
    { title: "Dark Souls I & III", status: "100%", type: "ACTION RPG" },
    { title: "Valheim", status: "Active", type: "SURVIVAL" },
    { title: "Warhammer: Vermintide 2", status: "Active", type: "CO-OP ACTION" },
    { title: "Baldurs Gate 3", status: "Active", type: "CRPG" },
    { title: "Doom Eternal", status: "100%", type: "FPS" },
    { title: "Dishonored", status: "Active", type: "IMMERSIVE SIM" },
    { title: "Alice Madness Returns", status: "100%", type: "PLATFORMER" },
    { title: "Bioshock Infinite", status: "Active", type: "FPS" }
  ];

  return (
    <div className="mt-6 border border-[#3e423e] bg-[#242622] rounded-none font-mono">
      {/* Encabezado del Log */}
      <div className="px-4 py-2 border-b border-[#3e423e] flex justify-between items-center bg-[#1a1c1a]/50">
        <div className="flex items-center gap-2 text-[#7a827a]">
          <Target size={14} />
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Games</span>
        </div>
      </div>

      {/* Lista de Misiones */}
      <div className="divide-y divide-[#3e423e]/30">
        {missions.map((mission, i) => (
          <div 
            key={i} 
            className="group flex items-center justify-between p-4 hover:bg-[#c2c5a0]/5 transition-colors cursor-crosshair"
          >
            <div className="flex items-center gap-4">
              <div className={`w-1.5 h-1.5 ${mission.status === '100% CLEAR' ? 'bg-[#c2c5a0]' : 'bg-green-600 animate-pulse'}`} />
              <div>
                <div className="text-[9px] text-[#7a827a] uppercase mb-0.5">{mission.type}</div>
                <div className="text-sm font-bold uppercase tracking-tight text-[#c2c5a0]">{mission.title}</div>
              </div>
            </div>
            <div className="text-[10px] font-black px-3 py-1 bg-[#1a1c1a] border border-[#3e423e] group-hover:border-[#c2c5a0] transition-colors">
              {mission.status}
            </div>
          </div>
        ))}
      </div>

      {/* Footer del componente con los Links */}
      <div className="p-4 bg-[#1a1c1a]/30 flex gap-4 border-t border-[#3e423e]">
        <a
          href={steamProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#c2c5a0] hover:text-white transition-colors"
        >
          <Gamepad2 size={14} /> [ Steam_Profile ]
        </a>
      </div>
    </div>
  );
}