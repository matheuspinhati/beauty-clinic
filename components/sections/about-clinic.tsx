"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Sparkles, Microscope, Leaf, Heart, Users, Shield } from "lucide-react"

const differentials = [
  { text: "Protocolos exclusivos de tricologia", icon: Microscope },
  { text: "Tecnologia avançada (laser, LED, ultrassom)", icon: Sparkles },
  { text: "Head Spa como experiência premium", icon: Leaf },
  { text: "Ambiente acolhedor e técnico", icon: Heart },
  { text: "Acompanhamento contínuo", icon: Users },
  { text: "Atuação ética e transparente", icon: Shield },
]

export function AboutClinic() {
  return (
    <Section id="sobre" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/3 to-transparent rounded-full blur-3xl -z-0" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 shadow-2xl ring-1 ring-stone-200/50">
                <img 
                  src="/procedure-bruna.jpeg" 
                  alt="Bruel Beauty Clinic" 
                  className="w-full h-full object-cover" 
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-stone-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white">
                    <span className="text-xl font-serif font-bold">19</span>
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Anos de</p>
                    <p className="text-stone-800 font-serif text-lg">Experiência</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Sobre a Clínica
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Experiência Premium em{" "}
              <span className="italic text-stone-500 block mt-1">Saúde e Bem-estar</span>
            </h2>
            
            <div className="space-y-4 mb-10">
              <p className="text-stone-600 leading-relaxed text-lg">
                A <strong className="text-stone-800">Bruel Beauty Clinic</strong> é uma clínica de tricologia especializada e estética avançada, criada para unir resultados reais, segurança e bem-estar em um ambiente premium.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Aqui, cada paciente recebe um atendimento individualizado, baseado em evidências científicas, com protocolos completos que integram saúde capilar, estética facial e um cuidado sensorial único.
              </p>
            </div>

            {/* Differentials Grid - Enhanced */}
            <div className="grid sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-stone-50/50 hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-stone-700 font-medium">{item.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
