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
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section ref={ref} className="py-32 md:py-48 bg-background relative overflow-hidden" style={{ position: "relative" }}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary w-fit mb-8 cursor-default"
            >
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">Ecosistema Vivo</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] mb-8">
              {dict.title}
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/70 font-sans leading-relaxed">
              {dict.body}
            </p>
          </motion.div>

          {/* Clip-Path Reveal Image */}
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square md:aspect-4/3 lg:aspect-square rounded-4xl overflow-hidden order-1 lg:order-2 border border-border/40"
          >
            <motion.div 
              className="absolute -inset-[100px] bg-cover bg-center"
              style={{ 
                y: yParallax,
                backgroundImage: "url('https://images.unsplash.com/photo-1616428766100-3432d007ec14?auto=format&fit=crop&q=80')" 
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
