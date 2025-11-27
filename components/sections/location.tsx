"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { MapPin, Clock, Phone, Navigation, Car, Building2 } from "lucide-react"
import { fadeInLeft, fadeInRight, fadeInUp, viewport } from "@/lib/animation-variants"

const neighborhoods = [
  "Centro", "Ingá", "Icaraí", "Santa Rosa", "Charitas", "São Francisco", "Piratininga", "Itaipu", "São Gonçalo"
]

export function Location() {
  return (
    <Section id="localizacao" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">
            <MapPin className="w-3.5 h-3.5" />
            Localização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-800 mb-4">
            Venha nos Visitar
          </h2>
          <p className="text-stone-600 text-lg">
            Estamos no coração de Niterói, prontos para recebê-la
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Info Cards - Left */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="lg:col-span-2 space-y-5"
          >
            {/* Address Card */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-stone-800 mb-3">Endereço</h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    Rua Quinze de Novembro, 90
                  </p>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    Sala 604 – Centro
                  </p>
                  <p className="text-stone-800 font-semibold text-sm mt-1">
                    Niterói/RJ
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 hover:border-stone-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-stone-800 mb-3">Horário</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-stone-500">Segunda a Sexta</span>
                      <span className="text-stone-800 font-medium whitespace-nowrap">09h às 19h</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-stone-500">Sábado</span>
                      <span className="text-stone-800 font-medium whitespace-nowrap">09h às 13h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-primary rounded-2xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg mb-2">Agende sua Consulta</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Entre em contato pelo WhatsApp
                  </p>
                  <Link 
                    href="/quiz"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-primary text-sm hover:bg-stone-100 transition-colors"
                  >
                    (21) 97251-3296
                    <Navigation className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Neighborhoods */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4">
                <Car className="w-4 h-4 text-stone-400" />
                <span className="text-sm text-stone-600 font-medium">Atendemos pacientes de:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-stone-100 text-stone-600 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map - Right */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="lg:col-span-3"
          >
            <div className="h-[520px] lg:h-full lg:min-h-[580px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-stone-200 relative group">
              {/* Map embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.5089847549795!2d-43.12647492392758!3d-22.897299837771946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99820c96e7c3e7%3A0x4e2d76c0e2e0e6e0!2sR.%20Quinze%20de%20Novembro%2C%2090%20-%20Centro%2C%20Niter%C3%B3i%20-%20RJ%2C%2024020-125!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[1.1]"
              />
              
              {/* Overlay button */}
              <a
                href="https://maps.google.com/?q=Rua+Quinze+de+Novembro,+90,+Centro,+Niterói,+RJ"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 flex items-center gap-2 px-5 py-3 rounded-full bg-white shadow-lg font-medium text-stone-800 hover:bg-stone-50 transition-colors"
              >
                <Navigation className="w-4 h-4 text-primary" />
                Abrir no Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}