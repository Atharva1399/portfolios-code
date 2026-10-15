import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { useParallax } from '@/hooks/use-parallax';
import { certifications, clubs, journey, wins } from '@/data/portfolio';

const Journey = () => {
  const [headRef, headX] = useParallax<HTMLHeadingElement>(-50);
  const [stickRef, stickY] = useParallax<HTMLUListElement>(36);
  return (
    <section id="journey" className="grid-paper overflow-x-clip py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
        <motion.h2 ref={headRef} style={{ x: headX }} className="display text-[clamp(2.75rem,9vw,7.5rem)] text-blue">
          The journey
        </motion.h2>

        <div className="mt-14 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <ol className="border-l-4 border-blue">
            {journey.map((j) => (
              <li key={j.title} className="group relative pb-12 pl-8 last:pb-0 sm:pl-10">
                <span
                  aria-hidden
                  className="absolute -left-[11px] top-1.5 h-[18px] w-[18px] rotate-45 border-4 border-blue bg-paper transition-[background-color,transform] duration-300 group-hover:rotate-[135deg] group-hover:bg-blue"
                />
                <p className="type-label text-blue">{j.when}</p>
                <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-black uppercase leading-[0.95] transition-colors duration-200 [font-stretch:115%] group-hover:text-blue">
                  {j.title}
                </h3>
                <p className="mt-1 text-lg font-medium text-ink-soft">{j.org}</p>
                <ul className="mt-4 max-w-[56ch] space-y-2 leading-relaxed">
                  {j.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-10">
            {/* Award stickers: white die-cut with a blue keyline */}
            <motion.ul ref={stickRef} style={{ y: stickY }} className="flex flex-col gap-5">
              {wins.map((w, i) => (
                <li
                  key={w.event}
                  className={`group flex cursor-default items-center gap-4 rounded-2xl border-[3px] border-blue bg-white px-5 py-4 shadow-[0_0_0_5px_#fff,0_14px_28px_-14px_hsl(var(--ink)/0.5)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0 hover:scale-[1.03] ${i ? 'rotate-[1.5deg] sm:ml-8' : '-rotate-[1.5deg]'}`}
                >
                  <Trophy
                    aria-hidden
                    className="h-9 w-9 shrink-0 text-blue transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                    strokeWidth={2.25}
                  />
                  <span>
                    <span className="block font-display text-lg font-black uppercase leading-tight [font-stretch:110%]">
                      {w.event}
                    </span>
                    <span className="type-label mt-1 block text-blue">{w.result}</span>
                  </span>
                </li>
              ))}
            </motion.ul>

            <div className="border-2 border-blue bg-white p-6">
              <h3 className="type-label text-blue">Certifications</h3>
              <ul className="mt-4 divide-y divide-border">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="cursor-default py-2.5 transition-[color,transform] duration-200 hover:translate-x-1.5 hover:text-blue"
                  >
                    {c}
                  </li>
                ))}
              </ul>
              <h3 className="type-label mt-6 text-blue">Clubs</h3>
              <ul className="mt-3 space-y-1.5 text-ink-soft">
                {clubs.map((c) => (
                  <li key={c} className="cursor-default transition-colors duration-200 hover:text-blue">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
