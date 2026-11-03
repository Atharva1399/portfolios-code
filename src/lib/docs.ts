import GithubSlugger from 'github-slugger';

// Docs-as-code: every Markdown file in /docs is a published page. Vite bundles
// them at build time, so a doc goes live by committing it to Git.
const files = import.meta.glob('/docs/*.md', { query: '?raw', import: 'default', eager: true }) as Record<
  string,
  string
>;

export type DocType = 'Task' | 'Concept' | 'Reference';
export type Heading = { depth: 2 | 3; text: string; id: string };

export type Doc = {
  slug: string;
  path: string;
  title: string;
  description: string;
  type: DocType;
  order: number;
  body: string;
  headings: Heading[];
};

/** Minimal frontmatter reader for `key: value` lines between `---` fences. */
function parseFrontmatter(raw: string): { data: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { data: {}, body: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i < 0) continue;
    const key = line.slice(0, i).trim();
    const value = line
      .slice(i + 1)
      .trim()
      .replace(/^"(.*)"$/, '$1');
    data[key] = value;
  }
  return { data, body: raw.slice(match[0].length) };
}

/** h2/h3 headings outside code fences, with ids that match rehype-slug's. */
function extractHeadings(body: string): Heading[] {
  const slugger = new GithubSlugger();
  const out: Heading[] = [];
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const m = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;
    const text = m[2].replace(/[*_`]/g, '');
    out.push({ depth: m[1].length as 2 | 3, text, id: slugger.slug(text) });
  }
  return out;
}

export const docs: Doc[] = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    return {
      slug,
      path: path.replace(/^\//, ''),
      title: data.title ?? slug,
      description: data.description ?? '',
      type: (data.type as DocType) ?? 'Concept',
      order: Number(data.order ?? 99),
      body,
      headings: extractHeadings(body),
    };
  })
  .sort((a, b) => a.order - b.order);

export const getDoc = (slug: string | undefined) => docs.find((d) => d.slug === slug);

export const docTypes: DocType[] = ['Task', 'Concept', 'Reference'];
