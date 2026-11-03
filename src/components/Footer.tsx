import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white text-ink">
    <div className="mx-auto flex max-w-[1300px] flex-col gap-4 border-t-2 border-blue px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
      <p className="font-display text-xl font-black uppercase text-blue [font-stretch:125%]">Atharva Gaikwad</p>
      <nav aria-label="Footer" className="type-label flex flex-wrap gap-x-5 gap-y-2 text-ink-soft">
        <Link to="/writing" className="hover:text-blue hover:underline hover:underline-offset-4">
          Writing
        </Link>
        <Link to="/docs" className="hover:text-blue hover:underline hover:underline-offset-4">
          Docs
        </Link>
        <Link to="/projects" className="hover:text-blue hover:underline hover:underline-offset-4">
          Projects
        </Link>
        <span>© {new Date().getFullYear()} Atharva Gaikwad · Built in Pune</span>
      </nav>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="type-label inline-flex items-center gap-2 self-start text-blue hover:underline hover:underline-offset-4 sm:self-auto"
      >
        Back to top <ArrowUp size={14} aria-hidden />
      </button>
    </div>
  </footer>
);

export default Footer;
