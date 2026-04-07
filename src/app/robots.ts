import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/env'

export default function robots(): MetadataRoute.Robots {
  // Solo permitimos el rastreo si estamos en el entorno de producción de Vercel.
  // Esto evita que Google indexe los enlaces de Preview o ramas de desarrollo.
  const isProduction = process.env.VERCEL_ENV === 'production'

  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : '',
      disallow: isProduction ? ['/api/'] : '/',
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  }
}