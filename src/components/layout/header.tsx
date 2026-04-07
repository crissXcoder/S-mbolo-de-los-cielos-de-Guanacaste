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

  // Simplified language toggle (assuming /en/... or /es/...)
  const isEnglish = pathname.startsWith("/en")
  const toggleLanguage = () => {
    const newLang = isEnglish ? "es" : "en"
    const currentPathWithoutLang = pathname.replace(/^\/(en|es)/, "")
    router.push(`/${newLang}${currentPathWithoutLang}`)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex-1">
          <span className="font-serif font-bold text-xl md:text-2xl tracking-wide text-primary">
            Ara Macao
          </span>
        </div>

        <nav className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            title={isEnglish ? "Cambiar a Español" : "Switch to English"}
            className="hover:bg-primary/10 rounded-full"
          >
            <Globe className="h-[1.2rem] w-[1.2rem] text-foreground" />
            <span className="sr-only">Toggle Language</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-primary/10 rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
