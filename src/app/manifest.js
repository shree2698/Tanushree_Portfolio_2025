export default function manifest() {
  return {
    name: 'Tanushree Mahato - Full Stack Developer Portfolio',
    short_name: 'Tanushree Mahato Portfolio',
    description: 'Portfolio showcasing full-stack development projects and skills',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}