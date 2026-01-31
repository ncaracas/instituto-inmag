import React from "react";
import { ProtectedImage } from "../components/ProtectedImage";

const ParceriasProjetos: React.FC = () => {
  // --- LISTA DE IMAGENS DO EVENTO ---

  const eventPhotos = [
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769800743/IMG_9363__enebrk.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769801125/IMG_9348__bt2x23.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769799270/IMG_9333__e4fglf.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769799264/IMG_9259__ntz8le.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769799264/IMG_9263__i6ksrb.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769799264/IMG_9246__v3nq5y.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769795996/IMG_9316__cvotri.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769801731/IMG_9288__toewbm.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769795995/IMG_9298__hhxyjb.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769799270/IMG_9305__kkqopz.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769799265/IMG_9284__yutjdk.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769795996/IMG_9310__ghmvba.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769795995/IMG_9273__zwhoom.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769795996/IMG_9267__fxqdqf.jpg",
      position: "object-center",
    },
    {
      url: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769795995/IMG_9364__kfxudp.jpg",
      position: "object-center",
    },
  ];

  return (
    <main className="bg-zinc-800 pt-32 md:pt-40 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* === HEADER DA PÁGINA === */}
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-400 mb-6">
            PARCERIAS E PROJETOS
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça como unimos forças com grandes instituições para transformar
            realidades através da moda, cultura e sustentabilidade.
          </p>
        </div>

        {/* === DESTAQUE: O PROJETO ALQUIMIA TÊXTIL === */}
        <div className="mb-20">
          {/* Badge de Destaque */}
          <div className="flex justify-center md:justify-start mb-6">
            <span className="bg-amber-400 text-zinc-900 font-bold px-4 py-1 rounded-full text-sm tracking-wider uppercase">
              Case de Sucesso • Novembro/Dezembro 2025
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            {/* Texto Descritivo */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Projeto <span className="text-amber-400">Alquimia Têxtil</span>
              </h2>
              <h3 className="text-xl text-gray-400 mb-6 font-medium">
                Parceria Estratégica: Instituto INMAG + SENAI Ceará
              </h3>

              <div className="space-y-4 text-base md:text-lg text-gray-300 leading-relaxed text-justify md:text-left">
                <p>
                  Nos meses de novembro e dezembro de 2025, o Instituto INMAG
                  realizou, em parceria com o SENAI Ceará, o projeto{" "}
                  <strong>Alquimia Têxtil</strong>. Uma iniciativa que uniu
                  criatividade, técnica e consciência ambiental.
                </p>
                <p>
                  O projeto capacitou talentos na arte do <em>upcycling</em> e
                  da confecção, utilizando resíduos têxteis como matéria-prima
                  para criar peças únicas e de alto valor agregado. Mais do que
                  ensinar costura, o Alquimia Têxtil ensinou a transformar o
                  olhar sobre o desperdício.
                </p>
                <p>
                  O encerramento deste ciclo foi marcado com a entrega de
                  certificados, e apresentação de suas criações, provando que a
                  moda pode ser, ao mesmo tempo, inclusiva, ética e sustentável.
                </p>
              </div>
            </div>

            {/* Imagem de Destaque (Capa do Evento) */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-700 group">
                <ProtectedImage
                  src={
                    "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1769132668/senai_alquimia_arwf9z.jpg"
                  }
                  style={{
                    objectPosition: "top", // Foca na parte superior da imagem
                  }}
                  alt="Capa Projeto Alquimia Têxtil"
                  className="w-full h-400px object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">
                    Exposição Final no SENAI Ceará
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* === GALERIA DE FOTOS (GRID DE 15 IMAGENS) === */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-3">
              Registros do Evento
            </h2>
            <div className="w-24 h-1 bg-amber-400 rounded-full"></div>
          </div>

          {/* Grid Responsivo: 1 col (mobile) -> 2 col (tablet) -> 3 col (desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4">
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                // Removemos a 'group relative ...' daqui porque o componente já cuida do container
                // Mantemos apenas o container básico para o grid
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-zinc-700"
              >
                <ProtectedImage
                  src={photo.url} // Passa a URL pura
                  alt={`Registro Alquimia Têxtil ${index + 1}`}
                  // Passamos as classes de posicionamento e efeito de zoom aqui
                  className={`object-cover ${photo.position} transform transition-transform duration-500 hover:scale-110`}
                />
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-4 italic">
            Acervo fotográfico: Instituto INMAG
          </p>
        </div>

        {/* === CALL TO ACTION === */}
        <div className="text-center mt-16">
          <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-amber-400/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer levar projetos como este para sua instituição?
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              O Instituto INMAG está sempre em busca de novas parcerias para
              ampliar seu impacto social e cultural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-zinc-900 font-bold py-3 md:py-4 px-8 rounded-full transition-colors text-base md:text-lg shadow-lg hover:shadow-amber-400/20">
                Seja um Parceiro
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ParceriasProjetos;
