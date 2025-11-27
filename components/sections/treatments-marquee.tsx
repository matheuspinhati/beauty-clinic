"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const tricologia = [
  "Consulta Tricológica",
  "Terapia Capilar",
  "Fotobiomodulação",
  "Microagulhamento Capilar",
  "Intradermoterapia",
  "Head Spa",
]

const estetica = [
  "Toxina Botulínica",
  "Bioestimuladores",
  "Skinbooster",
  "Peeling Químico",
  "Microagulhamento Facial",
  "Lipo de Papada",
]

export function TreatmentsMarquee() {
  return (
    <section className="py-12 bg-stone-50 border-y border-stone-100 overflow-hidden relative">
      {/* Gradient Masks - Reduced width on mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-10">
        {/* Tricologia Row */}
        <div className="flex flex-col gap-4">
          <div className="px-4 md:px-8 relative z-20">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block mb-2 font-sans">
              Tricologia Especializada
            </span>
          </div>
          <div className="relative flex overflow-hidden">
            <motion.div 
              className="flex gap-3 md:gap-4 px-4"
              animate={{ x: "-50%" }}
              transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity 
              }}
              style={{ width: "max-content" }}
            >
              {[...tricologia, ...tricologia, ...tricologia, ...tricologia].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex-shrink-0 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-sans font-medium shadow-sm hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-300 cursor-default whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Estética Row */}
        <div className="flex flex-col gap-4">
          <div className="px-4 md:px-8 text-right relative z-20">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block mb-2 font-sans">
              Estética Facial Avançada
            </span>
          </div>
          <div className="relative flex overflow-hidden">
            <motion.div 
              className="flex gap-3 md:gap-4 px-4"
              animate={{ x: "0%" }}
              initial={{ x: "-50%" }}
              transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity 
              }}
              style={{ width: "max-content" }}
            >
              {[...estetica, ...estetica, ...estetica, ...estetica].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex-shrink-0 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-sans font-medium shadow-sm hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-300 cursor-default whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
