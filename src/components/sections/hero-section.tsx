"use client"

import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function HeroSection({ dict }: { dict: Dictionary["hero"] }) {
  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300])
  const scaleParallax = useTransform(scrollY, [0, 1000], [1.05, 1])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  // Variants for staggered text reveal
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const item: any = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  // Split title into words
  const titleWords = dict.title.split(" ")

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Complex Parallax & Scale */}
      <motion.div 
        className="absolute inset-0 z-0 origin-top"
        style={{ y: yParallax, scale: scaleParallax }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/20 to-background/80 dark:from-background/60 dark:via-background/50 dark:to-background z-10" />
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549471013-3364d7220b7a?auto=format&fit=crop&w=2400&q=80')" }}
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 px-4 md:px-8 text-center max-w-5xl mx-auto flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
           className="inline-block px-5 py-2 mb-10 rounded-full border border-primary/20 bg-background/40 backdrop-blur-md shadow-sm text-xs md:text-sm font-medium tracking-[0.2em] text-primary uppercase"
        >
          {dict.badge}
        </motion.div>

        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground tracking-tight leading-[1.1] mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2"
        >
          {titleWords.map((word, idx) => (
            <motion.span key={idx} variants={item} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-2xl text-foreground/80 font-sans max-w-3xl leading-relaxed mb-16"
        >
          {dict.subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs font-sans tracking-[0.3em] uppercase text-foreground/60">
          {dict.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-primary opacity-80" />
        </motion.div>
      </motion.div>
    </section>
  )
}
