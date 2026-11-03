import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import ArticleCard from '@/components/writing/ArticleCard';
import { articles, research } from '@/data/writing';
import { profile } from '@/data/portfolio';
import { pageMeta } from '@/data/seo';
import { docs } from '@/lib/docs';
import { Copy, isPlaceholder, Slot } from '@/lib/placeholder';
import { useSeo } from '@/hooks/use-seo';

const SectionHead = ({ id, title, children }: { id: string; title: string; children?: React.ReactNode }) => (
  <div className="flex flex-wrap items-end justify-between gap-4">
    <h2
      id={id}
      className="scroll-mt-24 font-display text-[clamp(1.9rem,4vw,3rem)] font-black uppercase leading-none text-blue [font-stretch:115%]"
    >
      {title}
    </h2>
    {children}
  </div>
);

const Writing = () => {
  useSeo(pageMeta['/writing'], '/writing');

  return (
    <SiteLayout>
      <div className="grid-paper pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <header className="max-w-[68ch]">
            <h1 className="display text-[clamp(3rem,10vw,7rem)] text-blue">Writing</h1>
            <p className="mt-6 text-xl leading-relaxed text-ink">
              <Copy value="[WRITE: one or two sentences on what you write about and who it's for]" />
            </p>
            <nav aria-label="On this page" className="type-label mt-8 flex flex-wrap gap-2">
              {[
                ['#articles', 'Articles'],
                ['#research', 'Research'],
                ['#docs', 'Documentation samples'],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-md border-2 border-blue bg-white px-3 py-1.5 text-blue transition-colors hover:bg-blue hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </header>

          {/* Articles */}
          <section aria-labelledby="articles" className="mt-20">
            <SectionHead id="articles" title="Articles">
              {profile.medium ? (
                <a
                  href={profile.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-blue hover:underline hover:underline-offset-4"
                >
                  All posts on Medium <ArrowUpRight size={16} aria-hidden />
                </a>
              ) : (
                <Slot>[ADD: Medium profile link in profile.medium]</Slot>
              )}
            </SectionHead>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => (
                <li key={a.id}>
                  <ArticleCard article={a} />
                </li>
              ))}
            </ul>
          </section>

          {/* Research */}
          <section aria-labelledby="research" className="mt-20">
            <SectionHead id="research" title="Research" />
            <article className="mt-8 grid gap-8 rounded-xl border-2 border-blue bg-white p-6 text-ink sm:p-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
              <div className="min-w-0">
                <h3 className="font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-black uppercase leading-[0.98] [font-stretch:112%]">
                  <Copy value={research.title} className="text-blue-deep" />
                </h3>
                <p className="type-label mt-3 text-blue">
                  {research.venue} · {research.topic}
                </p>
                <h4 className="type-label mt-8 text-blue">Abstract</h4>
                <p className="mt-2 max-w-[68ch] text-lg leading-relaxed">
                  <Copy value={research.abstract} className="text-blue-deep" />
                </p>
                <p className="mt-8">
                  {research.pdfUrl ? (
                    <a
                      href={research.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center gap-2 rounded-md bg-blue px-6 font-semibold text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-blue-deep"
                    >
                      <FileText size={18} aria-hidden />
                      Read the paper (PDF)
                    </a>
                  ) : (
                    <Slot className="text-blue-deep">[ADD: PDF or preprint link in research.pdfUrl, if shareable]</Slot>
                  )}
                </p>
              </div>
              <dl className="grid content-start gap-3">
                {research.facts.map((f) => (
                  <div key={f.label} className="rounded-md bg-blue-soft px-5 py-4">
                    <dt className="sr-only">{f.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl font-black uppercase leading-none text-blue [font-stretch:120%]">
                        {f.value}
                      </span>
                      <span className="type-label mt-2 block text-ink-soft">{f.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </section>

          {/* Documentation samples */}
          <section aria-labelledby="docs" className="mt-20">
            <SectionHead id="docs" title="Documentation samples" />
            <p className="mt-4 max-w-[62ch] leading-relaxed text-ink-soft">
              Topic-based docs written in Markdown and published from Git: each page is a file in the repository's{' '}
              <code className="rounded-sm bg-blue-soft px-1.5 font-type text-ink">/docs</code> folder.
            </p>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {docs.map((d) => (
                <li key={d.slug}>
                  <Link
                    to={`/docs/${d.slug}`}
                    className="group flex h-full flex-col rounded-xl border-2 border-ink/15 bg-white p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-blue"
                  >
                    <span className="type-label w-fit rounded-sm bg-blue px-2 py-0.5 text-white">{d.type}</span>
                    <span className="mt-4 text-xl font-bold leading-snug text-ink">{d.title}</span>
                    <span className="mt-2 flex-1 text-ink-soft">
                      {isPlaceholder(d.description) ? <Slot>{d.description}</Slot> : d.description}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                      Read the doc
                      <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
};

export default Writing;
