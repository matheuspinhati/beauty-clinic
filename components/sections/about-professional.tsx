"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { BadgeCheck, GraduationCap, Award } from "lucide-react"
import { fadeInUp, fadeInRight, scaleIn, staggerContainer, viewport } from "@/lib/animation-variants"

const qualifications = [
  {
    title: "Mestre em Saúde e Tecnologia",
  },
  {
    title: "Especialista em Tricologia Clínica",
  },
  {
    title: "Especialista em Dermatologia e Estética",
  },
  {
    title: "Especialista em Controle de Infecção",
  },
  {
    title: "Graduada em Enfermagem pela UFRJ",
  },
]

const courses = [
  "Toxina Botulínica",
  "Preenchimento Facial",
  "Ultraformer MPT e Bioestimuladores",
  "Terapia Capilar"
]

export function AboutProfessional() {
  return (
    <Section id="profissional" className="bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
              <BadgeCheck className="w-3.5 h-3.5" />
              A Profissional
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-4 leading-tight">
              Bruna Rocha da Silva
            </h2>
            <p className="text-sm text-stone-600 mb-2">COREN-RJ: 153.186</p>
            <p className="text-lg text-primary font-medium mb-6">Tricologista e Esteta</p>
            
            <div className="space-y-4 mb-10">
              <p className="text-stone-800 leading-relaxed text-lg">
                Bruna Rocha possui <strong className="text-stone-800">19 anos de experiência</strong> em saúde, com formação robusta e atuação focada em segurança, técnica refinada e resultados consistentes.
              </p>
              <p className="text-stone-800 leading-relaxed text-lg">
                Unindo conhecimento técnico profundo à sensibilidade estética, traz para Niterói uma abordagem moderna, precisa e acolhedora.
              </p>
            </div>

            <div className="grid gap-6">
              {/* Formação Acadêmica - Timeline Style */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-stone-800">Formação Acadêmica</h3>
                </div>
                <div className="space-y-4">
                  {qualifications.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-stone-800 font-medium">{item.title}</p>

                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 relative shadow-2xl ring-1 ring-stone-200/50">
                <Image 
                  src="/bruna.JPG" 
                  alt="Bruna Rocha da Silva" 
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-serif text-2xl md:text-3xl mb-1">Bruna Rocha</p>
                  <p className="text-sm text-white/80 uppercase tracking-wider">Tricologista • Esteta</p>
                </div>
              </div>
              
              {/* Decorative elements - Hidden on mobile */}
              <div className="hidden md:block absolute -top-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
              
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}