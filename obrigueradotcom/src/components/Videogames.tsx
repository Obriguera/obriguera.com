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
    <div className="mt-6 border border-[#4b4b4b] bg-[#151515] rounded-none font-mono">
      {/* Encabezado del Log */}
      <div className="px-4 py-2 border-b border-[#4b4b4b] flex justify-between items-center bg-[#090909]/80">
        <div className="flex items-center gap-2 text-[#b7b3af]">
          <Target size={14} />
          <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Games</span>
        </div>
      </div>

      {/* Lista de Misiones */}
      <div className="divide-y divide-[#4b4b4b]/40">
        {missions.map((mission, i) => (
          <div 
            key={i} 
            className="group flex items-center justify-between p-4 hover:bg-[#f2f2ee]/5 transition-colors cursor-crosshair"
          >
            <div className="flex items-center gap-4">
              <div className={`w-1.5 h-1.5 ${mission.status === '100%' ? 'bg-[#f2f2ee]' : 'bg-[#d9d9d9] animate-pulse'}`} />
              <div>
                <div className="text-[9px] text-[#b7b3af] uppercase mb-0.5">{mission.type}</div>
                <div className="text-sm font-bold uppercase tracking-tight text-[#f2f2ee]">{mission.title}</div>
              </div>
            </div>
            <div className="text-[10px] font-black px-3 py-1 bg-[#090909] border border-[#4b4b4b] group-hover:border-[#f2f2ee] transition-colors text-[#f2f2ee]">
              {mission.status}
            </div>
          </div>
        ))}
      </div>

      {/* Footer del componente con los Links */}
      <div className="p-4 bg-[#090909]/30 flex gap-4 border-t border-[#4b4b4b]">
        <a
          href={steamProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#f2f2ee] hover:text-white transition-colors"
        >
          <Gamepad2 size={14} /> [ Steam_Profile ]
        </a>
      </div>
    </div>
  );
}