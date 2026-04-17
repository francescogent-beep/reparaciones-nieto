import React from 'react';
import { Metadata } from 'next';
import { Phone, MessageCircle, Shield, Clock, Award, CheckCircle2, ArrowRight, MapPin, Settings, Home as HomeIcon, Store, Lock, Droplets, Star } from 'lucide-react';
import { business } from '@/src/lib/business';
import { blogPosts } from '@/src/lib/blog';
import { getMetadata } from '@/src/lib/seo';
import Link from 'next/link';

const IconMap: Record<string, any> = {
  Settings,
  Home: HomeIcon,
  Store,
  Lock,
  Droplets
};

export const metadata: Metadata = getMetadata(
  "Reparación de Persianas, Cierres Metálicos y Fontanería en Alicante",
  "Servicio profesional urgente 24h en Alicante. Reparación de persianas de hogar y local, cierres metálicos y fontanería. Presupuestos sin compromiso.",
  "/"
);

export default function Home() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://persianas-y-fontaneria.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={business.heroImage}
            alt="Handyman background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-lg shadow-blue-900/20">
                <Clock className="w-4 h-4" />
                <span>Servicio Urgente 24 Horas</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Reparación de <span className="text-blue-400">Persianas</span>, Cierres y <span className="text-blue-400">Fontanería</span> en Alicante
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Soluciones rápidas y económicas para tu hogar o negocio. Especialistas en cierres metálicos y persianas con más de 15 años de experiencia.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href={`https://wa.me/${business.whatsapp}`}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all shadow-lg shadow-green-900/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp Directo</span>
                </a>
                <a 
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Llamar Ahora</span>
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-gray-200">Garantía por escrito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-gray-200">15 años de experiencia</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 border-4 border-white/10">
                <img 
                  src={business.heroImage}
                  alt="Reparaciones Nieto Alicante" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 transform -rotate-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <CheckCircle2 className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white border-y border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-50 grayscale">
             <span className="font-bold text-xl">PARTICULARES</span>
             <span className="font-bold text-xl">EMPRESAS</span>
             <span className="font-bold text-xl">LOCALES</span>
             <span className="font-bold text-xl">COMUNIDADES</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">Nuestros Servicios</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Soluciones Profesionales para cada Necesidad
            </p>
            <p className="text-lg text-gray-600">
              Atendemos urgencias y trabajos planificados con la máxima seriedad y limpieza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {business.services.map((service) => {
              const Icon = IconMap[service.icon as string] || CheckCircle2;
              return (
                <Link 
                  key={service.id}
                  href={`/servicios/${service.slug}`}
                  className="group bg-gray-50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden bg-gray-200">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="bg-white w-14 h-14 rounded-2xl shadow-sm flex items-center justify-center mb-6 -mt-14 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider">
                      <span>Ver detalles</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">Opiniones de Clientes</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              La Confianza de Nuestros Vecinos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo M.",
                location: "Alicante Centro",
                text: "Excelente servicio. Llamé por una persiana atascada un domingo y en 30 minutos estaban en casa. Muy profesionales y limpios.",
                rating: 5
              },
              {
                name: "Elena G.",
                location: "San Juan Playa",
                text: "Me instalaron un descalcificador y repararon una fuga en el termo. El cambio en la calidad del agua es increíble. Muy recomendados.",
                rating: 5
              },
              {
                name: "Carlos T.",
                location: "Elche",
                text: "Motorizaron el cierre de mi local comercial. Ahora es mucho más cómodo y seguro. El precio fue muy competitivo.",
                rating: 5
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col space-y-4">
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic flex-grow">"{review.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">¿Por qué elegirnos?</h2>
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Profesionalidad, Seriedad y Experiencia en cada Reparación
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Atención Urgente 24h", desc: "Estamos disponibles en cualquier momento para resolver tus problemas de seguridad o fontanería." },
                  { title: "Precios Económicos", desc: "Ofrecemos la mejor relación calidad-precio del mercado en Alicante sin sorpresas." },
                  { title: "Presupuestos sin Compromiso", desc: "Te informamos detalladamente del coste antes de empezar cualquier trabajo." },
                  { title: "Garantía de Calidad", desc: "Todos nuestros trabajos cuentan con garantía profesional por escrito." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 lg:mt-0 relative">
              <div className="aspect-square rounded-full border border-blue-500/20 absolute -top-12 -right-12 w-full animate-pulse"></div>
              <div className="relative z-10 bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-700 pb-6">
                    <div>
                      <p className="text-4xl font-bold text-blue-400">15+</p>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Años de experiencia</p>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-blue-400">24/7</p>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Disponibilidad</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed">
                    "Nuestra prioridad es la seguridad de tu negocio y la tranquilidad de tu hogar. No descansamos hasta que el problema esté resuelto."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">N</div>
                    <div>
                      <p className="font-bold">Equipo Reparaciones Nieto</p>
                      <p className="text-xs text-gray-500 uppercase font-bold">Alicante, España</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Zonas de Actuación</h2>
          <p className="text-3xl font-extrabold text-gray-900 mb-12">Damos servicio en toda la provincia</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {business.areas.map((area) => (
              <Link 
                key={area}
                href={`/zonas/${area.toLowerCase().replace(/\s/g, '-')}`}
                className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 hover:border-blue-400 hover:text-blue-600 transition-all font-semibold flex items-center space-x-2"
              >
                <MapPin className="w-4 h-4" />
                <span>{area}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em]">Nuestro Blog</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Consejos y Guías de Expertos
              </p>
            </div>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform"
            >
              Ver todos los artículos <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                    <span>{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-500">{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider">
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Preguntas Frecuentes</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "¿Cuánto cuesta reparar una persiana en Alicante?", a: "El precio depende del tipo de avería (cinta, lamas, motor). Ofrecemos presupuestos sin compromiso para que sepas el coste exacto antes de empezar." },
              { q: "¿Ofrecéis servicio urgente de fontanero en Alicante?", a: "Sí, disponemos de un equipo de guardia las 24 horas para atender fugas de agua, atascos y averías urgentes en toda la zona de Alicante." },
              { q: "¿Reparáis cierres metálicos de locales comerciales?", a: "Somos especialistas en cierres metálicos. Reparamos motores, lamas, ejes y cerraduras de seguridad para que tu negocio nunca pare." },
              { q: "¿En cuánto tiempo llegáis para una urgencia?", a: "Nuestro tiempo medio de llegada en Alicante capital es de 20 a 40 minutos, dependiendo del tráfico y la ubicación exacta." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            ¿Necesitas una reparación urgente o un presupuesto?
          </h2>
          <p className="text-blue-100 text-lg">
            No esperes más. Contacta ahora con profesionales de confianza en Alicante.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-xl"
            >
              Llamar al {business.phone}
            </a>
            <a 
              href={`https://wa.me/${business.whatsapp}`}
              className="w-full sm:w-auto bg-green-500 text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-green-600 transition-colors shadow-xl flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-6 h-6" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
