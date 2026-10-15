import { ArrowUp } from 'lucide-react';

const Footer = () => (
  <footer className="on-blue bg-blue text-white">
    <div className="mx-auto flex max-w-[1300px] flex-col gap-4 border-t-2 border-white px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
      <p className="font-display text-xl font-black uppercase [font-stretch:125%]">Atharva Gaikwad</p>
      <p className="type-label text-blue-soft">© {new Date().getFullYear()} Atharva Gaikwad · Built in Pune</p>
      <a href="#top" className="type-label inline-flex items-center gap-2 hover:underline hover:underline-offset-4">
        Back to top <ArrowUp size={14} aria-hidden />
      </a>
    </div>
  </footer>
);

export default Footer;
