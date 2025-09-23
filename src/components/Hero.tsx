import React from 'react';
import Card from './Card';

const Hero: React.FC = () => {
  const cards = [
    {
      image: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758560837/imagemmoda_vfthyz.png?auto=compress&cs=tinysrgb&w=800", 
      title: "MODA",
      description: "O Núcleo de Moda do Instituto INMAG é um espaço de formação, criação e experimentação voltado para jovens em situação de vulnerabilidade social, com foco no desenvolvimento de competências criativas, técnicas e empreendedoras."
    },
    {
      image: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758560837/saudemental_fsbafl.jpg?auto=compress&cs=tinysrgb&w=800",
      title: "SAÚDE MENTAL",
      description: "O Núcleo de Saúde Mental do Instituto INMAG é um espaço dedicado ao cuidado integral das pessoas, com foco na promoção da saúde emocional, acolhimento psicológico e fortalecimento dos vínculos sociais."
    },
    {
      image: "https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758561317/socialcultural_d0yv7n.jpg?auto=compress&cs=tinysrgb&w=800",
      title: "SOCIAL E CULTURAL",
      description: "O Núcleo Social e Cultural do Instituto INMAG promoverá o acesso à cidadania, à cultura e ao fortalecimento comunitário por meio de oficinas artísticas, rodas de conversa, formações e ações de mobilização."
    }
  ];

  return (
    <main className="bg-zinc-800 pt-40 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {cards.map((card, index) => (
            <Card 
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>        

        {/* About Resumen */}
        <div className="text-center mt-16 mb-10">
          <h1 className="text-3xl font-bold text-amber-400 mb-6">
            INSTITUTO INMAG DE FORMAÇÃO, CULTURA E INCLUSÃO 
          </h1>
          <p className="text-lg text-gray-300 text-justify max-w-7xl mx-auto leading-relaxed">
            O Instituto INMAG de Formação, Cultura e Inclusão é uma organização da sociedade civil sem fins lucrativos, criada com o propósito de promover o acesso à educação, à cultura e às oportunidades profissionais por meio de ações formativas, projetos culturais, eventos e iniciativas voltadas à economia criativa. Com foco na diversidade, sustentabilidade e inovação, o Instituto atua na capacitação de jovens e adultos, no fortalecimento de territórios criativos e na valorização das expressões artísticas e culturais locais, contribuindo para o desenvolvimento social e econômico de comunidades.
          </p>
        </div>

        {/* Short slogan */}
        <div className="text-center mt-16 mb-10">
          <h1 className="text-5xl font-bold text-white py-3">
            Transformando Vidas, Construindo Futuros
          </h1>          
        </div>

        {/* Thematic Navigation Section */}
        <div className="bg-amber-400/50 py-8 rounded-2xl p-10 backdrop-blur-sm border border--400">
          <div max-w-7xl mx-auto >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Title */}
              <div className="flex items-center space-x-2">              
                <span className="text-white text-xl font-bold">CONHEÇA NOSSAS AÇÕES<br />TAMBÉM POR TEMAS:</span>
              </div>

              {/* Navigation Links */}              
              <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                <a href="#" className="text-white text-2xl hover:text-amber-400 transition-colors font-bold">
                  #MODA
                </a>
                <a href="#" className="text-white text-2xl hover:text-amber-400 transition-colors font-bold">
                  #ARTE
                </a>
                <a href="#" className="text-white text-2xl hover:text-amber-400 transition-colors font-bold">
                  #CULTURA
                </a>
                <a href="#" className="text-white text-2xl hover:text-amber-400 transition-colors font-bold">
                  #SOLIDARIEDADE
                </a>            
              </nav>
            </div>
          </div>           
        </div>

        {/* Sustainable Development Section */}
        <div className="max-w-7xl mx-auto mt-16 mb-16 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Coluna Esquerda: Título e Descrição */}
            <div className="w-full md:w-2/5 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                Desenvolvimento Sustentável
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                O Instituto INMAG busca contribuir para avanços na agenda global dos Objetivos de Desenvolvimento Sustentável da ONU para 2030.
              </p>
            </div>
            {/* Coluna Direita: Imagem */}  
            <div className="w-full md:w-3/5 flex justify-center md:justify-end">
              <img
                src={"https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758377113/ODS_gq8kek.png"}
                alt="objetivos ONU"                
                className="shadow-lg w-full max-w-max object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="text-center mt-14">
          <div className="bg-zinc-800 rounded-2xl p-12 backdrop-blur-sm border border-amber-400">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">
              Faça Parte Desta Transformação
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Sua contribuição faz a diferença na vida de milhares de pessoas. 
              Junte-se a nós nessa missão de construir um mundo mais justo e solidário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zinc-800/50 hover:bg-zinc-900 text-white font-bold py-4 px-8 border border-gray-200 rounded-full transition-colors text-lg">
                Conhecer Nossos Projetos
              </button>
              <button className="bg-amber-400 hover:bg-amber-500 text-zinc-800 font-bold py-4 px-8 rounded-full transition-colors text-lg">
                Fazer uma Doação
              </button>
            </div>
          </div>
        </div>
      </div>      
    </main>    
  );
};

export default Hero;
