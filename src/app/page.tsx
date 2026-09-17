import Link from 'next/link';
import { ArrowRight, Grip, Wrench, ShieldCheck } from 'lucide-react';
import { categories, brand, homeStats } from '@/lib/products';

const mainCats = categories.filter((c) => c.slug !== 'about');

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(43,108,176,0.5), transparent 50%), radial-gradient(circle at 85% 80%, rgba(6,32,63,0.9), transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-hm-bright-2">
            {brand.slogan}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Power the Ground.
            <br />
            <span className="text-white/80">Drill the Future.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            {brand.subtitle}
          </p>

          {/* Three key numbers */}
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {homeStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-hm-bright sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products/auger-drives"
              className="inline-flex items-center gap-2 rounded-md bg-hm-bright-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hm-bright"
            >
              Explore Auger Drives
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products/electric-coupler"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Electric Coupler
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: Grip,
              title: 'Drilling-Focused Product Range',
              desc: 'Auger drives, drilling drives, augers, hitches and wear parts engineered for bore work.',
            },
            {
              icon: Wrench,
              title: 'Rigorous Engineering',
              desc: 'High-strength materials and precision drives built for demanding drilling job sites.',
            },
            {
              icon: ShieldCheck,
              title: 'Global Service',
              desc: 'Reliable supply and support for contractors and drilling operators worldwide.',
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 p-4 sm:border-r sm:border-line sm:last:border-0">
              <f.icon className="h-8 w-8 shrink-0 text-hm-bright-2" />
              <div>
                <h3 className="font-semibold text-hm">{f.title}</h3>
                <p className="mt-1 text-sm text-inksoft">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product categories */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
              Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
              Drilling Attachments & Equipment
            </h2>
            <p className="mt-3 text-inksoft">
              From auger drives and drilling drives to augers, hitches, wear parts
              and electric couplers — built for bore work from municipal drilling to
              large-scale piling.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mainCats.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all hover:-translate-y-1 hover:border-hm-bright-2 hover:shadow-lg"
              >
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-mist to-white text-hm">
                  <span className="text-5xl font-black text-hm/15">{c.short}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-hm">{c.name}</h3>
                    <ArrowRight className="h-5 w-5 text-line transition-transform group-hover:translate-x-1 group-hover:text-hm-bright-2" />
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-hm-bright-2">
                    {c.short}
                  </p>
                  <p className="mt-3 text-sm text-inksoft">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-hm text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Need a custom drilling solution?
              </h2>
              <p className="mt-1 text-white/75">
                Contact HM Attachment for models, specs and pricing.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-hm transition-colors hover:bg-hm-bright-2 hover:text-white"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}