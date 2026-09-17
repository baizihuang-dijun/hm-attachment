import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, FileDown } from 'lucide-react';
import { categories, getCategory } from '@/lib/products';
import { PageHeader } from '@/components/site-nav';
import { ImagePlaceholder } from '@/components/image-placeholder';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

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

function TableSection({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-extrabold tracking-tight text-hm">{title}</h2>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-hm px-3 py-1.5 text-xs font-semibold text-white">
            <FileDown className="h-3.5 w-3.5" /> YA Series Spec Table
          </span>
        </div>
        <div className="overflow-x-auto rounded-lg border border-line bg-white">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-hm text-white">
                {headers.map((h) => (
                  <th key={h} className="px-4 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-line last:border-0 odd:bg-white even:bg-mist/50 hover:bg-hm/5"
                >
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2.5 text-ink">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategory(slug);

  if (!cat) notFound();
  if (slug === 'about') notFound();

  return (
    <div>
      <PageHeader
        kicker="HM Attachment / Products"
        title={cat.name}
        subtitle={cat.description}
      />

      {/* Category hero image placeholder */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <ImagePlaceholder alt={cat.name} label={cat.image} className="h-64 w-full rounded-lg border border-line" />
          <nav className="mt-4 flex items-center gap-1.5 text-sm text-inksoft">
            <Link href="/" className="hover:text-hm-bright-2">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-hm">{cat.name}</span>
          </nav>
        </div>
      </section>

      {/* Specification table (Auger Drives 10 models) */}
      {cat.hasTable && cat.table && (
        <TableSection title={cat.tableTitle ?? cat.name} headers={cat.table.headers} rows={cat.table.rows} />
      )}

      {/* Product items */}
      <section className={cat.hasTable ? 'bg-white' : 'bg-white'}>
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-hm">
            {cat.hasTable ? 'Related Products' : 'Products'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {cat.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-shadow hover:shadow-md sm:flex-row"
              >
                <ImagePlaceholder
                  alt={item.name}
                  label={item.image}
                  className="h-40 w-full shrink-0 sm:h-auto sm:w-52"
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
            <p className="text-xs font-semibold uppercase tracking-widest text-inksoft">
              More Products
            </p>
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
    </div>
  );
}