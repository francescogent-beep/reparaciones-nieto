import React from 'react';
import { Metadata } from 'next';
import { business } from '@/src/lib/business';
import { getMetadata } from '@/src/lib/seo';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getMetadata(
  "Servicios de Reparación y Fontanería",
  "Conoce todos nuestros servicios de reparación de persianas, cierres metálicos y fontanería en Alicante. Calidad garantizada al mejor precio.",
  "/servicios"
);

export default function ServicesPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Nuestros Servicios Profesionales</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para particulares y empresas en toda la provincia de Alicante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {business.services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 aspect-video rounded-2xl overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Atención 24h</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Presupuesto gratuito</span>
                  </li>
                </ul>
                <Link 
                  href={`/servicios/${service.slug}`}
                  className="inline-flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform"
                >
                  Saber más <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
