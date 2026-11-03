import { Link, Navigate, NavLink, useParams } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import Markdown from '@/components/docs/Markdown';
import { docs, docTypes, getDoc, type Doc } from '@/lib/docs';
import { profile } from '@/data/portfolio';
import { docMeta } from '@/data/seo';
import { useSeo } from '@/hooks/use-seo';
import { cn } from '@/lib/utils';

const TopicList = ({ current }: { current: Doc }) => (
  <nav aria-label="Documentation topics">
    {docTypes.map((type) => {
      const group = docs.filter((d) => d.type === type);
      if (!group.length) return null;
      return (
        <div key={type} className="mb-6">
          <p className="type-label mb-2 text-ink-soft">{type} topics</p>
          <ul className="space-y-1">
            {group.map((d) => (
              <li key={d.slug}>
                <NavLink
                  to={`/docs/${d.slug}`}
                  aria-current={d.slug === current.slug ? 'page' : undefined}
                  className={cn(
                    'block rounded-md px-3 py-2 text-[0.95rem] leading-snug transition-colors',
                    d.slug === current.slug
                      ? 'bg-blue font-semibold text-white'
                      : 'text-ink hover:bg-blue-soft hover:text-blue-deep',
                  )}
                >
                  {d.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </nav>
);

const OnThisPage = ({ doc }: { doc: Doc }) =>
  doc.headings.length ? (
    <nav aria-label="On this page">
      <p className="type-label mb-3 text-ink-soft">On this page</p>
      <ul className="space-y-1.5 border-l-2 border-border text-sm">
        {doc.headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                '-ml-0.5 block border-l-2 border-transparent py-0.5 text-ink-soft transition-colors hover:border-blue hover:text-blue',
                h.depth === 3 ? 'pl-6' : 'pl-3',
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  ) : null;

const DocPage = () => {
  const { slug } = useParams();
  const doc = getDoc(slug);
  useSeo(
    doc ? docMeta(doc.title, doc.description) : { title: 'Docs | Atharva Gaikwad', description: '' },
    `/docs/${slug ?? ''}`,
  );

  if (!doc) return <Navigate to={docs[0] ? `/docs/${docs[0].slug}` : '/writing'} replace />;

  const editUrl = `${profile.repo}/edit/main/${doc.path}`;

  return (
    <SiteLayout>
      <div className="grid-paper min-h-screen pb-24 pt-24">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-4 sm:px-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:px-10 xl:grid-cols-[15rem_minmax(0,1fr)_13rem]">
          {/* Topics: a sidebar on desktop, a disclosure on phones */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-5 hidden lg:block">
              <Link to="/writing" className="type-label text-blue hover:underline hover:underline-offset-4">
                ← Writing
              </Link>
            </p>
            <details className="rounded-md border-2 border-blue bg-white p-4 lg:hidden">
              <summary className="cursor-pointer font-semibold text-blue">Documentation topics</summary>
              <div className="mt-4">
                <TopicList current={doc} />
              </div>
            </details>
            <div className="hidden lg:block">
              <TopicList current={doc} />
            </div>
          </aside>

          <article className="min-w-0 rounded-xl border border-border bg-white px-5 py-8 sm:px-10 sm:py-12">
            <h1 className="font-display text-[clamp(2rem,4.2vw,3.25rem)] font-black uppercase leading-[0.95] [font-stretch:115%]">
              {doc.title}
            </h1>
            <p className="type-label mt-3 text-blue">{doc.type} topic</p>

            <details className="mt-6 rounded-md border border-border p-4 xl:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-ink">On this page</summary>
              <div className="mt-3">
                <OnThisPage doc={doc} />
              </div>
            </details>

            <div className="doc-prose mt-8">
              <Markdown source={doc.body} />
            </div>

            <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <a
                href={editUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-blue hover:underline hover:underline-offset-4"
              >
                <Pencil size={16} aria-hidden />
                Edit on GitHub
              </a>
              <span className="type-label text-ink-soft">Source: {doc.path}</span>
            </footer>
          </article>

          <aside className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
            <OnThisPage doc={doc} />
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
};

export default DocPage;
