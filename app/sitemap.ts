import { MetadataRoute } from 'next';
import { business } from '@/src/lib/business';
import { blogPosts } from '@/src/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://persianas-y-fontaneria.com';

  // Static routes
  const staticRoutes = [
    '',
    '/servicios',
    '/galeria',
    '/preguntas-frecuentes',
    '/sobre-nosotros',
    '/contacto',
    '/blog',
    '/aviso-legal',
    '/privacidad',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service routes
  const serviceRoutes = business.services.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Area routes
  const areaRoutes = business.areas.map((area) => ({
    url: `${baseUrl}/zonas/${area.toLowerCase().replace(/\s/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
