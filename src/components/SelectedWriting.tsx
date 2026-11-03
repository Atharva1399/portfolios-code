import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/writing/ArticleCard';
import { latestArticles } from '@/data/writing';

/** Homepage strip: the three newest articles, with a way into the full Writing page. */
const SelectedWriting = () => (
  <section id="writing-strip" aria-labelledby="writing-strip-title" className="bg-white py-16 md:py-20">
    <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2
          id="writing-strip-title"
          className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-none text-blue [font-stretch:120%]"
        >
          Selected writing
        </h2>
        <Link
          to="/writing"
          className="inline-flex items-center gap-2 border-b-2 border-blue pb-1 font-semibold text-blue transition-[gap] duration-200 hover:gap-3"
        >
          Articles, research and docs
          <ArrowRight size={18} aria-hidden />
        </Link>
      </div>
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {latestArticles(3).map((a) => (
          <li key={a.id}>
            <ArticleCard article={a} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SelectedWriting;
