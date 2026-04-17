import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/src/lib/blog';
import { business } from '@/src/lib/business';
import { getMetadata } from '@/src/lib/seo';
import { Calendar, ArrowLeft, Clock, Quote } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { NativeShareButton } from '@/src/components/blog/NativeShareButton';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return {};

  return getMetadata(
    post.title,
    post.excerpt,
    `/blog/${slug}`
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Reparaciones Nieto",
      "logo": {
        "@type": "ImageObject",
        "url": `${business.siteUrl}${business.logo}`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://persianas-y-fontaneria.com/blog/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://persianas-y-fontaneria.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://persianas-y-fontaneria.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://persianas-y-fontaneria.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <article className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <header className="relative py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-gray-400 text-sm flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                8 min de lectura
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  RN
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{post.author}</p>
                  <p className="text-xs text-gray-500">Especialista en Reparaciones</p>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                <p className="font-medium">{new Date(post.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg prose-blue max-w-none">
          <div className="markdown-body">
            <ReactMarkdown
              components={{
                blockquote: ({ children }) => (
                  <div className="my-8 p-6 bg-orange-50 border-l-4 border-orange-500 rounded-r-xl shadow-sm italic text-gray-700 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Quote className="w-12 h-12 text-orange-900" />
                    </div>
                    <div className="relative z-10">{children}</div>
                  </div>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-12 mb-6 text-gray-900 border-b pb-2 border-orange-100 flex items-center gap-2">
                    <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                    {children}
                  </h3>
                ),
                a: ({ href, children }) => {
                  const isInternal = href?.startsWith('/');
                  if (isInternal) {
                    return (
                      <Link
                        href={href}
                        className="text-orange-600 font-medium hover:text-orange-700 underline decoration-orange-200 underline-offset-4 transition-all hover:decoration-orange-500"
                      >
                        {children}
                      </Link>
                    );
                  }
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 font-medium hover:text-orange-700 underline decoration-orange-200 underline-offset-4 transition-all hover:decoration-orange-500"
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Share & Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Compartir:</span>
            <NativeShareButton
              title={post.title}
              url={`${business.siteUrl}/blog/${post.slug}`}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/contacto"
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-700 transition-colors"
            >
              ¿Tienes una avería? Llámanos
            </Link>
          </div>
        </footer>
      </div>

      {/* Related Posts (Simple) */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Otros artículos de interés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map(related => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <p className="text-xs font-bold text-blue-600 uppercase mb-2">{related.category}</p>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
