import { useEffect } from "react"
import { Navbar } from "../components/landing/Navbar"
import { HeroSection } from "../components/landing/HeroSelection"
import { FeaturesSection } from "../components/landing/FeaturesSection"
import { HowItWorks } from "../components/landing/HowItWorks"
import { DashboardPreviewSection } from "../components/landing/DashboardPreviewSection"
import { BenefitsSection } from "../components/landing/BenefitsSection"
import { TestimonialsSection } from "./TestimonialsSection"
import { CTASection } from "../components/landing/CTASection"
import { Footer } from "../components/landing/Footer"

export function Landing(){

    useEffect(()=>{
        const prev = document.documentElement.getAttribute('data-time')
        document.documentElement.setAttribute('data-theme', 'light')
        return () => {
            if(prev) document.documentElement.setAttribute('data-theme', prev)
        }
    },[])

    return (
        <>
            <div className="min-h-screen bg-(--bg) text-(--ink)">
                <Navbar />
                <main style={{ background: 'white' }}>
                    <HeroSection />
                    <FeaturesSection />
                    <HowItWorks />
                    <DashboardPreviewSection />
                    <BenefitsSection />
                    <TestimonialsSection />
                    <CTASection />
                </main>
                <Footer />
            </div>
        </>
    )
}