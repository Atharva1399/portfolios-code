import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Tab = { label: string; to: string; section?: string; page?: string };

const tabs: Tab[] = [
  { label: 'About', to: '/#about', section: 'about' },
  { label: 'Writing', to: '/writing', page: '/writing' },
  { label: 'Projects', to: '/projects', page: '/projects' },
  { label: 'Stack', to: '/#stack', section: 'stack' },
  { label: 'Experience', to: '/#experience', section: 'experience' },
  { label: 'Contact', to: '/#contact', section: 'contact' },
];

/** Folder-tab row that rides on top of the binder. */
const Navbar = () => {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const [section, setSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // On the homepage, the section in view lights its tab
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSection(e.target.id === 'top' ? '' : e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ['top', 'about', 'writing-strip', 'work', 'stack', 'experience', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  const isActive = (t: Tab) =>
    t.page
      ? pathname.startsWith(t.page) || (t.page === '/writing' && pathname.startsWith('/docs'))
      : onHome && section === t.section;

  const activeLabel = tabs.find(isActive)?.label;

  // Keep the active tab visible when the tab row scrolls on phones.
  useEffect(() => {
    if (!activeLabel) {
      document.querySelector('header nav[aria-label="Main"]')?.scrollTo({ left: 0 });
      return;
    }
    document
      .querySelector(`header [data-tab="${activeLabel}"]`)
      ?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [activeLabel]);

  // The bar is see-through over the top of the homepage and solid white once anything scrolls under it.
  const solid = scrolled || !onHome;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b-2 border-blue transition-colors duration-300',
        solid ? 'bg-white' : 'bg-transparent',
      )}
    >
      <a
        href="#main"
        className="sr-only left-4 top-3 z-[60] rounded-md bg-blue px-4 py-2 font-semibold text-white focus:not-sr-only focus:absolute"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-14 max-w-[1400px] items-end justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link
          to="/"
          className="mb-3 shrink-0 font-display text-lg font-black uppercase leading-none text-blue [font-stretch:125%]"
        >
          <span aria-hidden>AG</span>
          <span className="sr-only">Atharva Gaikwad, home</span>
        </Link>

        <nav
          aria-label="Main"
          className="-mb-px min-w-0 overflow-x-auto [mask-image:linear-gradient(to_right,#000_85%,transparent)] [scrollbar-width:none] sm:[mask-image:none]"
        >
          <ul className="flex items-end gap-0.5 pr-6 sm:gap-1 sm:pr-0">
            {tabs.map((t) => {
              const active = isActive(t);
              return (
                <li key={t.label}>
                  <Link
                    to={t.to}
                    data-tab={t.label}
                    aria-current={active ? (t.page ? 'page' : 'true') : undefined}
                    className={cn(
                      'folder-tab block whitespace-nowrap px-2.5 pb-2 pt-2.5 font-type text-xs transition-[background-color,color,padding] duration-200 sm:px-4 sm:text-sm lg:px-5',
                      active
                        ? 'bg-blue pt-3 text-white'
                        : 'bg-blue-soft/70 text-ink hover:bg-blue-soft hover:text-blue-deep',
                    )}
                  >
                    {t.label}
                  </Link>
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
