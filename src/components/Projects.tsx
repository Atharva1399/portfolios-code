import { useRef, useState, type KeyboardEvent } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { useParallax } from '@/hooks/use-parallax';
import { ArrowUpRight, Github } from 'lucide-react';
import { aiProjects, profile, sideBuilds, type Project } from '@/data/portfolio';
import { cn } from '@/lib/utils';

/** Architecture sketch: the project's pipeline drawn as labelled stations. */
const Flow = ({ steps }: { steps: string[] }) => (
  <figure className="w-full">
    <figcaption className="type-label mb-4 text-blue-soft">How it flows</figcaption>
    <ol className="flex flex-col gap-0">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col items-start">
          <span
            className={cn(
              'cursor-default rounded-md border-2 px-4 py-2.5 font-type text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-1 sm:text-base',
              i === 0 || i === steps.length - 1
                ? 'border-white bg-white text-blue'
                : 'border-white/70 bg-blue-deep text-white',
            )}
            style={{ marginLeft: `${Math.min(i, 4) * 1.25}rem` }}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="h-5 w-0.5 bg-white/60"
              style={{ marginLeft: `${Math.min(i, 4) * 1.25 + 1.5}rem` }}
            />
          )}
        </li>
      ))}
    </ol>
  </figure>
);

const RepoCard = ({ project }: { project: Project }) => (
  <div className="w-full rounded-md border-2 border-white/70 bg-blue-deep p-5 font-type text-sm text-white">
    <p className="text-blue-soft">repo</p>
    <p className="mt-1 break-all text-lg">Atharva1399/{project.link?.label ?? project.title}</p>
    <p className="mt-5 text-blue-soft">type</p>
    <p className="mt-1">{project.kind}</p>
    <p className="mt-5 text-blue-soft">language</p>
    <p className="mt-1">{project.stack.join(', ')}</p>
  </div>
);

const Sheet = ({ project }: { project: Project }) => (
  <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
    <div>
      <h3 className="display text-[clamp(2.25rem,5.6vw,4.75rem)]">{project.title}</h3>
      <p className="type-label mt-4 text-blue-soft">{project.kind}</p>
      <ul className="mt-8 max-w-[56ch] space-y-4 text-lg leading-relaxed">
        {project.points.map((p) => (
          <li key={p} className="flex gap-3">
            <span aria-hidden className="mt-[0.6em] h-2 w-2 shrink-0 rotate-45 bg-white" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Stack">
        {project.stack.map((s) => (
          <li key={s} className="rounded-sm bg-white px-2.5 py-1 font-type text-sm text-blue">
            {s}
          </li>
        ))}
      </ul>
      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 border-b-2 border-white pb-1 font-semibold transition-[gap] duration-200 hover:gap-3"
        >
          <Github size={18} aria-hidden />
          {project.link.label}
          <ArrowUpRight size={18} aria-hidden />
        </a>
      )}
    </div>
    <div className="flex items-start lg:pt-10">
      {project.flow ? <Flow steps={project.flow} /> : <RepoCard project={project} />}
    </div>
  </div>
);

/** The binder: folder tabs over a blue sheet, one project per divider. */
const Binder = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const project = aiProjects[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + aiProjects.length) % aiProjects.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="on-blue">
      <div
        role="tablist"
        aria-label="Projects"
        onKeyDown={onKeyDown}
        className="flex items-end gap-1 overflow-x-auto px-2 [scrollbar-width:none] sm:px-4"
      >
        {aiProjects.map((p, i) => {
          const isActive = i === active;
          return (
            <button
              key={p.id}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={isActive}
              aria-controls="binder-sheet"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                'folder-tab shrink-0 whitespace-nowrap px-5 font-type text-sm transition-[padding,background-color,color] duration-200 sm:px-7 sm:text-base',
                isActive ? 'bg-blue pb-3 pt-4 text-white' : 'bg-blue-soft pb-2.5 pt-2.5 text-blue hover:bg-white',
              )}
            >
              {p.tab}
            </button>
          );
        })}
      </div>

      <div className="relative">
        {/* Divider sheets stacked underneath, so the binder has depth */}
        <div aria-hidden className="absolute inset-x-3 -bottom-3 top-6 rounded-b-xl bg-blue-deep" />
        <div aria-hidden className="absolute inset-x-6 -bottom-6 top-10 rounded-b-xl bg-blue/40" />
        <div
          id="binder-sheet"
          role="tabpanel"
          aria-labelledby={`tab-${project.id}`}
          className="relative min-h-[34rem] overflow-hidden rounded-b-xl rounded-tr-xl bg-blue p-6 text-white sm:p-10 lg:p-14"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Sheet project={project} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

/** Clothesline of secondary builds, clipped up like prints. */
const Clothesline = () => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  // Prints swing a few degrees against the direction of scroll, then settle
  const swing = useSpring(useTransform(velocity, [-2000, 0, 2000], reduce ? [0, 0, 0] : [6, 0, -6]), {
    stiffness: 60,
    damping: 8,
  });
  return (
    <div className="mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="display text-[clamp(1.75rem,4vw,3rem)] text-blue">Also on the line</h3>
        <p className="max-w-[36ch] text-ink-soft">
          Web3 and side builds: smart contracts, zero-knowledge proofs and agents.
        </p>
      </div>

      <div className="relative mt-10">
        <div aria-hidden className="absolute inset-x-0 top-3 h-1 lg:inset-x-[-2rem] rounded-full bg-ink/70" />
        <ul className="relative grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {sideBuilds.map((b, i) => {
            const body = (
              <>
                <span
                  aria-hidden
                  className="absolute -top-3 left-1/2 h-9 w-4 -translate-x-1/2 rounded-sm bg-blue shadow-[0_2px_0_hsl(var(--blue-deep))]"
                />
                <span className="block font-display text-[1.3rem] font-black uppercase leading-[0.95] [font-stretch:115%] [hyphens:manual]">
                  {b.title}
                </span>
                <span className="type-label mt-2 block text-blue">{b.kind}</span>
                <span className="mt-4 block text-sm leading-relaxed text-ink-soft">{b.note}</span>
                {b.href && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                    Repo <ArrowUpRight size={14} aria-hidden />
                  </span>
                )}
              </>
            );
            const cls = cn(
              'relative block h-full border border-border bg-white px-5 pb-6 pt-8 shadow-[0_10px_24px_-14px_hsl(var(--ink)/0.45)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_18px_30px_-14px_hsl(var(--ink)/0.5)]',
              i % 2 ? 'rotate-[1.5deg]' : '-rotate-[1.5deg]',
            );
            return (
              <motion.li key={b.title} style={{ rotate: swing }} className="origin-top pt-3">
                {b.href ? (
                  <a href={b.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {body}
                  </a>
                ) : (
                  <div className={cls}>{body}</div>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-14 inline-flex items-center gap-2 border-b-2 border-blue pb-1 font-semibold text-blue transition-[gap] duration-200 hover:gap-3"
      >
        Everything else is on GitHub
        <ArrowUpRight size={18} aria-hidden />
      </a>
    </div>
  );
};

const Projects = () => {
  const [headRef, headX] = useParallax<HTMLHeadingElement>(-50);
  return (
    <section id="work" className="grid-paper overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <motion.h2 ref={headRef} style={{ x: headX }} className="display text-[clamp(2.75rem,9vw,7.5rem)] text-blue">
            The work
          </motion.h2>
          <p className="max-w-[38ch] text-lg text-ink-soft">
            GenAI and ML builds, one divider each. Flip through the tabs; the code is linked on every sheet.
          </p>
        </div>
        <Binder />
        <Clothesline />
      </div>
    </section>
  );
};

export default Projects;
