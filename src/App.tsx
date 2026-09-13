import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { useLenis } from './hooks/useLenis';
import { Aurora, GridBackground, NoiseOverlay, FloatingBlobs } from './components/effects/Background';
import { CustomCursor } from './components/effects/CustomCursor';
import { ScrollProgress } from './components/effects/ScrollProgress';
import { RippleFX } from './components/effects/RippleFX';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ProjectModal } from './components/sections/ProjectModal';
import { Timeline } from './components/sections/Timeline';
import { Certifications } from './components/sections/Certifications';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Marquee } from './components/Marquee';
import { CommandPalette } from './components/CommandPalette';
import { ScrollToTop } from './components/ScrollToTop';
import { Loader } from './components/Loader';
import { KonamiEgg } from './components/KonamiEgg';

function Portfolio() {
  useLenis();
  const [loading, setLoading] = useState(true);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [projectId, setProjectId] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <ThemeProvider>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <CustomCursor />
      <ScrollProgress />
      <RippleFX />
      <Aurora />
      <GridBackground />
      <FloatingBlobs />
      <NoiseOverlay />

      <Navbar onCommand={() => setCmdOpen(true)} />

      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects onOpen={setProjectId} />
        <Timeline />
        <Certifications />
        <Experience />
        <Contact />
      </main>

      <Footer onTop={scrollTop} />

      <ScrollToTop />
      <KonamiEgg />
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <ProjectModal id={projectId} onClose={() => setProjectId(null)} />
    </ThemeProvider>
  );
}

export default function App() {
  return <Portfolio />;
}
