import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/Hero"
import { ValueProps } from "@/components/ValueProps";
import {About} from "@/components/About";



export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
        <About />
        <ValueProps />
      <ProblemSolutionSection />
      <FeaturesSection />
      <SocialProofSection />
      <HowItWorksSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
