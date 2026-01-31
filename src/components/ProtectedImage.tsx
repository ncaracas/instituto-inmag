import React from "react";
import { optimizeImage } from "../utils/imageHelper";

interface ProtectedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const ProtectedImage: React.FC<ProtectedImageProps> = ({
  src,
  alt,
  className = "",
  ...props
}) => {
  return (
    // 1. Adicionei 'group' aqui. Agora o container vigia o mouse.
    <div className="relative w-full h-full overflow-hidden select-none group">
      {/* A Imagem Real */}
      <img
        src={optimizeImage(src)}
        alt={alt}
        // 2. Mudei a lógica aqui:
        // Removi as classes manuais de fora e padronizei o efeito aqui dentro.
        // 'group-hover:scale-110': Quando o grupo (pai) for focado, a imagem cresce.
        className={`w-full h-full select-none transition-transform duration-700 group-hover:scale-110 ${className}`}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        {...props}
      />

      {/* O Escudo Invisível */}
      <div
        className="absolute inset-0 z-20 bg-transparent"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />

      {/* Efeito de Escurecimento (Opcional - Deixa mais elegante) */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none z-30"></div>
    </div>
  );
};
