import { PhoneCall, Search, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { motion } from 'framer-motion'
import { SectionHeader } from "./FeaturesSection";

const BENEFITS = [
  {
    icon: PhoneCall,
    title: "3.2× more callbacks",
    desc: "Users hit interview rates that matched their target roles, not their fears.",
  },
  {
    icon: ShieldCheck,
    title: "Parsed by every ATS",
    desc: "Greenhouse, Lever, Workday — your resume now reads cleanly to all of them.",
  },
  {
    icon: Sparkles,
    title: "Bullets that brag, not bore",
    desc: "Quantified outcomes, strong verbs, and your voice — never the AI's.",
  },
  {
    icon: Zap,
    title: "Apply in minutes, not weeks",
    desc: "Tailor your resume to a JD in under 60 seconds. Then apply to 20 jobs by lunch.",
  },
  {
    icon: Search,
    title: "Match the right keywords",
    desc: "Stop guessing what recruiters search for. We surface the exact terms missing.",
  },
]

export function BenefitsSection(){
    return (
        <section className="max-w-7xl mx-auto px-3 sm:px-6 mt-28 sm:mt-36">
            <SectionHeader 
                eyebrow={'Outcomes'}
                title={<>The point isn't a better resume. It's a better offer.</>}
                sub={'What our users acctually report after their second analysis.'}
            />

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
                {BENEFITS.map(( b, i )=>(
                    <motion.div
                        key={b.title}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: i*0.1}}
                        className={`rounded-3xl bg-(--surface) border border-(--border) shadow-card hover:shadow-hover transition-all p-5 sm:p-6 ${
                            i === 0 ? 'lg:col-span-3' : i === 1 ? 'lg:col-span-3' : 'lg:col-span-2'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="size-10 shrink-0 rounded-xl bg-(--accent-soft) text-(--accent-strong) flex items-center justify-center">
                                <b.icon size={18} strokeWidth={2} />
                            </div>

                            <h3 className="font-display text-base font-semibold tracking-tight text-(--ink)">
                                {b.title}
                            </h3>
                        </div>
                        <p className="text-sm text-(--ink-muted) mt-1.5 leading-relaxed">
                            {b.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}