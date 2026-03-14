import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Tatsuo Saka. Todos os direitos reservados.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
                <a href="https://www.instagram.com/tatsuo.saka/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">Instagram</a>
                <a href="https://br.linkedin.com/in/matheus-saka" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors">LinkedIn</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;