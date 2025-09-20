import React from 'react';
import Card from './Card';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const cards = [
    {
      image: "https://images.pexels.com/photos/13729108/pexels-photo-13729108.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "MODA",
      description: "O Núcleo de Moda do Instituto INMAG é um espaço de formação, criação e experimentação voltado para jovens em situação de vulnerabilidade social, com foco no desenvolvimento de competências criativas, técnicas e empreendedoras."
    },
    {
      image: "https://images.pexels.com/photos/9227529/pexels-photo-9227529.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "SAÚDE MENTAL",
      description: "O Núcleo de Saúde Mental do Instituto INMAG é um espaço dedicado ao cuidado integral das pessoas, com foco na promoção da saúde emocional, acolhimento psicológico e fortalecimento dos vínculos sociais."
    },
    {
      image: "https://images.pexels.com/photos/8436491/pexels-photo-8436491.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "SOCIAL E CULTURAL",
      description: "O Núcleo Social e Cultural do Instituto INMAG promoverá o acesso à cidadania, à cultura e ao fortalecimento comunitário por meio de oficinas artísticas, rodas de conversa, formações e ações de mobilização."
    }
  ];

  return (
    <main className="pt-40 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Welcome section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white py-3">
            Transformando Vidas, Construindo Futuros
          </h1>          
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="text-center mt-16">
          <h1 className="text-3xl font-bold text-yellow-600 mb-6">
            INSTITUTO INMAG DE FORMAÇÃO, CULTURA E INCLUSÃO 
          </h1>
          <p className="text-lg text-gray-300 text-justify max-w-7xl mx-auto leading-relaxed">
            O Instituto INMAG de Formação, Cultura e Inclusão é uma organização da sociedade civil sem fins lucrativos, criada com o propósito de promover o acesso à educação, à cultura e às oportunidades profissionais por meio de ações formativas, projetos culturais, eventos e iniciativas voltadas à economia criativa. Com foco na diversidade, sustentabilidade e inovação, o Instituto atua na capacitação de jovens e adultos, no fortalecimento de territórios criativos e na valorização das expressões artísticas e culturais locais, contribuindo para o desenvolvimento social e econômico de comunidades.
          </p>
        </div>

        {/* Call to action section */}
        <div className="text-center mt-14 mb-14">
          <div className="bg-gray-800/50 rounded-2xl p-12 backdrop-blur-sm border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">
              Faça Parte Desta Transformação
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Sua contribuição faz a diferença na vida de milhares de pessoas. 
              Junte-se a nós nessa missão de construir um mundo mais justo e solidário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                Conhecer Nossos Projetos
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
                Fazer uma Doação
              </button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-600/50 py-8 rounded-2xl p-10 backdrop-blur-sm border border-yellow-400">
          <div max-w-7xl mx-auto >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Title */}
              <div className="flex items-center space-x-2">              
                <span className="text-white text-xl font-bold">CONHEÇA NOSSAS AÇÕES<br />TAMBÉM POR TEMAS:</span>
              </div>

              {/* Navigation Links */}              
              <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                <a href="#" className="text-white text-2xl hover:text-yellow-400 transition-colors font-bold">
                  #MODA
                </a>
                <a href="#" className="text-white text-2xl hover:text-yellow-400 transition-colors font-bold">
                  #ARTE
                </a>
                <a href="#" className="text-white text-2xl hover:text-yellow-400 transition-colors font-bold">
                  #CULTURA
                </a>
                <a href="#" className="text-white text-2xl hover:text-yellow-400 transition-colors font-bold">
                  #SOLIDARIEDADE
                </a>            
              </nav>
            </div>
          </div>           
        </div>

        <div className="max-w-7xl mx-auto mt-16 mb-16 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* Coluna Esquerda: Título e Descrição */}
            <div className="w-full md:w-2/5 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
                Desenvolvimento Sustentável
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                O Instituto INMAG busca contribuir para avanços na agenda global dos Objetivos de Desenvolvimento Sustentável da ONU para 2030.
              </p>
            </div>
            {/* Coluna Direita: Imagem */}  
            <div className="w-full md:w-3/5 flex justify-center md:justify-end">
              <img
                src={"https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758378162/objetivos_onu_zkb1ph.png"}
                alt="objetivos ONU"                
                className="shadow-lg w-full max-w-max object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col justify-center bg-gray-900 py-4">
        <div className='flex justify-center mb-2 mt-4'>
          <img src={"https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758377109/LOGOTIPO_INSTITUTO_INMAG_BC_Prancheta_1_c%C3%B3pia_kdreun.png"} alt="Logo Instituto INMAG" className="w-9.4 h-16" />
        </div>

        <p className='text-xs text-gray-400 text-center mt-2 mb-2'>ACOMPANHE-NOS NAS REDES SOCIAIS</p>

        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4">            
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Youtube size={16} />
            </a>            
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* White divider */}
        <div className="h-px bg-white mt-6 mb-6 pb-0"></div>

        <div className="max-w-7xl mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} Instituto INMAG. Todos os direitos reservados.
        </div>
      </footer>
    </main>    
  );
};

export default Hero;