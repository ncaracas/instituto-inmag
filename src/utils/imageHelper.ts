// src/utils/imageHelper.ts

/**
 * Otimiza URLs de imagens do Cloudinary para carregamento rápido.
 * Aplica formato automático (WebP/AVIF), qualidade automática e redimensionamento.
 */
export const optimizeImage = (url: string, width: number = 800): string => {
  // Se não for uma URL do Cloudinary, retorna a imagem original sem quebrar nada
  if (!url.includes("res.cloudinary.com")) return url;

  // Se a URL já tiver os parâmetros de otimização, retorna como está
  if (url.includes("f_auto") && url.includes("q_auto")) return url;

  // Remove parâmetros antigos de query string que vêm por padrão (?auto=compress...)
  const cleanUrl = url.split("?")[0];

  // Injeta os parâmetros de otimização (f_auto, q_auto e largura) logo após a pasta /upload/
  return cleanUrl.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
};
