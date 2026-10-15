import { motion, useReducedMotion } from 'framer-motion';
import photo from '@/assets/atharva.jpg';
import { useParallax } from '@/hooks/use-parallax';
import { profile } from '@/data/portfolio';

const facts: [string, string][] = [
  ['Name', profile.name],
  ['Based in', profile.location],
  ['Studying', 'B.Tech CSE, MIT ADT University (2023 – 2027)'],
  ['Focus', 'Generative AI, LLM systems, multi-agent RAG'],
  ['Also builds', 'Full-stack web apps and Web3 / smart contracts'],
  ['Community', 'Co-founded WeConn; Mirage AR/VR Club; AWS Cloud Club'],
];

/** Lanyard ID badge, pinned to the grid paper. */
const Badge = () => {
  const reduce = useReducedMotion();
  const [ref, y] = useParallax<HTMLDivElement>(40);
  return (
    <motion.div ref={ref} style={{ y }} className="relative mx-auto w-[260px] shrink-0 sm:w-[290px]">
      <div
        aria-hidden
        className="mx-auto h-24 w-7 bg-[repeating-linear-gradient(180deg,hsl(var(--blue))_0_10px,hsl(var(--blue-deep))_10px_20px)]"
      />
      <div aria-hidden className="mx-auto -mt-1 h-7 w-12 rounded-b-md rounded-t-sm border-4 border-ink/70 bg-paper" />
      {/* Tug the badge: it springs back on its lanyard */}
      <motion.div
        drag={!reduce}
        dragSnapToOrigin
        dragElastic={0.35}
        dragTransition={{ bounceStiffness: 260, bounceDamping: 9 }}
        whileHover={reduce ? undefined : { rotate: 2 }}
        whileDrag={{ cursor: 'grabbing', scale: 1.03 }}
        initial={{ rotate: -4 }}
        animate={{ rotate: -4 }}
        transition={{ type: 'spring', stiffness: 160, damping: 10 }}
        title="Drag me"
        className="-mt-1 origin-top cursor-grab touch-none"
      >
        <div className="rounded-xl bg-blue p-3 text-white shadow-[0_18px_40px_-12px_hsl(var(--blue-deep)/0.55)]">
          <div className="mx-auto mb-3 h-2.5 w-14 rounded-full bg-paper/90" />
          <div className="overflow-hidden rounded-lg border-4 border-white bg-blue">
            <img
              src={photo}
              alt=""
              draggable={false}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-[52%_22%] [transform:scale(1.9)] [transform-origin:52%_22%]"
            />
          </div>
          <p className="mt-4 font-display text-2xl font-black uppercase leading-none [font-stretch:125%]">
            Atharva
            <br />
            Gaikwad
          </p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <p className="type-label text-blue-soft">
              GenAI Engineer
              <br />
              CSE · Class of 2027
            </p>
            <span className="type-label rounded-sm bg-white px-2 py-0.5 text-xs text-blue">PASS</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => (
  <section id="about" className="grid-paper py-20 md:py-28">
    <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-14 px-4 sm:px-6 md:flex-row md:items-start md:gap-16 lg:px-10">
      <Badge />

      <div className="w-full flex-1 md:pt-20">
        <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] text-blue">About me</h2>

        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-ink">
          I'm a final-year computer science student who builds with Generative AI: RAG pipelines, multi-agent
          architectures and the full-stack apps around them. At Tata Communications I shipped GenAI automation for
          intent classification and text triage. I also write about AI and blockchain on Medium, and I like getting
          developers in a room together.
        </p>

        <dl className="mt-10 max-w-[44rem] border-t-2 border-blue bg-white">
          {facts.map(([k, v]) => (
            <div
              key={k}
              className="group grid grid-cols-[7.5rem_1fr] gap-4 border-b border-border px-4 py-3 transition-colors duration-200 hover:bg-blue-soft sm:grid-cols-[9rem_1fr]"
            >
              <dt className="type-label text-blue transition-transform duration-200 group-hover:translate-x-1">{k}</dt>
              <dd className="text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default About;
