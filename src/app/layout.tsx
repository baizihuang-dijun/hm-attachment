import type { Metadata } from 'next';
import { SiteNav, SiteFooter } from '@/components/site-nav';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'HM Attachment | Excavator Attachments & Drilling Equipment',
    template: '%s | HM Attachment',
  },
  description:
    'HM Attachment — Excavator Attachments & Drilling Equipment. 专业制造挖掘机螺旋钻动力头、钻杆钻头、快换连接器与耐磨件，服务全球基建、打桩与钻井现场。',
  keywords: [
    'HM Attachment',
    'Auger Drives',
    'Earth Augers',
    'Drilling Drives',
    'Excavator Attachments',
    'Drilling Equipment',
    '螺旋钻动力头',
    '挖掘机属具',
    '钻探设备',
  ],
  authors: [{ name: 'HM Attachment' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'HM Attachment | Excavator Attachments & Drilling Equipment',
    description:
      'Reliable excavator attachments & drilling equipment, built for global construction sites.',
    siteName: 'HM Attachment',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col">
          <SiteNav />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}