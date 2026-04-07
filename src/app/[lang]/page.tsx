import { notFound } from "next/navigation"

import { getDictionary, type Locale } from "@/i18n/get-dictionary"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { IntroductionSection } from "@/components/sections/introduction-section"
import { EcologySection } from "@/components/sections/ecology-section"
import { ThreatsSection } from "@/components/sections/threats-section"
import { RecoverySection } from "@/components/sections/recovery-section"
import { LocationsSection } from "@/components/sections/locations-section"
import { EthicsSection } from "@/components/sections/ethics-section"

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (lang !== "es" && lang !== "en") {
    notFound()
  }

  const dictionary = await getDictionary(lang as Locale)

  return (
    <>
      <main className="flex-1 w-full flex flex-col">
        <HeroSection dict={dictionary.hero} />
        <IntroductionSection dict={dictionary.introduction} />
        <EcologySection dict={dictionary.ecology} />
        <ThreatsSection dict={dictionary.threats} />
        <RecoverySection dict={dictionary.recovery} />
        <LocationsSection dict={dictionary.locations} />
        <EthicsSection dict={dictionary.ethics} />
      </main>
      <Footer dict={dictionary.footer} />
    </>
  )
}
