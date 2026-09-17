import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata: Metadata = {
  title: 'Tools | HM Attachment',
  description:
    'Log splitter, stump planer, core barrel, cement mixer bowl and hole cleaner drilling and ground tools.',
};

const tools = [
  {
    name: 'Log Splitter',
    model: 'ALS-180',
    image: '[image-tool-log-splitter]',
    desc: 'Self-guiding log splitter with a replaceable hardened cone tip.',
    params: [
      ['Machine', '1-5 T'],
      ['Diameter', '180mm'],
      ['Length', '300mm'],
      ['Hub', '65 Round'],
      ['Weight', '14.6 kg'],
    ],
    features: ['Single Fixing Point', 'Self Guiding', 'Conical Profile', 'Replaceable Hardened Cone Tip'],
  },
  {
    name: 'Stump Planer',
    model: 'ASP series',
    image: '[image-tool-stump-planer]',
    desc: 'Z-shaped blade stump planer with two-stage cutting and replaceable tips.',
    params: [
      ['APS-250', '1-5T / 250mm / 25kg / YA3000-5000'],
      ['APS-350', '4.5-10T / 350mm / 33kg / YA8000-10000'],
    ],
    features: ['Z-shaped blade', 'Two-stage cutting', 'Replaceable tips'],
  },
  {
    name: 'Core Barrel',
    model: 'ACB series',
    image: '[image-tool-core-barrel]',
    desc: 'Rotating pick core barrel for rock coring and trench work.',
    params: [
      ['Cutting dia', '350-1200mm'],
      ['Barrel length', '1250mm'],
      ['Wall', '16-20mm'],
      ['Base ring', '25-40mm'],
      ['Teeth', '19mm / 38mm Rotating Pick'],
      ['Weight', '185-1100 kg'],
      ['Hub', '75 / 110mm Square'],
    ],
    features: ['9 models', 'Rotating pick teeth', 'Square hub mounting'],
  },
  {
    name: 'Cement Mixer Bowl',
    model: 'ACM series',
    image: '[image-tool-cement-mixer]',
    desc: 'Concrete mixing bowl for on-site slurry and mix preparation.',
    params: [
      ['ACM-18065', 'YA2000-5000 / 1-8T / 180L / 65 Round / 38kg'],
      ['ACM-18075', 'YA8000-10000 / 1-8T / 180L / 75 Square / 39kg'],
    ],
    features: ['140 / 180 / 220L options', '2 blades', 'Quick attach'],
  },
  {
    name: 'Hole Cleaner',
    model: 'Pre-pile',
    image: '[image-tool-hole-cleaner]',
    desc: 'Pre-pile hole cleaning tool for clearing bore holes before piling.',
    params: [['Use', 'Pre-pile hole cleaning']],
    features: ['Clears loose spoil', 'Prepares bore for piling'],
  },
];

export default function ToolsPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products / Tools"
        title="Tools"
        subtitle="Log splitters, stump planers, core barrels, cement mixer bowls and hole cleaners for ground and drilling work."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ImagePlaceholder alt="Tools" label="[image-tools-hero]" className="h-64 w-full rounded-lg border border-line" />
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-inksoft">
            <Link href="/" className="hover:text-hm-bright-2">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-hm-bright-2">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-hm">Tools</span>
          </nav>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex flex-col overflow-hidden rounded-lg border border-line bg-white"
              >
                <ImagePlaceholder alt={t.name} label={t.image} className="h-44 w-full border-b border-line" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-hm">{t.name}</h3>
                    {t.model && (
                      <span className="rounded bg-hm/10 px-2 py-0.5 text-xs font-semibold text-hm">
                        {t.model}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 flex-1 text-sm text-inksoft">{t.desc}</p>

                  {t.params.length > 0 && (
                    <dl className="mt-4 space-y-1.5 border-t border-line pt-3 text-sm">
                      {t.params.map(([k, v]) => (
                        <div key={k} className="flex gap-2">
                          <dt className="w-28 shrink-0 font-medium text-inksoft">{k}</dt>
                          <dd className="text-ink">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {t.features.map((f) => (
                      <li key={f} className="rounded bg-mist px-2 py-0.5 text-xs font-medium text-hm">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="flex flex-col items-start justify-center rounded-lg border border-line bg-hm p-6 text-white">
              <h3 className="text-lg font-bold">Need a custom tool?</h3>
              <p className="mt-2 text-sm text-white/75">
                Contact HM Attachment for models, specifications and pricing.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 rounded-md bg-white px-4 py-2 text-sm font-semibold text-hm transition-colors hover:bg-hm-bright-2 hover:text-white"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}