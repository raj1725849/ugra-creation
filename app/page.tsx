import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BrandStory from '@/components/sections/BrandStory'
import Benefits from '@/components/sections/Benefits'
import CinematicBrand from '@/components/sections/CinematicBrand'
import Philosophy from '@/components/sections/Philosophy'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Portfolio from '@/components/sections/Portfolio'
import TrustSignals from '@/components/sections/TrustSignals'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandStory />
      <Benefits />
      <CinematicBrand />
      <Philosophy />
      <Services />
      <Process />
      <Portfolio />
      <TrustSignals />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
