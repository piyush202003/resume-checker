import { motion } from 'framer-motion'
import { SectionHeader } from '../components/landing/FeaturesSection'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
    {
        quote:
        "I'd been ghosted by 40+ companies. Ran my resume through Roaster, fixed 6 issues, and landed 3 onsites in two weeks.",
        name: "Priya Raman",
        role: "Senior Frontend Engineer",
        company: "Stripe",
        initials: "PR",
    },
    {
        quote:
        "The rewrites actually sound like me. No 'leveraged' or 'spearheaded' garbage. My ATS score jumped from 58 to 89.",
        name: "Marcus Chen",
        role: "Backend Engineer",
        company: "Vercel",
        initials: "MC",
    },
    {
        quote:
        "As a new grad, I had no idea recruiters were filtering me out before a human saw the resume. Brutal — but fixable in one afternoon.",
        name: "Sofia Ruiz",
        role: "CS Senior, UIUC",
        company: "intern @ Linear",
        initials: "SR",
    },
    {
        quote:
        "I wish this existed when I switched from full-stack to ML. Keyword optimization alone was worth the signup.",
        name: "Daniel Park",
        role: "ML Engineer",
        company: "Anthropic",
        initials: "DP",
    },
    {
        quote:
        "The diff view is what sold me. I could see exactly what changed and why — not some black-box rewrite.",
        name: "Aisha Hassan",
        role: "Product Designer",
        company: "Figma",
        initials: "AH",
    },
    {
        quote:
        "Used it the night before applying to FAANG. Got my first response in 36 hours. Sample size of one, but I'll take it.",
        name: "Jordan Blake",
        role: "Full-Stack Developer",
        company: "freelance",
        initials: "JB",
    },
]

export function TestimonialsSection(){
    return (
        <section className='max-w-7xl mx-auto px-3 sm:px-6 mt-28 sm:mt-36'>
            <SectionHeader 
                eyebrow={'Testimonials'}
                title={<>Loved by engineers who've been there.</>}
                sub={'From new grads sweating their first SWE role to senior ICs switching domains.'}
            />

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'>
                {TESTIMONIALS.map(( t, i )=>(
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: (i%3)*0.1 }}
                        className='rounded-3xl bg-(--surface) border border-(--border) shadow-card hover:shadow-hover transition-all p-5 sm:p-6 flex flex-col'
                    >
                        <div className='flex gap-0.5 text-(--accent) mb-3'>
                            {Array.from({ length: 5 }).map(( _, k )=>(
                                <Star key={k} size={13} fill='currentColor' strokeWidth={0} />
                            ))}
                        </div>

                        <p className='text-sm text-(--ink) leading-relaxed flex-1'>"{t.quote}"</p>

                        <div className='flex items-center gap-3 mt-5 pt-4 border-t border-(--border)'>
                            <div className='size-9 rounded-full bg-(--accent-strong) text-white flex items-center justify-center font-display text-xs font-semibold tabular'>
                                {t.initials}
                            </div>
                            <div className='min-w-0'>
                                <div className='text-xs font-semibold text-(--ink) truncate'>
                                    {t.name}
                                </div>
                                <div className='text-xs text-(--ink-muted) truncate'>
                                    {t.role} · {t.company}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}