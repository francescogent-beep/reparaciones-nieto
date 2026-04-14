'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { business } from '@/src/lib/business';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Reparaciones <span className="text-blue-600">Nieto</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">
                Alicante & Alrededores
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/servicios" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Servicios</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
            <Link href="/preguntas-frecuentes" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">FAQ</Link>
            <Link href="/sobre-nosotros" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Sobre Nosotros</Link>
            <Link href="/contacto" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Contacto</Link>
            
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href={`tel:${business.phone.replace(/\s/g, '')}`} 
                className="flex items-center space-x-2 text-gray-900 font-bold hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{business.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 hover:bg-green-600 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <Link href="/servicios" className="block text-base font-medium text-gray-900 px-2" onClick={() => setIsMenuOpen(false)}>Servicios</Link>
          <Link href="/blog" className="block text-base font-medium text-gray-900 px-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link href="/preguntas-frecuentes" className="block text-base font-medium text-gray-900 px-2" onClick={() => setIsMenuOpen(false)}>Preguntas Frecuentes</Link>
          <Link href="/sobre-nosotros" className="block text-base font-medium text-gray-900 px-2" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</Link>
          <Link href="/contacto" className="block text-base font-medium text-gray-900 px-2" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <a 
              href={`tel:${business.phone.replace(/\s/g, '')}`} 
              className="flex items-center space-x-3 text-lg font-bold text-gray-900 px-2"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span>{business.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${business.whatsapp}`}
              className="bg-green-500 text-white px-4 py-3 rounded-xl text-center font-bold flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
