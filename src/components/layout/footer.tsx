import type { Dictionary } from "@/i18n/get-dictionary"

export function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const year = new Date().getFullYear()
  
  return (
    <footer className="py-16 mt-20 relative bg-background border-t border-border overflow-hidden">
      {/* Decals para look premium */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
        <h2 className="font-serif text-3xl font-bold text-primary mb-4">Ara Macao</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 font-sans leading-relaxed">
          Un símbolo de los cielos de Guanacaste, cuyo vuelo nos recuerda el valor incalculable de nuestros bosques secos.
        </p>
        <div className="w-16 h-1 bg-primary/20 rounded-full mb-8"></div>
        <p className="text-foreground/50 text-sm font-sans tracking-wide">
          &copy; {year} {dict.rights}
        </p>
      </div>
    </footer>
  )
}
