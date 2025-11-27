"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Sparkles, ArrowRight, Star, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 lg:pt-0 bg-gradient-to-br from-stone-50 via-white to-stone-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-[20%] -left-[10%] w-[800px] h-[800px] bg-stone-200/50 rounded-full blur-3xl" 
        />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-[15%] w-2 h-2 bg-primary/20 rounded-full" />
        <div className="absolute top-1/3 right-[20%] w-1.5 h-1.5 bg-stone-300/40 rounded-full" />
        <div className="absolute bottom-1/4 left-[30%] w-1 h-1 bg-primary/30 rounded-full" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white border border-stone-200 text-xs font-bold tracking-[0.15em] uppercase text-primary mb-6 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Niterói • RJ
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-stone-800 leading-[1.1]">
                Tricologia{" "}
                <span className="text-primary relative">
                  Especializada
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                    <path d="M0 6 Q50 0, 100 6 T200 6" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>
                <span className="italic text-stone-400 text-2xl md:text-4xl lg:text-5xl font-light block mt-3">
                  & Estética Natural
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-lg lg:text-xl text-stone-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Protocolos científicos, tecnologia avançada e uma experiência sensorial única para realçar sua melhor versão com <strong className="text-stone-800">segurança e elegância</strong>.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-stone-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>19 anos de experiência</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>+500 pacientes</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-2"
            >
              <Button 
                variant="premium" 
                size="lg" 
                className="h-14 px-8 text-base relative overflow-hidden group rounded-full shadow-xl hover:shadow-2xl transition-all duration-300" 
                asChild
              >
                <a href="/quiz">
                  <span className="relative z-10 flex items-center gap-2">
                    Agendar Consulta
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base border-stone-300 hover:bg-stone-50 text-stone-600 rounded-full" 
                asChild
              >
                <a href="#servicos">
                  Conhecer Tratamentos
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-stone-200/50">
                <img 
                  src="/hero.png" 
                  alt="Bruel Beauty Clinic" 
                  className="object-cover w-full h-full"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/10 rounded-3xl -z-10" />

              {/* Floating Badge - Experience */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-100 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white">
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
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-white py-3 px-4 rounded-xl shadow-lg border border-stone-100 hidden lg:flex items-center gap-2"
              >
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
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
