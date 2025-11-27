"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { ClipboardList, Search, FileText, Stethoscope, Calendar, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Anamnese Completa",
    description: "Entendemos seu histórico de saúde, hábitos e queixas para uma visão global.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Tricoscopia",
    description: "Análise detalhada do couro cabeludo e fios com tecnologia de magnificação.",
    icon: Search,
  },
  {
    number: "03",
    title: "Diagnóstico",
    description: "Identificação precisa da causa da queda ou alteração capilar.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Protocolo Individualizado",
    description: "Definição das terapias e ativos específicos para o seu caso.",
    icon: Stethoscope,
  },
  {
    number: "05",
    title: "Acompanhamento",
    description: "Sessões programadas e suporte contínuo durante o tratamento.",
    icon: Calendar,
  },
  {
    number: "06",
    title: "Evolução Monitorada",
    description: "Reavaliações periódicas para mensurar resultados e ajustar condutas.",
    icon: TrendingUp,
  },
]

export function TrichologyJourney() {
  return (
    <Section className="bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0" />
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Metodologia Bruel
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            A Jornada do Paciente
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Na Bruel, o tratamento capilar é conduzido de forma científica e personalizada. Esse processo garante segurança, precisão e <strong className="text-primary">resultados reais entre 3 e 6 meses</strong>.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className={`flex items-center gap-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block">
                      <div className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br ${isEven ? 'from-stone-50 to-white' : 'from-white to-stone-50'} border border-stone-200 shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                        <div className={`flex items-start gap-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="flex-1">
                            <h3 className="text-2xl font-serif text-stone-800 mb-2 group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-stone-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Timeline Node */}
                  <div className="relative flex-shrink-0">
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-primary/40 to-primary/10" />
                    )}
                    
                    {/* Icon Circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Number Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-md">
                      <span className="text-xs font-bold text-primary">{step.number}</span>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Premium CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-20 overflow-hidden rounded-3xl"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#252952] to-primary">
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 40%)",
                backgroundSize: "200% 200%",
              }}
            />
            
            {/* Floating orbs */}
            <motion.div
              animate={{
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                x: [0, -25, 0],
                y: [0, 25, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 right-16 w-40 h-40 bg-white/5 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                x: [0, 15, 0],
                y: [0, 15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 left-1/3 w-24 h-24 bg-stone-300/5 rounded-full blur-xl"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Sparkle dots */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-8 left-[15%] w-2 h-2 bg-white/40 rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-12 right-[20%] w-1.5 h-1.5 bg-white/50 rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute bottom-16 left-[25%] w-2 h-2 bg-white/30 rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.4, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-8 right-[30%] w-1.5 h-1.5 bg-stone-300/40 rounded-full"
            />
            
            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-16 w-80 h-80 border border-white/5 rounded-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-sm font-medium text-white/90 tracking-wide">
                Vagas limitadas para este mês
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight"
            >
              Pronto para iniciar sua
              <br />
              <span className="italic text-stone-300">jornada de transformação?</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-white/70 text-lg max-w-md mx-auto mb-10"
            >
              Agende sua avaliação inicial e descubra o protocolo ideal para você.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="inline-block"
            >
          <a
            href="/quiz"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg overflow-hidden shadow-2xl hover:shadow-white/20 transition-all duration-500 hover:scale-105"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                
                {/* Pulsing glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.3)",
                      "0 0 40px rgba(255,255,255,0.5)",
                      "0 0 20px rgba(255,255,255,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                />
                
                <span className="relative z-10">Agendar Consulta Inicial</span>
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="relative z-10 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Resposta em até 2h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Consulta sigilosa</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>+500 pacientes atendidos</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
