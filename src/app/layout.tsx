import type { Metadata } from 'next';
import { Belleza, Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const belleza = Belleza({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: "Destination Wedding Venue in Jodhpur | Surpura Bagh",
  description:
    "Host your dream destination wedding at Surpura Bagh, Jodhpur. Celebrate amidst heritage-inspired venues, luxury suites, curated dining, and personalised hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${belleza.variable}`}>
      <GoogleTagManager gtmId="GTM-T9NSTZP4" />
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
        <link rel="preconnect" href="https://assets.simplotel.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://assets.simplotel.com" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
