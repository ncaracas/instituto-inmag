import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer: React.FC = () => (
<footer className="flex flex-col justify-center bg-zinc-800 py-4">
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
)

export default Footer;
