"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function LocationsSection({ dict }: { dict: Dictionary["locations"] }) {
  return (
    <section className="py-24 md:py-40 bg-card relative overflow-hidden">
      {/* Decals de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-bl-[100px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-tr-[100px] opacity-70" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-3xl bg-secondary/10 text-secondary mb-6 shadow-inner border border-secondary/20">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            {dict.title}
          </h2>
          <p className="text-lg md:text-2xl text-foreground/70 font-sans max-w-2xl mx-auto font-light">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {dict.places.map((place, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
              className="p-10 rounded-[2.5rem] bg-background border border-border/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all group relative overflow-hidden flex flex-col"
            >
              {/* Subtle hover background sweep */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-secondary rounded-full" />
                  <span className="text-sm tracking-widest text-muted-foreground uppercase font-semibold">0{idx + 1}</span>
                </div>
                <h3 className="text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{place.name}</h3>
                <p className="text-foreground/70 font-sans text-lg leading-relaxed font-light">
                  {place.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
