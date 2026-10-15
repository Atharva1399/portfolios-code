import { useRef, type PointerEvent } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import cutout from '@/assets/atharva-cutout.png';
import { profile } from '@/data/portfolio';

const tapeWords = [
  'Generative AI',
  'RAG pipelines',
  'Multi-agent systems',
  'LLM apps',
  'Computer vision',
  'Full-stack',
];
const nameWords = ['Atharva Gaikwad', 'GenAI engineer', 'Pune, India', 'Multi-agent RAG'];

const Tape = ({
  words = tapeWords,
  reverse = false,
  tone = 'white',
}: {
  words?: string[];
  reverse?: boolean;
  tone?: 'white' | 'blue';
}) => (
  <div
    className={`flex w-max whitespace-nowrap group-hover/tape:[animation-play-state:paused] ${reverse ? 'animate-scroll-right' : 'animate-scroll-left'}`}
  >
    {[0, 1].map((copy) => (
      <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
        {words.map((w) => (
          <span
            key={w}
            className={`tape flex items-center px-5 text-sm sm:text-base ${tone === 'white' ? 'text-blue' : 'text-white'}`}
          >
            {w}
            <span
              aria-hidden
              className={`ml-10 inline-block h-2 w-2 rotate-45 ${tone === 'white' ? 'bg-blue' : 'bg-white'}`}
            />
          </span>
        ))}
      </div>
    ))}
  </div>
);

/** Each letter hops when the cursor passes over it. */
const Word = ({ text }: { text: string }) => (
  <span className="block" aria-label={text}>
    {text.split('').map((ch, i) => (
      <span
        key={i}
        aria-hidden
        className="inline-block transition-transform duration-200 ease-out hover:-translate-y-[0.12em] hover:text-blue-soft"
      >
        {ch}
      </span>
    ))}
  </span>
);

const Hero = () => {
  const reduce = useReducedMotion();
  const ease = [0.16, 1, 0.3, 1] as const;
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll parallax: the name lifts away faster than the photo
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const nameY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -160]);
  const photoY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const tagY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -260]);

  // Pointer parallax: the photo leans toward the cursor, the name drifts away
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 90, damping: 18 });
  const sy = useSpring(py, { stiffness: 90, damping: 18 });
  const photoX = useTransform(sx, (v) => v * 18);
  const photoTilt = useTransform(sx, (v) => v * 3);
  const nameX = useTransform(sx, (v) => v * -10);
  const tagX = useTransform(sx, (v) => v * 30);
  const tagYPointer = useTransform(sy, (v) => v * 20);
  const tagTotalY = useTransform([tagY, tagYPointer], ([a, b]: number[]) => a + b);

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== 'mouse') return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <>
      <section
        id="top"
        ref={sectionRef}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="on-blue relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-blue text-white"
      >
        <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 pt-24 sm:px-6 lg:px-10 lg:pt-28">
          <motion.h1
            style={{ y: nameY, x: nameX }}
            className="display relative z-10 text-[clamp(3.25rem,13.2vw,7rem)] lg:text-[min(8.4vw,10rem)]"
          >
            <Word text="Atharva" />
            <Word text="Gaikwad" />
          </motion.h1>

          <div className="relative z-10 mt-8 max-w-[34rem] lg:mt-10">
            <p className="type-label text-blue-soft">GenAI engineer · {profile.location}</p>
            <p className="mt-3 text-xl font-medium leading-snug sm:text-2xl">
              Hey, I'm Atharva, your friendly neighborhood tech guy. I build multi-agent RAG systems and LLM tools that
              do real work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 pb-6">
              <a
                href="#work"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-6 font-semibold text-blue transition-transform duration-200 hover:-translate-y-0.5"
              >
                Open the work
                <ArrowDown size={18} aria-hidden />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-md border-2 border-white px-6 font-semibold transition-colors duration-200 hover:bg-white hover:text-blue"
              >
                <Github size={18} aria-hidden />
                GitHub
              </a>
            </div>
          </div>

          {/* Sticker-cut photo, laid over the name like a collage */}
          <motion.div
            style={{ y: photoY, x: photoX, rotate: photoTilt }}
            className="pointer-events-none relative z-20 mx-auto -mb-1 mt-4 w-[min(78vw,360px)] origin-bottom lg:absolute lg:bottom-0 lg:right-[6%] lg:m-0 lg:h-[88%] lg:w-auto"
          >
            <motion.img
              src={cutout}
              alt="Atharva Gaikwad, smiling with arms crossed"
              width={492}
              height={848}
              initial={reduce ? false : { opacity: 0, y: 80, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1.1, ease }}
              className="h-auto w-full origin-bottom drop-shadow-[0_24px_40px_rgba(0,20,90,0.35)] lg:h-full lg:w-auto"
            />
          </motion.div>

          <motion.span
            style={{ y: tagTotalY, x: tagX }}
            className="type-label absolute right-4 top-[46%] z-30 hidden -rotate-6 cursor-default bg-white px-3 py-1.5 text-blue shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition-[rotate] duration-300 hover:rotate-3 lg:right-[3%] lg:block"
          >
            Final-year CSE · MIT ADT
          </motion.span>
        </div>
      </section>

      {/* Crossed tapes laid over the seam between the hero and About */}
      <div aria-hidden className="pointer-events-none relative z-30 -mb-16 h-16 -translate-y-8 overflow-x-clip">
        <div className="group/tape pointer-events-auto absolute inset-x-[-5%] -top-9 rotate-[3deg] overflow-hidden border-y-2 border-white bg-blue-deep py-2 sm:-top-3">
          <Tape words={nameWords} reverse tone="blue" />
        </div>
        <div className="group/tape pointer-events-auto absolute inset-x-[-5%] top-1 -rotate-2 overflow-hidden border-y-2 border-blue bg-white py-2.5 shadow-[0_8px_18px_-10px_hsl(var(--ink)/0.5)]">
          <Tape />
        </div>
      </div>
    </>
  );
};

export default Hero;
