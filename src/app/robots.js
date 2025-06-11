export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://tanushree.vercel.app/sitemap.xml',
    host: 'https://tanushree.vercel.app/',
  }
}