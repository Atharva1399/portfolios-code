import { useState, type CSSProperties } from 'react';
import { skills } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useParallax } from '@/hooks/use-parallax';

// Spine sizes on the desktop shelf, so the row reads as real binders.
const spineHeight = ['22rem', '19rem', '21rem', '18rem', '16.5rem'];
const spineWidth = ['6rem', '5rem', '5.5rem', '5rem', '4rem'];

/** A shelf of binder spines; pulling one out opens its contents. */
const Skills = () => {
  const [open, setOpen] = useState(0);
  const group = skills[open];
  const [headRef, headX] = useParallax<HTMLHeadingElement>(60);

  return (
    <section id="stack" className="on-blue overflow-x-clip bg-blue py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <motion.h2 ref={headRef} style={{ x: headX }} className="display text-[clamp(2.75rem,9vw,7.5rem)]">
          The stack
        </motion.h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-20">
          {/* Spines (desktop) / rows (mobile) */}
          <div
            role="tablist"
            aria-label="Skill groups"
            className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-2.5 lg:border-b-4 lg:border-white lg:pb-0"
          >
            {skills.map((s, i) => {
              const isOpen = i === open;
              return (
                <button
                  key={s.name}
                  role="tab"
                  aria-selected={isOpen}
                  aria-controls="shelf-panel"
                  onClick={() => setOpen(i)}
                  onMouseEnter={() => setOpen(i)}
                  className={cn(
                    'group relative flex items-center justify-between rounded-sm border-2 border-white px-5 py-4 text-left transition-[transform,background-color,color] duration-300 ease-out',
                    'lg:flex-col lg:justify-between lg:px-0 lg:py-5',
                    'h-auto w-full lg:h-[var(--h)] lg:w-[var(--w)]',
                    isOpen ? 'bg-white text-blue lg:-translate-y-6' : 'bg-blue text-white hover:bg-blue-deep',
                  )}
                  style={{ '--h': spineHeight[i], '--w': spineWidth[i] } as CSSProperties}
                >
                  <span className="font-type text-xs lg:order-2">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-display text-xl font-black uppercase leading-none [font-stretch:125%] lg:order-1 lg:text-lg lg:[writing-mode:vertical-rl] lg:rotate-180">
                    {s.spine}
                  </span>
                </button>
              );
            })}
          </div>

          <div id="shelf-panel" role="tabpanel" aria-live="polite" className="lg:pb-6">
            <h3 className="display text-[clamp(2rem,5vw,4rem)]">{group.name}</h3>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border-2 border-white px-3.5 py-2 font-type text-base transition-colors hover:bg-white hover:text-blue"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
