"use client"

import { motion } from "motion/react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Star, Quote } from "lucide-react"
import { fadeInUp, staggerContainer, viewport } from "@/lib/animation-variants"

const testimonials = [
  {
    name: "Ana Paula",
    role: "Paciente Tricologia",
    text: "A Dra. Bruna é incrível! O tratamento capilar mudou minha autoestima. O ambiente é lindo e super acolhedor.",
    rating: 5,
    initials: "AP",
    color: "from-stone-600 to-stone-700",
  },
  {
    name: "Mariana Costa",
    role: "Paciente Head Spa",
    text: "Fiz o Head Spa e foi a melhor experiência relaxante que já tive. Saí de lá renovada. Recomendo muito!",
    rating: 5,
    initials: "MC",
    color: "from-primary to-primary/80",
  },
  {
    name: "Fernanda Lima",
    role: "Paciente Estética",
    text: "Profissionalismo impecável. Os resultados do meu tratamento facial foram visíveis logo nas primeiras sessões.",
    rating: 5,
    initials: "FL",
    color: "from-stone-500 to-stone-600",
  },
]

export function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
            <Star className="w-3.5 h-3.5 fill-primary" />
            Avaliações 5 estrelas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-4">
            Histórias de Transformação
          </h2>
          <p className="text-stone-600 text-lg">
            Depoimentos reais de pacientes que transformaram sua autoestima
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div className="relative h-full bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:border-stone-200 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute -top-4 right-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                {/* Stars - Static for better mobile performance */}
                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-stone-600 leading-relaxed mb-8 min-h-[100px]">
                  "{item.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="font-serif text-stone-800 font-medium">
                      {item.name}
                    </p>
                    <p className="text-xs text-stone-500 uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Trust Badge */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-stone-200 shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-600 to-stone-700 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/80 border-2 border-white" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-500 to-stone-600 border-2 border-white" />
            </div>
            <span className="text-sm text-stone-600">
              <strong className="text-stone-800">+500</strong> pacientes satisfeitas
            </span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}