'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { categories, brand } from '@/lib/products';
import { cn } from '@/lib/utils';

const mainNav = categories.filter((c) => c.slug !== 'about');

// Products dropdown, grouped. Group labels are inert section headings (not links).
const productGroups = [
  {
    label: 'Drilling Equipment',
    items: [
      { slug: 'drives', name: 'Auger Drives' },
      { slug: 'earth-augers', name: 'Augers' },
      { slug: 'hitch', name: 'Hitch' },
      { slug: 'helical-piles', name: 'Helical Piles' },
      { slug: 'tools', name: 'Tools' },
    ],
  },
  {
    label: 'Quick Coupler',
    items: [{ slug: 'electric-coupler', name: 'Electric Coupler' }],
  },
];

const flattened = productGroups.flatMap((g) => g.items);

// Top-level nav: Home | Products (dropdown) | Applications | Contact
const topNav = [
  { label: 'Home', href: '/' },
  { label: 'Products', dropdown: true },
  { label: 'Applications', href: '/products/applications' },
  { label: 'Contact', href: '/about' },
];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const [drillingOpen, setDrillingOpen] = useState(false);
  const [hoverMode, setHoverMode] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  // Detect whether the primary input supports hover (mouse) vs touch-only.
  useEffect(() => {
    setHoverMode(window.matchMedia('(hover: hover)').matches);
  }, []);

  // Close the Products dropdown when clicking/tapping outside it.
  useEffect(() => {
    const onOutside = (e: MouseEvent | TouchEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
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

  const isProductsActive =
    pathname === '/products' ||
    flattened.some((c) => pathname === `/products/${c.slug}`);

  const isActive = (href?: string) => (href ? pathname === href : false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="HM Attachment">
          <Image
            src="/brand/hm-attachment-logo.png"
            alt="HM Attachment"
            width={120}
            height={40}
            priority
            className="h-9 w-auto"
            sizes="120px"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {topNav.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                ref={productsRef}
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
                    isProductsActive ? 'text-hm-bright-2' : 'text-ink hover:text-hm-bright-2',
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn('h-4 w-4 transition-transform', ddOpen && 'rotate-180')}
                  />
                </button>
                <div
                  role="menu"
                  className={cn(
                    'absolute left-0 top-full w-60 rounded-lg border border-line bg-white p-2 shadow-lg transition-opacity',
                    ddOpen ? 'visible opacity-100' : 'invisible opacity-0',
                  )}
                >
                    <Link
                      href="/products"
                      role="menuitem"
                      onClick={() => setDdOpen(false)}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                        pathname === '/products'
                          ? 'bg-hm/5 text-hm-bright-2'
                          : 'text-hm hover:bg-mist hover:text-hm-bright-2',
                      )}
                    >
                      All Products
                    </Link>
                    <div className="mx-1 my-1 border-t border-line" aria-hidden="true" />
                    {productGroups.map((group) => (
                      <div key={group.label} role="presentation">
                        <div
                          className="px-3 pb-1 pt-3 text-[11px] font-bold uppercase tracking-wider text-inksoft"
                          aria-hidden="true"
                        >
                          {group.label}
                        </div>
                        {group.items.map((c) => (
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
                    ))}
                  </div>
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
      <nav
        className={cn(
          'max-h-[80vh] overflow-y-auto border-t border-line bg-white lg:hidden',
          mobileOpen ? 'block' : 'hidden',
        )}
      >
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-ink"
            >
              Home
            </Link>

            {/* Collapsible Products */}
            <button
              onClick={() => setDrillingOpen((v) => !v)}
              className="flex w-full items-center justify-between py-2 text-sm font-medium text-ink"
            >
              Products
              <ChevronDown
                className={cn('h-4 w-4 transition-transform', drillingOpen && 'rotate-180')}
              />
            </button>
            {drillingOpen && (
              <div className="ml-3 border-l border-line pl-3">
                <Link
                  href="/products"
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-semibold text-hm"
                >
                  All Products
                </Link>
                <div className="my-1 border-t border-line" aria-hidden="true" />
                {productGroups.map((group) => (
                  <div key={group.label} className="mt-1">
                    <div className="pt-2 text-[11px] font-bold uppercase tracking-wider text-inksoft">
                      {group.label}
                    </div>
                    {group.items.map((c) => (
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
                ))}
              </div>
            )}

            {[
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
              <Image
                src="/brand/hm-attachment-logo-white.png"
                alt={brand.name}
                width={120}
                height={40}
                className="h-10 w-auto"
                sizes="160px"
              />
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