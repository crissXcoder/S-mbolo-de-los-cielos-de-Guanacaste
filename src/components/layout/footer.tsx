import type { Dictionary } from "@/i18n/get-dictionary"

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const year = new Date().getFullYear()
  
  return (
    <footer className="py-12 bg-card border-t border-border/40 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-foreground/60 text-sm font-sans mb-4">
          &copy; {year} {dict.rights}
        </p>
      </div>
    </footer>
  )
}
