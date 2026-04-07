import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/env'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl()

  return [
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          "x-default": `${baseUrl}/es`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
          "x-default": `${baseUrl}/es`,
        },
      },
    },
  ]
}