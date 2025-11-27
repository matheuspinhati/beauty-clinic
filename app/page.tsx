import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TreatmentsMarquee } from "@/components/sections/treatments-marquee";
import { AboutClinic } from "@/components/sections/about-clinic";
import { AboutProfessional } from "@/components/sections/about-professional";
import { Services } from "@/components/sections/services";
import { HeadSpa } from "@/components/sections/head-spa";
import { TrichologyJourney } from "@/components/sections/trichology-journey";
import { FacialAesthetics } from "@/components/sections/facial-aesthetics";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-stone-200">
      <Header />
      <Hero />
      <TreatmentsMarquee />
      <AboutClinic />
      <AboutProfessional />
      <Services />
      <HeadSpa />
      <TrichologyJourney />
      <FacialAesthetics />
      <Testimonials />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
