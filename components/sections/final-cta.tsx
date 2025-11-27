"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Instagram, MapPin, MessageCircle, ArrowRight, Sparkles, Heart } from "lucide-react"

export function FinalCTA() {
  return (
    <Section className="bg-primary text-stone-50 py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-stone-300/5 rounded-full blur-3xl"
        />
        
        {/* Decorative elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-white/5 rounded-full"
        />
        
        {/* Floating sparkles */}
        <motion.div
          animate={{ opacity: [0.2, 0.8, 0.2], y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 left-[20%]"
        >
          <Sparkles className="w-4 h-4 text-white/30" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 right-[25%]"
        >
          <Heart className="w-3 h-3 text-white/20" />
        </motion.div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-[0.2em] uppercase text-white/90 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Sua transformação começa aqui
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
          >
            Agende sua consulta e inicie sua{" "}
            <span className="italic text-stone-300 block mt-2">transformação com segurança.</span>
          </motion.h2>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-300 text-lg max-w-2xl mx-auto"
          >
            Protocolos científicos personalizados, atendimento humanizado e resultados comprovados em cada procedimento.
          </motion.p>
          
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Button 
              size="lg" 
              className="h-14 px-8 text-base w-full sm:w-auto bg-white text-primary hover:bg-stone-100 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full font-semibold group" 
              asChild
            >
              <a href="/quiz">
                <MessageCircle className="mr-2 w-5 h-5" />
                Agendar pelo WhatsApp
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              size="lg" 
              className="h-14 px-8 text-base w-full sm:w-auto bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 rounded-full font-semibold backdrop-blur-sm transition-all duration-300" 
              asChild
            >
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 w-5 h-5" />
                Siga no Instagram
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span>+500 pacientes</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
