"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function EcologySection({ dict }: { dict: Dictionary["ecology"] }) {
  const ref = React.useRef<HTMLDivElement>(null)
  
  // Subtle scroll parallax for the image inside the container
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const yParallaxObj = useTransform(scrollYProgress, [0, 1], [-60, 60])
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-32 md:py-48 bg-background relative overflow-hidden">
      {/* Decal background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          <motion.div 
            style={{ opacity: opacityText }}
            className="flex flex-col justify-center order-2 lg:order-1 relative"
          >
            {/* Decal line */}
            <div className="absolute -left-6 md:-left-12 top-0 w-px h-full bg-linear-to-b from-transparent via-primary/30 to-transparent" />
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary-foreground w-fit mb-8 cursor-default shadow-sm backdrop-blur-xs"
            >
              <Leaf className="w-5 h-5 text-secondary dark:text-secondary" />
              <span className="text-sm font-semibold tracking-widest uppercase">Arquitectos del Bosque</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1] mb-8">
              {dict.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-foreground/70 font-sans leading-relaxed mb-8">
              {dict.body}
            </p>
          </motion.div>

          {/* Clip-Path Reveal Image with floating element */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)", filter: "sepia(100%)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)", filter: "sepia(0%)" }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-4/5 md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-border"
            >
              <motion.div 
                className="absolute inset-[-10%]"
                style={{ 
                  y: yParallaxObj,
                  backgroundImage: "url('https://images.unsplash.com/photo-1616428766100-3432d007ec14?auto=format&fit=crop&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
            
            {/* Elemento decorativo flor / hoja flotante */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
              className="absolute -bottom-10 -left-10 md:-left-16 w-32 h-32 md:w-48 md:h-48 bg-card rounded-full p-2 shadow-2xl border border-border/50 flex flex-col items-center justify-center text-center backdrop-blur-xl"
            >
              <span className="text-4xl md:text-5xl font-serif font-bold text-primary block mb-1">500+</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Semillas</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
