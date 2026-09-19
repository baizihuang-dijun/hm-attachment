import { cn } from '@/lib/utils';

/**
 * Product image renderer.
 * - If `src` is empty (product has no real image, e.g. Electric Coupler), renders a
 *   clean text-only card so no broken placeholder is ever shown.
 * - Otherwise renders the image, defaulting to `object-contain` on a light background
 *   so single-product renders stay uncropped. Pass `fit="cover"` for full-bleed photos.
 */
export function ProductImage({
  src,
  alt,
  className,
  fit = 'contain',
  objectPosition = 'center',
}: {
  src: string;
  alt: string;
  className?: string;
  fit?: 'contain' | 'cover';
  objectPosition?: string;
}) {
  if (!src) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-mist to-white px-4 text-center',
          className,
        )}
      >
        <span className="text-xs font-semibold uppercase tracking-wide text-hm/70">{alt}</span>
      </div>
    );
  }
  return (
    <div className={cn('flex items-center justify-center overflow-hidden bg-mist', className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full"
        style={{ objectFit: fit, objectPosition }}
      />
    </div>
  );
}