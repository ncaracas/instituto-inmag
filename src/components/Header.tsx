import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Adicionei 'Menu' e 'X' nas importações do lucide-react para os ícones
import { Instagram, Youtube, Linkedin, FileText, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-zinc-800 z-50 shadow-lg">
      {/* Top section with social media and action links */}
      {/* Adicionei 'hidden sm:block' para esconder essa barra superior em celulares muito pequenos se quiser economizar espaço, 
          mas mantive visível por padrão conforme seu código original */}
      <div className="bg-zinc-800 px-4 py-2 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
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
              className="flex items-center space-x-1 bg-amber-400 hover:bg-amber-500 text-zinc-800 px-3 py-1 rounded-full transition-colors text-sm font-medium"
            >              
              <span>PARA DOAR</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* White divider (removi o anterior para usar border-b na div de cima, fica mais limpo) */}
      {/* <div className="h-px bg-white"></div> */}
      
      {/* Main navigation */}
      <div className="bg-zinc-800 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={"https://res.cloudinary.com/dzjcmsdwk/image/upload/v1758377109/LOGOTIPO_INSTITUTO_INMAG_BC_Prancheta_1_c%C3%B3pia_kdreun.png"} alt="Logo Instituto INMAG" className="w-11 h-18" />
          </div>
          
          {/* Desktop Navigation Links (Escondido em Mobile) */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors font-medium">
              HOME
            </Link>
            <Link to="/parcerias-projetos" className="text-gray-300 hover:text-white transition-colors font-medium">
              PARCERIAS E PROJETOS
            </Link>
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
          
          {/* Mobile menu button (Visível apenas em Mobile) */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {/* Alterna entre o ícone de Menu e o X dependendo do estado */}
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Aparece quando isMenuOpen é true) */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 border-t border-gray-700 absolute w-full left-0 shadow-xl">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            {/* O onClick={toggleMenu} serve para fechar o menu assim que o usuário clica num link */}
            <Link 
              to="/"              
              onClick={toggleMenu}
              className="text-white hover:text-amber-400 font-medium border-b border-gray-700 pb-2"
            >
              HOME
            </Link>            
            <Link 
              to="/parcerias-projetos" 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-amber-400 font-medium border-b border-gray-700 pb-2"
            >
              PARCERIAS E PROJETOS
            </Link>
            <a 
              href="#" 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-amber-400 font-medium border-b border-gray-700 pb-2"
            >
              QUEM SOMOS
            </a>
            <a 
              href="#" 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-amber-400 font-medium border-b border-gray-700 pb-2"
            >
              IMPRENSA
            </a>
            <a 
              href="#" 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-amber-400 font-medium pb-2"
            >
              CONTATO
            </a>
          </nav>
        </div>
      )}

      {/* White divider bottom */}
      <div className="h-px bg-white pb-0"></div>
    </header>
  );
};

export default Header;
