import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-4">Projeto não encontrado</h2>
        <Link to="/" className="text-brand hover:underline">Voltar para o início</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Header */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Voltar
          </Link>
          <h1 className="text-4xl md:text-7xl font-bold mb-4 tracking-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-300">
            <span className="bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-white/5">{project.client}</span>
            <span className="bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm border border-white/5">{project.year}</span>
            <span className="bg-brand/20 px-4 py-1 rounded-full text-brand backdrop-blur-sm border border-brand/20">{project.category}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-100">Sobre o Projeto</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              {project.fullDescription}
            </p>
          </div>
          
          <div className="bg-[#111] p-8 rounded-3xl border border-white/5 h-fit">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Ferramentas Utilizadas</h3>
            <ul className="space-y-3">
              {project.tools.map((tool) => (
                <li key={tool} className="flex items-center text-gray-400">
                  <CheckCircle2 size={16} className="mr-3 text-brand" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-20">
            <h3 className="text-2xl font-semibold mb-8 text-white">Galeria</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.media.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`rounded-2xl overflow-hidden bg-gray-900 group ${
                        item.orientation === 'vertical' ? 'aspect-[9/16] md:col-span-1' : 'aspect-video md:col-span-2'
                      }`}
                    >
                        {item.type === 'video' ? (
                          <video 
                            src={item.url} 
                            controls 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img 
                            src={item.url} 
                            alt={`Detalhe ${idx}`} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                          />
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;