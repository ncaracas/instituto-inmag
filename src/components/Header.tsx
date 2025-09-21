import React from 'react';
import { Instagram, Youtube, Linkedin, FileText } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-zinc-800 z-50 shadow-lg">
      {/* Top section with social media and action links */}
      <div className="bg-zinc-800 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex space-x-4">            
            <a href="https://www.instagram.com/institutoinmag/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition-colors">
              <Instagram size={19} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition-colors">
              <Youtube size={19} />
            </a>            
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600 transition-colors">
              <Linkedin size={19} />
            </a>
          </div>
          
          {/* Action Links */}
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              <FileText size={16} />
              <span>RELATÓRIO SOCIAL</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full transition-colors text-sm font-medium"
            >
              <image  />
              <span>PARA DOAR</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* White divider */}
      <div className="h-px bg-white"></div>
      
      {/* Main navigation */}
      <div className="bg-zinc-800 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={"https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758377109/LOGOTIPO_INSTITUTO_INMAG_BC_Prancheta_1_c%C3%B3pia_kdreun.png"} alt="Logo Instituto INMAG" className="w-11 h-18" />
            {/*<span className="text-white text-xl font-bold">Instituto INMAG</span>*/}
          </div>
          
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-blue-400 transition-colors font-medium">
              HOME
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              PARCERIAS E PROJETOS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              QUEM SOMOS
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              IMPRENSA
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              CONTATO
            </a>
          </nav>          
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* White divider */}
      <div className="h-px bg-white pb-0"></div>
    </header>
  );
};

export default Header;