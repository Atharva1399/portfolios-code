import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

/** Folder-tab row that rides on top of the binder. */
const Navbar = () => {
  const [active, setActive] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id === 'top' ? '' : e.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', ...tabs.map((t) => t.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  // Keep the active tab visible when the tab row scrolls on phones.
  useEffect(() => {
    if (!active) return;
    document.querySelector(`header a[href="#${active}"]`)?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [active]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-blue' : 'bg-transparent',
      )}
    >
      <div className="on-blue mx-auto flex h-14 max-w-[1400px] items-end justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <a
          href="#top"
          className="mb-3 shrink-0 font-display text-lg font-black uppercase leading-none text-white [font-stretch:125%]"
        >
          <span aria-hidden>AG</span>
          <span className="sr-only">Atharva Gaikwad, back to top</span>
        </a>

        <nav aria-label="Sections" className="-mb-px min-w-0 overflow-x-auto [scrollbar-width:none]">
          <ul className="flex items-end gap-0.5 sm:gap-1">
            {tabs.map((t) => {
              const isActive = active === t.id;
              return (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'folder-tab block whitespace-nowrap px-2.5 pb-2 pt-2.5 font-type text-xs sm:px-5 sm:text-sm transition-[background-color,color,padding] duration-200 sm:px-5',
                      isActive ? 'bg-paper pt-3 text-blue' : 'bg-white/15 text-white hover:bg-white/30',
                    )}
                  >
                    {t.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
