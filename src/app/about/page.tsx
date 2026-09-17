import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';
import { PageHeader } from '@/components/site-nav';
import { brand } from '@/lib/products';

export const metadata: Metadata = {
  title: 'About / Contact',
  description: '关于 HM Attachment 公司信息与合作联系。',
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
        subtitle="HM Attachment 以可靠品质服务全球施工与钻井现场。"
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
              {brand.short} 我们从液压螺旋钻动力头、钻杆钻头、钻探驱动到
              连接器、耐磨件与电动快换，提供完整的挖掘机属具与钻探设备方案。
            </p>
            <p className="mt-4 leading-relaxed text-inksoft">
              从液压螺旋钻动力头的精密传动，到钻杆钻头与耐磨件的强韧材质，
              HM Attachment 专注于让每一台挖掘机都能高效完成钻孔作业，产品服务于
              护栏打桩、基金会桩、杆塔安装、地源热泵、太阳能与风电塔基等工程现场。
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
              如需产品型号、参数或报价，请通过邮箱 bai@hmattachment.com 与我们取得联系。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}