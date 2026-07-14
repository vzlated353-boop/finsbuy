import { defineConfig } from 'vitepress'

const hostname = 'https://bestfansbuy.com'

export default defineConfig({
  vite: {
    ssr: {
      noExternal: [],
    },
    build: {
      rollupOptions: {
        external: (id) => id.startsWith('/manus-storage/'),
      },
    },
  },
  title: 'Best Fansbuy - Fashion Store',
  description: 'Discover the latest fashion trends and premium clothing. Shop now!',
  lang: 'en-US',

  head: [
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-XTJTTBZTPM' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XTJTTBZTPM');
    `],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Best Fansbuy - Fashion Store' }],
    ['meta', { property: 'og:description', content: 'Discover the latest fashion trends and premium clothing. Shop now!' }],
    ['meta', { property: 'og:image', content: '/favicon.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Best Fansbuy - Fashion Store' }],
    ['meta', { name: 'twitter:description', content: 'Discover the latest fashion trends and premium clothing. Shop now!' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Best Fansbuy',
      url: hostname,
      description: 'Discover the latest fashion trends and premium clothing. Shop now!',
    })],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    
    // SPA Fallback for Cloudflare Pages
    notFound: {
      quote: 'The page you are looking for does not exist.',
      linkLabel: 'Back to Home',
      linkUrl: '/',
    },

    footer: {
      message: 'Best Fansbuy - Fashion Store',
      copyright: 'Copyright © ' + new Date().getFullYear(),
    },
  },

  sitemap: {
    hostname,
  },
  
  // Ignore localhost links in development docs
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],
  
  // Enable SPA mode for client-side routing
  cleanUrls: 'with-subfolders',
})
