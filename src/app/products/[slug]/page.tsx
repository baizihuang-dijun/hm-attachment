import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { categories, getCategory } from '@/lib/products';
import { PageHeader } from '@/components/site-nav';
import { ProductImage } from '@/components/product-image';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return { title: 'Not Found' };
  return {
    title: cat.name,
    description: cat.description,
  };
}

/** Cover geo for product categories that use full-bleed photos. */
const coverSlugs = new Set(['drives', 'earth-augers', 'hitch', 'helical-piles', 'tools', 'applications']);

const applicationsCards: { name: string; image: string }[] = [
  { name: 'Fence piling / Foundation piles', image: '/fullbleed/app-foundation-piles.png' },
  { name: 'Tree planting', image: '/fullbleed/app-tree-planting.png' },
  { name: 'Well boring', image: '/fullbleed/app-well-drilling.png' },
  { name: 'Pole and mast installation', image: '/fullbleed/app-pole-mast-installations.png' },
  { name: 'Landscaping', image: '/fullbleed/app-general-scene.png' },
  { name: 'Screw pile installations', image: '/products-img/helical-pile.png' },
];

const moreApplications = [
  'Ground source heat pumps',
  'Road signage',
  'Sound barriers',
  'Solar energy installation',
  'Wind turbine installation',
];

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategory(slug);

  if (!cat) notFound();
  if (slug === 'about') notFound();

  const isApplications = slug === 'applications';

  return (
    <div>
      <PageHeader kicker="HM Attachment / Products" title={cat.name} subtitle={cat.description} />

      {/* Category hero image */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ProductImage
            src={cat.image}
            alt={cat.name}
            fit="cover"
            className="h-64 w-full rounded-lg border border-line"
          />
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-inksoft">
            <Link href="/" className="hover:text-hm-bright-2">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-hm">{cat.name}</span>
          </nav>
        </div>
      </section>

      {isApplications ? (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-hm">Applications</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {applicationsCards.map((a) => (
                <div
                  key={a.name}
                  className="flex flex-col overflow-hidden rounded-lg border border-line bg-white"
                >
                  <ProductImage
                    src={a.image}
                    alt={a.name}
                    className="h-52 w-full border-b border-line bg-white p-3"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-hm">{a.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-inksoft">More applications</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {moreApplications.map((name) => (
                  <span
                    key={name}
                    className="rounded-md border border-line bg-mist px-3 py-1.5 text-sm text-ink"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-hm">Products</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow hover:shadow-md sm:flex-row"
                >
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    className="h-44 w-full shrink-0 border-b border-line bg-white p-4 sm:h-auto sm:w-52 sm:border-b-0 sm:border-r"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-hm">{item.name}</h3>
                      {item.model && (
                        <span className="rounded bg-hm/10 px-2 py-0.5 text-xs font-semibold text-hm">
                          {item.model}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-inksoft">{item.description}</p>
                    {item.specs && (
                      <dl className="mt-4 space-y-1.5 border-t border-line pt-3 text-sm">
                        {item.specs.map((s) => (
                          <div key={s.label} className="flex gap-2">
                            <dt className="w-28 shrink-0 font-medium text-inksoft">{s.label}</dt>
                            <dd className="text-ink">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Other category quick nav */}
            <div className="mt-12 border-t border-line pt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-inksoft">More Products</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories
                  .filter((c) => c.slug !== 'about' && c.slug !== slug)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      className="rounded-md border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-hm-bright-2 hover:text-hm-bright-2"
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}