"use client"

import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Sparkles, ArrowRight, Star, CheckCircle2 } from "lucide-react"
import { fadeInUp, fadeInRight } from "@/lib/animation-variants"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-30 md:pt-20 lg:pt-0 bg-gradient-to-br from-stone-50 via-white to-stone-50">
      {/* Background Elements - Simplified for mobile performance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Static gradient orbs for mobile, animated on desktop - Enhanced with primary color */}
        <div className="absolute -top-[20%] -right-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/8 rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-primary/5 rounded-full blur-3xl opacity-30" />
        
        {/* Decorative elements - hidden on mobile - Enhanced with primary color */}
        <div className="hidden md:block absolute top-1/4 left-[15%] w-2 h-2 bg-primary/30 rounded-full" />
        <div className="hidden md:block absolute top-1/3 right-[20%] w-1.5 h-1.5 bg-primary/40 rounded-full" />
        <div className="hidden md:block absolute bottom-1/4 left-[30%] w-1 h-1 bg-primary/30 rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl text-center lg:text-left space-y-8 order-2 lg:order-1"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Niterói • RJ
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-stone-800 leading-[1.1]">
                Tricologia{" "}
                <span className="text-primary relative">
                  Especializada
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 6 Q50 0, 100 6 T200 6" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>
                <br />
                <span className="italic text-stone-400 text-2xl md:text-4xl lg:text-5xl font-light">
                  & Estética Natural
                </span>
              </h1>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-stone-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Protocolos científicos, tecnologia avançada e uma experiência sensorial única para realçar sua melhor versão com <strong className="text-primary">segurança e elegância</strong>.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-stone-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-stone-600">19 anos de experiência</span>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button 
                variant="premium" 
                size="lg" 
                className="h-14 px-8 text-base relative overflow-hidden group rounded-full shadow-xl hover:shadow-2xl transition-all duration-300" 
                asChild
              >
                <Link href="/quiz">
                  <span className="relative z-10 flex items-center gap-2">
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base border-primary/30 hover:bg-primary/5 text-stone-600 hover:text-primary rounded-full transition-all duration-300" 
                asChild
              >
                <a href="#servicos">
                  Conhecer Tratamentos
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-primary/10">
                <Image 
                  src="/hero-section.webp" 
                  alt="Bruel Beauty Clinic" 
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Gradient - Enhanced with primary color */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Decorative frame - Enhanced with primary color */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/15 rounded-3xl -z-10" />

              {/* Floating Badge - Experience - Enhanced with primary color */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", type: "tween" }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-primary/10 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <span className="text-xl font-serif font-bold">19</span>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-semibold">Anos de</p>
                    <p className="text-stone-800 font-serif text-lg">Experiência</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Top Right */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1, type: "tween" }}
                className="absolute -top-4 -right-4 bg-white py-3 px-4 rounded-xl shadow-lg border border-primary/10 hidden lg:flex items-center gap-2"
              >
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-xs font-medium text-stone-600">5.0 estrelas</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  )
}