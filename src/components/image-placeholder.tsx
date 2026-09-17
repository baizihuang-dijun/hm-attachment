import { Image } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 产品实拍图占位符。
 * 传入 data 形如 [image-xxx]。替换实拍图时，仅需将实现改为 <Image/> 指向真实图源。
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