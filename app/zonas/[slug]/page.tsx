import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { business, zonePageContent } from '@/src/lib/business';
import { getMetadata } from '@/src/lib/seo';
import { MapPin, Phone, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const areaName = business.areas.find(a => a.toLowerCase().replace(/\s/g, '-') === slug);
  if (!areaName) return {};

  return getMetadata(
    `Reparación de Persianas y Fontanero en ${areaName}`,
    `Servicio urgente 24h de reparación de persianas, cierres metálicos y fontanería en ${areaName}. Profesionales con 15 años de experiencia.`,
    `/zonas/${slug}`
  );
}

export default async function AreaDetailPage({ params }: Props) {
  const { slug } = await params;
  const areaName = business.areas.find(a => a.toLowerCase().replace(/\s/g, '-') === slug);

  if (!areaName) notFound();
  
  const areaImage = business.areaImages[slug] || business.galleryImages[0].src;
  const zoneContent = zonePageContent[slug];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="relative h-64 sm:h-96">
            <img
              src={areaImage}
              alt={`Persianista y fontanero en ${areaName} — Reparaciones Nieto`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 sm:p-12">
              <div className="text-white space-y-2">
                <div className="flex items-center space-x-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Zona de Servicio</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                  Persianista y Fontanero en {areaName}
                </h1>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6 text-gray-600 leading-relaxed text-lg">
                <h2 className="font-bold text-gray-900 text-2xl">
                  Reparación de persianas y fontanería en {areaName}
                </h2>

                {zoneContent ? (
                  <>
                    {zoneContent.intro.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}

                    <div className="pt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">¿Por qué elegir Reparaciones Nieto en {areaName}?</h3>
                      <ul className="space-y-3">
                        {zoneContent.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="font-semibold text-gray-800 bg-blue-50 border border-blue-100 rounded-2xl p-5">
                      {zoneContent.closingNote}
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      En Reparaciones Nieto ofrecemos cobertura total en toda la zona de {areaName} y alrededores. Entendemos que cuando surge una avería en una persiana o una fuga de agua, la rapidez es fundamental. Por eso, contamos con técnicos desplazados estratégicamente para llegar a tu ubicación en tiempo récord.
                    </p>
                    <p>
                      Ya seas un particular con un problema en casa, o una empresa que necesita reparar un cierre metálico urgente en su local de {areaName}, nuestro equipo está listo para ayudarte las 24 horas del día, los 365 días del año.
                    </p>
                  </>
                )}

                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Servicios disponibles en {areaName}:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {business.services.map((s) => (
                      <Link
                        key={s.id}
                        href={`/servicios/${s.slug}`}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-400 hover:bg-white transition-all group"
                      >
                        <span className="font-bold text-gray-800">{s.title}</span>
                        <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 space-y-6">
                  <h4 className="text-xl font-bold text-blue-900">Atención en {areaName}</h4>
                  <ul className="space-y-4">
                    {[
                      "Llegada en 20–40 min",
                      "Técnicos con 15 años de experiencia",
                      "Presupuesto gratuito sin compromiso",
                      "Urgencias 24h, 365 días"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm font-semibold text-blue-800">
                        <CheckCircle2 className="w-5 h-5 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 space-y-3">
                    <a
                      href={`tel:${business.phone.replace(/\s/g, '')}`}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Llamar ahora</span>
                    </a>
                    <a
                      href={`https://wa.me/${business.whatsapp}`}
                      className="w-full bg-green-500 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
