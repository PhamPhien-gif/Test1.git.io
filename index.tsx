import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import IntroductionSection from "@/components/introduction-section"
import ContractSection from "@/components/contract-section"
import ProjectSection from "@/components/project-section"
import TimelineSection from "@/components/timeline-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ContractSection />
        <ProjectSection />
        <TimelineSection />
      </main>
      <Footer />
    </div>
  )
}

