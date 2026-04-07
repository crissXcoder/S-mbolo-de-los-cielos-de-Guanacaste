"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

import type { Dictionary } from "@/i18n/get-dictionary"

export function ScrollFlightSection({ dict }: { dict: any }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // === ANIMACIONES LAPA IZQUIERDA ===
  
  // Posición Y de la lapa dentro de la pantalla
  const lapaY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["60%", "40%", "10%", "-20%"])
  
  // Rotación (se inclina hacia arriba mientras vuela)
  const lapaRotate = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, -15, -25, -35])
  
  // Escala (empieza algo más pequeña posada, se agranda al volar)
  const lapaScale = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.8, 1, 1.2, 1.4])
  
  // Movimiento de alas (flap). Usaremos un efecto de escala Y para simular aleteos
  // Hacemos que aletee dinámicamente usando un cálculo rápido a partir del progreso
  const wingFlap = useTransform(scrollYProgress, (pos) => {
    if (pos < 0.1) return 1 // posada
    // Simular aleteo con un seno rápido
    return Math.abs(Math.sin(pos * 50)) * 0.8 + 0.2
  })

  // Opacidad general (desaparece al final del todo)
  const lapaOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

  // === OPACIDADES DE LOS CARDS (DERECHA) ===
  const card1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [0, 1, 1, 0])
  const card2Opacity = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0])
  const card3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9, 1], [0, 1, 1, 0])

  const card1Y = useTransform(scrollYProgress, [0, 0.15, 0.35], [50, 0, -50])
  const card2Y = useTransform(scrollYProgress, [0.35, 0.45, 0.65], [50, 0, -50])
  const card3Y = useTransform(scrollYProgress, [0.65, 0.75, 1], [50, 0, -50])

  // Fake dictionray fallbacks if not provided in translation file
  const fallbackDict = {
    title1: "El Reposo",
    desc1: "En lo alto de los almendros de montaña, la lapa descansa. Su plumaje escarlata resalta como fuego entre el dosel seco.",
    title2: "El Despegue",
    desc2: "Al alzar el vuelo, sus alas revelan destellos amarillos y azules, un espectáculo cromático vital para la dispersión de semillas.",
    title3: "El Vuelo",
    desc3: "En el aire, son verdaderas arquitectas del bosque. Viajan en parejas, comunicándose con sus distintivos llamados sobre los cielos de Guanacaste."
  }

  const d = dict || fallbackDict

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-background">
      
      {/* CONTENEDOR STICKY */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col md:flex-row items-center border-y border-border/20">
        
        {/* Lado Izquierdo: La Lapa Visual */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center p-8 bg-gradient-to-br from-card to-background">
          <motion.div 
            style={{ 
              y: lapaY, 
              rotate: lapaRotate, 
              scale: lapaScale,
              opacity: lapaOpacity
            }}
            className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
          >
            {/* Lapa Abstracta Premium usando SVGs */}
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_20px_rgba(220,38,38,0.2)]">
              {/* Cuerpo / Cola */}
              <motion.path 
                d="M100 80 Q130 120 110 180 Q90 120 100 80" 
                fill="currentColor" 
                className="text-primary"
              />
              {/* Cabeza */}
              <motion.circle 
                cx="100" cy="70" r="15" 
                fill="currentColor" 
                className="text-primary"
              />
              {/* Pico */}
              <motion.path 
                d="M112 65 Q130 65 125 80 Q118 75 112 75 Z" 
                fill="currentColor" 
                className="text-foreground/80 dark:text-white"
              />
              {/* Ala Trasera (Azul/Amarillo) */}
              <motion.path 
                d="M95 85 Q60 100 80 140 Q90 110 95 85" 
                fill="currentColor" 
                className="text-accent"
                style={{ scaleY: wingFlap, originY: "85px" }}
              />
              {/* Ala Principal Escarlata */}
              <motion.path 
                d="M100 85 Q40 90 70 150 Q90 120 100 85" 
                fill="currentColor" 
                className="text-primary"
                style={{ scaleY: wingFlap, originY: "85px" }}
              />
              {/* Detalle Ala Amarilla */}
              <motion.path 
                d="M95 85 Q50 95 75 130 Q85 100 95 85" 
                fill="currentColor" 
                className="text-secondary"
                style={{ scaleY: wingFlap, originY: "85px" }}
              />
            </svg>
          </motion.div>

          <div className="absolute bottom-8 left-8 text-foreground/20 font-serif text-5xl md:text-8xl font-bold tracking-tighter opacity-10">
            ARA MACAO
          </div>
        </div>

        {/* Lado Derecho: Cards Narrativos */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative flex items-center justify-center p-8 lg:p-20">
          
          <motion.div 
            style={{ opacity: card1Opacity, y: card1Y }}
            className="absolute inset-x-8 md:inset-x-20 bg-card border border-border/50 p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5"
          >
            <div className="w-12 h-1 bg-primary mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{d.title1}</h3>
            <p className="text-muted-foreground text-lg md:text-xl font-sans leading-relaxed">{d.desc1}</p>
          </motion.div>

          <motion.div 
            style={{ opacity: card2Opacity, y: card2Y }}
            className="absolute inset-x-8 md:inset-x-20 bg-card border border-border/50 p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5"
          >
            <div className="w-12 h-1 bg-secondary mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{d.title2}</h3>
            <p className="text-muted-foreground text-lg md:text-xl font-sans leading-relaxed">{d.desc2}</p>
          </motion.div>

          <motion.div 
            style={{ opacity: card3Opacity, y: card3Y }}
            className="absolute inset-x-8 md:inset-x-20 bg-card border border-border/50 p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5"
          >
            <div className="w-12 h-1 bg-accent mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-4">{d.title3}</h3>
            <p className="text-muted-foreground text-lg md:text-xl font-sans leading-relaxed">{d.desc3}</p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
