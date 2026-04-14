import React from 'react';
import { Metadata } from 'next';
import { blogPosts } from '@/src/lib/blog';
import { getMetadata } from '@/src/lib/seo';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = getMetadata(
  "Blog de Reparaciones y Mantenimiento en Alicante - Consejos y Guías",
  "Aprende a mantener tus persianas, cierres metálicos y fontanería con nuestros artículos expertos enfocados en el clima y necesidades de Alicante.",
  "/blog"
);

export default function BlogPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog de Reparaciones Nieto",
    "description": "Consejos expertos sobre persianas, cierres y fontanería en Alicante",
    "publisher": {
      "@type": "Organization",
      "name": "Reparaciones Nieto"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://reparacionesnieto.com/blog/${post.slug}`
    }))
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Blog de Consejos y Guías
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Compartimos nuestra experiencia de más de 15 años en Alicante para ayudarte a cuidar tu hogar y negocio.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <Link href={`/blog/${post.slug}`} className="aspect-video overflow-hidden block">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center space-x-4 text-xs font-bold text-blue-600 uppercase tracking-widest">
                    <span className="bg-blue-50 px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 mt-auto border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-medium">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="flex items-center text-blue-600 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      Leer más <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">¿Necesitas ayuda profesional?</h2>
          <p className="text-gray-600 text-lg">
            Si después de leer nuestros artículos prefieres que un experto se encargue, estamos a tu disposición 24/7 en Alicante.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/contacto"
              className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
