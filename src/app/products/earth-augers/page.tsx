import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';

export const metadata: Metadata = {
  title: 'Earth Augers | HM Attachment',
  description:
    'W2, W3 and W4 earth augers plus tungsten carbide pilot and teeth matched to your ground conditions. Diameter from 150mm to 2000mm.',
};

const diameters = [
  150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800,
  850, 900, 950, 1000, 1100, 1200, 1500, 1800, 2000,
];

const D = diameters.length;
const pad = (a: (number | null)[]) => {
  const r: (number | null)[] = new Array(D).fill(null);
  a.forEach((v, i) => {
    r[i] = v;
  });
  return r;
};

const depthRows: {
  model: string;
  soft: (number | null)[];
  medium: (number | null)[];
  hard: (number | null)[];
}[] = [
  {
    model: 'YA-2000',
    soft: pad([3.5, 3, 2.5, 2.5, 2.4]),
    medium: pad([3.5, 3, 2.4, 2.4, 2.2]),
    hard: pad([3, 3, 2.2, 2.2, 2]),
  },
  {
    model: 'YA-3000',
    soft: pad([3.5, 3, 2.5, 2.5, 2.4, 2, 1.7, 1.5]),
    medium: pad([3.5, 3, 2.4, 2.4, 2.2, 1.8, 1.6, 1.4]),
    hard: pad([3, 3, 2.2, 2.2, 2, 1.5, 1.5, 1.3]),
  },
  {
    model: 'YA-5000',
    soft: pad([4.5, 4.5, 4.5, 4.5, 4.5, 3.2, 3, 2.6, 2, 1.7, 1.5]),
    medium: pad([4.2, 4.2, 4.2, 4.2, 4.2, 3.7, 2.8, 2.4, 1.8, 1.6, 1.3]),
    hard: pad([3.5, 3.5, 3.5, 3.5, 3.5, 3.3, 2.5, 2.1, 1.7, 1.4, 1.2]),
  },
  {
    model: 'YA-8000',
    soft: pad([6.5, 6.5, 6.5, 6.5, 6.5, 4.5, 4, 4, 4, 3.6, 3, 2.6, 2.5]),
    medium: pad([5.5, 5.5, 5.5, 5.5, 5.5, 4.5, 3.7, 3.7, 3.7, 3.5, 2.8, 2.7, 2.2]),
    hard: pad([5, 5, 5, 5, 5, 3.5, 3.5, 3.5, 3.2, 3, 2.4, 2.4, 2]),
  },
  {
    model: 'YA-10000',
    soft: pad([6.5, 6.5, 6.5, 6.5, 6.5, 4.5, 4, 4, 4, 3.6, 3, 2.6, 2.5, 2.3]),
    medium: pad([5.5, 5.5, 5.5, 5.5, 5.5, 4.5, 3.7, 3.7, 3.7, 3.5, 2.8, 2.7, 2.2, 1.9]),
    hard: pad([5, 5, 5, 5, 5, 3.5, 3.5, 3.5, 3.2, 3, 2.4, 2.4, 2, 1.5]),
  },
  {
    model: 'YA-18000',
    soft: pad([8.6, 7.2, 7.1, 7, 6.5, 6.1, 6, 5.7, 5.5, 5.3, 5, 4.7, 4.5, 4.2, 4]),
    medium: pad([7.6, 6.4, 6.4, 6.2, 5.8, 5.4, 5.3, 5.2, 5, 4.6, 4.5, 4.2, 4, 3.7]),
    hard: pad([7, 5.8, 5.7, 5.5, 5.4, 5, 4.8, 4.6, 4.6, 4.3, 4.2, 4, 3.7]),
  },
  {
    model: 'YA-30000',
    soft: pad([9, 8.6, 8.6, 8.6, 8.6, 8.4, 8, 7.6, 7, 6.5, 6.3, 6, 5]),
    medium: pad([8.2, 7.7, 7.7, 7.7, 7.7, 7.5, 7.3, 6.8, 6.3, 6, 5.7, 5.5, 4.6]),
    hard: pad([7.3, 7, 7, 7, 7, 6.8, 6.6, 6.2, 5.7, 5.3, 5, 4.8, 4]),
  },
  {
    model: 'YA-50000',
    soft: pad([12, 12, 11, 11, 11, 10, 9, 9, 8, 8, 7, 6, 4]),
    medium: pad([11, 11, 10, 10, 10, 9, 7, 7, 6, 6, 5, 5, 3.3]),
    hard: pad([8, 8, 7, 7, 7, 7, 6, 6, 5, 5, 5, 4, 2.5]),
  },
  {
    model: 'YA-80000',
    soft: pad([15, 14, 14, 14, 12, 12, 10, 8, 8, 7]),
    medium: pad([11, 10, 10, 10, 9, 9, 8, 7, 7, 6]),
    hard: pad([8, 7, 7, 7, 7, 7, 6, 6, 6, 5]),
  },
  {
    model: 'YA-100000',
    soft: pad([]),
    medium: pad([]),
    hard: pad([]),
  },
];

const augerTypes = [
  {
    name: 'W2 Earth Auger',
    tag: 'General Drilling',
    desc: 'All purpose earth auger for general drilling. Multi-faced tungsten providing longer wear life and greater cutting performance.',
    geology: 'Earth, clay, shale, soft rocks',
    pilot: 'ADP2',
    teeth: 'AOT2',
    image: '[image-auger-w2]',
  },
  {
    name: 'W3 Combination Auger',
    tag: 'Combination Drilling',
    desc: 'Efficient and cost effective auger for general purpose drilling in earth, clay shale and soft rocks. Fitted with Tungsten Taper Teeth for the ultimate ripping ability in fracturable rock, permafrost and general earth conditions. Taper teeth design — the ultimate all performance auger.',
    geology: 'Fracturable rock, permafrost, general earth',
    pilot: 'AOP3',
    teeth: 'AOT3',
    image: '[image-auger-w3]',
  },
  {
    name: 'W4 Rock Auger',
    tag: 'Dedicated Rock Drilling',
    desc: 'Yichen Rock augers — heavy duty engineered design, with high efficiency cutting heads to maximize your rock drilling performance. Fitted with a range of quality wear parts providing superior wear and performance. Heavy duty auger for dedicated rock drilling.',
    geology: 'Concrete, shale, fracturable rock',
    pilot: 'AOP4',
    teeth: 'AOT4',
    image: '[image-auger-w4]',
  },
];

const combos = [
  { pair: 'ADP2 + AOT2', use: 'for W2 Earth Auger' },
  { pair: 'AOP3 + AOT3', use: 'for W3 Combination Auger' },
  { pair: 'AOP4 + AOT4', use: 'for W4 Rock Auger' },
];

function DepthCell({ v }: { v: number | null }) {
  return (
    <td className="whitespace-nowrap border-b border-line px-2 py-1.5 text-center text-sm text-ink">
      {v === null ? '–' : v}
    </td>
  );
}

const headerBlue = 'bg-[#0A2E5C] text-white';
const subBlue = 'bg-[#123a6d] text-white';

export default function EarthAugersPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products / Earth Augers"
        title="Earth Augers"
        subtitle="Augers matched to your ground conditions — from general earth and clay to concrete and fracturable rock."
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

      {/* Section 1 - Product Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Product Introduction
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Earth Augers for Every Ground Condition
          </h2>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-ink">
              <p>
                Yichen auger products can be used perfectly with Yichen auger drives, and are
                also suitable for drives from most other manufacturers. In order to cope with
                different geological conditions, Yichen augers are mainly divided into three
                categories: W2, W3 and W4.
              </p>
              <p>
                Whether it is clay geology or rock geology, you can find a solution that suits
                your application. Yichen augers are made of the most advanced design and the
                best materials. Can effectively improve your production efficiency.
              </p>
            </div>
            <ImagePlaceholder alt="Auger introduction" label="[image-auger-intro]" className="h-64 w-full rounded-lg border border-line" />
          </div>
        </div>
      </section>

      {/* Section 2 - Features and Benefits (paragraph) */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Features and Benefits
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Built to Last, Built to Cut
          </h2>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
            <div className="text-ink">
              <p>
                Yichen auger series are designed for different earth conditions and
                applications. Manufactured from high quality EN series gear steel and the
                latest processing technology, makes our auger more durable and wear-resistant.
                The diameter range is from 150mm to 2000mm. Shallow pitch flight design ensures
                earth moving efficiency. Forged Tungsten auger teeth and pilot ensures the
                toughness and drilling accuracy.
              </p>
            </div>
            <ImagePlaceholder alt="Auger features" label="[image-auger-features]" className="h-60 w-full rounded-lg border border-line" />
          </div>
        </div>
      </section>

      {/* Section 3 - Drilling Performance Table */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Drilling Performance
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Maximum Drilling Depth Reference
          </h2>
          <p className="mt-2 text-sm text-inksoft">Units: meters (m).</p>
          <div className="mt-6 overflow-x-auto rounded-xl border border-line shadow-sm">
            <table className="w-full min-w-[1500px] border-collapse text-sm">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className={`sticky left-0 z-20 border-b-2 border-r border-[#0A2E5C]/20 px-3 py-2.5 text-left font-semibold ${headerBlue}`}
                  >
                    Drive Model
                  </th>
                  <th colSpan={D} className={`border-b border-r border-[#0A2E5C]/20 px-2 py-2 text-center font-semibold ${headerBlue}`}>
                    Soft Ground
                  </th>
                  <th colSpan={D} className={`border-b border-r border-[#0A2E5C]/20 px-2 py-2 text-center font-semibold ${headerBlue}`}>
                    Medium Ground
                  </th>
                  <th colSpan={D} className={`border-b border-[#0A2E5C]/20 px-2 py-2 text-center font-semibold ${headerBlue}`}>
                    Hard Ground
                  </th>
                </tr>
                <tr>
                  {diameters.map((mm) => (
                    <th
                      key={`s-${mm}`}
                      className={`whitespace-nowrap border-b-2 border-r border-[#0A2E5C]/15 px-2 py-1.5 text-center text-xs font-medium ${subBlue}`}
                    >
                      {mm}
                    </th>
                  ))}
                  {diameters.map((mm) => (
                    <th
                      key={`m-${mm}`}
                      className={`whitespace-nowrap border-b-2 border-r border-[#0A2E5C]/15 px-2 py-1.5 text-center text-xs font-medium ${subBlue}`}
                    >
                      {mm}
                    </th>
                  ))}
                  {diameters.map((mm) => (
                    <th
                      key={`h-${mm}`}
                      className={`whitespace-nowrap border-b-2 border-r border-[#0A2E5C]/15 px-2 py-1.5 text-center text-xs font-medium ${subBlue}`}
                    >
                      {mm}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {depthRows.map((d, idx) => {
                  const zebra = idx % 2 === 0;
                  const rowBg = zebra ? 'bg-white' : 'bg-[#F4F6FA]';
                  const cellTd = zebra ? 'bg-white' : 'bg-[#F4F6FA]';
                  const modelTd = `sticky left-0 z-10 border-b border-r border-line px-3 py-2 text-left font-semibold text-hm ${cellTd}`;
                  return (
                    <>
                      <tr className={rowBg}>
                        <td rowSpan={3} className={modelTd}>
                          {d.model}
                        </td>
                        {d.soft.map((v, i) => (
                          <DepthCell key={i} v={v} />
                        ))}
                      </tr>
                      <tr className={rowBg}>
                        {d.medium.map((v, i) => (
                          <DepthCell key={i} v={v} />
                        ))}
                      </tr>
                      <tr className={rowBg}>
                        {d.hard.map((v, i) => (
                          <DepthCell key={i} v={v} />
                        ))}
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-inksoft">
            &ldquo;–&rdquo; indicates this drive model does not support that diameter. Drive Model
            column stays fixed while scrolling horizontally.
          </p>
        </div>
      </section>

      {/* Section 4 - Auger Types */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Auger Types
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            W2 / W3 / W4 Comparison
          </h2>
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
                  <p className="mt-3 rounded bg-mist px-3 py-2 text-xs text-inksoft">
                    Geology: {a.geology}
                  </p>
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

      {/* Section 5 - Pilot and Teeth */}
      <section id="teeth" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Pilot & Teeth
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Tungsten Carbide Pilot and Teeth
          </h2>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
            <ImagePlaceholder alt="Pilot and teeth" label="[image-pilot-teeth]" className="h-60 w-full rounded-lg border border-line" />
            <div className="space-y-4 text-ink">
              <p>
                Yichen auger pilot and teeth are all equipped with tungsten carbide tips,
                giving the auger excellent cutting performance, wear resistance and corrosion
                resistance. It can maximize the service life of your auger and reduce usage
                costs.
              </p>
              <ul className="grid gap-3">
                {combos.map((c) => (
                  <li key={c.pair} className="rounded-lg border border-line bg-mist p-4">
                    <span className="font-semibold text-hm">{c.pair}</span>
                    <p className="mt-1 text-sm text-inksoft">{c.use}</p>
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