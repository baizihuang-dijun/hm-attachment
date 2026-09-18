import type { Metadata } from 'next';
import { ProductHero } from '@/components/product-hero';

export const metadata: Metadata = {
  title: 'Augers | HM Attachment',
  description:
    'W2, W3 and W4 earth augers plus tungsten carbide pilot and teeth matched to your ground conditions. Diameter from 150mm to 2000mm.',
};


const augerTypes = [
  {
    name: 'W2 Auger',
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

export default function EarthAugersPage() {
  return (
    <div>
      <ProductHero
        image="/hero/earth-augers.png"
        alt="Augers drilling with auger drive"
        title="Augers"
        subtitle="Augers matched to your ground conditions — from general earth and clay to concrete and fracturable rock."
        trail={[
          { label: 'HM Attachment', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Augers' },
        ]}
      />

      {/* Section 1 - Product Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Product Introduction
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Augers for Every Ground Condition
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

          {/* Cutting faces, pilot & teeth */}
          <h3 className="mt-10 mb-3 text-xl font-bold text-hm">Cutting Faces, Pilot &amp; Teeth</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {['W2', 'W3', 'W4'].map((label) => (
              <div key={label} className="flex flex-col rounded-lg border border-line bg-white p-3">
                <div className="aspect-[16/9] w-full">
                  <img
                    alt={`${label} cutting face, pilot and teeth`}
                    src={`/products-img/cutting-${label.toLowerCase()}.png`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-2 self-center text-xs font-semibold uppercase tracking-wide text-hm">{label}</span>
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

      </div>
  );
}