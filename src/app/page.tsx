import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { brand, homeStats } from '@/lib/products';
import EcoExplorer from '@/components/eco-explorer';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep text-white">
        {/* Photo background: subject fixed at 72% horizontally */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/home.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[72%_50%]"
        />
        {/* Left deep-blue scrim for white text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,32,61,0.92) 0%, rgba(8,32,61,0.62) 40%, rgba(8,32,61,0.12) 78%, rgba(8,32,61,0) 100%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(43,108,176,0.5), transparent 50%), radial-gradient(circle at 85% 80%, rgba(6,32,63,0.9), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-hm-bright-2">
            {brand.slogan}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Power the Ground.
            <br />
            <span className="text-white/80">Drill the Future.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">{brand.subtitle}</p>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {homeStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products/drives"
              className="inline-flex items-center gap-2 rounded-md bg-hm-bright-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hm-bright"
            >
              Auger Drives
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products/electric-coupler"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Electric Coupler
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* HMA Series Auger Drill Ecosystem — interactive explorer (1:1 port) */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <header className="mb-6 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
              One system, every attachment
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-hm sm:text-4xl">
              The HMA Series Auger Drill Ecosystem
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-inksoft">
              One drive unit becomes a full working system. Hover any part — on the diagram or in
              the list — to spotlight it. Click to open its product family.
            </p>
          </header>
          <EcoExplorer />
        </div>
      </section>

      {/* Electric Coupler independent block */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative h-64 w-full overflow-hidden rounded-lg border border-line bg-white p-4">
            <Image
              src="/images/coupler-compact-render.png"
              alt="HM Electric Quick Coupler render"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
              Electric Coupler
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
              Electric Quick Coupler
            </h2>
            <p className="mt-3 text-inksoft">
              Electric quick coupler for 5-9 ton excavators. Dual operating modes — electric
              drive for daily work, manual backup to avoid downtime.
            </p>
            <Link
              href="/products/electric-coupler"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-hm px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hm-dark"
            >
              View Electric Coupler
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-hm text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Need a custom drilling solution?
              </h2>
              <p className="mt-1 text-white/75">
                Contact HM Attachment for models, specs and pricing.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-hm transition-colors hover:bg-hm-bright-2 hover:text-white"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}