import SiteLayout from '@/components/layout/SiteLayout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWriting from '@/components/SelectedWriting';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Journey from '@/components/Journey';
import Contact from '@/components/Contact';
import { pageMeta } from '@/data/seo';
import { useSeo } from '@/hooks/use-seo';

const Index = () => {
  useSeo(pageMeta['/'], '/');
  return (
    <SiteLayout>
      <Hero />
      <About />
      <SelectedWriting />
      <Projects />
      <Skills />
      <Journey />
      <Contact />
    </SiteLayout>
  );
};

export default Index;
