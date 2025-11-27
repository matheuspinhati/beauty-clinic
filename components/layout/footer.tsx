"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react"

const quickLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Head Spa", href: "#head-spa" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
]

const services = [
  "Consulta Tricológica",
  "Terapia Capilar",
  "Fotobiomodulação",
  "Toxina Botulínica",
  "Bioestimuladores",
  "Head Spa",
]

export function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-600 relative overflow-hidden border-t border-stone-200">
      {/* Main Footer Content */}
      <div className="pt-16 pb-8">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block group">
                <Image 
                  src="/logo.png" 
                  alt="Bruel Beauty Clinic" 
                  width={192}
                  height={64}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="mt-6 text-sm leading-relaxed text-stone-500 max-w-xs">
                Tricologia especializada e estética natural em Niterói. Protocolos científicos, tecnologia avançada e experiência premium.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary flex items-center justify-center text-primary hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-stone-800 font-semibold mb-5 text-sm uppercase tracking-wider">Navegação</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-stone-500 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4 className="text-stone-800 font-semibold mb-5 text-sm uppercase tracking-wider">Serviços</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-sm text-stone-500">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-stone-800 font-semibold mb-5 text-sm uppercase tracking-wider">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-stone-500">
                    Rua Quinze de Novembro, 90<br />
                    Sala 604 – Centro, Niterói/RJ
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+5521972513296" className="text-sm text-stone-500 hover:text-primary transition-colors">
                    (21) 97251-3296
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:contato@bruelclinic.com.br" className="text-sm text-stone-500 hover:text-primary transition-colors">
                    contato@bruelclinic.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-stone-500">
                    Seg - Sex: 09h às 19h<br />
                    Sábado: 09h às 13h
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-stone-500">
              © {new Date().getFullYear()} Bruel Beauty Clinic. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-xs text-stone-500">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
