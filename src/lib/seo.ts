import type { Metadata } from 'next';
import { business } from '@/src/lib/business';

export const getMetadata = (title: string, description: string, canonical: string): Metadata => {
  const siteName = "Reparaciones Nieto";
  const fullTitle = `${title} | ${siteName}`;
  const canonicalUrl = `${business.siteUrl}${canonical}`;
  
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: `${business.siteUrl}${business.logo}`,
        },
      ],
    }
  };
};
