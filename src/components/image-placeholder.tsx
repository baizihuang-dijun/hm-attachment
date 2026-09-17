import { Image } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Product image placeholder.
 * data is a marker like [image-xxx]. To swap in a real photo, replace with <Image/> pointing to the real source.
 */
export function ImagePlaceholder({
  alt,
  className,
  label,
}: {
  alt: string;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-mist to-white text-center',
        className,
      )}
    >
      <Image className="h-8 w-8 text-hm/25" />
      <span className="rounded border border-dashed border-line px-2 py-0.5 text-xs font-mono text-hm/40">
        {label ?? '[image]'}
      </span>
      <span className="sr-only">{alt}</span>
    </div>
  );
}