import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { getDictionary, type Locale } from "@/i18n/get-dictionary";
import { ThemeProvider } from "@/components/theme-provider";
import "../../app/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://simbolo-cielos-guanacaste.vercel.app";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s | ${dictionary.metadata.title}`,
      default: dictionary.metadata.title,
    },
    description: dictionary.metadata.description,
    keywords: [
      "Lapa Roja", "Scarlet Macaw", "Guanacaste", "Bosque Seco", 
      "Conservación", "Costa Rica", "Ara macao", "Dry Forest Conservation",
      "Birdwatching Costa Rica"
    ],
    authors: [{ name: "Símbolo Cielos Guanacaste Project" }],
    creator: "Educational Outreach",
    publisher: "Símbolo Cielos Guanacaste",
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        'es': `${siteUrl}/es`,
        'en': `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: `${siteUrl}/${lang}`,
      siteName: dictionary.metadata.title,
      images: [
        {
          url: "https://images.unsplash.com/photo-1549471013-3364d7220b7a?auto=format&fit=crop&w=1200&h=630&q=80",
          width: 1200,
          height: 630,
          alt: "Lapa Roja volando en Costa Rica",
        },
      ],
      locale: lang === 'es' ? 'es_CR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: ["https://images.unsplash.com/photo-1549471013-3364d7220b7a?auto=format&fit=crop&w=1200&h=630&q=80"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
