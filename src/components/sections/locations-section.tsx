"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function LocationsSection({ dict }: { dict: Dictionary["locations"] }) {
  return (
    <section className="py-24 md:py-32 bg-card relative border-y border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            {dict.title}
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 font-sans max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.places.map((place, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
            >
              <div className="p-3 bg-primary/5 rounded-full w-fit mb-6 group-hover:bg-primary/10 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-3">{place.name}</h3>
              <p className="text-foreground/70 font-sans leading-relaxed">
                {place.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
