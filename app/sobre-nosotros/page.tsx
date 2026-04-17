import React from 'react';
import { Metadata } from 'next';
import { getMetadata } from '@/src/lib/seo';
import { business } from '@/src/lib/business';
import { Award, Clock, Shield, Users, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = getMetadata(
  "Sobre Nosotros",
  "Conoce a Reparaciones Nieto, tu empresa de confianza en Alicante con 15 años de experiencia en persianas y fontanería.",
  "/sobre-nosotros"
);

export default function AboutPage() {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                  Más de 15 años cuidando de tu Hogar y Negocio
                </h1>
                <p className="text-xl text-blue-600 font-bold uppercase tracking-widest text-sm">Nuestra Historia</p>
              </div>
              
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>
                  Reparaciones Nieto nació en Alicante con un objetivo claro: ofrecer un servicio técnico de calidad, honesto y rápido. Lo que empezó como un pequeño equipo familiar se ha convertido en una referencia en la provincia para servicios de persianas y fontanería.
                </p>
                <p>
                  Nuestra filosofía se basa en la confianza. Sabemos que cuando un cliente nos llama, suele estar en una situación de estrés por una avería. Por eso, nuestra prioridad es la transparencia en el precio y la eficacia en la solución.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900">15+</p>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Años de éxito</p>
                </div>
                <div className="space-y-2">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Servicios realizados</p>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0">
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={business.teamImage}
                    alt="Equipo Reparaciones Nieto" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs hidden sm:block">
                  <p className="text-gray-600 italic leading-relaxed">
                    "La profesionalidad no es negociable. Cada persiana que arreglamos es nuestra carta de presentación."
                  </p>
                  <p className="mt-4 font-bold text-gray-900">— Fundador de Reparaciones Nieto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Nuestros Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Honestidad", desc: "Presupuestos claros y sin sorpresas. Solo cobramos por lo que realmente necesitas." },
              { icon: Clock, title: "Rapidez", desc: "Entendemos la urgencia. Llegamos rápido y trabajamos de forma eficiente." },
              { icon: CheckCircle2, title: "Calidad", desc: "Utilizamos los mejores materiales para asegurar que la reparación dure años." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm text-center space-y-6">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <val.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
