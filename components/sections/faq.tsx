"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { fadeInLeft, fadeInUp, staggerContainer, viewport } from "@/lib/animation-variants"
import { RiWhatsappLine } from "@remixicon/react"

const faqs = [
  {
    question: "Para quem os tratamentos são indicados?",
    answer: "Homens e mulheres de 30 a 65 anos buscando saúde capilar, rejuvenescimento ou bem-estar.",
  },
  {
    question: "Quando os resultados aparecem?",
    answer: "Variam por protocolo — tricologia entre 3–6 meses e estética entre 7–90 dias.",
  },
  {
    question: "Como funciona a consulta tricológica?",
    answer: "Inclui anamnese completa, tricoscopia e definição do plano de tratamento personalizado.",
  },
  {
    question: "Há contraindicações?",
    answer: "Alguns procedimentos possuem contraindicações específicas que serão informadas detalhadamente durante o atendimento.",
  },
  {
    question: "A clínica trabalha com convênio?",
    answer: "Não, trabalhamos apenas com atendimentos particulares para garantir a qualidade e exclusividade do serviço.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" className="bg-stone-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <motion.div 
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="lg:col-span-2"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Perguntas <br />
              <span className="italic text-stone-500">Frequentes</span>
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8">
              Reunimos as dúvidas mais comuns dos nossos pacientes. Se tiver outras perguntas, entre em contato conosco.
            </p>
            

          </motion.div>

          {/* Right Column - FAQ Items */}
          <motion.div 
            className="lg:col-span-3 space-y-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <div 
                    className={`bg-white rounded-xl border overflow-hidden transition-all duration-300 ${
                      isOpen 
                        ? "border-primary/30 shadow-lg shadow-primary/5" 
                        : "border-stone-200 hover:border-stone-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center gap-4 p-5 text-left transition-colors"
                    >
                      {/* Number Badge */}
                      <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                        isOpen 
                          ? "bg-primary text-white" 
                          : "bg-stone-100 text-stone-500"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      
                      <span className={`flex-1 font-medium transition-colors ${
                        isOpen ? "text-primary" : "text-stone-800"
                      }`}>
                        {faq.question}
                      </span>
                      
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen 
                          ? "bg-primary text-white rotate-0" 
                          : "bg-stone-100 text-stone-500"
                      }`}>
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pl-[68px]">
                            <div className="pt-2 border-t border-stone-100">
                              <p className="text-stone-600 leading-relaxed pt-4">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
        
        {/* Contact Card - Bottom for Mobile/Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <RiWhatsappLine className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-stone-800 mb-2">Ainda tem dúvidas?</h3>
                <p className="text-stone-600 mb-4">Caso sua dúvida não esteja listada acima, nossa equipe está pronta para te atender.</p>
                <Link 
                  href="/quiz"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Fale conosco no WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}