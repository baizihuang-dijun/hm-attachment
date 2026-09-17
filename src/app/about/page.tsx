import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { brand } from '@/lib/products';

export const metadata: Metadata = {
  title: 'About / Contact',
  description: 'About HM Attachment company and contact information.',
};

const contacts = [
  { icon: Mail, label: 'Email', value: brand.email },
  { icon: Phone, label: 'Phone', value: '+86 000-0000-0000' },
  { icon: MapPin, label: 'Address', value: 'China (exact address per catalog)' },
  { icon: Globe, label: 'Website', value: brand.website },
  { icon: Clock, label: 'Service', value: 'Mon–Sat 9:00–18:00 (GMT+8)' },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        kicker="HM Attachment"
        title="About / Contact"
        subtitle="HM Attachment delivers reliable equipment to construction and drilling sites worldwide."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
              Who We Are
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-hm sm:text-3xl">
              {brand.name} — {brand.slogan}
            </h2>
            <p className="mt-4 leading-relaxed text-inksoft">
              {brand.short} From hydraulic auger drives, augers and drilling drives
              to quick couplers, wear parts and electric couplers, we offer a
              complete line of excavator attachments and drilling equipment.
            </p>
            <p className="mt-4 leading-relaxed text-inksoft">
              From precision auger drive transmission to strong, hard-wearing digs
              and teeth, HM Attachment is committed to helping every excavator
              drill efficiently — serving fence piling, foundation piles, mast
              installation, ground source heat pumps, solar and wind turbine sites.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contacts.map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-lg border border-line bg-mist p-4">
                  <c.icon className="mt-0.5 h-5 w-5 text-hm-bright-2" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-inksoft">{c.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-hm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-lg border border-dashed border-line bg-mist/60 p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-hm-bright-2">
              Get in Touch
            </p>
            <h3 className="mt-2 text-2xl font-extrabold text-hm">We&apos;d love to hear from you</h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-inksoft">
              For model, spec and pricing enquiries, contact us at bai@hmattachment.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}