import { ArrowUpRight } from 'lucide-react';
import type { Article } from '@/data/writing';
import { Copy, isPlaceholder, Slot } from '@/lib/placeholder';

export const formatDate = (iso: string) =>
  isPlaceholder(iso) || Number.isNaN(Date.parse(iso))
    ? null
    : new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

/** A Medium article: title, one-line summary, date, reading time, external link. */
const ArticleCard = ({ article }: { article: Article }) => {
  const date = formatDate(article.date);
  return (
    <article className="group relative flex h-full flex-col rounded-xl border-2 border-blue bg-white p-6 transition-[transform,box-shadow] duration-200 focus-within:-translate-y-0.5 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-16px_hsl(var(--ink)/0.45)]">
      <h3 className="text-xl font-bold leading-snug text-ink">
        {article.url ? (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-xl focus:outline-none"
          >
            <Copy value={article.title} />
          </a>
        ) : (
          <Copy value={article.title} />
        )}
      </h3>
      <p className="mt-2 flex-1 leading-relaxed text-ink-soft">
        <Copy value={article.summary} />
      </p>
      <p className="type-label mt-4 flex flex-wrap gap-x-3 gap-y-1 text-blue">
        {date ? <time dateTime={article.date}>{date}</time> : <Slot>{article.date}</Slot>}
        <span aria-hidden>·</span>
        {article.readingMinutes ? <span>{article.readingMinutes} min read</span> : <Slot>[ADD: min read]</Slot>}
      </p>
      <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
        {article.url ? (
          <>
            Read on Medium{' '}
            <ArrowUpRight
              size={16}
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </>
        ) : (
          <Slot>[ADD: Medium article link]</Slot>
        )}
      </p>
    </article>
  );
};

export default ArticleCard;
