import React from 'react';
import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { StickyCTA } from '@/src/components/layout/StickyCTA';
import { Location } from '@/src/components/sections/Location';
import { business } from '@/src/lib/business';
import '../src/index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Reparaciones Nieto",
    "image": "https://i.imgur.com/ZEqLipq.png",
    "@id": "https://reparacionesnieto.com",
    "url": "https://reparacionesnieto.com",
    "telephone": business.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle del Dr. Bergez, 16",
      "addressLocality": "Alicante",
      "postalCode": "03012",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.3567293,
      "longitude": -0.4804119
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
      "https://www.google.com/maps?cid=14559646464534534534"
    ]
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
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
