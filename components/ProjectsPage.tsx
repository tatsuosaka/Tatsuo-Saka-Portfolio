import React, { useEffect } from 'react';
import WorkGrid from './WorkGrid';
import YoutubeSection from './YoutubeSection';

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] pt-20 pb-12">
      {/* Work Grid */}
      <WorkGrid showAllButton={false} title="Todos os Projetos" compact={true} />

      {/* YouTube Section */}
      <YoutubeSection />
    </div>
  );
};

export default ProjectsPage;
