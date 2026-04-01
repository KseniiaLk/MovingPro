import { Header } from './components/Header'
import { FloatingQuestionButton } from './components/FloatingQuestionButton'
import { HeroSection } from './components/HeroSection'
import { InfoSection } from './components/InfoSection'
import { VideoSection } from './components/VideoSection'
import { BenefitsSection } from './components/BenefitsSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter',sans-serif]">
      <Header />
      <HeroSection />
      <InfoSection />
      <VideoSection />
      <BenefitsSection />
      <div
        className="h-20 w-full bg-gradient-to-b from-indigo-100 via-slate-700 to-slate-900"
        aria-hidden
      />
      <Footer />
      <FloatingQuestionButton />
    </div>
  )
}
