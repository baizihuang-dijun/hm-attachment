import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata: Metadata = {
  title: 'Helical Piles | HM Attachment',
  description:
    'AP series helical piles from 18-46 ton capacity, with installation system and torque sensing accessories.',
};

const pileHeaders = [
  'Model',
  'Shaft',
  'Bolts',
  'Helices',
  'Pitch',
  'Coating',
  'Compression Capacity',
  'Tension Capacity',
];

const pileRows: string[][] = [
  ['AP-18', "2.875 x 0.217", '0.875"', '0.375-0.5in thick, 8-16in dia', '3in', 'Galvanized / Bare / Epoxy', '36T / 18T', '32T / 16T'],
  ['AP-22', "3.5 x 0.3", '0.875"', '0.375-0.5in thick, 8-16in dia', '3in', 'Galvanized / Bare / Epoxy', '44T / 22T', '36T / 18T'],
  ['AP-36', "4.5 x 0.337", '1"', '0.375-0.5in thick, 8-16in dia', '3in', 'Galvanized / Bare / Epoxy', '72T / 36T', '62T / 31T'],
  ['AP-46', "5.5 x 0.361", '1"', '0.375-0.5in thick, 8-16in dia', '3in', 'Galvanized / Bare / Epoxy', '92T / 46T', '78T / 39T'],
];

const pileAdvantages = [
  'Cost Effective',
  'Quick Installation',
  'No Curing Time',
  'Can be battered',
  'Proven Engineering',
  'Environmental Friendly',
  'All Weather',
  'Re-Usable',
  'Low Noise',
  'Vibration Free',
  'Removable',
  'Groutable',
  'Galvanized',
];

const pileApplications = [
  'Pole bases',
  'Underpin foundations',
  'Walkways',
  'Telecom masts',
  'Electrical pylons',
  'Modular buildings',
  'Highway signage',
  'Concrete slab lifting',
  'Rail structures',
  'Structural support',
  'Anchors',
  'Retaining walls',
  'Wind turbines',
  'Solar farms',
  'Fencing',
  'Utility tie downs',
  'Slope stabilization',
];

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-white">
      <table className="w-full min-w-[760px] text-left text-sm">
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
            <tr key={i} className="border-b border-line last:border-0 odd:bg-white even:bg-mist/50">
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

export default function HelicalPilesPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products / Helical Piles"
        title="Helical Piles"
        subtitle="AP series screw piles from 18-46 ton capacity, with installation system and torque sensing accessories."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ImagePlaceholder alt="Helical piles" label="[image-helical-piles-hero]" className="h-64 w-full rounded-lg border border-line" />
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-inksoft">
            <Link href="/" className="hover:text-hm-bright-2">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="hover:text-hm-bright-2">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-hm">Helical Piles</span>
          </nav>
        </div>
      </section>

      {/* Section 1 - Helical Piles */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Section 1
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Helical Piles (AP Series)
          </h2>
          <div className="mt-4 grid items-start gap-8 lg:grid-cols-2">
            <ImagePlaceholder alt="Helical pile" label="[image-helical-pile]" className="h-60 w-full rounded-lg border border-line" />
            <div className="space-y-4 text-ink">
              <p>
                Screw piles installed by auger drive torque, offered in galvanized, bare or
                epoxy coated finishes for 18-46 ton working loads.
              </p>
            </div>
          </div>

          <h3 className="mt-8 mb-3 text-xl font-bold text-hm">Specification (AP Series)</h3>
          <Table headers={pileHeaders} rows={pileRows} />

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-hm">Advantages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {pileAdvantages.map((a) => (
                  <span key={a} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm text-ink">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-hm">Applications</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {pileApplications.map((a) => (
                  <span key={a} className="rounded-md border border-line bg-white px-3 py-1.5 text-sm text-ink">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Installation System */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Section 2
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Installation System
          </h2>
          <div className="mt-4 grid items-start gap-8 lg:grid-cols-2">
            <ImagePlaceholder alt="Installation system" label="[image-installation-system]" className="h-60 w-full rounded-lg border border-line" />
            <div className="space-y-4 text-ink">
              <p>
                Wireless data transmission between components delivers real-time data to the
                in-cab monitor. Operators control angle and read ground state from the cab.
              </p>
              <ul className="grid gap-2">
                {['Wireless data transmission', 'Real-time data to in-cab monitor', 'Control angle and read ground state'].map((f) => (
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

      {/* Section 3 - Sensors */}
      <section id="sensors" className="bg-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Section 3
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Sensors
          </h2>
          <p className="mt-2 max-w-3xl text-inksoft">
            Wireless sensing accessories that feed angle and torque data to the in-cab monitor.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
              <ImagePlaceholder alt="Angle indicator" label="[image-angle-indicator]" className="h-44 w-full border-b border-line" />
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-block self-start rounded bg-hm/10 px-2 py-0.5 text-xs font-semibold text-hm">AAS-360</span>
                <h3 className="mt-2 text-lg font-bold text-hm">Angle Indicator</h3>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Detection</dt><dd className="text-ink">Wireless angle detection</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Temp effect</dt><dd className="text-ink">+/- 0.5 deg</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Temp range</dt><dd className="text-ink">-20 to 80 deg C</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Protection</dt><dd className="text-ink">IP66</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Static accuracy</dt><dd className="text-ink">0.1 deg</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Axes</dt><dd className="text-ink">X +/-180, Y +/-90, Z +/-180</dd></div>
                </dl>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
              <ImagePlaceholder alt="In-cab monitor" label="[image-in-cab-monitor]" className="h-44 w-full border-b border-line" />
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-block self-start rounded bg-hm/10 px-2 py-0.5 text-xs font-semibold text-hm">EM-10W</span>
                <h3 className="mt-2 text-lg font-bold text-hm">In-Cab Monitor</h3>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Display</dt><dd className="text-ink">10.1in</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">System</dt><dd className="text-ink">Windows</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Temp range</dt><dd className="text-ink">-20 to 60 deg C</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Connection</dt><dd className="text-ink">Wireless</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Protection</dt><dd className="text-ink">IP67</dd></div>
                </dl>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg border border-line bg-white">
              <ImagePlaceholder alt="Torque indicator" label="[image-torque-indicator]" className="h-44 w-full border-b border-line" />
              <div className="flex flex-1 flex-col p-5">
                <span className="inline-block self-start rounded bg-hm/10 px-2 py-0.5 text-xs font-semibold text-hm">ATS Series</span>
                <h3 className="mt-2 text-lg font-bold text-hm">Torque Indicator</h3>
                <p className="mt-1 text-sm text-inksoft">Four models up to 100,000 N·m.</p>
                <dl className="mt-3 space-y-1.5 text-sm">
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">ATS-10</dt><dd className="text-ink">10,000 N·m / 34.5 kg</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">ATS-20</dt><dd className="text-ink">20,000 N·m / 34.5 kg</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">ATS-50</dt><dd className="text-ink">50,000 N·m / 48 kg</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">ATS-100</dt><dd className="text-ink">100,000 N·m / 74.7 kg</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Accuracy</dt><dd className="text-ink">0.05%</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Safe overload</dt><dd className="text-ink">150%</dd></div>
                  <div className="flex gap-2"><dt className="w-36 shrink-0 font-medium text-inksoft">Protection</dt><dd className="text-ink">IP66</dd></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}