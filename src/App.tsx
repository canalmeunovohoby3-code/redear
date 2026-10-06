import { motion, useScroll, useSpring } from 'framer-motion'
import { ContactForm } from './components/ContactForm'
import { CredibilityBar } from './components/CredibilityBar'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Journey } from './components/Journey'
import { MapSection } from './components/MapSection'
import { Solutions } from './components/Solutions'
import { TubingHighlight } from './components/TubingHighlight'
import { VideoSection } from './components/VideoSection'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { WhyRedeAr } from './components/WhyRedeAr'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-brand"
      aria-hidden="true"
    />
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:bg-navy-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <CredibilityBar />
        <Solutions />
        <TubingHighlight />
        <VideoSection />
        <Journey />
        <Gallery />
        <WhyRedeAr />
        <CtaBanner />
        <ContactForm />
        <MapSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
