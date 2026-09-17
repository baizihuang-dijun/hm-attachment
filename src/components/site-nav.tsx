'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { categories, brand, getCategory } from '@/lib/products';
import { cn } from '@/lib/utils';

const LOGO_URL =
  'https://coze-coding-project.tos.coze.site/cli_attachment/2026-09-17/2750326345577628_5d4564c7c8cf4930abeb19ed244c09af_acd9f800e27d4a790aa21223964736e.png';

const mainNav = categories.filter((c) => c.slug !== 'about');

// Top-level nav with a "Drilling" dropdown group
const topNav = [
  { label: 'Home', href: '/' },
  { label: 'Drilling', dropdown: true },
  { label: 'Electric Coupler', href: '/products/electric-coupler' },
  { label: 'Accessories', href: '/products/accessories' },
  { label: 'Applications', href: '/products/applications' },
  { label: 'Contact', href: '/about' },
];

const drillingSlugs = ['auger-drives', 'earth-augers', 'drilling-drives', 'hitch', 'wear-parts'];
const drillingItems = drillingSlugs
  .map((s) => ({ slug: s, ...getCategory(s) }))
  .filter((c) => c && c.slug) as { slug: string; name: string }[];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [drillingOpen, setDrillingOpen] = useState(false);

  const isDrillingActive = drillingItems.some(
    (c) => pathname === `/products/${c.slug}`,
  );

  const isActive = (href?: string) => (href ? pathname === href : false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-deep text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_URL}
            alt="HM Attachment"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {topNav.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDdOpen(true)}
                onMouseLeave={() => setDdOpen(false)}
              >
                <button
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isDrillingActive ? 'text-hm-bright-2' : 'text-white/75 hover:text-hm-bright-2',
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', ddOpen && 'rotate-180')}
                  />
                </button>
                {ddOpen && (
                  <div className="absolute left-0 top-full mt-2 w-60 rounded-lg border border-white/10 bg-deep p-2 shadow-xl">
                    {drillingItems.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/products/${c.slug}`}
                        className={cn(
                          'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                          pathname === `/products/${c.slug}`
                            ? 'bg-white/10 text-hm-bright-2'
                            : 'text-white/75 hover:bg-white/10 hover:text-hm-bright-2',
                        )}
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'text-hm-bright-2'
                    : 'text-white/75 hover:text-hm-bright-2',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-deep lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-white/80"
            >
              Home
            </Link>

            {/* Collapsible Drilling */}
            <button
              onClick={() => setDrillingOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2 text-sm font-medium text-white/80"
            >
              Drilling
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', drillingOpen && 'rotate-180')}
              />
            </button>
            {drillingOpen && (
              <div className="ml-3 border-l border-white/10 pl-3">
                {drillingItems.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1.5 py-2 text-sm font-medium text-white/75"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-hm-bright-2" />
                    {c.name}
                  </Link>
                ))}
              </div>
            )}

            {[
              { label: 'Electric Coupler', href: '/products/electric-coupler' },
              { label: 'Accessories', href: '/products/accessories' },
              { label: 'Applications', href: '/products/applications' },
              { label: 'Contact', href: '/about' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-white/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="HM Attachment"
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 max-w-md text-sm text-white/60">
              {brand.slogan}. {brand.short}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Products
            </h4>
            <ul className="mt-3 space-y-2">
              {mainNav.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-sm text-white/70 hover:text-hm-bright-2"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Company
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/products/applications" className="text-sm text-white/70 hover:text-hm-bright-2">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/70 hover:text-hm-bright-2">
                  About / Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {year} {brand.name}. All rights reserved. | {brand.slogan}
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  title,
  subtitle,
  kicker,
}: {
  title: string;
  subtitle?: string;
  kicker?: string;
}) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
          {kicker ?? 'HM Attachment'}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-hm sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base text-inksoft sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}