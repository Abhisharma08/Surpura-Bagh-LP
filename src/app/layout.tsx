import type { Metadata } from 'next';
import { Belleza, Inter } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://assets.simplotel.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://assets.simplotel.com" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:eco,w_640/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png"
          fetchPriority="high"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dw9v7jjrq/image/upload/f_auto,q_auto:good,w_1200/v1785136140/40938553-c8ce-4a88-9841-a1baf3ffc035_xzbu63.png"
          fetchPriority="high"
          media="(min-width: 768px)"
        />
        <Script
          id="google-tag-manager"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T9NSTZP4');`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9NSTZP4" height="0" width="0" style="display:none;visibility:hidden"></iframe>`}} />
        {children}
      </body>
    </html>
  );
}
