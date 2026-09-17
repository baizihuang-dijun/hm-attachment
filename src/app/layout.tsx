import type { Metadata } from 'next';
import { SiteNav, SiteFooter } from '@/components/site-nav';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'HM Attachment | Excavator Attachments & Drilling Equipment',
    template: '%s | HM Attachment',
  },
  description:
    'HM Attachment — Excavator Attachments & Drilling Equipment. Specialists in auger drives, drilling equipment, quick couplers and wear parts for construction, piling and drilling sites worldwide.',
  keywords: [
    'HM Attachment',
    'Auger Drives',
    'Earth Augers',
    'Drilling Drives',
    'Electric Coupler',
    'Excavator Attachments',
    'Drilling Equipment',
    'Hydraulic Auger Drive',
    'Quick Coupler',
    'Wear Parts',
  ],
  authors: [{ name: 'HM Attachment' }],
  robots: { index: true, follow: true },
  icons: {
    icon: 'https://coze-coding-project.tos.coze.site/cli_attachment/2026-09-17/2750326345577628_5d4564c7c8cf4930abeb19ed244c09af_acd9f800e27d4a790aa21223964736e.png',
  },
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