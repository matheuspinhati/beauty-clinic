"use client"

const tricologia = [
  "Consulta Tricológica",
  "Terapia Capilar",
  "Fotobiomodulação",
  "Microagulhamento Capilar",
  "Intradermoterapia",
  "Head Spa",
]

const estetica = [
  "Toxina Botulínica",
  "Bioestimuladores",
  "Skinbooster",
  "Peeling Químico",
  "Microagulhamento Facial",
  "Lipo de Papada",
]

export function TreatmentsMarquee() {
  return (
    <section className="py-10 md:py-12 bg-stone-50 border-y border-stone-100 overflow-hidden relative">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-8 md:gap-10">
        {/* Tricologia Row */}
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="px-4 md:px-8 relative z-20">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block font-sans">
              Tricologia Especializada
            </span>
          </div>
          <div className="relative flex overflow-hidden">
            <div 
              className="flex gap-3 md:gap-4 animate-marquee-left will-change-transform"
              style={{ width: "max-content" }}
            >
              {[...tricologia, ...tricologia, ...tricologia].map((item, index) => (
                <div
                  key={`trico-1-${index}`}
                  className="flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-sans font-medium shadow-sm whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
            <div 
              className="flex gap-3 md:gap-4 animate-marquee-left will-change-transform"
              style={{ width: "max-content" }}
              aria-hidden="true"
            >
              {[...tricologia, ...tricologia, ...tricologia].map((item, index) => (
                <div
                  key={`trico-2-${index}`}
                  className="flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-sans font-medium shadow-sm whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estética Row */}
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="px-4 md:px-8 text-right relative z-20">
            <span className="text-xs font-bold uppercase tracking-widest text-primary/60 block font-sans">
              Estética Facial Avançada
            </span>
          </div>
          <div className="relative flex overflow-hidden">
            <div 
              className="flex gap-3 md:gap-4 animate-marquee-right will-change-transform"
              style={{ width: "max-content" }}
            >
              {[...estetica, ...estetica, ...estetica].map((item, index) => (
                <div
                  key={`est-1-${index}`}
                  className="flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-sans font-medium shadow-sm whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
            <div 
              className="flex gap-3 md:gap-4 animate-marquee-right will-change-transform"
              style={{ width: "max-content" }}
              aria-hidden="true"
            >
              {[...estetica, ...estetica, ...estetica].map((item, index) => (
                <div
                  key={`est-2-${index}`}
                  className="flex-shrink-0 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white border border-stone-200 text-stone-600 text-sm font-sans font-medium shadow-sm whitespace-nowrap"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





