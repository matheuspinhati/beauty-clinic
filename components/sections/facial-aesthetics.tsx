"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, Check } from "lucide-react"
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, viewport } from "@/lib/animation-variants"

const indications = [
  "Linhas finas e rugas",
  "Flacidez facial",
  "Textura irregular",
  "Manchas e melasma",
  "Perda de viço",
  "Contorno facial",
]

export function FacialAesthetics() {
  return (
    <Section className="bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-stone-200/50 relative">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                
                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20">
                    <p className="font-serif italic text-white text-lg leading-relaxed">
                      "Beleza que realça, não que transforma."
                    </p>
                    <p className="text-white/70 text-sm mt-2">— Filosofia Bruel</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/10 rounded-3xl -z-10" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="order-1 lg:order-2"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Estética Facial
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Resultados Naturais &{" "}
              <span className="italic text-stone-500 block mt-1">Protocolos Científicos</span>
            </h2>
            
            <p className="text-stone-600 leading-relaxed mb-8 text-lg">
              Os tratamentos faciais da Bruel seguem uma linha natural, com foco em rejuvenescimento progressivo, protocolos combinados e atuação segura. Acreditamos em <strong className="text-stone-800">realçar sua beleza única</strong>, respeitando seus traços.
            </p>

            {/* Indications Card */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm mb-8">
              <h3 className="font-serif text-lg text-stone-800 mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </span>
                Indicado para:
              </h3>
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
              >
                {indications.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInLeft}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-stone-600">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
            >
              <Button 
                variant="premium" 
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                asChild
              >
                <Link href="/quiz">
                  Agendar Avaliação Facial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}