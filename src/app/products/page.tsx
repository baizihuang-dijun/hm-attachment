import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';
import { categories } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Products',
  description: 'HM Attachment 全系列挖掘机属具与钻探设备产品。',
};

const mainCats = categories.filter((c) => c.slug !== 'about');

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products"
        title="All Products"
        subtitle="覆盖螺旋钻动力头、钻机、连接器、耐磨件等全系列挖掘机属具与钻探设备。"
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
                <ImagePlaceholder alt={c.name} label={c.image} className="h-44 w-full border-b border-line" />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-hm">{c.name}</h3>
                    <ArrowRight className="h-5 w-5 text-line transition-transform group-hover:translate-x-1 group-hover:text-hm-bright-2" />
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-hm-bright-2">{c.short}</p>
                  <p className="mt-3 text-sm text-inksoft">{c.description}</p>
                  <p className="mt-4 text-xs font-medium text-inksoft">
                    {c.items.length} item{c.items.length > 1 ? 's' : ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}