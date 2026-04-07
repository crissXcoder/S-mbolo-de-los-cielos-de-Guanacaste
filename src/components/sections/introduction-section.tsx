"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function IntroductionSection({ dict }: { dict: Dictionary["introduction"] }) {
  return (
    <section className="py-24 md:py-40 bg-card relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Tarjeta de Intro Centrada / Izquierda */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
             className="md:col-span-12 lg:col-span-8 bg-background border border-border/50 p-10 md:p-16 rounded-3xl shadow-xl shadow-foreground/5 relative"
          >
            <div className="absolute top-0 left-10 w-20 h-1 bg-primary rounded-b-full"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Brain className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">Contexto</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-foreground leading-tight mb-8">
              {dict.title}
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed">
              {dict.body}
            </p>
          </motion.div>

          {/* Decoración lateral en pantallas grandes */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
             className="hidden lg:flex lg:col-span-4 flex-col gap-6"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-lg">
               <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co/KzFB0hkC/image.png')" }}></div>
               <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
               <p className="absolute bottom-6 left-6 text-white font-serif italic text-lg pr-6 drop-shadow-md">
                 "Un destello escarlata entre el dosel seco."
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

