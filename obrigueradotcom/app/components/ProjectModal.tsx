"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    contentPath: string;
    tech: string[];
    image: string;
    link?: string;
    github?: string;
  } | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [contentMd, setContentMd] = useState<string>("");
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !project) {
      // defer resets to avoid synchronous setState inside effect body (prevents cascading renders)
      const id = window.setTimeout(() => {
        setContentMd("");
        setLoadError(null);
      }, 0);

      return () => clearTimeout(id);
    }

    const controller = new AbortController();
    const contentPath = project.contentPath;

    async function loadProjectMarkdown() {
      try {
        setLoadError(null);
        setContentMd("");

        const response = await fetch(contentPath, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Failed to load ${contentPath}`);
        }

        const markdown = await response.text();
        setContentMd(markdown);
      } catch (error) {
        if ((error as Error).name === 'AbortError') {
          return;
        }

        setLoadError('No se pudo cargar la documentación del proyecto.');
      }
    }

    loadProjectMarkdown();

    return () => controller.abort();
  }, [isOpen, project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay oscuro de fondo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] cursor-zoom-out"
          />

          {/* Ventana del Proyecto (El "Briefing") */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-[110] bg-[#c2c5a0] rounded-none border-2 border-[#1a1c1a] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Cabecera Táctica */}
            <div className="bg-[#1a1c1a] p-4 flex justify-between items-center text-[#c2c5a0]">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-black uppercase font-mono tracking-tighter">{project.title}</h2>
              </div>
              <button 
                onClick={onClose}
                className="hover:bg-[#c2c5a0] hover:text-[#1a1c1a] p-1 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenido tipo README */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 font-mono text-[#1a1c1a]">
              <div className="max-w-4xl mx-auto">
                {/* Imagen Principal */}
                <div className="w-full h-64 md:h-96 bg-[#1a1c1a]/10 border border-[#1a1c1a]/20 mb-8 overflow-hidden relative">
                   <div className="absolute top-2 left-2 text-[10px] uppercase opacity-30 font-bold italic">Source_Attachment_01</div>
                   {/* Aquí iría el componente Image de Next con src={project.image} */}
                   <div className="w-full h-full flex items-center justify-center text-[#1a1c1a]/20 font-black text-4xl">
                     [ PROJECT_VISUAL ]
                   </div>
                </div>

                {/* Texto del Proyecto */}
                <h3 className="text-2xl font-black uppercase mb-4 border-b-2 border-[#1a1c1a] pb-2">Descripción</h3>

                {/* Renderizado de Markdown */}
                <article className="prose prose-slate max-w-none prose-headings:uppercase prose-headings:font-black prose-headings:border-b prose-headings:border-[#1a1c1a]/20 prose-p:leading-relaxed prose-p:mb-6 prose-li:list-disc prose-li:ml-4 prose-code:bg-[#1a1c1a]/10 prose-code:px-1 prose-code:rounded-sm">
                  {loadError ? (
                    <p>{loadError}</p>
                  ) : contentMd ? (
                    <ReactMarkdown>{contentMd}</ReactMarkdown>
                  ) : (
                    <p>Cargando documentación...</p>
                  )}
                </article>

                {/* Stack Técnico Interno */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase mb-3 opacity-60 italic">Used Technologies //</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 border border-[#1a1c1a] text-[10px] font-black uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Acciones Finales */}
                <div className="flex gap-4 mt-12 pt-8 border-t border-[#1a1c1a]/20">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-[#1a1c1a] text-[#c2c5a0] px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity">
                      <ExternalLink size={16} /> Github
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="border-2 border-[#1a1c1a] px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#1a1c1a] hover:text-[#c2c5a0] transition-all">
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Footer del Modal */}
            <div className="bg-[#1a1c1a]/5 p-2 px-6 text-[8px] uppercase tracking-widest flex justify-between opacity-50 border-t border-[#1a1c1a]/10 font-bold">
              <span>Auth: O. Briguera // Sector: Cordoba</span>
              <span>End of File</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}