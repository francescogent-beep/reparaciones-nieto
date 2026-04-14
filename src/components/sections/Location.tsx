import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { business } from '@/src/lib/business';

export const Location = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8 mb-12 lg:mb-0">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">Nuestra Ubicación</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Estamos en el corazón de Alicante
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestra base operativa se encuentra en Alicante capital, lo que nos permite desplazarnos rápidamente a cualquier punto de la ciudad y poblaciones cercanas en menos de 40 minutos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Dirección Física</p>
                  <p className="text-gray-600">{business.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Teléfono de Atención</p>
                  <p className="text-gray-600">{business.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Horario de Servicio</p>
                  <p className="text-gray-600">{business.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.665248900112!2d-0.48041190000000006!3d38.3567293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49e53b2f37cc333b%3A0xca0e26e43f43d3b2!2sReparaciones%20Nieto%20-%20Fontanero%20Alicante!5e0!3m2!1sen!2ses!4v1776090518412!5m2!1sen!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Reparaciones Nieto en Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
