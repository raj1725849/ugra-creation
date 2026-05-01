import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import CinematicBrand from '@/components/sections/CinematicBrand'
import Philosophy from '@/components/sections/Philosophy'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <CinematicBrand />
      <Philosophy />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
