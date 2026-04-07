"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { Moon, Sun, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"

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
          {/* Un indicador estilizado simulando un ave */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary-foreground">
              <path d="M22 6c-3 1-5.5 3-7 6-1.5-3-4-5-7-6" />
              <path d="M15 12c-2.5 4-6 6-9 7" />
              <path d="M15 12c2.5 4 6 6 9 7" />
            </svg>
          </div>
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
