import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ProductImage } from '@/components/product-image';
import { categories } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'HM Attachment full range of excavator attachments and drilling equipment.',
};

const mainCats = categories.filter((c) => c.slug !== 'about' && c.slug !== 'applications');

// Category-card imagery for the All Products page (kept local so other pages and
// navigation are unaffected).
const catImg: Record<string, string> = {
  drives: '/cat/cat-drives.png',
  'earth-augers': '/cat/cat-augers.png',
  hitch: '/cat/cat-hitch.png',
  'helical-piles': '/cat/cat-helical.png',
  tools: '/cat/cat-tools.png',
};

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products"
        title="All Products"
        subtitle="A complete range of excavator attachments and drilling equipment — auger drives, drilling drives, quick couplers, wear parts and more."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainCats.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all hover:-translate-y-1 hover:border-hm-bright-2 hover:shadow-lg"
              >
                <ProductImage
                  src={catImg[c.slug] ?? c.image}
                  alt={c.name}
                  fit={
                    c.slug in catImg
                      ? 'contain'
                      : c.slug === 'earth-augers' || c.slug === 'helical-piles' || c.slug === 'tools'
                        ? 'cover'
                        : 'contain'
                  }
                  className="h-44 w-full shrink-0 border-b border-line bg-white p-3"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-hm">{c.name}</h3>
                    <ArrowRight className="h-5 w-5 text-line transition-transform group-hover:translate-x-1 group-hover:text-hm-bright-2" />
                  </div>
                  <p className="mt-2 text-sm text-inksoft">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}