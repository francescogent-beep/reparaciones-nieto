import type { Metadata } from 'next';

export const getMetadata = (title: string, description: string, canonical: string): Metadata => {
  const siteName = "Reparaciones Nieto";
  const fullTitle = `${title} | ${siteName}`;
  
  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: `https://reparacionesnieto.es${canonical}`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: `https://reparacionesnieto.es${canonical}`,
      siteName,
      locale: 'es_ES',
      type: 'website',
    }
  };
};
