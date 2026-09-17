import Link from 'next/link';
import { ArrowRight, Grip, Wrench, ShieldCheck } from 'lucide-react';
import { brand, homeProductGroups, homeStats } from '@/lib/products';
import { ImagePlaceholder } from '@/components/image-placeholder';

const ecosystem = [
  { label: 'HITCH', tag: 'Hitch & Extension', field: 'top-0' },
  { label: 'SENSOR', tag: 'Indicators', field: 'top-0' },
  { label: 'TOOL', tag: 'Drilling Tools', field: 'top-0' },
  { label: 'AUGER', tag: 'Earth Augers', field: 'top-0' },
];

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
          <p className="mt-6 max-w-2xl text-lg text-white/75">{brand.subtitle}</p>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {homeStats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-white sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products/drives"
              className="inline-flex items-center gap-2 rounded-md bg-hm-bright-2 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hm-bright"
            >
              Explore Drives
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

      {/* Ecosystem Overview (below Hero) */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-hm-bright-2">
            Product Ecosystem
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-hm">
            One Drive. Every Drilling Attachment.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-inksoft">
            HM Attachment&apos;s hydraulic auger drive sits at the center of the ecosystem —
            hitches, earth augers, tools and torque sensors all mount to or measure on it.
          </p>

          <div className="relative mx-auto mt-12 max-w-4xl">
            {/* connecting lines */}
            <div className="pointer-events-none absolute inset-x-16 top-1/2 hidden h-px bg-line lg:block" />
            {/* center auger drive */}
            <div className="relative z-10 mx-auto flex w-56 flex-col items-center">
              <ImagePlaceholder alt="Auger drive" label="[image-auger-drive-ya]" className="h-40 w-40 rounded-full border-4 border-hm-bright-2" />
              <p className="mt-3 text-center text-sm font-bold uppercase tracking-wider text-hm">
                Auger Drive
              </p>
            </div>

            {/* four labeled attachments */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ecosystem.map((e) => (
                <div key={e.label} className="rounded-lg border border-line bg-mist p-4 text-center">
                  <p className="text-sm font-extrabold tracking-widest text-hm-bright-2">{e.label}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-inksoft">{e.tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto grid max-w-7xl gap-px px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              icon: Grip,
              title: 'Drilling-Focused Product Range',
              desc: 'Drives, augers, hitches, helical piles and tools engineered for bore work.',
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

      {/* Products: 18 sub-product cards in 5 groups */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
              Products
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-hm">
              Drilling Attachments & Equipment
            </h2>
            <p className="mt-3 text-inksoft">
              From drives and earth augers to hitches, helical piles and tools — built for
              bore work from municipal drilling to large-scale piling.
            </p>
          </div>

          {homeProductGroups.map((group) => (
            <div key={group.title} className="mt-12">
              <div className="flex items-center gap-3">
                <span className="h-5 w-1 rounded bg-hm-bright-2" />
                <h3 className="text-xl font-extrabold tracking-tight text-hm">{group.title}</h3>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {group.cards.map((card) => (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all hover:-translate-y-1 hover:border-hm-bright-2 hover:shadow-lg"
                  >
                    <ImagePlaceholder alt={card.title} label={card.image} className="h-32 w-full border-b border-line sm:h-40" />
                    <div className="flex flex-1 flex-col p-4">
                      {card.badge && (
                        <span className="inline-block self-start rounded bg-hm/10 px-2 py-0.5 text-xs font-semibold text-hm">
                          {card.badge}
                        </span>
                      )}
                      <h4 className="mt-2 text-sm font-bold text-hm sm:text-base">{card.title}</h4>
                      <p className="mt-1 text-xs text-inksoft sm:text-sm">{card.tagline}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Electric Coupler independent block */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ImagePlaceholder
            alt="Electric coupler"
            label="[image-electric-coupler-hm]"
            className="h-64 w-full rounded-lg border border-line"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
              Electric Coupler
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
              Electric Quick Coupler
            </h2>
            <p className="mt-3 text-inksoft">
              Electric quick coupler for 5-9 ton excavators. Dual operating modes — electric
              drive for daily work, manual backup to avoid downtime.
            </p>
            <Link
              href="/products/electric-coupler"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-hm px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hm-dark"
            >
              View Electric Coupler
              <ArrowRight className="h-4 w-4" />
            </Link>
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