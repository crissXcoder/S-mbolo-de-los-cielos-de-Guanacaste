"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function EthicsSection({ dict }: { dict: Dictionary["ethics"] }) {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Decals radial gradients */}
      <div className="absolute left-1/2 -top-40 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex flex-col items-center gap-4">
             <div className="w-1 h-12 bg-primary mb-2 rounded-full" />
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
               {dict.title}
             </h2>
          </div>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Decorative subtle line connecting the checks */}
          <div className="absolute left-[39px] md:left-[47px] top-[40px] bottom-[40px] w-0.5 bg-border/80 hidden md:block" />

          {[
            { title: dict.rule1, desc: dict.rule1Desc },
            { title: dict.rule2, desc: dict.rule2Desc },
            { title: dict.rule3, desc: dict.rule3Desc }
          ].map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, x: 10, transition: { duration: 0.3 } }}
              className="group flex flex-col md:flex-row items-start gap-6 md:gap-8 p-8 lg:p-10 rounded-[2.5rem] bg-card border border-border/50 hover:bg-muted/30 hover:border-primary/20 shadow-lg shadow-black/5 hover:shadow-primary/5 transition-all relative z-10"
            >
              <div className="p-3 md:p-4 rounded-3xl bg-background border-2 border-border shadow-sm group-hover:border-primary group-hover:bg-primary/10 transition-colors shrink-0 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <div className="pt-1">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">{rule.title}</h3>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-sans font-light">{rule.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
