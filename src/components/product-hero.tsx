import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ProductHeroProps {
  image: string;
  kicker: string;
  title: string;
  subtitle?: string;
  current: string;
  /** Alt text for the background image */
  alt: string;
}

export function ProductHero({ image, kicker, title, subtitle, current, alt }: ProductHeroProps) {
  return (
    <section
      className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-deep sm:min-h-[360px]"
      aria-label={title}
    >
      {/* Background image: pre-cropped 2400x900, subject biased right, clear space on the left */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      {/* Left-to-right deep-blue scrim for white text legibility */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(8,30,61,0.88) 0%, rgba(8,30,61,0.64) 42%, rgba(8,30,61,0.18) 100%)',
        }}
      />
      {/* Subtle top scrim to keep the header lower edge clean */}
      <div className="absolute inset-x-0 top-0 -z-10 h-16 bg-gradient-to-b from-[#06203f]/55 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-hm-bright-2 sm:text-sm">
          {kicker}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {subtitle}
          </p>
        )}
        <nav
          aria-label="Breadcrumb"
          className="mt-7 flex items-center gap-1.5 text-sm text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <Link href="/products" className="transition-colors hover:text-white">
            Products
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="font-medium text-white">{current}</span>
        </nav>
      </div>
    </section>
  );
}
