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
        {/* Preload the LCP hero image for the most common mobile widths */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_640,c_limit/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png"
          // @ts-expect-error -- imagesrcset is valid HTML but not typed in React
          imagesrcset="https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_360,c_limit/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png 360w, https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_480,c_limit/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png 480w, https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_640,c_limit/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png 640w, https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_750,c_limit/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png 750w, https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_1080,c_limit/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png 1080w, https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_1920,c_limit/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png 1920w"
          imagesizes="100vw"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://assets.simplotel.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://assets.simplotel.com" />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
