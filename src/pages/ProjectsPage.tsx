import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import SiteLayout from '@/components/layout/SiteLayout';
import { caseStudies, moreProjects, type CaseLink, type CaseStudy } from '@/data/portfolio';
import { pageMeta } from '@/data/seo';
import { Copy, isPlaceholder, Slot } from '@/lib/placeholder';
import { useSeo } from '@/hooks/use-seo';

const LinkItem = ({ link }: { link: CaseLink }) => {
  if (!link.href) return <Slot>[ADD: {link.label} link]</Slot>;
  const internal = link.href.startsWith('/');
  const cls =
    'inline-flex items-center gap-1.5 rounded-md border-2 border-blue px-3.5 py-2 text-sm font-semibold text-blue transition-colors hover:bg-blue hover:text-white';
  const icon = link.label === 'GitHub' ? <Github size={16} aria-hidden /> : null;
  return internal ? (
    <Link to={link.href} className={cls}>
      {icon}
      {link.label}
    </Link>
  ) : (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {icon}
      {link.label}
      <ArrowUpRight size={15} aria-hidden />
    </a>
  );
};

const Block = ({ title, value }: { title: string; value: string }) => (
  <section>
    <h3 className="type-label text-blue">{title}</h3>
    <p className="mt-2 max-w-[68ch] text-[1.0625rem] leading-[1.7] text-ink">
      <Copy value={value} />
    </p>
  </section>
);

const Results = ({ study }: { study: CaseStudy }) => (
  <section>
    <h3 className="type-label text-blue">Results</h3>
    <dl className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {study.metrics.map((m) => (
        <div key={m.label} className="rounded-md bg-blue-soft px-5 py-4 text-ink">
          <dt className="sr-only">{isPlaceholder(m.label) ? 'Metric' : m.label}</dt>
          <dd>
            <span className="block font-display text-[2.1rem] font-black leading-none text-blue [font-stretch:120%]">
              <Copy value={m.value} className="text-base text-blue-deep" />
            </span>
            <span className="mt-2 block text-sm leading-snug text-ink-soft">
              <Copy value={m.label} className="text-blue-deep" />
            </span>
          </dd>
        </div>
      ))}
    </dl>
  </section>
);

const CaseStudyArticle = ({ study }: { study: CaseStudy }) => (
  <article id={study.id} aria-labelledby={`${study.id}-title`} className="scroll-mt-24 border-t-4 border-blue pt-10">
    <div>
      <div className="min-w-0">
        <h2
          id={`${study.id}-title`}
          className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[0.92] text-blue [font-stretch:120%]"
        >
          {study.title}
        </h2>
        <p className="mt-3 text-lg font-medium text-ink-soft">{study.kind}</p>
        <ul aria-label="Stack" className="mt-5 flex flex-wrap gap-2">
          {study.stack.map((s) => (
            <li key={s} className="rounded-sm border-2 border-blue px-2.5 py-1 font-type text-sm text-blue">
              <Copy value={s} />
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-8">
          <Block title="Problem" value={study.problem} />
          <Block title="What I built" value={study.built} />
          {study.flow && (
            <figure className="max-w-[68ch] rounded-md border-2 border-blue bg-white p-4">
              <figcaption className="type-label text-blue">How it flows</figcaption>
              <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2 font-type text-sm text-ink">
                {study.flow.map((step, i) => (
                  <li key={step} className="flex items-center gap-1.5">
                    <span className="rounded-sm bg-blue-soft px-2 py-1">{step}</span>
                    {i < study.flow!.length - 1 && (
                      <span aria-hidden className="text-blue">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </figure>
          )}
          <Block title="My role" value={study.role} />
          <Results study={study} />
          <Block title="What I learned" value={study.learned} />
        </div>

        <section className="mt-10">
          <h3 className="type-label text-blue">Links</h3>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {study.links.map((l) => (
              <LinkItem key={l.label} link={l} />
            ))}
          </div>
        </section>
      </div>
    </div>
  </article>
);

const ProjectsPage = () => {
  useSeo(pageMeta['/projects'], '/projects');

  return (
    <SiteLayout>
      <div className="grid-paper pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
          <header className="max-w-[68ch]">
            <h1 className="display text-[clamp(3rem,10vw,7rem)] text-blue">Projects</h1>
            <p className="mt-6 text-xl leading-relaxed text-ink">
              <Copy value="[WRITE: one or two sentences introducing these case studies]" />
            </p>
            <nav aria-label="Case studies" className="type-label mt-8 flex flex-wrap gap-2">
              {caseStudies.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-md border-2 border-blue bg-white px-3 py-1.5 text-blue transition-colors hover:bg-blue hover:text-white"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </header>

          <div className="mt-16 space-y-20">
            {caseStudies.map((s) => (
              <CaseStudyArticle key={s.id} study={s} />
            ))}
          </div>

          <section aria-labelledby="more-projects" className="mt-24 border-t-4 border-blue pt-10">
            <h2
              id="more-projects"
              className="font-display text-[clamp(1.75rem,3.6vw,2.6rem)] font-black uppercase leading-none text-blue [font-stretch:115%]"
            >
              More projects
            </h2>
            <ul className="mt-6 divide-y divide-border border-y border-border bg-white">
              {moreProjects.map((p) => (
                <li key={p.title}>
                  <div className="grid gap-1 px-4 py-4 sm:grid-cols-[13rem_10rem_minmax(0,1fr)_auto] sm:items-center sm:gap-5">
                    <span className="font-bold text-ink">{p.title}</span>
                    <span className="type-label text-blue">{p.kind}</span>
                    <span className="text-ink-soft">{p.note}</span>
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-blue hover:underline hover:underline-offset-4"
                      >
                        Repo <ArrowUpRight size={14} aria-hidden />
                        <span className="sr-only"> for {p.title}</span>
                      </a>
                    ) : (
                      <span />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
};

export default ProjectsPage;
