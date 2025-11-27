"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, Brain, Droplets, Wind, Leaf, ArrowRight } from "lucide-react"

const benefits = [
  { text: "Redução de estresse e tensão", icon: Brain },
  { text: "Diminuição de dores de cabeça", icon: Heart },
  { text: "Controle de oleosidade e caspa", icon: Droplets },
  { text: "Estímulo do crescimento saudável", icon: Leaf },
  { text: "Sensação imediata de leveza", icon: Wind },
  { text: "Melhora da saúde dos fios", icon: Sparkles },
]

export function HeadSpa() {
  return (
    <Section id="head-spa" className="bg-primary text-stone-50 overflow-hidden relative">
      {/* Background elements - Static for better mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 md:w-96 h-64 md:h-96 bg-stone-300/5 rounded-full blur-3xl" />
        {/* Decorative dots - hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 right-1/4 w-1 h-1 bg-white/20 rounded-full" />
        <div className="hidden md:block absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full" />
        <div className="hidden md:block absolute bottom-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full" />
      </div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.2em] uppercase text-white/90 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Exclusividade em Niterói
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Head Spa{" "}
              <span className="italic text-stone-300 block mt-2">Experience</span>
            </h2>
            
            <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-lg">
              O <strong className="text-white">Head Spa Bruel</strong> combina saúde capilar e relaxamento profundo em uma experiência sensorial premium. Um dos poucos Head Spa da região — e o único com integração completa à tricologia.
            </p>
            
            {/* Benefits Grid - Optimized for mobile */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-stone-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-stone-300">{benefit.text}</span>
                  </div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-stone-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-14 px-8 rounded-full font-semibold group"
                asChild
              >
                <a href="/quiz">
                  Agendar Experiência
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img src="/head-spa.jpg" alt="Head Spa Experience" className="w-full h-full object-cover" />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              </div>
              
              {/* Floating Badge - Top - Hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider">Experiência</p>
                    <p className="text-stone-800 font-serif font-medium">Premium</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge - Bottom - Hidden on mobile */}
              <div className="hidden md:block absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                    <span className="text-lg font-serif font-bold">90</span>
                  </div>
                  <div>
                    <p className="text-xs text-white/70 uppercase tracking-wider">Minutos de</p>
                    <p className="text-white font-serif">Relaxamento</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
