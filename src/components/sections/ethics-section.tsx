"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import type { Dictionary } from "@/i18n/get-dictionary"

export function EthicsSection({ dict }: { dict: Dictionary["ethics"] }) {
  return (
    <section className="py-24 md:py-32 bg-background relative border-b border-border/40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif text-foreground mb-4">
            {dict.title}
          </h2>
        </motion.div>

        <div className="space-y-6 relative">
          {/* Decorative subtle line connecting the checks */}
          <div className="absolute left-[39px] top-[40px] bottom-[40px] w-px bg-border/40 hidden md:block" />

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
              className="group flex flex-col md:flex-row items-start gap-4 p-6 rounded-3xl bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors relative z-10"
            >
              <div className="p-2 rounded-full bg-background border border-border shadow-sm group-hover:border-primary/30 transition-colors shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-medium text-foreground mb-2 font-sans tracking-wide">{rule.title}</h3>
                <p className="text-foreground/70 text-lg leading-relaxed font-sans">{rule.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
