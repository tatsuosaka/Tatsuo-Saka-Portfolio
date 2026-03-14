import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import ProjectDetail from './components/ProjectDetail';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import YoutubeSection from './components/YoutubeSection';
import Timeline from './components/Timeline';

// Layout wrapper to determine when to show specific sections
const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <WorkGrid limit={6} showAllButton={true} />
      
      <section id="about" className="py-12 md:py-24 bg-[#080808] px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h3 className="text-3xl font-bold text-white mb-6">Além da Timeline.</h3>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Minha paixão principal é a edição de vídeo, onde transformo cortes em narrativas e engenheiro emoções. Secundariamente, atuo como desenvolvedor web e designer, o que me dá uma perspectiva técnica única sobre codecs, pipelines de renderização e otimização de conteúdo para a web moderna.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-lg font-semibold text-white mb-4">Edição de Vídeo</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>DaVinci Resolve</li>
                    </ul>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-lg font-semibold text-white mb-4">Programação</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Next.JS</li>
                        <li>React</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                <div className="bg-[#111] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-lg font-semibold text-white mb-4">Design</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Photoshop</li>
                    </ul>
                </div>
            </div>

            <Timeline />
        </div>
      </section>

      <YoutubeSection />

      <ContactSection />
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-brand/30">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;