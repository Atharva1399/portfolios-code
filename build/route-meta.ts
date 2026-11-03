import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { docMeta, pageMeta, SITE_NAME, SITE_URL, type PageMeta } from '../src/data/seo';

const PLACEHOLDER = /\[(WRITE|ADD)\b/g;

const walk = (dir: string, exts: string[]): string[] =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) return walk(p, exts);
        return exts.some((x) => p.endsWith(x)) ? [p] : [];
      })
    : [];

const frontmatter = (raw: string) => {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(raw);
  const out: Record<string, string> = {};
  m?.[1].split(/\r?\n/).forEach((line) => {
    const i = line.indexOf(':');
    if (i > 0)
      out[line.slice(0, i).trim()] = line
        .slice(i + 1)
        .trim()
        .replace(/^"(.*)"$/, '$1');
  });
  return out;
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Swap the shell's head tags for a route's own title, description and Open Graph tags. */
const withMeta = (html: string, meta: PageMeta, route: string) => {
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:type" content="${meta.type ?? 'website'}" />`,
    `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    ...(SITE_URL
      ? [
          `<meta property="og:url" content="${SITE_URL}${route}" />`,
          `<link rel="canonical" href="${SITE_URL}${route}" />`,
        ]
      : []),
  ].join('\n    ');
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta (name="description"|property="og:[^"]+"|name="twitter:[^"]+")[^>]*>\s*/g, '')
    .replace('</head>', `    ${tags}\n  </head>`);
};

/**
 * Build-time helpers for a single-page app:
 * - writes dist/<route>/index.html for every page, so crawlers and link
 *   previews (LinkedIn, X, Slack) see the right title and Open Graph tags,
 *   and deep links load on any static host;
 * - reports how many [WRITE] / [ADD] placeholders are still unfilled.
 */
export function routeMeta(root: string): Plugin {
  const docsDir = path.join(root, 'docs');
  return {
    name: 'route-meta',
    apply: 'build',
    buildStart() {
      const files = [...walk(path.join(root, 'src'), ['.ts', '.tsx']), ...walk(docsDir, ['.md'])].filter(
        // These two only detect placeholders; they don't contain any
        (f) => !f.endsWith(path.join('lib', 'placeholder.tsx')) && !f.endsWith(path.join('docs', 'Markdown.tsx')),
      );
      const counts = files
        .map((f) => ({ f: path.relative(root, f), n: (fs.readFileSync(f, 'utf8').match(PLACEHOLDER) ?? []).length }))
        .filter((c) => c.n > 0);
      const total = counts.reduce((a, c) => a + c.n, 0);
      if (total) {
        this.warn(
          `${total} [WRITE]/[ADD] placeholders still to fill:\n` + counts.map((c) => `    ${c.n}\t${c.f}`).join('\n'),
        );
      }
    },
    closeBundle() {
      const dist = path.join(root, 'dist');
      const shellPath = path.join(dist, 'index.html');
      if (!fs.existsSync(shellPath)) return;
      const shell = fs.readFileSync(shellPath, 'utf8');

      const routes: [string, PageMeta][] = Object.entries(pageMeta);
      for (const file of walk(docsDir, ['.md'])) {
        const fm = frontmatter(fs.readFileSync(file, 'utf8'));
        const slug = path.basename(file, '.md');
        routes.push([`/docs/${slug}`, docMeta(fm.title ?? slug, fm.description ?? '')]);
      }

      for (const [route, meta] of routes) {
        const out = route === '/' ? shellPath : path.join(dist, route, 'index.html');
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, withMeta(shell, meta, route));
      }
    },
  };
}
