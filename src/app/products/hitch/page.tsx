import type { Metadata } from 'next';
import { ProductHero } from '@/components/product-hero';

export const metadata: Metadata = {
  title: 'Hitch | HM Attachment',
  description: 'Four hitch connector types for all excavator ranges.',
};

const hitchTypes = [
  {
    name: 'Single Pin Hitch',
    desc: 'Lightweight, non-bulky and easy to transport.',
    points: ['Lightweight, non-bulky', 'Easy transport', 'Economical'],
    image: '/products-img/hitch-single-pin.png',
  },
  {
    name: 'Double Pin Hitch',
    desc: 'Loose and fixed pin design, available in standard and quick hitch types.',
    points: ['Loose and fixed pin', 'Standard and quick hitch', 'Compatible with all HMA drive models'],
    image: '/products-img/hitch-double-pin.png',
  },
  {
    name: 'Double Pin Cradle Hitch',
    desc: 'Cradle hitch for the HMA2000-HMA100000 drive range.',
    points: ['For HMA2000-HMA100000', 'Eliminates auger swing', 'Safe transport'],
    image: '/products-img/hitch-double-pin-cradle.png',
  },
  {
    name: 'Skid Steer Loader Frame',
    desc: 'Slide operation hitch for skid steer loaders.',
    points: ['Slide operation', 'For HMA2000-HMA5000'],
    image: '/products-img/hitch-skid-steer-frame.png',
  },
];

export default function HitchPage() {
  return (
    <div>
      <ProductHero
        image="/hero/hitch.png"
        alt="Excavator hitch connectors"
        title="Hitch"
        subtitle="Four hitch connector types to match any excavator range."
        trail={[
          { label: 'HM Attachment', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Hitch' },
        ]}
      />

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
                <div className="h-40 w-full shrink-0 bg-white sm:h-auto sm:w-44">
                  <img alt={h.name} src={h.image} className="h-full w-full object-contain" />
                </div>
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
    </div>
  );
}