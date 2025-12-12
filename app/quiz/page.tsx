"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Check, Sparkles, Leaf, Smile, Phone, User, MessageCircle } from "lucide-react"
import Link from "next/link"
import { RiWhatsappLine } from "@remixicon/react"

type Step = "interest" | "name" | "phone" | "complete"

interface FormData {
  interest: string
  name: string
  phone: string
}

const interests = [
  {
    id: "tricologia",
    label: "Tricologia",
    description: "Queda de cabelo, calvicie, dermatite seborreica e outras alterações do couro cabeludo.",
    icon: Sparkles,
  },
  {
    id: "estetica",
    label: "Estética Facial",
    description: "Botox, bioestimuladores e rejuvenescimento.",
    icon: Smile,
  },
  {
    id: "headspa",
    label: "Head Spa",
    description: "Relaxamento, massagem e experiência sensorial.",
    icon: Leaf,
  },
  {
    id: "outro",
    label: "Outro / Dúvida geral",
    description: "Quero saber mais sobre os serviços.",
    icon: MessageCircle,
  },
]

export default function QuizPage() {
  const [step, setStep] = useState<Step>("interest")
  const [formData, setFormData] = useState<FormData>({
    interest: "",
    name: "",
    phone: "",
  })
  const [isTransitioning, setIsTransitioning] = useState(false)

  const progress = step === "interest" ? 33 : step === "name" ? 66 : step === "phone" ? 100 : 100

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (step === "interest") setStep("name")
      else if (step === "name") setStep("phone")
      else if (step === "phone") setStep("complete")
      setIsTransitioning(false)
    }, 300)
  }

  const handleBack = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      if (step === "name") setStep("interest")
      else if (step === "phone") setStep("name")
      setIsTransitioning(false)
    }, 300)
  }

  const handleInterestSelect = (interestId: string) => {
    setFormData({ ...formData, interest: interestId })
    setTimeout(() => handleNext(), 400)
  }

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const getInterestLabel = () => {
    const interest = interests.find(i => i.id === formData.interest)
    return interest?.label || ""
  }

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Olá! Vim pelo site da Bruel Beauty Clinic.\n\n` +
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `Interesse: ${getInterestLabel()}\n\n` +
      `Gostaria de agendar uma consulta!`
    )
    return `https://wa.me/5521972513296?text=${message}`
  }

  const canProceed = () => {
    if (step === "interest") return formData.interest !== ""
    if (step === "name") return formData.name.trim().length >= 3
    if (step === "phone") return formData.phone.replace(/\D/g, "").length >= 10
    return true
  }

  // Auto-redirect when complete
  useEffect(() => {
    if (step === "complete") {
      const timer = setTimeout(() => {
        window.location.href = getWhatsAppLink()
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [step])

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100 flex flex-col">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Bruel Beauty Clinic" className="h-10 w-auto" />
          </Link>
          <Link 
            href="/" 
            className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="px-4">
        <div className="max-w-2xl mx-auto">
          <div className="h-1 bg-stone-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {/* Step 1: Interest */}
            {step === "interest" && (
              <motion.div
                key="interest"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2"
                  >
                    <Sparkles className="w-8 h-8" />
                  </motion.div>
                  <h1 className="text-3xl md:text-4xl font-serif text-stone-800">
                    Como podemos te ajudar?
                  </h1>
                  <p className="text-stone-500 text-lg">
                    Selecione o que mais te interessa
                  </p>
                </div>

                <div className="grid gap-4">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon
                    const isSelected = formData.interest === interest.id
                    return (
                      <motion.button
                        key={interest.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        onClick={() => handleInterestSelect(interest.id)}
                        className={`group relative w-full p-5 rounded-2xl border-2 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                            : "border-stone-200 bg-white hover:border-primary/50 hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected ? "bg-primary text-white" : "bg-stone-100 text-stone-500 group-hover:bg-primary/10 group-hover:text-primary"
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className={`font-semibold text-lg transition-colors ${
                              isSelected ? "text-primary" : "text-stone-800"
                            }`}>
                              {interest.label}
                            </h3>
                            <p className="text-stone-500 text-sm">
                              {interest.description}
                            </p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected 
                              ? "border-primary bg-primary text-white" 
                              : "border-stone-300"
                          }`}>
                            {isSelected && <Check className="w-4 h-4" />}
                          </div>
                        </div>
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Name */}
            {step === "name" && (
              <motion.div
                key="name"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2"
                  >
                    <User className="w-8 h-8" />
                  </motion.div>
                  <h1 className="text-3xl md:text-4xl font-serif text-stone-800">
                    Qual é o seu nome?
                  </h1>
                  <p className="text-stone-500 text-lg">
                    Como podemos te chamar?
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="text"
                    placeholder="Nome e sobrenome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onKeyDown={(e) => e.key === "Enter" && canProceed() && handleNext()}
                    autoFocus
                    className="w-full px-6 py-5 text-xl text-center bg-white border-2 border-stone-200 rounded-2xl focus:border-primary focus:ring-0 focus:outline-none transition-colors placeholder:text-stone-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between pt-4"
                >
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-stone-500 hover:text-stone-700 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                      canProceed()
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    Continuar
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Step 3: Phone */}
            {step === "phone" && (
              <motion.div
                key="phone"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center space-y-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2"
                  >
                    <Phone className="w-8 h-8" />
                  </motion.div>
                  <h1 className="text-3xl md:text-4xl font-serif text-stone-800">
                    Seu telefone
                  </h1>
                  <p className="text-stone-500 text-lg">
                    Para entrarmos em contato com você
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <input
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                    onKeyDown={(e) => e.key === "Enter" && canProceed() && handleNext()}
                    autoFocus
                    className="w-full px-6 py-5 text-xl text-center bg-white border-2 border-stone-200 rounded-2xl focus:border-primary focus:ring-0 focus:outline-none transition-colors placeholder:text-stone-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-between pt-4"
                >
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-stone-500 hover:text-stone-700 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                      canProceed()
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    Finalizar
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </motion.div>
            )}

            {/* Step 4: Complete */}
            {step === "complete" && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 text-green-600"
                >
                  <Check className="w-12 h-12" />
                </motion.div>

                <div className="space-y-3">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl md:text-4xl font-serif text-stone-800"
                  >
                    Perfeito, {formData.name.split(" ")[0]}! 🎉
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-stone-500 text-lg"
                  >
                    Redirecionando para o WhatsApp...
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  </div>
                </motion.div>

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  href={getWhatsAppLink()}
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <RiWhatsappLine className="w-5 h-5" />
                  Clique aqui se não for redirecionado
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center">
        <p className="text-sm text-stone-400">
          Suas informações estão seguras conosco
        </p>
      </footer>
    </div>
  )
}

