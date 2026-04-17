import React from 'react';
import { Metadata } from 'next';
import { business } from '@/src/lib/business';
import { getMetadata } from '@/src/lib/seo';

export const metadata: Metadata = getMetadata(
  "Galería de Trabajos",
  "Descubre imágenes reales de trabajos de persianas, cierres metálicos y fontanería realizados por Reparaciones Nieto en Alicante.",
  "/galeria"
);

export default function GalleryPage() {
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Galería de trabajos de Reparaciones Nieto",
    "url": `${business.siteUrl}/galeria`,
    "image": business.galleryImages.map((image) => `${business.siteUrl}${image.src}`),
  };

  return (
    <section className="bg-white py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">Galería</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Trabajos reales de nuestro equipo
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Una selección de imágenes de intervenciones, instalaciones y reparaciones realizadas por Reparaciones Nieto en Alicante y alrededores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {business.galleryImages.map((image) => (
            <figure
              key={image.src}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-gray-700">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
