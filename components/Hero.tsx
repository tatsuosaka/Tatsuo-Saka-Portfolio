import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Darken layer */}
        <img 
            src="/images/me.jpg" 
            alt="Tatsuo Saka Portrait" 
            className="w-full h-full object-cover object-top opacity-80"
        />
      </div>

      <div className="z-20 text-center px-4 max-w-5xl mx-auto mt-20">
        <h2 className="text-xl md:text-2xl font-medium text-brand mb-4 fade-in-up tracking-wide uppercase">
          Editor de Vídeo & Desenvolvedor Web
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 fade-in-up delay-100 leading-tight">
          Sua visão,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            editada com precisão.
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto fade-in-up delay-300 leading-relaxed font-light">
          Edição de vídeo e desenvolvimento web com foco em ritmo, clareza e funcionalidade.
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce text-white/50 z-20 fade-in-up delay-500">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;