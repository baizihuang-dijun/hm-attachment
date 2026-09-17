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

const features = [
  {
    label: 'HUB OPTIONS',
    text: 'Yichen augers are available with all major standard hubs on the market, including 65mm Round, 75 and 110mm Square, 2 and 2.5 Hex etc.',
  },
  {
    label: 'SHALLOW PITCH FLIGHTS',
    text: 'This feature design provides maximum earth moving capacity of Yichen auger.',
  },
  {
    label: 'EFFICIENT CUTTING ANGLE',
    text: 'Constant Spiral Cut improves productivity. Fresh cut in every revolution. Excellent reliability and durability.',
  },
  {
    label: 'SAFE CONNECTION',
    text: 'The safety pin design ensures that the auger will not fall off your auger drive at any time.',
  },
  {
    label: 'HEAVY DUTY TUBE',
    text: 'Yichen only use the highest grade steel for our auger shaft, the sizes vary according to the grade of auger drives and applications.',
  },
  {
    label: 'EASY TOOTH LOCKING',
    text: 'No special installation tools are required, simple but effective structure holds teeth secure in all directions.',
  },
  {
    label: 'PILOT AND TOOTH OPTIONS',
    text: 'Yichen augers mainly has three types of pilot and tooth combinations designed to deal with different geological conditions. You can find the most suitable configuration for your application from them. All of them are tungsten carbide tipped, makes them sturdy and durable.',
  },
];

const augerTypes = [
  {
    name: 'W2 Earth Auger',
    tag: 'General Drilling',
    desc: 'All purpose earth auger for general drilling. Multi-faced tungsten providing longer wear life and greater cutting performance.',
    note: 'Taper teeth design — the ultimate all performance auger.',
    geology: 'Earth, clay, shale, soft rocks',
    pilot: 'ADP2',
    teeth: 'AOT2',
    image: '[image-auger-w2]',
    showNote: false,
  },
  {
    name: 'W3 Combination Auger',
    tag: 'Combination Drilling',
    desc: 'Efficient and cost effective auger for general purpose drilling in earth, clay shale and soft rocks. The angle and geometry of the teeth to the pilot is the key to the efficiency in which these augers perform. This auger is fitted with Tungsten Taper Teeth for the ultimate ripping ability in fracturable rock, permafrost and general earth conditions.',
    note: 'Taper teeth design — the ultimate all performance auger.',
    geology: 'Fracturable rock, permafrost, general earth',
    pilot: 'AOP3',
    teeth: 'AOT3',
    image: '[image-auger-w3]',
    showNote: true,
  },
  {
    name: 'W4 Rock Auger',
    tag: 'Dedicated Rock Drilling',
    desc: 'Yichen Rock augers — heavy duty engineered design, with high efficiency cutting heads to maximize your rock drilling performance. Fitted with a range of quality wear parts providing superior wear and performance.',
    note: 'Heavy duty auger for dedicated rock drilling.',
    geology: 'Concrete, shale, fracturable rock',
    pilot: 'AOP4',
    teeth: 'AOT4',
    image: '[image-auger-w4]',
    showNote: true,
  },
];

const combos = [
  { pair: 'ADP2 Pilot + AOT2 Teeth', use: 'for W2 Earth Auger, general drilling' },
  { pair: 'AOP3 Pilot + AOT3 Teeth', use: 'for W3 Combination Auger, rock and earth' },
  { pair: 'AOP4 Pilot + AOT4 Teeth', use: 'for W4 Rock Auger, heavy rock' },
];

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

      {/* Section 2 - Features and Benefits */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <span className="inline-block rounded bg-hm px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Features and Benefits
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
            Engineered for Production Efficiency
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={f.label} className="flex flex-col rounded-lg border border-line bg-white p-5">
                <ImagePlaceholder alt={f.label} label={`[image-feature-${i + 1}]`} className="h-24 w-24 rounded border border-line" />
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-hm">{f.label}</h3>
                <p className="mt-2 text-sm text-inksoft">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Auger Types */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl border-t border-line px-4 py-14 sm:px-6 lg:px-8">
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
                  {a.showNote && (
                    <p className="mt-3 border-l-2 border-hm-bright-2 pl-3 text-xs font-semibold text-hm">
                      {a.note}
                    </p>
                  )}
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

      {/* Section 4 - Pilot and Teeth */}
      <section id="teeth" className="bg-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
                  <li key={c.pair} className="rounded-lg border border-line bg-white p-4">
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