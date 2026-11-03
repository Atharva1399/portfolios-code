import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Placeholders mark copy Atharva writes. Anything that starts with
 * "[WRITE" or "[ADD" renders as a highlighted slot, so an unfilled spot is
 * impossible to miss on the page. `npm run build` also counts them.
 */
export const isPlaceholder = (value: string) => /^\[(WRITE|ADD)\b/.test(value.trim());

export const Slot = ({ children, className }: { children: ReactNode; className?: string }) => (
  <mark
    className={cn(
      'rounded-sm border border-dashed border-blue/60 bg-blue-soft/70 px-1.5 py-0.5 font-type text-[0.9em] text-blue-deep [box-decoration-break:clone]',
      className,
    )}
  >
    {children}
  </mark>
);

/** Renders a string as normal text, or as a highlighted slot when it's a placeholder. */
export const Copy = ({ value, className }: { value: string; className?: string }) =>
  isPlaceholder(value) ? <Slot className={className}>{value}</Slot> : <>{value}</>;
