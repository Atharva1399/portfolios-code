// Page titles and descriptions. Shared by the runtime <head> updater
// (src/hooks/use-seo.ts) and the build step in vite.config.ts that writes
// per-route HTML, so link previews work without running JavaScript.

export const SITE_NAME = 'Atharva Gaikwad';
// [ADD: production URL, e.g. https://your-domain.com]. og:url and canonical links are skipped while it's empty.
export const SITE_URL = '';

export type PageMeta = { title: string; description: string; type?: 'website' | 'article' };

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Atharva Gaikwad | Engineer who writes about and builds GenAI systems',
    description:
      'Atharva Gaikwad writes about and builds GenAI systems: RAG, hybrid search, multilingual voice AI. Writing samples, docs and case studies.',
  },
  '/writing': {
    title: 'Writing | Atharva Gaikwad',
    description: 'Articles, research and documentation samples by Atharva Gaikwad on GenAI, retrieval and voice AI.',
  },
  '/projects': {
    title: 'Projects | Atharva Gaikwad',
    description:
      'Case studies: Auralis multilingual voice AI, LLM-assisted hybrid search, an email-to-report generator and an AI support desk.',
  },
};

/** Meta for a docs page; falls back to a neutral description while the frontmatter one is a placeholder. */
export const docMeta = (title: string, description: string): PageMeta => ({
  title: `${title} | Docs | Atharva Gaikwad`,
  description: /^\[(WRITE|ADD)\b/.test(description)
    ? `Documentation sample by Atharva Gaikwad: ${title}.`
    : description,
  type: 'article',
});
