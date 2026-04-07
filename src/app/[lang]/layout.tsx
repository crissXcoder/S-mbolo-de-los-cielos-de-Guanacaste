import { Metadata } from "next"
import { getSiteUrl } from "@/lib/env"
import { Header } from "@/components/layout/header"
import { JsonLd } from "@/lib/json-ld"

type Props = {
  children: React.ReactNode
  params: { lang: "es" | "en" }
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEs = lang === "es"
  const baseUrl = getSiteUrl()

  const title = isEs ? "Símbolo de los Cielos de Guanacaste | Ara macao" : "Symbol of the Guanacaste Skies | Ara macao"
  const description = isEs 
    ? "La salud del bosque seco descansa en las alas de la Lapa Roja. Descubre su ecología, amenazas y esfuerzos de conservación en Guanacaste, Costa Rica."
    : "The health of the dry forest rests on the wings of the Scarlet Macaw. Discover its ecology, threats, and conservation efforts in Guanacaste, Costa Rica."

  const keywords = isEs
    ? ["lapa roja", "Ara macao", "lapa roja Costa Rica", "lapa roja Guanacaste", "conservación lapa roja", "bosque seco Guanacaste", "avistamiento aves Guanacaste", "fauna silvestre Costa Rica"]
    : ["Scarlet Macaw", "Ara macao", "Scarlet Macaw Costa Rica", "Scarlet Macaw Guanacaste", "Scarlet Macaw conservation", "Guanacaste dry forest", "birdwatching Guanacaste", "Costa Rica wildlife"]

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | Ara macao`
    },
    description,
    keywords,
    applicationName: "Campaña Ara Macao",
    authors: [{ name: "Proyecto Lapa Roja", url: baseUrl }],
    generator: "Next.js",
    publisher: "Proyecto Lapa Roja",
    creator: "Proyecto Lapa Roja",
    category: isEs ? "Conservación Ambiental" : "Environmental Conservation",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "es": `${baseUrl}/es`,
        "en": `${baseUrl}/en`,
        "x-default": `${baseUrl}/es`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${lang}`,
      siteName: isEs ? "Campaña Ara Macao" : "Ara Macao Campaign",
      locale: isEs ? "es_CR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg", // To be created
          width: 1200,
          height: 630,
          alt: isEs ? "Lapa Roja volando en el bosque seco de Guanacaste" : "Scarlet Macaw flying in the Guanacaste dry forest",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@ProyectoLapaRoja",
      images: ["/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/icon.png", type: "image/png" }
      ],
      apple: [
        { url: "/apple-icon.png", type: "image/png", sizes: "180x180" }
      ]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const typedLang = lang as "es" | "en"
  return (
    <html lang={typedLang} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#b91c1c" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#7f1d1d" media="(prefers-color-scheme: dark)" />
        <JsonLd lang={typedLang} />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        {/* Header and Footer are rendered inside page.tsx in the current architecture or globally here. 
            NOTE: Header was in both layout and page. I'm leaving it here as the global shell. */}
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        {/* Footer could be here, but leaving it as in the original to not break the design. */}
      </body>
    </html>
  )
}