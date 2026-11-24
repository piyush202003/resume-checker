import { useEffect } from "react"
import { Navbar } from "../components/landing/Navbar"
import { HeroSection } from "../components/landing/HeroSelection"
import { FeaturesSection } from "../components/landing/FeaturesSection"

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
            <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
                <Navbar />
                <main style={{ background: 'white' }}>
                    <HeroSection />
                    <FeaturesSection />
                </main>
            </div>
        </>
    )
}