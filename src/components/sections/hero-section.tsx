"use client"

import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 1000], [0, 250])
  const scaleParallax = useTransform(scrollY, [0, 1000], [1.05, 1])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  // Split title into words
  const titleWords = dict.title.split(" ")

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Complex Parallax & Scale */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ y: yParallax, scale: scaleParallax }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/60 to-background/95 dark:from-background/60 dark:via-background/80 dark:to-background z-10" />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          // Usaremos una imagen representativa del bosque tropical seco
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549471013-3364d7220b7a?auto=format&fit=crop&w=2400&q=80')" }}
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
           className="inline-block px-6 py-2 mb-8 rounded-full border border-primary/30 bg-background/50 backdrop-blur-md shadow-lg text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase"
        >
          {dict.badge}
        </motion.div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold text-foreground overflow-hidden mb-6 drop-shadow-sm">
          {titleWords.map((word, idx) => (
             <motion.span 
              key={idx} 
              initial={{ opacity: 0, y: 80, rotateZ: 5 }}
              animate={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 1, delay: 0.3 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-3 lg:mr-5 leading-[1.1]"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-foreground/80 font-sans max-w-3xl leading-relaxed mb-16 mx-auto"
        >
          {dict.subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-foreground/50">
          {dict.scroll}
        </span>
        <ChevronDown className="h-6 w-6 text-primary" />
      </motion.div>

      {/* Decorative side line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "20vh" }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-8 md:left-16 w-px bg-linear-to-b from-primary/0 via-primary/50 to-primary z-20 hidden md:block"
      />
    </section>
  )
}
