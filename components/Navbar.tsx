import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled ? 'bg-black/70 backdrop-blur-md border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-white hover:text-gray-300 transition-colors">
          Tatsuo Saka
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <div className="relative group">
            <button onClick={() => handleNavClick('work')} className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2">
              Projetos <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-40 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden shadow-xl">
              <Link to="/projects" className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors">
                Ver todos
              </Link>
            </div>
          </div>
          <button onClick={() => handleNavClick('about')} className="text-gray-300 hover:text-white transition-colors">Sobre</button>
          <button onClick={() => handleNavClick('contact')} className="text-gray-300 hover:text-white transition-colors">Contato</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4">
          <button 
            onClick={() => handleNavClick('work')}
            className="text-left text-gray-300 text-lg hover:text-white"
          >
            Projetos
          </button>
          <Link 
            to="/projects" 
            className="text-gray-400 text-base pl-4 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ↳ Ver todos os projetos
          </Link>
          <button 
            onClick={() => handleNavClick('about')}
            className="text-left text-gray-300 text-lg hover:text-white"
          >
            Sobre
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-left text-gray-300 text-lg hover:text-white"
          >
            Contato
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;