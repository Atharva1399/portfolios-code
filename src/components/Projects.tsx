import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useParallax } from '@/hooks/use-parallax';
import { caseStudies, type CaseStudy } from '@/data/portfolio';
import { Copy } from '@/lib/placeholder';
import { cn } from '@/lib/utils';

/** Architecture sketch: the project's pipeline drawn as labelled stations. */
const Flow = ({ steps }: { steps: string[] }) => (
  <figure className="w-full">
    <figcaption className="type-label mb-4 text-blue">How it flows</figcaption>
    <ol className="flex flex-col gap-0">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-col items-start">
          <span
            className={cn(
              'cursor-default rounded-md border-2 px-4 py-2.5 font-type text-sm transition-transform duration-200 hover:-translate-y-0.5 hover:translate-x-1 sm:text-base',
              i === 0 || i === steps.length - 1
                ? 'border-blue bg-blue text-white'
                : 'border-blue/50 bg-white text-blue-deep',
            )}
            style={{ marginLeft: `${Math.min(i, 4) * 1.25}rem` }}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="h-5 w-0.5 bg-blue/40"
              style={{ marginLeft: `${Math.min(i, 4) * 1.25 + 1.5}rem` }}
            />
          )}
        </li>
      ))}
    </ol>
  </figure>
);

const Metrics = ({ study }: { study: CaseStudy }) => (
  <dl className="grid w-full gap-3 sm:grid-cols-2">
    {study.metrics.map((m) => (
      <div key={m.label} className="rounded-md bg-blue-soft px-4 py-3.5">
        <dt className="sr-only">Result</dt>
        <dd>
          <span className="block font-display text-3xl font-black leading-none text-blue [font-stretch:120%]">
            <Copy value={m.value} className="text-sm text-blue-deep" />
          </span>
          <span className="mt-2 block text-sm leading-snug text-ink-soft">
            <Copy value={m.label} className="text-blue-deep" />
          </span>
        </dd>
      </div>
    ))}
  </dl>
);

const Sheet = ({ study }: { study: CaseStudy }) => (
  <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
    <div>
      <h3 className="display text-[clamp(2.25rem,5.6vw,4.75rem)]">{study.title}</h3>
      <p className="type-label mt-4 text-blue">{study.kind}</p>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Stack">
        {study.stack.map((s) => (
          <li key={s} className="rounded-sm border border-blue/40 px-2.5 py-1 font-type text-sm text-blue-deep">
            <Copy value={s} />
          </li>
        ))}
      </ul>
      <Link
        to={`/projects#${study.id}`}
        className="mt-10 inline-flex items-center gap-2 border-b-2 border-blue pb-1 font-semibold text-blue transition-[gap] duration-200 hover:gap-3"
      >
        Read the case study
        <ArrowRight size={18} aria-hidden />
      </Link>
    </div>
    <div className="flex flex-col items-start gap-8 lg:pt-4">
      <Metrics study={study} />
      {study.flow && <Flow steps={study.flow} />}
    </div>
  </div>
);

/** The binder: folder tabs over a sheet, one case study per divider. */
const Binder = () => {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const study = caseStudies[active];

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + caseStudies.length) % caseStudies.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Case studies"
        onKeyDown={onKeyDown}
        className="flex items-end gap-1 overflow-x-auto px-2 [scrollbar-width:none] sm:px-4"
      >
        {caseStudies.map((p, i) => {
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
                isActive
                  ? 'bg-blue pb-3 pt-4 text-white'
                  : 'bg-blue-soft/70 pb-2.5 pt-2.5 text-blue-deep hover:bg-blue-soft',
              )}
            >
              {p.tab}
            </button>
          );
        })}
      </div>

      <div className="relative">
        {/* Divider sheets stacked underneath, so the binder has depth */}
        <div aria-hidden className="absolute inset-x-3 -bottom-3 top-6 rounded-b-xl border-2 border-blue/30 bg-white" />
        <div
          aria-hidden
          className="absolute inset-x-6 -bottom-6 top-10 rounded-b-xl border-2 border-blue/15 bg-white"
        />
        <div
          id="binder-sheet"
          role="tabpanel"
          aria-labelledby={`tab-${study.id}`}
          className="relative min-h-[34rem] overflow-hidden rounded-b-xl rounded-tr-xl border-2 border-blue bg-white p-6 text-ink sm:p-10 lg:p-14"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={study.id}
              initial={reduce ? false : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Sheet study={study} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
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
            Projects
          </motion.h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border-b-2 border-blue pb-1 font-semibold text-blue transition-[gap] duration-200 hover:gap-3"
          >
            All case studies
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
        <Binder />
      </div>
    </section>
  );
};

export default Projects;
