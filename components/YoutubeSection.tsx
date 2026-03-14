import React from 'react';
import { Youtube, ExternalLink, Gamepad2 } from 'lucide-react';

const YoutubeSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 mt-4 md:mt-8">
      <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 border border-white/5 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand/10 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="max-w-xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-brand/10 rounded-2xl">
              <Youtube className="text-brand" size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Curiosidade: Meu Canal no YouTube</h3>
          </div>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Quando não estou editando para clientes ou programando, eu crio conteúdo de gameplays focado em <strong>jogos de sobrevivência</strong>. É o meu laboratório criativo onde testo novas ideias de edição, retenção e me divirto com a comunidade.
          </p>
          <a 
            href="https://www.youtube.com/@Tatsuuo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all hover:scale-105 font-medium"
          >
            <Gamepad2 size={18} />
            Conhecer o canal <ExternalLink size={16} className="ml-1" />
          </a>
        </div>

        {/* Thumbnail representation */}
        <a 
          href="https://youtu.be/Q_XBBzPrS_s"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-5/12 aspect-video bg-black rounded-2xl border border-white/10 overflow-hidden relative group z-10 shadow-2xl block"
        >
          <img 
            src="https://img.youtube.com/vi/Q_XBBzPrS_s/maxresdefault.jpg" 
            alt="Gameplay Thumbnail" 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-brand/90 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-brand transition-all duration-300 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default YoutubeSection;
