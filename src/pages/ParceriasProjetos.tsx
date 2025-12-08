import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ParceriasProjetos: React.FC = () => {
  // Carrossel de imagens
  const carouselImages = [
    "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758560837/imagemmoda_vfthyz.png?auto=compress&cs=tinysrgb&w=800",
    "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758560837/saudemental_fsbafl.jpg?auto=compress&cs=tinysrgb&w=800",
    "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758561317/socialcultural_d0yv7n.jpg?auto=compress&cs=tinysrgb&w=800",
    "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758377113/ODS_gq8kek.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <main className="bg-zinc-800 pt-40 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-400 mb-6">
            PARCERIAS E PROJETOS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça nossas parcerias estratégicas e os projetos que transformam vidas através da educação, cultura e inclusão.
          </p>
        </div>

        {/* Seção de Texto e Imagem */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-400 mb-6">
                Nossas Parcerias
              </h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                O Instituto INMAG estabelece parcerias estratégicas com empresas, organizações sociais, instituições de ensino e órgãos públicos para ampliar o impacto de suas ações e promover o desenvolvimento sustentável das comunidades.
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Nossas parcerias são fundamentais para viabilizar projetos de formação profissional, eventos culturais, ações de inclusão social e iniciativas voltadas à economia criativa. Trabalhamos em conjunto para criar oportunidades reais de transformação.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Acreditamos que a colaboração é o caminho para construir um futuro mais justo e inclusivo, onde todos tenham acesso à educação, cultura e oportunidades de crescimento pessoal e profissional.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758560837/imagemmoda_vfthyz.png?auto=compress&cs=tinysrgb&w=800"
                alt="Parcerias"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Seção de Vídeo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
            Conheça Nossos Projetos
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <div className="aspect-video bg-zinc-700 rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Projetos do Instituto INMAG"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Transformando Vidas Através da Educação
              </h3>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Nossos projetos são desenvolvidos com foco na formação integral de jovens e adultos, oferecendo capacitação técnica, desenvolvimento de competências socioemocionais e oportunidades de inserção no mercado de trabalho.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cada projeto é cuidadosamente planejado para atender às necessidades específicas das comunidades, promovendo a inclusão social, a valorização da cultura local e o desenvolvimento sustentável.
              </p>
            </div>
          </div>
        </div>

        {/* Carrossel de Imagens */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
            Galeria de Projetos
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-96">
                <div className="relative w-full h-full">
                  {carouselImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Projeto ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  {/* Overlay com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
            
            {/* Botões de navegação */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-900 text-white p-3 rounded-full transition-colors shadow-lg z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-800/80 hover:bg-zinc-900 text-white p-3 rounded-full transition-colors shadow-lg z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-amber-400 w-8'
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Projetos em Destaque */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-400 mb-8 text-center">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-700/50 rounded-lg p-6 shadow-lg hover:bg-zinc-700 transition-colors">
              <img
                src="https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758560837/saudemental_fsbafl.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Núcleo de Moda"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Núcleo de Moda
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Espaço de formação, criação e experimentação voltado para jovens em situação de vulnerabilidade social, com foco no desenvolvimento de competências criativas, técnicas e empreendedoras.
              </p>
            </div>

            <div className="bg-zinc-700/50 rounded-lg p-6 shadow-lg hover:bg-zinc-700 transition-colors">
              <img
                src="https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758561317/socialcultural_d0yv7n.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Núcleo Social e Cultural"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Núcleo Social e Cultural
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Promove o acesso à cidadania, à cultura e ao fortalecimento comunitário por meio de oficinas artísticas, rodas de conversa, formações e ações de mobilização.
              </p>
            </div>

            <div className="bg-zinc-700/50 rounded-lg p-6 shadow-lg hover:bg-zinc-700 transition-colors">
              <img
                src="https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758377113/ODS_gq8kek.png"
                alt="Desenvolvimento Sustentável"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-3">
                Desenvolvimento Sustentável
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Contribuímos para avanços na agenda global dos Objetivos de Desenvolvimento Sustentável da ONU para 2030, promovendo ações alinhadas com os ODS.
              </p>
            </div>
          </div>
        </div>

        {/* Seção Final com Call to Action */}
        <div className="text-center mt-14">
          <div className="bg-zinc-800 rounded-2xl p-12 backdrop-blur-sm border border-amber-400">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">
              Seja Nossa Parceira ou Parceiro
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Juntos podemos fazer a diferença! Entre em contato conosco para conhecer como sua organização pode contribuir com nossos projetos e fazer parte dessa transformação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zinc-800/50 hover:bg-zinc-900 text-white font-bold py-4 px-8 border border-gray-200 rounded-full transition-colors text-lg">
                Conhecer Mais Projetos
              </button>
              <button className="bg-amber-400 hover:bg-amber-500 text-zinc-800 font-bold py-4 px-8 rounded-full transition-colors text-lg">
                Fazer uma Parceria
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ParceriasProjetos;
