"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function ThreatsSection({ dict }: { dict: Dictionary["threats"] }) {
  return (
    <section className="py-32 md:py-48 bg-card relative overflow-hidden border-y border-border/40">
      
      {/* Subtle texture abstract background with breathing animation */}
      <motion.div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: "radial-gradient(circle at 50% 50%, var(--color-destructive) 0%, transparent 60%)" }}
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex flex-col items-center gap-6 mb-10">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-5 rounded-full bg-destructive/10 text-destructive cursor-default"
            >
              <AlertCircle className="w-10 h-10" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1]">
              {dict.title}
            </h2>
          </div>
          
          <p className="text-xl md:text-3xl text-foreground/80 font-sans leading-relaxed max-w-3xl mx-auto">
            {dict.body}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
