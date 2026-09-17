import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Layers,
  ShieldCheck,
  Shield,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { categories } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Electric Coupler',
  description:
    'HM Electric Quick Coupler for 5-9 ton excavators — electric drive, triple auto-lock, manual backup, IP67. The convenience of automatic, the reliability of manual.',
};

const lockTiers: {
  tag: string;
  title: string;
  points: { label: string; text: string }[];
  variant: string;
}[] = [
  {
    tag: 'Lock 01',
    title: 'The Power Lock — The Self-Locking Screw',
    points: [
      {
        label: 'Material',
        text: '42CrMo alloy steel, specialized heat treatment.',
      },
      {
        label: 'Design',
        text: 'Horizontal-push design isolates the screw to pure axial loads, with full-thread engagement regardless of center distance.',
      },
      {
        label: 'Performance',
        text: 'Proprietary thread profile delivers self-locking capability and withstands intense vibration without loosening.',
      },
    ],
    variant: 'border-t-hm',
  },
  {
    tag: 'Lock 02',
    title: 'The Auto Lock — The Auto-Lock Clutch',
    points: [
      {
        label: 'Function',
        text: 'Instantaneous automatic engagement, zero manual intervention.',
      },
      {
        label: 'Mechanism',
        text: 'Advanced planetary ratchet system with full-tooth disc engagement.',
      },
      {
        label: 'Durability',
        text: 'High-strength carburized alloy steel endures 300+ N·m motor impacts.',
      },
    ],
    variant: 'border-t-hm-bright',
  },
  {
    tag: 'Lock 03',
    title: 'The Safety Lock — The Safety Lock Block',
    points: [
      {
        label: 'Design',
        text: 'Failsafe mechanism compliant with international safety standards.',
      },
      {
        label: 'Operation',
        text: 'Synchronizes with the movable jaw to positively lock both main spindles simultaneously.',
      },
      {
        label: 'Result',
        text: 'Triple-redundant system achieves 99.9% operational safety.',
      },
    ],
    variant: 'border-t-hm-dark',
  },
];

const installSteps = [
  {
    title: 'Power Connection',
    desc: 'Install wireless control box near battery (12V).',
  },
  {
    title: 'Wire Routing',
    desc: 'Connect main cable to coupler.',
  },
  {
    title: 'Remote Pairing',
    desc: 'Sync remote for wireless operation.',
  },
  {
    title: 'Testing',
    desc: 'Verify automatic locking and operation.',
  },
];

const strengthPoints = [
  {
    title: 'Integral Casting',
    desc: 'Seamless single-piece design eliminates weld weak points.',
  },
  {
    title: 'High-Strength Steel',
    desc: 'Engineered for extreme load-bearing capacity.',
  },
  {
    title: 'Tri-Support Push Structure',
    desc: 'Disperses 85% of impact force to housing.',
  },
  {
    title: 'Durability',
    desc: 'Heat-treated to withstand 4x more impact than traditional couplers.',
  },
];

const controllerPoints = [
  'Industrial-grade protection: shorts, overvoltage, overheating, phase loss.',
  'Diagnostic buzzer for instant error identification.',
  'IP67 waterproof, universal 12-24V compatibility.',
];

const compactPoints = [
  '30% smaller than hydraulic couplers.',
  'Universal compatibility across major brands (CAT, Komatsu, Volvo).',
  'Circuit protection: Phase Loss + Short Circuit + Overload + Overvoltage + Overheat.',
];

const whyPoints = [
  'Pre-delivery inspection: structural weld check, pressure test, lock cycling test, electrical function test, visual inspection.',
  'Verified supply chain with audited manufacturers.',
  'Global logistics and after-sales support.',
];

const applications = [
  'Trenching',
  'Grading',
  'Demolition',
  'Material Handling',
  'Landscaping',
  'Construction',
];

const warrantyRows: { part: string; coverage: string }[] = [
  { part: 'Cast Steel Housing', coverage: '12 months' },
  { part: 'Brushless Motor', coverage: '12 months' },
  { part: 'Self-Locking Screw & Clutch', coverage: '12 months' },
  { part: 'Auto-Lock Block', coverage: 'Lifetime' },
  { part: 'Wireless Controller', coverage: '12 months' },
];

const specRows: { label: string; ec02: string; ec04: string }[] = [
  { label: 'Pin Diameter', ec02: '45/50 mm', ec04: '45/50 mm' },
  { label: 'Length', ec02: '540±5 mm', ec04: '565±5 mm' },
  { label: 'Width', ec02: '240±5 mm', ec04: '280±5 mm' },
  { label: 'Height', ec02: '299±5 mm', ec04: '305±5 mm' },
  { label: 'Arm Opening', ec02: '155-180 mm', ec04: '195-220 mm' },
  { label: 'Pin Center Distance', ec02: '245-265-285 mm', ec04: '310 mm' },
  { label: 'Pick Up Range', ec02: '245-310 mm', ec04: '265-350 mm' },
  { label: 'Vertical Offset', ec02: '172±2 mm', ec04: '178±2 mm' },
  { label: 'Coupler Weight', ec02: '65 kg', ec04: '67 kg' },
  { label: 'Operating Voltage', ec02: '12/24V', ec04: '12/24V' },
  { label: 'Machine Weight', ec02: '5-7 Ton', ec04: '6-8 Ton' },
];

export default function ElectricCouplerPage() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(43,108,176,0.5), transparent 50%), radial-gradient(circle at 85% 85%, rgba(6,32,63,0.9), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-hm-bright-2">
            HM Attachment / Electric Coupler
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            HM Electric Quick Coupler
          </h1>
          <p className="mt-3 text-lg text-hm-bright-2">
            The Convenience of Automatic. The Reliability of Manual.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            One-person, 30-second attachment changes. No hydraulic connections. No
            leaks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-hm-bright-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hm-bright"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#specs"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Specs
            </a>
          </div>
        </div>
      </section>

      {/* 2. Core numbers */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Droplets, value: 'Zero', label: 'Hydraulic Leaks' },
            { icon: Layers, value: '245-350mm', label: 'Pickup Range' },
            { icon: ShieldCheck, value: '5-9 Ton', label: 'Machine Weight' },
          ].map((s) => (
            <div key={s.label} className="p-6 text-center sm:border-r sm:border-line sm:last:border-0">
              <s.icon className="mx-auto h-8 w-8 text-hm-bright-2" />
              <p className="mt-3 text-2xl font-extrabold text-hm sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-inksoft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Triple lock defense */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Safety</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            TRIPLE-LOCK DEFENSE
          </h2>
          <p className="mt-3 max-w-2xl text-inksoft">
            Three independent locking systems work together to keep every single
            attachment change positively locked.
          </p>
          <div className="mt-8 grid gap-4">
            {lockTiers.map((t) => (
              <div
                key={t.tag}
                className={`rounded-lg border-l-4 border-t border-line bg-white p-6 ${t.variant}`}
              >
                <div className="flex items-center gap-3">
                  <span className="rounded bg-hm/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-hm">
                    {t.tag}
                  </span>
                  <h3 className="text-lg font-bold text-hm">{t.title}</h3>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {t.points.map((p) => (
                    <div key={p.label}>
                      <p className="text-xs font-bold uppercase tracking-wide text-inksoft">{p.label}</p>
                      <p className="mt-1 text-sm text-ink">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. All-weather durability */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Built to last</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
                ALL-WEATHER DURABILITY
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  'IP67 waterproof motor + corrosion-resistant coatings.',
                  'Sand/mud-resistant shields and fully sealed electronics.',
                  'Operating temperature: -20°C to 80°C.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-hm-bright-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePlaceholder
              alt="All-weather durability"
              label="[image-durability]"
              className="h-72 w-full rounded-lg border border-line"
            />
          </div>
        </div>
      </section>

      {/* 5. 10-minute installation */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Setup</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            10-MINUTE INSTALLATION
          </h2>
          <p className="mt-3 text-inksoft">
            No hydraulic lines needed. Plug-and-play wireless controller.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {installSteps.map((step, i) => (
              <div key={step.title} className="rounded-lg border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-hm-bright-2 hover:shadow-md">
                <span className="flex h-9 w-9 items-center justify-center rounded bg-hm text-sm font-black text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-bold text-hm">{step.title}</h3>
                <p className="mt-1 text-sm text-inksoft">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Military-grade structural strength */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Strength</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            MILITARY-GRADE STRUCTURAL STRENGTH
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengthPoints.map((s) => (
              <div key={s.title} className="rounded-lg border border-line bg-mist/40 p-6">
                <Shield className="h-7 w-7 text-hm-bright-2" />
                <h3 className="mt-3 font-bold text-hm">{s.title}</h3>
                <p className="mt-1 text-sm text-inksoft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Intelligent controller */}
      <section className="bg-hm text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-white/60">Control</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
            INTELLIGENT CONTROLLER
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-center">
            <ul className="space-y-4">
              {controllerPoints.map((p) => (
                <li key={p} className="flex gap-3 text-white/85">
                  <Zap className="mt-0.5 h-5 w-5 shrink-0 text-hm-bright-2" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <ImagePlaceholder
              alt="Intelligent controller"
              label="[image-controller]"
              className="h-56 w-full rounded-lg border border-white/15"
            />
          </div>
        </div>
      </section>

      {/* 8. Technical specifications */}
      <section id="specs" className="bg-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Specifications</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            HM Electric Coupler Technical Specifications
          </h2>
          <div className="mt-6 overflow-x-auto rounded-lg border border-line bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-hm text-white">
                  <th className="px-4 py-3 font-semibold">Parameter</th>
                  <th className="px-4 py-3 font-semibold">Model EC-02</th>
                  <th className="px-4 py-3 font-semibold">Model EC-04</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-line last:border-0 ${i % 2 ? 'bg-mist/50' : 'bg-white'}`}
                  >
                    <td className="px-4 py-2.5 font-medium text-ink">{row.label}</td>
                    <td className="px-4 py-2.5 text-inksoft">{row.ec02}</td>
                    <td className="px-4 py-2.5 text-inksoft">{row.ec04}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Compact design */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <ImagePlaceholder
              alt="Compact design"
              label="[image-compact]"
              className="h-72 w-full rounded-lg border border-line"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Compact</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
                SUPER-COMPACT DESIGN
              </h2>
              <ul className="mt-6 space-y-4">
                {compactPoints.map((p) => (
                  <li key={p} className="flex gap-3 text-ink">
                    <Layers className="mt-0.5 h-5 w-5 shrink-0 text-hm-bright-2" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Why HM */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Why HM</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            Verified. Tested. Supported.
          </h2>
          <p className="mt-3 max-w-2xl text-inksoft">
            We source verified attachment products from audited manufacturers and
            stand behind every unit we ship.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Wrench, title: 'Pre-Delivery Inspection', desc: whyPoints[0] },
              { icon: ShieldCheck, title: 'Verified Supply Chain', desc: whyPoints[1] },
              { icon: Sparkles, title: 'Global Support', desc: whyPoints[2] },
            ].map((card) => (
              <div key={card.title} className="rounded-lg border border-line bg-white p-6">
                <card.icon className="h-8 w-8 text-hm-bright-2" />
                <h3 className="mt-3 font-bold text-hm">{card.title}</h3>
                <p className="mt-1 text-sm text-inksoft">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Applications */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Applications</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            Built for the job site
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {applications.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-2 rounded-md border border-line bg-mist px-4 py-2 text-sm font-medium text-ink"
              >
                <CheckCircle2 className="h-4 w-4 text-hm-bright-2" />
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Warranty summary */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Warranty</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            Warranty Coverage
          </h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-line bg-white">
            {warrantyRows.map((w, i) => (
              <div
                key={w.part}
                className={`flex items-center justify-between gap-4 border-b border-line px-5 py-3 last:border-0 ${i % 2 ? 'bg-mist/40' : 'bg-white'}`}
              >
                <span className="text-sm font-medium text-ink">{w.part}</span>
                <span className="text-sm font-semibold text-hm-bright-2">{w.coverage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. CTA */}
      <section className="bg-hm text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ready to simplify attachment changes?
              </h2>
              <p className="mt-1 text-white/75">
                Contact for pricing and specifications. Email: bai@hmattachment.com
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`mailto:bai@hmattachment.com`}
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-hm transition-colors hover:bg-hm-bright-2 hover:text-white"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 border-t border-white/15 pt-6">
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