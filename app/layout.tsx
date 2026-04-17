import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { StickyCTA } from '@/src/components/layout/StickyCTA';
import { Location } from '@/src/components/sections/Location';
import { business } from '@/src/lib/business';
import '../src/index.css';

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Reparaciones Nieto",
    "image": `${business.siteUrl}${business.heroImage}`,
    "logo": `${business.siteUrl}${business.logo}`,
    "@id": business.siteUrl,
    "url": business.siteUrl,
    "telephone": business.phoneFormatted,
    "email": business.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle del Dr. Bergez, 16",
      "addressLocality": "Alicante",
      "postalCode": "03012",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.geo.latitude,
      "longitude": business.geo.longitude
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      business.mapsUrl
    ],
    "hasMap": business.mapsUrl
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3RB6S3M');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P3RB6S3M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Location />
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
