import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Layers,
  Radio,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { categories } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Electric Coupler',
  description:
    'HM Electric Quick Coupler for 5-9 ton excavators — electric drive, triple auto-lock, manual backup, IP67. Electric when you need speed. Manual when you need a backup.',
};

const lockTiers: {
  tag: string;
  title: string;
  desc: string;
  image: string;
}[] = [
  {
    tag: 'Lock 01',
    title: 'The Self-Locking Screw',
    desc: '42CrMo alloy steel with proprietary self-locking thread. Horizontal-push design isolates the screw to pure axial loads — full-thread engagement, designed to resist loosening under vibration.',
    image: '/products/lock-power-screw.png',
  },
  {
    tag: 'Lock 02',
    title: 'The Auto-Lock Clutch',
    desc: 'Advanced planetary ratchet. Automatic locking with full-tooth disc engagement — carburized alloy steel designed for high-impact durability.',
    image: '/products/lock-auto-clutch.png',
  },
  {
    tag: 'Lock 03',
    title: 'The Safety Lock Block',
    desc: 'Failsafe mechanism synchronized with the movable jaw, providing an additional level of locking protection.',
    image: '/products/lock-safety-block.png',
  },
];

const keyFeatures = [
  {
    icon: Zap,
    title: 'Electric Drive System',
    text: 'No hydraulic connection required, simplifying installation and eliminating the need for hydraulic lines.',
  },
  {
    icon: ShieldCheck,
    title: 'Triple Auto-Lock',
    text: 'Independent locking points with visual lock indicators.',
  },
  {
    icon: Wrench,
    title: 'Manual Backup',
    text: 'Manual operation remains available in the event of electrical failure.',
  },
  {
    icon: Radio,
    title: 'Wireless Control',
    text: 'Wireless remote control as standard, with optional in-cab wired control.',
  },
  {
    icon: Droplets,
    title: 'IP67 Protection',
    text: 'Electrical components protected against water and dust ingress.',
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

const controllerPoints = [
  'Industrial-grade protection: shorts, overvoltage, overheating, phase loss.',
  'Diagnostic buzzer for instant error identification.',
  'IP67 waterproof, 12-24V compatibility.',
];

const compactPoints = [
  'Compact design for easier installation and handling.',
  'Designed for compatibility with common excavator mounting configurations.',
  'Circuit protection: Phase Loss + Short Circuit + Overload + Overvoltage + Overheat.',
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
  { label: 'Machine Weight', ec02: '5-7 Ton', ec04: '6-9 Ton' },
];

export default function ElectricCouplerPage() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="relative z-10 overflow-x-clip bg-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(43,108,176,0.5), transparent 50%), radial-gradient(circle at 85% 85%, rgba(6,32,63,0.9), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-12 lg:pt-16">
          <div className="grid items-center gap-8 lg:grid-cols-[45fr_55fr]">
            {/* Left: copy */}
            <div className="animate-ec-in">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-hm-bright-2">
                HM Attachment / Electric Coupler
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                HM Electric Quick Coupler
              </h1>
              <p className="mt-3 text-lg text-hm-bright-2">
                Electric when you need speed. Manual when you need a backup.
              </p>
              <p className="mt-4 max-w-2xl text-lg text-white/80">
                Electric quick coupler for 5–9 ton excavators, with wireless
                control, triple auto-lock, and manual backup operation. No
                hydraulic connection required.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                CE Certified
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#specs"
                  className="inline-flex items-center gap-2 rounded-md bg-hm-bright-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hm-bright"
                >
                  View Specifications
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Right: transparent PNG + CSS naked-eye 3D */}
            <div className="relative z-20 mx-auto flex h-auto w-full items-center justify-center lg:justify-end">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle at 50% 32%, rgba(59,130,246,0.3), transparent 62%)',
                  filter: 'blur(18px)',
                }}
              />
              <div className="animate-ec-float relative mx-auto">
                <img
                  src="/products/electric-coupler-hero.png"
                  alt="HM Electric Quick Coupler – real product on excavator arm"
                  draggable={false}
                  className="relative z-10 mx-auto block h-auto w-[min(80vw,560px)] object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.35)] -mb-2 lg:w-[min(42vw,560px)] lg:-mb-[4vh]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute bottom-[-14px] left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-[50%]"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 70%)',
                    filter: 'blur(5px)',
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute bottom-[-6px] left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-[50%] opacity-40"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(59,130,246,0.4), transparent 70%)',
                    filter: 'blur(4px)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL OPERATING MODES */}
      <section className="bg-gradient-to-b from-white to-[#F8FAFC] text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#2F6BFF]">
              Dual Operating Modes
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0F1B2D] sm:text-4xl">
              Two operating modes. One goal: keep the machine working.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[18px] border border-[#E5EAF1] bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EAF1FF]">
                  <Zap className="h-6 w-6 text-[#2F6BFF]" />
                </span>
                <h3 className="text-xl font-bold text-[#0F1B2D]">Electric Mode</h3>
              </div>
              <p className="mt-4 text-[#475569]">
                Normal operation with electric actuation and wireless control. Change
                attachments efficiently during daily operations.
              </p>
            </div>
            <div className="rounded-[18px] border border-[#E5EAF1] bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E9F8F0]">
                  <Wrench className="h-6 w-6 text-[#16A34A]" />
                </span>
                <h3 className="text-xl font-bold text-[#0F1B2D]">Manual Backup Mode</h3>
              </div>
              <p className="mt-4 text-[#475569]">
                If the electrical system fails, the coupler can still be operated
                manually, providing a practical backup and helping reduce
                unnecessary downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRIPLE AUTO-LOCK */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Safety</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            TRIPLE AUTO-LOCK
          </h2>
          <p className="mt-3 max-w-2xl text-inksoft">
            Three independent locking systems work together to keep every single
            attachment change positively locked.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {lockTiers.map((t) => (
              <div
                key={t.tag}
                className="flex flex-col items-center rounded-2xl border border-[#E5EAF1] bg-white p-6 text-center shadow-sm"
              >
                <span className="rounded bg-hm/10 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-hm">
                  {t.tag}
                </span>
                <h3 className="mt-3 text-lg font-bold text-hm">{t.title}</h3>
                <div className="mt-4 w-4/5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <img
                    src={t.image}
                    alt={t.title}
                    draggable={false}
                    className="mx-auto block w-full object-contain"
                  />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-[#475569]">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. KEY FEATURES */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Features</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            KEY FEATURES
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {keyFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-hm-bright-2 hover:shadow-md"
              >
                <f.icon className="h-8 w-8 text-hm-bright-2" />
                <h3 className="mt-3 font-bold text-hm">{f.title}</h3>
                <p className="mt-1 text-sm text-inksoft">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTELLIGENT CONTROLLER */}
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

      {/* 7. SIMPLE INSTALLATION */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">Setup</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
            SIMPLE INSTALLATION
          </h2>
          <p className="mt-3 text-inksoft">
            Designed for straightforward installation without hydraulic connections.
          </p>
          <ImagePlaceholder
            alt="Simple installation"
            label="[image-installation]"
            className="mt-8 h-48 w-full rounded-lg border border-line"
          />
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* 10. ALL-WEATHER DURABILITY */}
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

      {/* 11. SPECIFICATIONS */}
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

      {/* 12. COMPACT DESIGN */}
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
                COMPACT DESIGN
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

      {/* 14. CTA */}
      <section className="bg-hm text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Contact for pricing and specifications
              </h2>
              <p className="mt-1 text-white/75">
                Email: hm@hmattachment.com
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`mailto:hm@hmattachment.com`}
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