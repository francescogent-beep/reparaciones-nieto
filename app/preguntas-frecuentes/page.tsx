import React from 'react';
import { Metadata } from 'next';
import { getMetadata } from '@/src/lib/seo';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { business } from '@/src/lib/business';

export const metadata: Metadata = getMetadata(
  "Preguntas Frecuentes - Reparaciones Nieto Alicante",
  "Resolvemos todas tus dudas sobre reparación de persianas, cierres metálicos y fontanería en Alicante. Precios, tiempos y garantías.",
  "/preguntas-frecuentes"
);

const faqs = [
  {
    category: "Persianas (General)",
    questions: [
      { q: "¿Cuánto tiempo se tarda en arreglar una persiana?", a: "La mayoría de las reparaciones estándar, como cambios de cinta o lamas, se realizan en un tiempo de entre 20 y 40 minutos una vez llegamos al domicilio." },
      { q: "¿Qué tipos de persianas reparáis?", a: "Reparamos todo tipo de persianas: PVC, aluminio térmico, madera y persianas de seguridad, tanto manuales como motorizadas." },
      { q: "¿Cobráis por el presupuesto?", a: "No, ofrecemos presupuestos totalmente gratuitos y sin compromiso para cualquier trabajo de reparación o instalación en Alicante." },
      { q: "¿Tenéis repuestos en stock?", a: "Sí, disponemos de un amplio stock de cintas, lamas, motores, ejes y poleas para realizar la reparación en la primera visita siempre que sea posible." }
    ]
  },
  {
    category: "Persianas de Hogar",
    questions: [
      { q: "¿Se puede motorizar una persiana antigua de casa?", a: "Sí, podemos motorizar casi cualquier persiana existente sin necesidad de cambiarla por completo, instalando un motor tubular en el eje." },
      { q: "¿Arregláis persianas descolgadas?", a: "Sí, es una de las averías más comunes. Suele deberse a la rotura de los tirantes o flejes que sujetan la persiana al eje." },
      { q: "¿Cómo sé si mi persiana necesita cambio de cinta?", a: "Si la cinta está deshilachada, se atasca al subir o bajar, o si la persiana cae de golpe, es momento de cambiarla por seguridad." },
      { q: "¿Instaláis persianas térmicas?", a: "Sí, instalamos persianas de aluminio con relleno de espuma de poliuretano que mejoran significativamente el aislamiento térmico y acústico." }
    ]
  },
  {
    category: "Persianas de Local",
    questions: [
      { q: "¿Qué mantenimiento requiere una persiana de local?", a: "Recomendamos un engrase periódico de las guías y una revisión anual del motor y los muelles para evitar roturas inesperadas." },
      { q: "¿Podéis abrir una persiana de local si se ha perdido la llave?", a: "Sí, ofrecemos un servicio de apertura de urgencia 24h para locales comerciales en Alicante, incluyendo la sustitución de la cerradura si es necesario." },
      { q: "¿Instaláis cerraduras de seguridad en persianas comerciales?", a: "Sí, instalamos candados de suelo y cerraduras laterales de alta seguridad para proteger su negocio contra robos." },
      { q: "¿Hacéis reparaciones de lamas dobladas por golpes?", a: "Sí, podemos sustituir lamas individuales o tramos completos de cierres metálicos que hayan sufrido daños por impactos o intentos de robo." }
    ]
  },
  {
    category: "Cierres Metálicos",
    questions: [
      { q: "¿Reparáis motores de cierres metálicos?", a: "Reparamos y sustituimos motores de todas las marcas para cierres enrollables, incluyendo la configuración de mandos a distancia." },
      { q: "¿Qué es un cierre de tijera o ballesta?", a: "Es un tipo de cierre extensible y plegable muy común en escaparates y terrazas que ofrece seguridad sin sacrificar la visibilidad." },
      { q: "¿Atendéis cierres metálicos atascados de noche?", a: "Sí, nuestro servicio de urgencias 24 horas está disponible para cualquier problema que impida cerrar su negocio con seguridad." },
      { q: "¿Podéis automatizar un cierre manual existente?", a: "En la mayoría de los casos es posible instalar un motor en un cierre manual para facilitar su apertura y cierre diario." }
    ]
  },
  {
    category: "Fontanería",
    questions: [
      { q: "¿Atendéis fugas de agua urgentes?", a: "Sí, las fugas de agua son nuestra prioridad máxima para evitar daños mayores en la vivienda o local. Llegamos en menos de 40 minutos." },
      { q: "¿Hacéis desatascos de tuberías?", a: "Realizamos desatascos en fregaderos, inodoros y tuberías generales utilizando maquinaria especializada de presión." },
      { q: "¿Reparáis cisternas que pierden agua?", a: "Sí, reparamos o sustituimos mecanismos de descarga y flotadores para solucionar pérdidas de agua en el WC." },
      { q: "¿Instaláis grifería y sanitarios?", a: "Realizamos instalaciones completas de grifos, lavabos, inodoros y termos eléctricos con acabados profesionales." }
    ]
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(cat => cat.questions.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    })))
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Resolvemos tus dudas más comunes sobre nuestros servicios de reparación y fontanería en Alicante.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqs.map((category, idx) => (
              <div key={idx} className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-4 flex items-center">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2" />
                  {category.category}
                </h2>
                <div className="grid gap-6">
                  {category.questions.map((item, qIdx) => (
                    <div key={qIdx} className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-blue-100 transition-all">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl font-extrabold text-white">¿Aún tienes dudas?</h2>
          <p className="text-blue-100 text-lg">
            Estamos disponibles las 24 horas para atenderte personalmente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl"
            >
              Llamar ahora
            </a>
            <a 
              href={`https://wa.me/${business.whatsapp}`}
              className="w-full sm:w-auto bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-green-600 transition-colors shadow-xl"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
