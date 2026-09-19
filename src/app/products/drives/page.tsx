import type { Metadata } from 'next';
import { Fragment } from 'react';
import { ProductHero } from '@/components/product-hero';
import { augerDrivesTable } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Auger Drives | HM Attachment',
  description:
    'Standard, high speed and horizontal auger drives. YA series from 1,900 N·m to 100,000 N·m for 0.5-52 ton excavators.',
};

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-white">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-hm text-white">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-line last:border-0 odd:bg-white even:bg-mist/50"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-ink">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type DepthRow = { diam: string; soft: number; medium: number; hard: number };

const depthTable: { model: string; rows: DepthRow[] }[] = [
  {
    model: 'YA-2000',
    rows: [
      { diam: '150 mm', soft: 3.5, medium: 3.5, hard: 3.0 },
      { diam: '200 mm', soft: 3.0, medium: 3.0, hard: 3.0 },
      { diam: '250 mm', soft: 2.5, medium: 2.4, hard: 2.2 },
      { diam: '300 mm', soft: 2.5, medium: 2.4, hard: 2.2 },
      { diam: '350 mm', soft: 2.4, medium: 2.2, hard: 2.0 },
      { diam: '400 mm', soft: 2.0, medium: 1.8, hard: 1.5 },
    ],
  },
  {
    model: 'YA-3000',
    rows: [
      { diam: '150 mm', soft: 3.5, medium: 3.5, hard: 3.0 },
      { diam: '200 mm', soft: 3.0, medium: 3.0, hard: 3.0 },
      { diam: '250 mm', soft: 2.5, medium: 2.4, hard: 2.2 },
      { diam: '300 mm', soft: 2.5, medium: 2.4, hard: 2.2 },
      { diam: '350 mm', soft: 2.4, medium: 2.2, hard: 2.0 },
      { diam: '400 mm', soft: 2.0, medium: 1.8, hard: 1.5 },
      { diam: '450 mm', soft: 1.7, medium: 1.6, hard: 1.5 },
      { diam: '500 mm', soft: 1.5, medium: 1.4, hard: 1.3 },
    ],
  },
  {
    model: 'YA-5000',
    rows: [
      { diam: '150\u2013600 mm', soft: 4.5, medium: 4.2, hard: 3.5 },
      { diam: '650 mm', soft: 3.2, medium: 3.7, hard: 3.3 },
      { diam: '700 mm', soft: 3.0, medium: 2.8, hard: 2.5 },
      { diam: '750 mm', soft: 2.6, medium: 2.4, hard: 2.1 },
      { diam: '800 mm', soft: 2.0, medium: 1.8, hard: 1.7 },
      { diam: '850 mm', soft: 1.7, medium: 1.6, hard: 1.4 },
      { diam: '900 mm', soft: 1.5, medium: 1.3, hard: 1.2 },
    ],
  },
  {
    model: 'YA-8000',
    rows: [
      { diam: '150\u2013500 mm', soft: 6.5, medium: 5.5, hard: 5.0 },
      { diam: '550 mm', soft: 4.5, medium: 4.5, hard: 3.5 },
      { diam: '600 mm', soft: 4.0, medium: 3.7, hard: 3.5 },
      { diam: '650 mm', soft: 4.0, medium: 3.7, hard: 3.5 },
      { diam: '700 mm', soft: 4.0, medium: 3.7, hard: 3.5 },
      { diam: '750 mm', soft: 3.6, medium: 3.5, hard: 3.2 },
      { diam: '800 mm', soft: 3.0, medium: 2.8, hard: 2.4 },
      { diam: '850 mm', soft: 2.6, medium: 2.7, hard: 2.4 },
      { diam: '900 mm', soft: 2.5, medium: 2.2, hard: 2.0 },
    ],
  },
  {
    model: 'YA-10000',
    rows: [
      { diam: '150\u2013500 mm', soft: 6.5, medium: 5.5, hard: 5.0 },
      { diam: '550 mm', soft: 4.5, medium: 4.5, hard: 3.5 },
      { diam: '600 mm', soft: 4.0, medium: 3.7, hard: 3.5 },
      { diam: '650 mm', soft: 4.0, medium: 3.7, hard: 3.5 },
      { diam: '700 mm', soft: 4.0, medium: 3.7, hard: 3.5 },
      { diam: '750 mm', soft: 3.6, medium: 3.5, hard: 3.2 },
      { diam: '800 mm', soft: 3.0, medium: 2.8, hard: 2.4 },
      { diam: '850 mm', soft: 2.6, medium: 2.7, hard: 2.4 },
      { diam: '900 mm', soft: 2.5, medium: 2.2, hard: 2.0 },
      { diam: '1000 mm', soft: 2.3, medium: 1.9, hard: 1.5 },
    ],
  },
  {
    model: 'YA-18000',
    rows: [
      { diam: '150\u2013400 mm', soft: 8.6, medium: 7.6, hard: 7.0 },
      { diam: '500 mm', soft: 7.2, medium: 6.4, hard: 5.8 },
      { diam: '600 mm', soft: 7.1, medium: 6.4, hard: 5.7 },
      { diam: '650 mm', soft: 7.0, medium: 6.2, hard: 5.5 },
      { diam: '700 mm', soft: 6.5, medium: 5.8, hard: 5.4 },
      { diam: '750 mm', soft: 6.1, medium: 5.4, hard: 5.0 },
      { diam: '800 mm', soft: 6.0, medium: 5.3, hard: 4.8 },
      { diam: '850 mm', soft: 5.7, medium: 5.2, hard: 4.6 },
      { diam: '900 mm', soft: 5.5, medium: 5.0, hard: 4.6 },
      { diam: '950 mm', soft: 5.3, medium: 4.6, hard: 4.3 },
      { diam: '1000 mm', soft: 5.0, medium: 4.5, hard: 4.2 },
      { diam: '1100 mm', soft: 4.7, medium: 4.2, hard: 4.0 },
      { diam: '1200 mm', soft: 4.5, medium: 4.0, hard: 3.7 },
    ],
  },
  {
    model: 'YA-30000',
    rows: [
      { diam: '150\u2013400 mm', soft: 9.0, medium: 8.2, hard: 7.3 },
      { diam: '450 mm', soft: 8.6, medium: 7.7, hard: 7.0 },
      { diam: '500 mm', soft: 8.6, medium: 7.7, hard: 7.0 },
      { diam: '550 mm', soft: 8.6, medium: 7.7, hard: 7.0 },
      { diam: '600 mm', soft: 8.6, medium: 7.7, hard: 7.0 },
      { diam: '650 mm', soft: 8.6, medium: 7.7, hard: 7.0 },
      { diam: '700 mm', soft: 8.4, medium: 7.5, hard: 6.8 },
      { diam: '800 mm', soft: 8.0, medium: 7.3, hard: 6.6 },
      { diam: '900 mm', soft: 7.6, medium: 6.8, hard: 6.2 },
      { diam: '1000 mm', soft: 7.0, medium: 6.3, hard: 5.7 },
      { diam: '1100 mm', soft: 6.5, medium: 6.0, hard: 5.3 },
      { diam: '1200 mm', soft: 6.3, medium: 5.7, hard: 5.0 },
      { diam: '1500 mm', soft: 5.0, medium: 4.6, hard: 4.0 },
    ],
  },
  {
    model: 'YA-50000',
    rows: [
      { diam: '300\u2013450 mm', soft: 12, medium: 11, hard: 8 },
      { diam: '500 mm', soft: 12, medium: 11, hard: 8 },
      { diam: '550 mm', soft: 11, medium: 10, hard: 7 },
      { diam: '600 mm', soft: 11, medium: 10, hard: 7 },
      { diam: '650 mm', soft: 11, medium: 10, hard: 7 },
      { diam: '700 mm', soft: 10, medium: 9, hard: 7 },
      { diam: '800 mm', soft: 9, medium: 7, hard: 6 },
      { diam: '900 mm', soft: 9, medium: 7, hard: 6 },
      { diam: '1000 mm', soft: 8, medium: 6, hard: 5 },
      { diam: '1100 mm', soft: 8, medium: 6, hard: 5 },
      { diam: '1200 mm', soft: 7, medium: 5, hard: 5 },
      { diam: '1500 mm', soft: 6, medium: 5, hard: 4 },
      { diam: '1800 mm', soft: 4, medium: 3.3, hard: 2.5 },
    ],
  },
  {
    model: 'YA-80000',
    rows: [
      { diam: '300\u2013600 mm', soft: 15, medium: 11, hard: 8 },
      { diam: '700 mm', soft: 14, medium: 10, hard: 7 },
      { diam: '800 mm', soft: 14, medium: 10, hard: 7 },
      { diam: '900 mm', soft: 14, medium: 10, hard: 7 },
      { diam: '1000 mm', soft: 12, medium: 9, hard: 7 },
      { diam: '1100 mm', soft: 12, medium: 9, hard: 7 },
      { diam: '1200 mm', soft: 10, medium: 8, hard: 6 },
      { diam: '1500 mm', soft: 8, medium: 7, hard: 6 },
      { diam: '1800 mm', soft: 8, medium: 7, hard: 6 },
      { diam: '2000 mm', soft: 7, medium: 6, hard: 5 },
    ],
  },
];

const headerBlue = 'bg-[#0A2E5C] text-white';

export default function DrivesPage() {
  return (
    <div>
      <ProductHero
        image="/hero/drives.png"
        alt="YA series hydraulic auger drive on site"
        title="Auger Drives"
        subtitle="Standard, high speed and horizontal auger drives built for reliable rotational power across 0.5-52 ton excavators."
        trail={[
          { label: 'HM Attachment', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Auger Drives' },
        ]}
      />

      {/* Section 1 - Standard Auger Drive */}
      <section id="standard" className="bg-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Section 1
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Standard Auger Drive
          </h2>
          <div className="mt-4 grid items-start gap-8 lg:grid-cols-[320px_1fr]">
            <div className="h-56 w-full rounded-lg border border-line bg-white">
              <img alt="Standard auger drive" src="/products-img/auger-drive.png" className="h-full w-full object-contain" />
            </div>
            <div className="space-y-4 text-ink">
              <p>
                The YA series hydraulic auger drive couples a hydraulic motor with a
                planetary gearbox for powerful, reliable rotational drilling. Ten models
                cover 0.5-52 ton excavators with torque from 1,900 N·m up to 100,000 N·m,
                suited to piling, fence, pole, well and foundation drilling.
              </p>
              <p>
                Drives accept round, hex or square shanks (configurable per machine) and are
                matched to the full range of YA hitches and auger flights for complete,
                dependable drilling systems.
              </p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  'Ten models, 1,900-100,000 N·m',
                  '0.5-52 ton excavator range',
                  'Hydraulic motor + planetary gearbox',
                  'Round / hex / square shank',
                  'Configurable hose and shaft',
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-hm-bright-2" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="mt-10 mb-3 text-xl font-bold text-hm">Model Range (10 Models)</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              'ya-2000',
              'ya-3000',
              'ya-5000',
              'ya-8000',
              'ya-10000',
              'ya-18000',
              'ya-30000',
              'ya-50000',
              'ya-80000',
              'ya-100000',
            ].map((m) => (
              <div
                key={m}
                className="flex flex-col items-center justify-center rounded-lg border border-line bg-white p-3"
              >
                <div className="h-24 w-full">
                  <img alt={m} src={`/products-img/${m}.png`} className="h-full w-full object-contain" />
                </div>
                <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-hm">
                  {m.toUpperCase()}
                </span>
              </div>
            ))}
          </div>

          <h3 className="mt-10 mb-3 text-xl font-bold text-hm">Specification (10 Models)</h3>
          <Table headers={augerDrivesTable.headers} rows={augerDrivesTable.rows} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Drilling Performance
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Maximum Drilling Depth Reference
          </h2>
          <p className="mt-2 text-sm text-inksoft">
            Maximum drilling depth by model, ground type, and auger diameter (meters)
          </p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line shadow-sm">
            <table className="w-full min-w-[620px] border-collapse text-sm">
              <thead>
                <tr className={headerBlue}>
                  <th className="border-b border-r border-white/20 px-3 py-2.5 text-left font-semibold">Model</th>
                  <th className="border-b border-r border-white/20 px-3 py-2.5 text-left font-semibold">Auger Diameter</th>
                  <th className="border-b border-r border-white/20 px-3 py-2.5 text-center font-semibold">
                    Max Depth — Soft Ground (m)
                  </th>
                  <th className="border-b border-r border-white/20 px-3 py-2.5 text-center font-semibold">
                    Max Depth — Medium Ground (m)
                  </th>
                  <th className="border-b px-3 py-2.5 text-center font-semibold">
                    Max Depth — Hard Ground (m)
                  </th>
                </tr>
              </thead>
              <tbody>
                {depthTable.map((m) => (
                  <Fragment key={m.model}>
                    {m.rows.map((r, i) => (
                      <tr key={r.diam} className={i % 2 ? 'bg-[#F4F6FA]' : 'bg-white'}>
                        {i === 0 && (
                          <td
                            rowSpan={m.rows.length}
                            className="border-b border-r border-line px-3 py-2 align-top font-semibold text-hm"
                          >
                            {m.model}
                          </td>
                        )}
                        <td className="whitespace-nowrap border-b border-r border-line px-3 py-2 text-ink">{r.diam}</td>
                        <td className="border-b border-r border-line px-3 py-2 text-center text-ink">{r.soft}</td>
                        <td className="border-b border-r border-line px-3 py-2 text-center text-ink">{r.medium}</td>
                        <td className="border-b px-3 py-2 text-center text-ink">{r.hard}</td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
                <tr className="bg-white">
                  <td className="border-b border-r border-line px-3 py-2 font-semibold text-hm">YA-100000</td>
                  <td colSpan={4} className="px-3 py-2 text-inksoft">
                    Contact us for application-specific depth guidance.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-inksoft">
            Values shown are indicative maximum drilling depths (meters) for popular auger
            diameters. Your results may vary based on soil composition, moisture content, and
            machine configuration. Contact us for application-specific recommendations.
          </p>
        </div>
      </section>

      {/* Section 2 - High Speed Auger Drive */}
      <section id="high-speed" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Section 2
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            High Speed Auger Drive
          </h2>
          <div className="mt-4 grid items-start gap-8 lg:grid-cols-2">
            <div className="h-60 w-full rounded-lg border border-line bg-white">
              <img alt="High speed auger drive" src="/products-img/high-speed-auger-drive.png" className="h-full w-full object-contain" />
            </div>
            <div className="space-y-4 text-ink">
              <p>
                Specially designed for high-speed applications, the high speed auger drive
                delivers rapid rotational output for fast, productive drilling cycles.
              </p>
              <p>Customizable to the machine and application. Contact HM Attachment for models and specifications.</p>
              <ul className="grid gap-2">
                {['High-speed output for rapid drilling', 'Suited to small-diameter bores', 'Customizable configuration'].map((f) => (
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

      {/* Section 3 - Horizontal Drill Auger Drive */}
      <section id="horizontal" className="bg-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Section 3
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Horizontal Drill Auger Drive
          </h2>
          <div className="mt-4 grid items-start gap-8 lg:grid-cols-2">
            <div className="h-60 w-full rounded-lg border border-line bg-white">
              <img alt="Horizontal drill auger drive" src="/products-img/horizontal-auger-drive.png" className="h-full w-full object-contain" />
            </div>
            <div className="space-y-4 text-ink">
              <p>
                Designed for horizontal drilling and foundation penetrations, this drive
                provides stable torque and reliable anti-rotation for directional bores.
              </p>
              <p>Customizable to the machine and application. Contact HM Attachment for models and specifications.</p>
              <ul className="grid gap-2">
                {['Horizontal / directional drilling', 'Stable torque delivery', 'Reliable anti-rotation', 'Customizable configuration'].map((f) => (
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