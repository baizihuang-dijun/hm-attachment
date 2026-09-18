import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { augerDrivesTable } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Drilling Drives | HM Attachment',
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

export default function DrivesPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products / Drives"
        title="Drilling Drives"
        subtitle="Standard, high speed and horizontal auger drives built for reliable rotational power across 0.5-52 ton excavators."
      />

      {/* Hero image */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <img alt="Drilling drives" src="/fullbleed/auger-drive-banner.png" className="h-64 w-full rounded-lg border border-line object-cover" />
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-inksoft">
            <Link href="/" className="hover:text-hm-bright-2">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-hm-bright-2">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-hm">Drives</span>
          </nav>
        </div>
      </section>

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