import { getSiteUrl } from "@/lib/env"

interface JsonLdProps {
  lang: "es" | "en"
}

export function JsonLd({ lang }: JsonLdProps) {
  const isEs = lang === "es"
  const url = `${getSiteUrl()}/${lang}`
  const siteUrl = getSiteUrl()

  const orgName = "Proyecto Lapa Roja"
  const title = isEs ? "Símbolo de los Cielos de Guanacaste | Ara macao" : "Symbol of the Guanacaste Skies | Ara macao"
  const desc = isEs 
    ? "La salud del bosque seco descansa en las alas de la Lapa Roja. Descubre su ecología, amenazas y esfuerzos de conservación en Guanacaste."
    : "The health of the dry forest rests on the wings of the Scarlet Macaw. Discover its ecology, threats, and conservation efforts in Guanacaste."

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "url": siteUrl,
        "name": orgName,
        "description": isEs ? "Campaña de conservación de la Lapa Roja" : "Scarlet Macaw conservation campaign",
        "publisher": {
          "@id": `${siteUrl}/#organization`
        },
        "inLanguage": ["es", "en"]
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": orgName,
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": "https://i.ibb.co/9MfHMZL/image.png"
        },
        "sameAs": []
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        "url": url,
        "name": title,
        "isPartOf": {
          "@id": `${siteUrl}/#website`
        },
        "about": {
          "@id": `${siteUrl}/#organization`
        },
        "description": desc,
        "inLanguage": lang,
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": [url]
          }
        ]
      }
    ]
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
  )
}