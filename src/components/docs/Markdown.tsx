import { Children, isValidElement, useState, type ReactNode } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Link } from 'react-router-dom';
import { AlertTriangle, Check, Copy, Info, Lightbulb, Link2 } from 'lucide-react';
import { isPlaceholder, Slot } from '@/lib/placeholder';
import { cn } from '@/lib/utils';

type MdNode = {
  type: string;
  value?: string;
  children?: MdNode[];
  data?: { hName?: string; hProperties?: Record<string, unknown> };
};

const KINDS = { NOTE: 'note', TIP: 'tip', WARNING: 'warning' } as const;
type Kind = (typeof KINDS)[keyof typeof KINDS];

/**
 * GitHub-style admonitions: a blockquote that opens with [!NOTE], [!TIP] or
 * [!WARNING] becomes a callout box. Written as plain Markdown, so the same file
 * reads correctly on GitHub.
 */
function remarkAdmonitions() {
  const walk = (node: MdNode) => {
    if (node.type === 'blockquote') {
      const para = node.children?.[0];
      const text = para?.type === 'paragraph' ? para.children?.[0] : undefined;
      const m = text?.type === 'text' ? /^\[!(NOTE|TIP|WARNING)\]\s*/.exec(text.value ?? '') : null;
      if (m && text) {
        text.value = (text.value ?? '').slice(m[0].length);
        node.data = { hName: 'aside', hProperties: { 'data-kind': KINDS[m[1] as keyof typeof KINDS] } };
      }
    }
    node.children?.forEach(walk);
  };
  return (tree: MdNode) => walk(tree);
}

const flatText = (children: ReactNode): string =>
  Children.toArray(children)
    .map((c) =>
      typeof c === 'string' ? c : isValidElement<{ children?: ReactNode }>(c) ? flatText(c.props.children) : '',
    )
    .join('');

/** Wraps text that is a [WRITE]/[ADD] placeholder in a visible slot. */
const withSlots = (children: ReactNode) => {
  const text = flatText(children);
  return isPlaceholder(text) ? <Slot>{children}</Slot> : children;
};

const INLINE = new Set(['a', 'code', 'em', 'strong', 'del', 'br']);

/** List items that hold paragraphs or code blocks get their slots from those children instead. */
const withInlineSlots = (children: ReactNode) =>
  Children.toArray(children).every((c) => typeof c === 'string' || (isValidElement(c) && INLINE.has(c.type as string)))
    ? withSlots(children)
    : children;

const admonition: Record<Kind, { label: string; icon: typeof Info; cls: string }> = {
  // Warning keeps a functional amber: a caution signal has to read as different, not just as blue.
  note: { label: 'Note', icon: Info, cls: 'border-blue bg-blue-soft/60' },
  tip: { label: 'Tip', icon: Lightbulb, cls: 'border-blue-deep bg-white' },
  warning: { label: 'Warning', icon: AlertTriangle, cls: 'border-[#B45309] bg-[#FEF3E2]' },
};

const CodeBlock = ({ children }: { children: ReactNode }) => {
  const [copied, setCopied] = useState(false);
  const code = flatText(children).replace(/\n$/, '');
  const lang = isValidElement<{ className?: string }>(children)
    ? /language-(\w+)/.exec(children.props.className ?? '')?.[1]
    : undefined;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard blocked: the code stays selectable */
    }
  };

  return (
    <div className="not-prose my-6 overflow-hidden rounded-md border-2 border-ink bg-ink text-white">
      <div className="flex items-center justify-between border-b border-white/15 px-4 py-1.5">
        <span className="font-type text-xs text-blue-soft">{lang ?? 'code'}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-sm px-2 py-1 font-type text-xs text-white transition-colors hover:bg-white/15"
        >
          {copied ? <Check size={14} aria-hidden /> : <Copy size={14} aria-hidden />}
          {copied ? 'Copied' : 'Copy'}
          <span className="sr-only"> code to clipboard</span>
        </button>
      </div>
      <pre className="overflow-x-auto p-4 font-type text-sm leading-relaxed">{children}</pre>
    </div>
  );
};

const heading =
  (Tag: 'h2' | 'h3') =>
  ({ id, children }: { id?: string; children?: ReactNode }) => (
    <Tag id={id} className="group scroll-mt-24">
      {children}
      {id && (
        <a
          href={`#${id}`}
          className="ml-2 inline-flex align-middle text-blue opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100"
        >
          <Link2 size={18} aria-hidden />
          <span className="sr-only">Link to this section</span>
        </a>
      )}
    </Tag>
  );

const components: Components = {
  h2: heading('h2'),
  h3: heading('h3'),
  p: ({ children }) => <p>{withSlots(children)}</p>,
  li: ({ children }) => <li>{withInlineSlots(children)}</li>,
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  a: ({ href = '', children }) =>
    href.startsWith('/') ? (
      <Link to={href}>{children}</Link>
    ) : (
      <a href={href} target={href.startsWith('#') ? undefined : '_blank'} rel="noopener noreferrer">
        {children}
      </a>
    ),
  aside: ({ node, children }) => {
    const props = node?.properties ?? {};
    const kind = ((props['data-kind'] ?? props.dataKind) as Kind) ?? 'note';
    const { label, icon: Icon, cls } = admonition[kind];
    return (
      <aside className={cn('not-prose my-6 rounded-md border-2 px-5 py-4 text-ink', cls)} aria-label={label}>
        <p className="flex items-center gap-2 font-type text-sm font-bold">
          <Icon size={16} aria-hidden />
          {label}
        </p>
        <div className="mt-1.5 leading-relaxed [&_p]:m-0">{children}</div>
      </aside>
    );
  },
};

const Markdown = ({ source }: { source: string }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm, remarkAdmonitions]} rehypePlugins={[rehypeSlug]} components={components}>
    {source}
  </ReactMarkdown>
);

export default Markdown;
