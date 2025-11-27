"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"
import { ArrowRight, Sparkles, Microscope, Zap, Target, Syringe, Leaf, FlaskConical, Droplets, Paintbrush } from "lucide-react"

const services = {
  tricologia: [
    {
      title: "Consulta Tricológica",
      description: "Avaliação completa com anamnese, tricoscopia e plano de tratamento personalizado.",
      icon: Microscope,
    },
    {
      title: "Terapia Capilar",
      description: "Tratamentos com óleos essenciais e argila para reduzir oleosidade, inflamação e fortalecer o couro cabeludo.",
      icon: Leaf,
    },
    {
      title: "Fotobiomodulação (Laser/LED)",
      description: "Luz de baixa intensidade que estimula ATP, reduz inflamação e auxilia no crescimento capilar.",
      icon: Zap,
    },
    {
      title: "Microagulhamento Capilar",
      description: "Indução de colágeno com drug delivery de ativos específicos para alopecias.",
      icon: Target,
    },
    {
      title: "Intradermoterapia",
      description: "Aplicação de ativos diretamente no couro cabeludo para ação profunda e direcionada.",
      icon: Syringe,
    },
    {
      title: "Head Spa",
      description: "Experiência sensorial de relaxamento profundo com técnicas orientais, massagem e cuidados do couro cabeludo.",
      icon: Sparkles,
    },
  ],
  estetica: [
    {
      title: "Toxina Botulínica",
      description: "Suavização de rugas dinâmicas com resultado natural e seguro.",
      icon: Sparkles,
    },
    {
      title: "Bioestimuladores de Colágeno",
      description: "Estimulação profunda de colágeno para firmeza e rejuvenescimento progressivo.",
      icon: FlaskConical,
    },
    {
      title: "Skinbooster",
      description: "Hidratação profunda com ácido hialurônico não reticulado.",
      icon: Droplets,
    },
    {
      title: "Peeling Químico",
      description: "Renovação celular para manchas, melasma, acne e textura.",
      icon: Paintbrush,
    },
    {
      title: "Microagulhamento Facial",
      description: "Indução de colágeno com ativos clareadores, hidratantes ou anti-idade.",
      icon: Target,
    },
    {
      title: "Lipo Enzimática de Papada",
      description: "Redução de gordura submentoniana sem cirurgia, com melhora do contorno facial.",
      icon: Syringe,
    },
  ],
}

export function Services() {
  const [activeTab, setActiveTab] = useState<"tricologia" | "estetica">("tricologia")

  return (
    <Section id="servicos" className="bg-gradient-to-b from-white via-stone-50/50 to-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-stone-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Nossos Tratamentos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            Serviços Mais Procurados
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-10">
            Protocolos científicos e tecnologia de ponta para resultados reais
          </p>
          
          {/* Tab Buttons - Enhanced */}
          <div className="inline-flex gap-1 p-1.5 rounded-2xl bg-white border border-stone-200 shadow-lg shadow-stone-200/50">
            <button
              onClick={() => setActiveTab("tricologia")}
              className={cn(
                "relative px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden",
                activeTab === "tricologia"
                  ? "text-white"
                  : "text-stone-600 hover:text-stone-800 hover:bg-stone-50"
              )}
            >
              {activeTab === "tricologia" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Microscope className="w-4 h-4" />
                Tricologia
              </span>
            </button>
            <button
              onClick={() => setActiveTab("estetica")}
              className={cn(
                "relative px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden",
                activeTab === "estetica"
                  ? "text-white"
                  : "text-stone-600 hover:text-stone-800 hover:bg-stone-50"
              )}
            >
              {activeTab === "estetica" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Estética Facial
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {services[activeTab].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={`${activeTab}-${service.title}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: index * 0.03,
                    ease: "easeOut"
                  }}
                  className="group"
                >
                  {/* Card */}
                  <div className="h-full p-6 lg:p-7 rounded-2xl bg-white border border-stone-200 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden">
                    {/* Top Row - Icon and Number */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-3xl font-serif font-bold text-stone-100 group-hover:text-primary/20 transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-serif text-stone-800 mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <a 
href="/quiz"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Agendar
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-stone-50 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  )
}
