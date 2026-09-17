import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata: Metadata = {
  title: 'Hitch & Extension | HM Attachment',
  description:
    'Four hitch connector types for all excavator ranges, plus customizable auger extensions.',
};

const hitchTypes = [
  {
    name: 'Single Pin Hitch',
    desc: 'Lightweight, non-bulky and easy to transport.',
    points: ['Lightweight, non-bulky', 'Easy transport', 'Economical'],
    image: '[image-hitch-single]',
  },
  {
    name: 'Double Pin Hitch',
    desc: 'Loose and fixed pin design, available in standard and quick hitch types.',
    points: ['Loose and fixed pin', 'Standard and quick hitch', 'All Yichen drive ranges'],
    image: '[image-hitch-double]',
  },
  {
    name: 'Double Pin Cradle Hitch',
    desc: 'Cradle hitch for the YA2000-YA100000 drive range.',
    points: ['For YA2000-YA100000', 'Eliminates auger swing', 'Safe transport'],
    image: '[image-hitch-cradle]',
  },
  {
    name: 'Skid Steer Loader Frame',
    desc: 'Slide operation hitch for skid steer loaders.',
    points: ['Slide operation', 'For YA2000-YA5000'],
    image: '[image-hitch-skid]',
  },
];

export default function HitchPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products / Hitch & Extension"
        title="Hitch & Extension"
        subtitle="Four hitch connector types to match any excavator range, plus customizable auger extensions."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ImagePlaceholder alt="Hitch" label="[image-hitch-hero]" className="h-64 w-full rounded-lg border border-line" />
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-inksoft">
            <Link href="/" className="hover:text-hm-bright-2">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-hm-bright-2">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-hm">Hitch & Extension</span>
          </nav>
        </div>
      </section>

      {/* 4 Hitch Types */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Hitch Connectors
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            4 Types of Hitch
          </h2>
          <p className="mt-2 max-w-3xl text-inksoft">
            High-strength quick hitching systems for fast, secure attachment changes across
            the full excavator range.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {hitchTypes.map((h) => (
              <div
                key={h.name}
                className="flex flex-col overflow-hidden rounded-lg border border-line bg-white sm:flex-row"
              >
                <ImagePlaceholder alt={h.name} label={h.image} className="h-40 w-full shrink-0 sm:h-auto sm:w-44" />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-hm">{h.name}</h3>
                  <p className="mt-1 text-sm text-inksoft">{h.desc}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-line pt-3">
                    {h.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-ink">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hm-bright-2" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auger Extension */}
      <section id="extension" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Auger Extension
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Auger Extension
          </h2>
          <div className="mt-4 grid items-start gap-8 lg:grid-cols-2">
            <ImagePlaceholder alt="Auger extension" label="[image-auger-extension]" className="h-60 w-full rounded-lg border border-line" />
            <div className="space-y-4 text-ink">
              <p>
                Extend the working depth of your auger with a customizable auger extension,
                matched to your drive shank and auger diameter.
              </p>
              <p>Customization available. Contact HM Attachment for models, lengths and specifications.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}