import { useEffect, useState, useCallback } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CustomCursor from './components/CustomCursor'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import MarqueeSection from './components/MarqueeSection'
import ExperienceSection from './components/ExperienceSection'
import WorkSection from './components/WorkSection'
import SkillsSection from './components/SkillsSection'
import CredentialsSection from './components/CredentialsSection'
import ServicesSection from './components/ServicesSection'
import WhySection from './components/WhySection'
import ContactSection from './components/ContactSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  useEffect(() => {
    if (loading) return

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    })

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateLenis)
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger once DOM layout stabilizes
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 500)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateLenis)
    }
  }, [loading])

  return (
    <>
      <CustomCursor />

      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {!loading && (
        <div>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <MarqueeSection />
            <ExperienceSection />
            <WorkSection />
            <SkillsSection />
            <CredentialsSection />
            <ServicesSection />
            <WhySection />
            <ContactSection />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
