import React from 'react';
import { Metadata } from 'next';
import { getMetadata } from '@/src/lib/seo';
import { business } from '@/src/lib/business';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = getMetadata(
  "Contacto",
  "Contacta con Reparaciones Nieto para urgencias o presupuestos en Alicante. Teléfono, WhatsApp y dirección física.",
  "/contacto"
);

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Contacta con Nosotros</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos disponibles las 24 horas para atender tus urgencias en Alicante y alrededores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <a 
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-4 group"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Llamar ahora</h3>
                <p className="text-blue-600 font-extrabold text-xl">{business.phone}</p>
              </a>

              <a 
                href={`https://wa.me/${business.whatsapp}`}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-4 group"
              >
                <div className="bg-green-50 w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">WhatsApp</h3>
                <p className="text-green-600 font-extrabold text-xl">Chat directo</p>
              </a>
            </div>

            <div className="space-y-8 bg-gray-50 p-10 rounded-[2.5rem]">
              <h3 className="text-2xl font-bold text-gray-900">Información de contacto</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Dirección</p>
                    <p className="text-gray-600">{business.address}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Horario</p>
                    <p className="text-gray-600">{business.hours}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href={`mailto:${business.email}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {business.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden h-full min-h-[500px]">
            <iframe 
              src={business.mapsEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Reparaciones Nieto"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
