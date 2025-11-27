"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search } from "lucide-react"
import { fadeInUp, staggerContainer, viewport } from "@/lib/animation-variants"

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-stone-200/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-stone-300/40 rounded-full" />
      </div>

      <Container className="relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          viewport={viewport}
        >
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 rounded-3xl bg-white shadow-xl border border-stone-100 flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <Search className="w-10 h-10 text-primary/40" />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-serif text-primary font-medium">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-800">
              Página não encontrada
            </h2>
            <p className="text-stone-500 text-lg max-w-md mx-auto leading-relaxed">
              A página que você está procurando não existe, foi movida ou o link está incorreto.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button 
              variant="premium" 
              size="lg" 
              className="rounded-full px-8 w-full sm:w-auto"
              asChild
            >
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 w-full sm:w-auto bg-white hover:bg-stone-50"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  )
}
