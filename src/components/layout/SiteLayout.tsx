import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/** On every route change: jump to the #hash target if there is one, otherwise to the top. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Wait a frame so the new page has rendered its sections
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen">
    <ScrollManager />
    <Navbar />
    <main id="main" tabIndex={-1} className="outline-none">
      {children}
    </main>
    <Footer />
  </div>
);

export default SiteLayout;
