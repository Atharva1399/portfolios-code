// Writing: Medium articles and research. Titles, summaries and dates are
// Atharva's to fill in; replace each [WRITE: ...] / [ADD: ...] value.

export type Article = {
  id: string;
  title: string;
  summary: string;
  /** ISO date (YYYY-MM-DD). Leave as a placeholder until known. */
  date: string;
  readingMinutes: number | null;
  url: string;
};

// From https://medium.com/@athguy.dev (RSS, Nov 2026): tech posts only; reading time at 238 words a minute.
export const articles: Article[] = [
  {
    id: '5769bffa0708',
    title: 'I Bought a 20-Year-Old iPod, and I’ve Never Been Happier',
    summary: '[WRITE: one-line summary of what the reader learns]',
    date: '2025-08-11',
    readingMinutes: 3,
    url: 'https://medium.com/@athguy.dev/i-bought-a-20-year-old-ipod-and-ive-never-been-happier-5769bffa0708',
  },
  {
    id: 'a91594f78806',
    title: 'Code, Coffee, and Tariffs: An Indian Engineering Student’s Guide to the New Tech World Order',
    summary: '[WRITE: one-line summary of what the reader learns]',
    date: '2025-08-04',
    readingMinutes: 4,
    url: 'https://medium.com/@athguy.dev/code-coffee-and-tariffs-an-indian-engineering-students-guide-to-the-new-tech-world-order-a91594f78806',
  },
  {
    id: '87ca388c956a',
    title: 'Meet DaClean: The Smart Data Cleaner I Always Wanted (So I Built It!)',
    summary: '[WRITE: one-line summary of what the reader learns]',
    date: '2025-07-10',
    readingMinutes: 2,
    url: 'https://medium.com/@athguy.dev/meet-daclean-the-smart-data-cleaner-i-always-wanted-so-i-built-it-87ca388c956a',
  },
  {
    id: '38713f93b4e5',
    title: 'DeFi Protocol Architecture: A Builder’s Guide to What Actually Happens Under the Hood',
    summary: '[WRITE: one-line summary of what the reader learns]',
    date: '2025-06-15',
    readingMinutes: 6,
    url: 'https://medium.com/@athguy.dev/defi-protocol-architecture-a-builders-guide-to-what-actually-happens-under-the-hood-38713f93b4e5',
  },
  {
    id: 'f8648a400113',
    title: 'I Tested Every AI Writer for Content Creation here’s the One That Actually Gets It',
    summary: '[WRITE: one-line summary of what the reader learns]',
    date: '2025-05-29',
    readingMinutes: 5,
    url: 'https://medium.com/@athguy.dev/i-tested-every-ai-writer-for-content-creation-heres-the-one-that-actually-gets-it-f8648a400113',
  },
  {
    id: 'b16146e976af',
    title: 'The AI Revolution: How New Tech is Changing the Game for Athletes',
    summary: '[WRITE: one-line summary of what the reader learns]',
    date: '2025-05-28',
    readingMinutes: 3,
    url: 'https://medium.com/@athguy.dev/the-ai-revolution-how-new-tech-is-changing-the-game-for-athletes-b16146e976af',
  },
  {
    id: '091783ff7f52',
    title: 'Why Every Developer Will Need an AI Co-pilot by 2026 (And It’s Not What You Think)',
    summary: '[WRITE: one-line summary of what the reader learns]',
    date: '2025-05-26',
    readingMinutes: 4,
    url: 'https://medium.com/@athguy.dev/why-every-developer-will-need-an-ai-co-pilot-by-2026-and-its-not-what-you-think-091783ff7f52',
  },
];

/** Newest first; articles without a real date keep their listed order at the end. */
export const latestArticles = (count: number) =>
  [...articles]
    .sort((a, b) => {
      const ta = Date.parse(a.date);
      const tb = Date.parse(b.date);
      if (Number.isNaN(ta) && Number.isNaN(tb)) return 0;
      if (Number.isNaN(ta)) return 1;
      if (Number.isNaN(tb)) return -1;
      return tb - ta;
    })
    .slice(0, count);

export const research = {
  title: '[WRITE: paper title]',
  venue: 'IEEE format',
  topic: 'Auralis voice-consent safeguard',
  abstract: '[WRITE: abstract, 150–250 words]',
  facts: [
    { value: '2,080', label: 'speaker-verification trials' },
    { value: '0.08%', label: 'equal error rate (EER)' },
    { value: 'Bypassed', label: 'by cloned voices' },
  ],
  /** Public PDF or preprint link. The button stays hidden until it's set. */
  pdfUrl: '',
};
