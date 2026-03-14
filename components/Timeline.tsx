import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  link?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, company, link, isLast }) => {
  return (
    <div className="relative flex flex-col md:flex-row md:gap-12 group">
      {/* Desktop Year */}
      <div className="hidden md:block w-32 shrink-0 text-right pt-6">
        <span className="text-gray-500 font-mono text-base">{year}</span>
      </div>

      {/* Timeline Line & Dot */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[151px] top-8 bottom-[-2rem] w-[2px] bg-white/5"></div>
      )}
      
      <div className="absolute left-0 md:left-[140px] top-6 w-6 h-6 rounded-full bg-[#111] border-4 border-[#080808] flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
      </div>

      {/* Content */}
      <div className="ml-8 md:ml-0 flex-1 pb-8">
        <div className="md:hidden text-gray-500 font-mono text-sm mb-2 pt-1">{year}</div>
        <div className="bg-[#111] p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
          <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              {company} <ExternalLink size={14} className="ml-1.5" />
            </a>
          ) : (
            <span className="text-gray-400">{company}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const items = [
    {
      year: "2026",
      title: "Editor de vídeo",
      company: "Towalk",
      link: "https://www.linkedin.com/search/results/all/?keywords=Towalk"
    },
    {
      year: "2025",
      title: "Produtor de vídeo",
      company: "Portal ON",
      link: "https://www.linkedin.com/search/results/all/?keywords=Portal%20ON"
    },
    {
      year: "2025",
      title: "Graduado em Análise e Desenvolvimento de Sistemas",
      company: "União das Américas Descomplica",
      link: "https://www.linkedin.com/school/descomplicafaculdade/"
    },
    {
      year: "2023 - 2025",
      title: "Editor de Vídeo",
      company: "Charge Marketing",
      link: "https://www.linkedin.com/search/results/all/?keywords=Charge%20Marketing"
    },
    {
      year: "2022 - 2023",
      title: "Estagiário em Desenvolvimento de Aplicações Web",
      company: "Coding Invest",
      link: "https://www.linkedin.com/search/results/all/?keywords=Coding%20Invest"
    },
    {
      year: "2022",
      title: "Estudando Análise e Desenvolvimento de Sistemas",
      company: "União das Américas Descomplica",
      link: "https://www.linkedin.com/school/descomplicafaculdade/"
    },
    {
      year: "1998",
      title: "Nascido",
      company: "São Paulo",
    }
  ];

  return (
    <div className="mt-12 md:mt-24">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-white mb-4">Minha Trajetória</h3>
        <p className="text-gray-400">Um resumo da minha vida profissional e acadêmica.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {items.map((item, index) => (
          <TimelineItem 
            key={index}
            year={item.year}
            title={item.title}
            company={item.company}
            link={item.link}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
