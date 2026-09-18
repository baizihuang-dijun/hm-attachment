import type { Metadata } from 'next';
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

const DRILL_DIAMS = ['300mm', '450mm', '600mm'];

const DRILL_GROUPS: { key: string; label: string; diams: string[] }[] = [
  { key: 'soft', label: 'Soft Ground', diams: DRILL_DIAMS },
  { key: 'medium', label: 'Medium Ground', diams: DRILL_DIAMS },
  { key: 'hard', label: 'Hard Ground', diams: DRILL_DIAMS },
];

type ThreeVals = (number | null)[];

const depthRows: { model: string; soft: ThreeVals; medium: ThreeVals; hard: ThreeVals }[] = [
  {
    model: 'YA-2000',
    soft: [2.5, null, null],
    medium: [2.4, null, null],
    hard: [2.2, null, null],
  },
  {
    model: 'YA-3000',
    soft: [2.5, 1.7, null],
    medium: [2.4, 1.6, null],
    hard: [2.2, 1.5, null],
  },
  {
    model: 'YA-5000',
    soft: [4.5, 3.0, 1.7],
    medium: [4.2, 2.8, 1.6],
    hard: [3.5, 2.5, 1.4],
  },
  {
    model: 'YA-8000',
    soft: [6.5, 4.0, 3.6],
    medium: [5.5, 3.7, 3.5],
    hard: [5.0, 3.5, 3.0],
  },
  {
    model: 'YA-10000',
    soft: [6.5, 4.0, 3.6],
    medium: [5.5, 3.7, 3.5],
    hard: [5.0, 3.5, 3.0],
  },
  {
    model: 'YA-18000',
    soft: [7.0, 6.0, 5.3],
    medium: [6.2, 5.3, 4.6],
    hard: [5.5, 4.8, 4.3],
  },
  {
    model: 'YA-30000',
    soft: [8.6, 8.0, 6.5],
    medium: [7.7, 7.3, 6.0],
    hard: [7.0, 6.6, 5.3],
  },
  {
    model: 'YA-50000',
    soft: [12, 11, 9],
    medium: [11, 10, 7],
    hard: [8, 7, 6],
  },
  {
    model: 'YA-80000',
    soft: [15, 14, 10],
    medium: [11, 10, 8],
    hard: [8, 7, 6],
  },
  {
    model: 'YA-100000',
    soft: [null, null, null],
    medium: [null, null, null],
    hard: [null, null, null],
  },
];

function DepthCell({ v }: { v: number | null }) {
  const empty = v === null;
  return (
    <td
      className={`whitespace-nowrap border-b border-line px-2 py-1.5 text-center text-sm ${
        empty ? 'text-[#a6b0bf]' : 'text-ink'
      }`}
    >
      {empty ? '–' : v}
    </td>
  );
}

const headerBlue = 'bg-[#0A2E5C] text-white';
const subBlue = 'bg-[#123a6d] text-white';

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
            <table className="w-full min-w-[680px] border-collapse text-sm">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className={`sticky left-0 z-20 border-b-2 border-r border-white/20 px-3 py-2.5 text-left font-semibold ${headerBlue}`}
                  >
                    Model
                  </th>
                  {DRILL_GROUPS.map((g) => (
                    <th
                      key={g.key}
                      colSpan={3}
                      className={`border-b border-r border-white/20 px-2 py-2 text-center font-semibold ${headerBlue}`}
                    >
                      {g.label}
                    </th>
                  ))}
                </tr>
                <tr>
                  {DRILL_GROUPS.map((g) =>
                    g.diams.map((mm) => (
                      <th
                        key={`${g.key}-${mm}`}
                        className={`whitespace-nowrap border-b-2 border-r border-white/15 px-2 py-1.5 text-center text-xs font-medium ${subBlue}`}
                      >
                        {mm}
                      </th>
                    ))
                  )}
                </tr>
              </thead>
              <tbody>
                {depthRows.map((d, idx) => {
                  const zebra = idx % 2 === 0;
                  const rowBg = zebra ? 'bg-white' : 'bg-[#F4F6FA]';
                  const cellTd = zebra ? 'bg-white' : 'bg-[#F4F6FA]';
                  const modelTd = `sticky left-0 z-10 border-b border-r border-line px-3 py-2 text-left font-semibold text-hm ${cellTd}`;
                  return (
                    <tr key={d.model} className={rowBg}>
                      <td className={modelTd}>{d.model}</td>
                      {[...d.soft, ...d.medium, ...d.hard].map((v, i) => (
                        <DepthCell key={i} v={v} />
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-inksoft">
            Values shown are indicative maximum drilling depths (meters) for popular auger
            diameters. Your results may vary based on soil composition, moisture content, and
            machine configuration. Contact us for application-specific recommendations.
            &ldquo;&ndash;&rdquo; indicates this drive model does not support that diameter.
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