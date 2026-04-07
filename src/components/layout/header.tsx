"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

import Image from "next/image"

export function Header() {
  const { setTheme, theme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const isEnglish = pathname.startsWith("/en")
  const toggleLanguage = () => {
    const newLang = isEnglish ? "es" : "en"
    const currentPathWithoutLang = pathname.replace(/^\/(en|es)/, "")
    router.push(`/${newLang}${currentPathWithoutLang}`)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/80 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex-1 flex items-center gap-3">
          <Image 
            src="https://i.ibb.co/9MfHMZL/image.png" 
            alt={isEnglish ? "Official Scarlet Macaw Logo" : "Logo oficial Ara Macao"} 
            width={48} 
            height={48} 
            className="rounded-full shadow-lg shadow-primary/10 object-cover"
            priority
          />
          <span className="font-serif font-bold text-xl md:text-2xl tracking-wide text-foreground">
            Ara Macao
          </span>
        </div>

        <nav className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleLanguage}
            title={isEnglish ? "Cambiar a Español" : "Switch to English"}
            className="rounded-full px-4 border-border shadow-sm hover:border-primary/50 transition-colors bg-card"
          >
            <Globe className="h-4 w-4 text-foreground/80 mr-2" />
            <span className="font-medium text-sm text-foreground/90">{isEnglish ? "ES" : "EN"}</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border-border shadow-sm hover:border-primary/50 transition-colors bg-card overflow-hidden relative w-9 h-9"
          >
            <Sun className="h-[1.1rem] w-[1.1rem] absolute transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-[1.1rem] w-[1.1rem] transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-blue-400" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
