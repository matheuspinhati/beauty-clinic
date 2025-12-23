"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { Instagram, MapPin, ArrowRight, Globe } from "lucide-react"
import { RiWhatsappLine } from "@remixicon/react"

const links = [
  {
    href: "https://bruelclinic.com.br",
    label: "Visite nosso site",
    icon: Globe,
  },
  {
    href: "https://www.instagram.com/bruelclinic",
    label: "Acesse nosso Instagram",
    icon: Instagram,
  },
  {
    href: "https://api.whatsapp.com/send/?phone=5521972513296&text=Ol%C3%A1%21+Vim+pela+bio+da+Bruel+Beauty+Clinic,+gostaria+de+saber+mais.",
    label: "Fale com a gente",
    icon: RiWhatsappLine,
  },
  {
    href: "https://www.waze.com/en/live-map/directions/br/rj/r.-gen.-andrade-neves,-38?place=ChIJP0GPRduDmQAR2bJ4XuiuSpw",
    label: "Visite nossa clínica",
    icon: MapPin,
  },
]

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-50 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Main content container - max 500px on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-[500px] relative z-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Bruel Beauty Clinic"
              width={200}
              height={67}
              className="h-20 w-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Links container */}
        <div className="space-y-4">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
                  group relative block w-full
                  bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary
                  rounded-2xl p-6
                  shadow-lg hover:shadow-xl
                  transition-all duration-300
                  overflow-hidden
                "
              >
                {/* Background shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Content */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-stone-500">
            Niterói • RJ
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

