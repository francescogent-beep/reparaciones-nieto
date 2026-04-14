import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { business } from '@/src/lib/business';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Reparaciones <span className="text-blue-500">Nieto</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Especialistas en reparación e instalación de persianas, cierres metálicos y fontanería en Alicante. Más de 15 años de experiencia garantizando calidad y rapidez.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={`https://wa.me/${business.whatsapp}`} className="hover:text-green-500 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Servicios</h3>
            <ul className="space-y-3 text-sm">
              {business.services.map((service) => (
                <li key={service.id}>
                  <Link href={`/servicios/${service.slug}`} className="hover:text-blue-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Zonas de Servicio</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              {business.areas.slice(0, 8).map((area) => (
                <li key={area}>
                  <Link href={`/zonas/${area.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-blue-400 transition-colors">
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`tel:${business.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {business.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-white transition-colors">
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Reparaciones Nieto. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/preguntas-frecuentes" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
