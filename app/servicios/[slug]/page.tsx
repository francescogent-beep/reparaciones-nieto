import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { business } from '@/src/lib/business';
import { getMetadata } from '@/src/lib/seo';
import { Phone, MessageCircle, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = business.services.find(s => s.slug === slug);
  if (!service) return {};

  return getMetadata(
    service.title,
    `${service.description} Servicio profesional en Alicante con garantía de 15 años. Presupuesto sin compromiso.`,
    `/servicios/${slug}`
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = business.services.find(s => s.slug === slug);

  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Reparaciones Nieto",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alicante",
        "addressCountry": "ES"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Alicante"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Reparación",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title
          }
        }
      ]
    }
  };

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/servicios" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a servicios
        </Link>

        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {service.title} en Alicante
          </h1>
          
          <div className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-gray-100">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="text-xl font-medium text-gray-900">
              En Reparaciones Nieto somos expertos en {service.title.toLowerCase()} con más de 15 años de experiencia en el sector.
            </p>
            <p>
              Ofrecemos un servicio integral que abarca desde la instalación inicial hasta el mantenimiento y la reparación urgente de cualquier avería. Nuestro equipo técnico está altamente cualificado para trabajar con todo tipo de materiales y sistemas, asegurando siempre un acabado profesional y duradero.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">¿Qué incluye nuestro servicio?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {[
                "Diagnóstico gratuito de la avería",
                "Presupuesto cerrado sin compromiso",
                "Materiales de primera calidad",
                "Garantía por escrito de la reparación",
                "Servicio de urgencia 24 horas",
                "Limpieza total tras el trabajo"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-8 mt-16">
            <h2 className="text-3xl font-bold">Solicita tu presupuesto para {service.title.toLowerCase()}</h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              No dejes que una pequeña avería se convierta en un problema mayor. Contacta con nosotros ahora.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Llamar al {business.phone}
              </a>
              <a 
                href={`https://wa.me/${business.whatsapp}`}
                className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
