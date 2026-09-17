import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata: Metadata = {
  title: 'Earth Augers | HM Attachment',
  description:
    'W2, W3 and W4 augers plus pilot and teeth for general, combination and rock drilling. Diameter from 150mm to 2000mm.',
};

const augerTypes = [
  {
    name: 'W2 Earth Auger',
    tag: 'General Drilling',
    desc: 'All-purpose earth auger for general drilling in earth, clay, shale and soft rock. Fitted with multi-faced tungsten cutting elements.',
    pilot: 'ADP2',
    teeth: 'AOT2',
    image: '[image-auger-w2]',
  },
  {
    name: 'W3 Combination Auger',
    tag: 'All Ground Conditions',
    desc: 'Efficient and cost effective, with tapered teeth for ultimate ripping in fracturable rock, permafrost and general earth.',
    pilot: 'AOP3',
    teeth: 'AOT3',
    image: '[image-auger-w3]',
  },
  {
    name: 'W4 Rock Auger',
    tag: 'Heavy Duty',
    desc: 'Heavy duty rock auger with high efficiency cutting heads and quality wear parts for concrete, shale and fracturable rock.',
    pilot: 'AOP4',
    teeth: 'AOT4',
    image: '[image-auger-w4]',
  },
];

export default function EarthAugersPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products / Earth Augers"
        title="Earth Augers"
        subtitle="Augers and flights matched to your ground conditions — from general earth and clay to concrete and fracturable rock."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ImagePlaceholder alt="Earth augers" label="[image-earth-augers-hero]" className="h-64 w-full rounded-lg border border-line" />
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-inksoft">
            <Link href="/" className="hover:text-hm-bright-2">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-hm-bright-2">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-hm">Earth Augers</span>
          </nav>
        </div>
      </section>

      {/* W2 / W3 / W4 comparison */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Auger Types
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            W2 / W3 / W4 Comparison
          </h2>
          <p className="mt-2 max-w-3xl text-inksoft">
            Three auger classes cover general, combination and rock drilling. Diameter range
            from 150mm to 2000mm.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {augerTypes.map((a) => (
              <div
                key={a.name}
                className="flex flex-col overflow-hidden rounded-lg border border-line bg-white"
              >
                <ImagePlaceholder alt={a.name} label={a.image} className="h-44 w-full border-b border-line" />
                <div className="flex flex-1 flex-col p-5">
                  <span className="inline-block self-start rounded bg-hm/10 px-2 py-0.5 text-xs font-semibold text-hm">
                    {a.tag}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-hm">{a.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-inksoft">{a.desc}</p>
                  <dl className="mt-4 space-y-1.5 border-t border-line pt-3 text-sm">
                    <div className="flex gap-2">
                      <dt className="w-14 shrink-0 font-medium text-inksoft">Pilot</dt>
                      <dd className="text-ink">{a.pilot}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-14 shrink-0 font-medium text-inksoft">Teeth</dt>
                      <dd className="text-ink">{a.teeth}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot and Teeth */}
      <section id="teeth" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Pilot & Teeth
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Pilot and Teeth
          </h2>
          <div className="mt-4 grid items-start gap-8 lg:grid-cols-2">
            <ImagePlaceholder alt="Pilot and teeth" label="[image-pilot-teeth]" className="h-60 w-full rounded-lg border border-line" />
            <div className="space-y-4 text-ink">
              <p>
                Tungsten carbide tips in three configurations for different geology. Each
                auger type uses a matched pilot and tooth set: ADP2/AOP3/AOP4 pilots and
                AOT2/AOT3/AOT4 teeth.
              </p>
              <ul className="grid gap-2">
                {['Tungsten carbide tips', 'Three configurations for different geology', 'Matched to W2 / W3 / W4 augers', 'Wear-resistant alloy bodies'].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hm-bright-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}