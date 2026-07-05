import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import PackagingTypesSection from '@/components/sections/PackagingTypesSection'
import StylesSection from '@/components/sections/StylesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import TeamSection from '@/components/sections/TeamSection'
import FeedbackSection from '@/components/sections/FeedbackSection'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PackagingTypesSection />
      <StylesSection />
      <PortfolioSection />
      <TeamSection />
      <FeedbackSection />
      <Footer />
    </main>
  )
}
