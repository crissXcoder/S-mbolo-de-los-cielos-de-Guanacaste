"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function IntroductionSection({ dict }: { dict: Dictionary["introduction"] }) {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="bg-background/50 backdrop-blur-md p-8 md:p-12 rounded-4xl border border-border flex flex-col items-center text-center"
        >
          <div className="p-4 rounded-full bg-primary/10 text-primary mb-6">
            <Brain className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground leading-tight mb-6">
            {dict.title}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed">
            {dict.body}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
