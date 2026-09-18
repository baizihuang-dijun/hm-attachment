import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface ProductHeroProps {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  /** Breadcrumb segments in order. The last one (no href) is the current page. */
  trail: Crumb[];
}

export function ProductHero({ image, alt, title, subtitle, trail }: ProductHeroProps) {
  return (
    <section
      className="relative isolate aspect-[8/3] max-sm:aspect-auto max-sm:h-[620px] overflow-hidden bg-deep"
      aria-label={title}
    >
      {/* Background photo: pre-cropped 8:3, subject fixed at 72% horizontally on every viewport */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_50%]"
      />
      {/* Left deep-blue to transparent scrim for white text legibility */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,32,61,0.90) 0%, rgba(8,32,61,0.60) 40%, rgba(8,32,61,0.10) 78%, rgba(8,32,61,0) 100%)',
        }}
      />
      {/* Subtle bottom-up darken so text stays readable on phones */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.28), transparent)' }}
      />

      {/* Text layer */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-hm-bright-2 sm:text-sm">
            {trail.map((c) => c.label).join(' / ')}
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
              {subtitle}
            </p>
          )}
          <nav aria-label="Breadcrumb" className="mt-6 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-white/70">
            {trail.map((c, i) =>
              c.href ? (
                <span key={i} className="flex items-center gap-x-1.5">
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              ) : (
                <span key={i} className="font-medium text-white">
                  {c.label}
                </span>
              )
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}