"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Instagram, MapPin, ArrowRight, Sparkles, Heart } from "lucide-react"
import { fadeInUp, fadeIn, viewport, staggerContainer } from "@/lib/animation-variants"
import { RiWhatsappLine } from "@remixicon/react"

export function FinalCTA() {
  return (
    <Section className="bg-primary text-stone-50 py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements - Static for mobile performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs - static */}
        <div className="absolute -top-40 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-stone-300/5 rounded-full blur-3xl" />
        
        {/* Decorative circles - hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full" />
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-white/5 rounded-full" />
        
        {/* Decorative icons - hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-[20%]">
          <Sparkles className="w-4 h-4 text-white/30" />
        </div>
        <div className="hidden md:block absolute bottom-32 right-[25%]">
          <Heart className="w-3 h-3 text-white/20" />
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.2em] uppercase text-white/90 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Sua transformação começa aqui
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
          >
            Pronto para agendar sua consulta?
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Protocolos científicos personalizados, atendimento humanizado e resultados comprovados em cada procedimento.
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Button 
              size="lg" 
              className="h-14 px-8 text-base w-full sm:w-auto bg-white text-primary hover:bg-stone-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full  group" 
              asChild
            >
              <Link href="/quiz">
                <RiWhatsappLine className="mr-2 w-5 h-5" />
                Agendar pelo WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="h-14 px-8 text-base w-full sm:w-auto bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full  backdrop-blur-sm transition-all duration-300" 
              asChild
            >
              <a href="https://www.instagram.com/bruelclinic/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 w-5 h-5" />
                Siga no Instagram
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeIn}
            className="pt-12 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Resposta em até 2h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Niterói, RJ</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}