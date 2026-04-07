"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function ThreatsSection({ dict }: { dict: Dictionary["threats"] }) {
  return (
    <section className="py-32 md:py-48 bg-destructive/5 dark:bg-destructive/10 relative overflow-hidden">
      
      {/* Texture abstract background with breathing animation */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(circle at 50% 100%, var(--color-destructive) 0%, transparent 70%)" }}
        animate={{ opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-destructive/20 to-transparent separator-line" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-destructive/20 to-transparent separator-line" />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
           className="bg-card/50 backdrop-blur-3xl border border-destructive/20 p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-destructive/5 relative overflow-hidden"
        >
          {/* Subtle noise or pattern could go here */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
          
          <div className="inline-flex flex-col items-center gap-6 mb-12 relative z-10">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="p-5 rounded-3xl bg-destructive/10 border border-destructive/30 text-destructive shadow-inner"
            >
              <AlertCircle className="w-10 h-10 md:w-14 md:h-14" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[1.1]">
              {dict.title}
            </h2>
          </div>
          
          <p className="text-xl md:text-3xl text-foreground/80 font-sans leading-relaxed max-w-3xl mx-auto font-light relative z-10">
            {dict.body}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
