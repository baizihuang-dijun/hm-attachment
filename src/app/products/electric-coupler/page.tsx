import type { Metadata } from 'next';
import Link from 'next/link';
import {
  BatteryCharging,
  Lock,
  ShieldCheck,
  Droplets,
  Radio,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { categories } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Electric Coupler',
  description:
    'HM Electric Quick Coupler for 5-9 ton excavators — electric drive, triple auto-lock, manual backup, IP67. The convenience of automatic, the reliability of manual.',
};

const specs: { label: string; value: string }[] = [
  { label: 'Excavator Range', value: '5-9 Ton' },
  { label: 'Center Distance', value: '290-360mm' },
  { label: 'Coupler Body Weight', value: '95kg' },
  { label: 'Max Load Capacity', value: '3000kg' },
  { label: 'Working Pressure', value: '14 MPa' },
  { label: 'Max System Pressure', value: '20 MPa' },
  { label: 'Rated Flow', value: '36 L/min' },
  { label: 'Locking Mechanism', value: 'Dual-Acting Cylinder, Triple Auto-Lock' },
  { label: 'Control', value: 'Wireless Remote (standard), In-Cab Wired (optional)' },
  { label: 'Ingress Protection', value: 'IP67' },
  { label: 'Operating Temperature', value: '-20°C to 80°C' },
  { label: 'Pin Diameters', value: '45mm (standard), custom sizes available' },
];

const features: { icon: typeof Lock; title: string; desc: string }[] = [
  {
    icon: BatteryCharging,
    title: 'Electric Drive System',
    desc: 'No hydraulic connections required for coupler operation. Prevents hydraulic oil contamination and leakage.',
  },
  {
    icon: Lock,
    title: 'Triple Auto-Lock Mechanism',
    desc: 'Front and rear pins lock independently. Visual lock indicators on each jaw.',
  },
  {
    icon: ShieldCheck,
    title: 'Manual Backup Mode',
    desc: 'Even with complete electrical failure, the coupler can be manually operated.',
  },
  {
    icon: Droplets,
    title: 'IP67 Waterproof Rating',
    desc: 'All electrical components sealed against water and dust ingress.',
  },
  {
    icon: Radio,
    title: 'Wireless Remote Control',
    desc: 'Standard inclusion. Operate from excavator cab or at ground level.',
  },
  {
    icon: Layers,
    title: 'Universal Compatibility',
    desc: 'Adaptable to most 5-9 ton excavator brands and attachment brands.',
  },
];

const applications = [
  'Trenching',
  'Grading',
  'Demolition',
  'Material Handling',
  'Landscaping',
  'Construction',
];

export default function ElectricCouplerPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Electric Coupler"
        title="HM Electric Quick Coupler"
        subtitle="The Convenience of Automatic. The Reliability of Manual."
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ImagePlaceholder
              alt="HM Electric Quick Coupler"
              label="[image-electric-coupler]"
              className="h-80 w-full rounded-lg border border-line"
            />
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-hm">
                The speed of automatic. Without the hydraulics.
              </h2>
              <p className="mt-4 leading-relaxed text-inksoft">
                When you choose the HM Electric Quick Coupler, you get the operating
                speed of a fully automatic hydraulic quick hitch — without the
                hydraulic system complications. No leaking oil. No hydraulic heat.
                Just work.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-md bg-hm px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-hm-dark"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-semibold text-hm transition-colors hover:border-hm-bright-2 hover:text-hm-bright-2"
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical specifications */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-hm">
            HM Electric Coupler Technical Specifications
          </h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-line bg-white">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-1 border-b border-line px-5 py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between ${
                  i % 2 ? 'bg-mist/40' : 'bg-white'
                }`}
              >
                <span className="text-sm font-semibold text-ink">{s.label}</span>
                <span className="text-sm text-inksoft sm:text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-hm">Features</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-hm-bright-2 hover:shadow-md"
              >
                <f.icon className="h-8 w-8 text-hm-bright-2" />
                <h3 className="mt-3 text-base font-bold text-hm">{f.title}</h3>
                <p className="mt-2 text-sm text-inksoft">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Electric / Why HM */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-7">
              <h3 className="text-xl font-extrabold text-hm">Why Electric?</h3>
              <p className="mt-3 leading-relaxed text-inksoft">
                Hydraulic quick couplers require the excavator&apos;s hydraulic system
                to work — adding heat, complexity, and potential contamination. The
                HM Electric Coupler uses its own sealed electric drive. You get the
                same one-person, 30-second attachment change — without touching your
                hydraulic circuit.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-white p-7">
              <h3 className="text-xl font-extrabold text-hm">Why HM?</h3>
              <p className="mt-3 leading-relaxed text-inksoft">
                We source verified attachment products from audited manufacturers.
                Every coupler undergoes pre-delivery inspection including: structural
                weld check, cylinder pressure test, lock mechanism cycling test,
                electrical system function test, visual and dimensional inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-hm text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">
            Applications
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            Built for the job site
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {applications.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium"
              >
                <CheckCircle2 className="h-4 w-4 text-hm-bright-2" />
                {a}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 border-t border-white/15 pt-6">
            {categories
              .filter((c) => c.slug !== 'about' && c.slug !== 'electric-coupler')
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  className="rounded-md border border-white/20 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}