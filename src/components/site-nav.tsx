'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { categories, brand } from '@/lib/products';
import { cn } from '@/lib/utils';

const mainNav = categories.filter((c) => c.slug !== 'about');
const aboutCat = categories.find((c) => c.slug === 'about');

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
          <Link
            href="/"
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/'
                ? 'text-hm-bright-2'
                : 'text-ink hover:text-hm-bright-2',
            )}
          >
            Home
          </Link>
          {mainNav.map((c) => (
            <Link
              key={c.slug}
              href={`/products/${c.slug}`}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname === `/products/${c.slug}`
                  ? 'text-hm-bright-2'
                  : 'text-ink hover:text-hm-bright-2',
              )}
            >
              {c.name}
            </Link>
          ))}
          <Link
            href="/about"
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/about'
                ? 'text-hm-bright-2'
                : 'text-ink hover:text-hm-bright-2',
            )}
          >
            Contact
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="max-h-[80vh] overflow-y-auto border-t border-line bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-ink"
            >
              Home
            </Link>
            {mainNav.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-ink"
              >
                <span className="inline-flex items-center gap-2">
                  {c.name}
                  <span className="text-xs text-inksoft">{c.short}</span>
                </span>
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-ink"
            >
              Contact
            </Link>
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