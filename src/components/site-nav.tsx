'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { categories, brand, getCategory } from '@/lib/products';
import { cn } from '@/lib/utils';

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

const drillingSlugs = ['drives', 'earth-augers', 'hitch', 'helical-piles', 'tools'];
const drillingItems = drillingSlugs
  .map((s) => ({ slug: s, ...getCategory(s) }))
  .filter((c) => c && c.slug) as { slug: string; name: string }[];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [drillingOpen, setDrillingOpen] = useState(false);
  const [hoverMode, setHoverMode] = useState(false);
  const drillingRef = useRef<HTMLDivElement>(null);

  // Detect whether the primary input supports hover (mouse) vs touch-only.
  useEffect(() => {
    setHoverMode(window.matchMedia('(hover: hover)').matches);
  }, []);

  // Close the Drilling dropdown when clicking/tapping outside it.
  useEffect(() => {
    const onOutside = (e: MouseEvent | TouchEvent) => {
      if (drillingRef.current && !drillingRef.current.contains(e.target as Node)) {
        setDdOpen(false);
      }
    };
    document.addEventListener('mousedown', onOutside);
    document.addEventListener('touchstart', onOutside);
    return () => {
      document.removeEventListener('mousedown', onOutside);
      document.removeEventListener('touchstart', onOutside);
    };
  }, []);

  const isDrillingActive = drillingItems.some(
    (c) => pathname === `/products/${c.slug}`,
  );

  const isActive = (href?: string) => (href ? pathname === href : false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-hm text-sm font-black text-white">
            H
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-hm">
              HM {''}Attachment
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-inksoft">
              Drilling Equipment
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {topNav.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                ref={drillingRef}
                className="relative"
                onMouseEnter={hoverMode ? () => setDdOpen(true) : undefined}
                onMouseLeave={hoverMode ? () => setDdOpen(false) : undefined}
              >
                <button
                  type="button"
                  aria-expanded={ddOpen}
                  aria-haspopup="menu"
                  onClick={() => {
                    // Touch: click toggles open/close. Mouse: hover controls opening,
                    // click only closes (tapping an already-open item collapses it).
                    if (!hoverMode || ddOpen) setDdOpen((v) => !v);
                  }}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isDrillingActive ? 'text-hm-bright-2' : 'text-ink hover:text-hm-bright-2',
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', ddOpen && 'rotate-180')}
                  />
                </button>
                {ddOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full w-60 rounded-lg border border-line bg-white p-2 pt-3 shadow-lg"
                  >
                    {drillingItems.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/products/${c.slug}`}
                        role="menuitem"
                        onClick={() => setDdOpen(false)}
                        className={cn(
                          'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                          pathname === `/products/${c.slug}`
                            ? 'bg-hm/5 text-hm-bright-2'
                            : 'text-ink hover:bg-mist hover:text-hm-bright-2',
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
                    : 'text-ink hover:text-hm-bright-2',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="max-h-[80vh] overflow-y-auto border-t border-line bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-ink"
            >
              Home
            </Link>

            {/* Collapsible Drilling */}
            <button
              onClick={() => setDrillingOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2 text-sm font-medium text-ink"
            >
              Drilling
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', drillingOpen && 'rotate-180')}
              />
            </button>
            {drillingOpen && (
              <div className="ml-3 border-l border-line pl-3">
                {drillingItems.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1.5 py-2 text-sm font-medium text-ink"
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
                className="block py-2 text-sm font-medium text-ink"
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
    <footer className="border-t border-deep bg-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded bg-white/15 text-sm font-black text-white">
                H
              </span>
              <span className="text-base font-extrabold">{brand.name}</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/70">
              {brand.slogan}。{brand.short}
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
                    className="text-sm text-white/80 hover:text-white"
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
                <Link href="/products/applications" className="text-sm text-white/80 hover:text-white">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-white">
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