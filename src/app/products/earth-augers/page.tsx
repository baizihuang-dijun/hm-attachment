import type { Metadata } from 'next';
import { ProductHero } from '@/components/product-hero';

export const metadata: Metadata = {
  title: 'Earth Augers | HM Attachment',
  description:
    'W2, W3 and W4 earth augers plus tungsten carbide pilot and teeth matched to your ground conditions. Diameter from 150mm to 2000mm.',
};

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

const augerTypes = [
  {
    name: 'W2 Earth Auger',
    tag: 'General Drilling',
    desc: 'All purpose earth auger for general drilling. Multi-faced tungsten providing longer wear life and greater cutting performance.',
    geology: 'Earth, clay, shale, soft rocks',
    pilot: 'ADP2',
    teeth: 'AOT2',
    image: '/products-img/earth-auger-w2.png',
  },
  {
    name: 'W3 Combination Auger',
    tag: 'Combination Drilling',
    desc: 'Efficient and cost effective auger for general purpose drilling in earth, clay shale and soft rocks. Fitted with Tungsten Taper Teeth for the ultimate ripping ability in fracturable rock, permafrost and general earth conditions. Taper teeth design — the ultimate all performance auger.',
    geology: 'Fracturable rock, permafrost, general earth',
    pilot: 'AOP3',
    teeth: 'AOT3',
    image: '/products-img/earth-auger-w3.png',
  },
  {
    name: 'W4 Rock Auger',
    tag: 'Dedicated Rock Drilling',
    desc: 'Yichen Rock augers — heavy duty engineered design, with high efficiency cutting heads to maximize your rock drilling performance. Fitted with a range of quality wear parts providing superior wear and performance. Heavy duty auger for dedicated rock drilling.',
    geology: 'Concrete, shale, fracturable rock',
    pilot: 'AOP4',
    teeth: 'AOT4',
    image: '/products-img/earth-auger-w4.png',
  },
];

const combos = [
  { pair: 'ADP2 + AOT2', use: 'for W2 Earth Auger' },
  { pair: 'AOP3 + AOT3', use: 'for W3 Combination Auger' },
  { pair: 'AOP4 + AOT4', use: 'for W4 Rock Auger' },
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

export default function EarthAugersPage() {
  return (
    <div>
      <ProductHero
        image="/hero/earth-augers.png"
        alt="Earth augers drilling with auger drive"
        kicker="HM Attachment / Products / Earth Augers"
        title="Earth Augers"
        subtitle="Augers matched to your ground conditions — from general earth and clay to concrete and fracturable rock."
        current="Earth Augers"
      />

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
            <div className="aspect-[16/8] w-full overflow-hidden rounded-lg border border-line">
              <img alt="Auger introduction" src="/fullbleed/auger-app.png" className="h-full w-full object-cover object-center" />
            </div>
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
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-line">
              <img alt="Auger features" src="/fullbleed/auger-drive-app-1.png" className="h-full w-full object-cover object-center" />
            </div>
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
                <div className="h-44 w-full border-b border-line bg-white">
                  <img alt={a.name} src={a.image} className="h-full w-full object-contain" />
                </div>
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

          {/* Face detail */}
          <h3 className="mt-10 mb-3 text-xl font-bold text-hm">Cutting Faces</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ['W2 Face', 'earth-auger-w2-face'],
              ['W3 Face', 'earth-auger-w3-face'],
              ['W4 Face', 'earth-auger-w4-face'],
            ].map(([label, img]) => (
              <div key={img} className="flex flex-col items-center justify-center rounded-lg border border-line bg-white p-3">
                <div className="h-24 w-full">
                  <img alt={label} src={`/products-img/${img}.png`} className="h-full w-full object-contain" />
                </div>
                <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-hm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Auger Extension */}
      <section id="extension" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Auger Extension
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Auger Extension
          </h2>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
            <div className="h-60 w-full rounded-lg border border-line bg-white">
              <img alt="Auger extension" src="/products-img/earth-auger-extension.png" className="h-full w-full object-contain" />
            </div>
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

      {/* Section 6 - Pilot and Teeth */}
      <section id="teeth" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Pilot & Teeth
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Tungsten Carbide Pilot and Teeth
          </h2>
          <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
            <div className="h-60 w-full rounded-lg border border-line bg-white">
                  <img
                    alt="Pilot and teeth"
                    src="/products-img/wear-pilot-a0p4.png"
                    className="h-full w-full object-contain"
                  />
                </div>
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