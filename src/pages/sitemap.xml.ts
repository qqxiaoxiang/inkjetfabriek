import type { APIRoute } from 'astro';
import { blogs } from '../data/blog';
import { categories, products } from '../data/products';

const domain = 'https://inkjetfabriek.nl';

export const GET: APIRoute = () => {
  // Static pages
  const staticPages = [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/contact', priority: 0.8, changefreq: 'monthly' },
    { path: '/custom', priority: 0.8, changefreq: 'monthly' },
    { path: '/products', priority: 0.9, changefreq: 'weekly' },
    { path: '/blog', priority: 0.9, changefreq: 'weekly' },
    { path: '/sitemap', priority: 0.5, changefreq: 'monthly' },
  ];

  // Product category pages
  const productCategoryPages = categories.map(category => ({
    path: `/products/${category.slug}`,
    priority: 0.8,
    changefreq: 'weekly'
  }));

  // Product pages
  const productPages = products.map(product => ({
    path: `/products/${product.category}/${product.slug}`,
    priority: 0.7,
    changefreq: 'monthly'
  }));

  // Blog pages
  const blogPages = blogs.map(blog => ({
    path: `/blog/${blog.slug}`,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: blog.date
  }));

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...productCategoryPages,
    ...productPages,
    ...blogPages
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${domain}${page.path}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
