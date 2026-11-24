import { motion } from 'framer-motion'
import { AlertCircle, ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react'

const RADIUS = 78
const ARC = Math.PI*RADIUS
const SCORE = 86
const PCT = SCORE / 100

export function HeroDashboardPreview(){
    return (
        <div className='relative w-full h-[460px] sm:h-[520px]'>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className='absolute top-6 left-1/2 -translate-x-1/2 w-2xs sm:w-xs rounded-3xl border border-white/5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] p-5 overflow-hidden'
                style={{
                    background: "linear-gradient(160deg, #1F2A24 0%, #16181D 45%, #0F1115 100%)",
                    boxShadow: "0 24px 60px -12px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.06)"
                }}
            >
                <div className='flex items-center justify-between mb-3'>
                    <div>
                        <div className='text-xs uppercase tracking-[0.16em] text-white/45 font-semibold'>
                            ATS Readiness
                        </div>
                        <div className="text-xs text-white/55 mt-0.5">
                            Senior Frontend.pdf
                        </div>
                    </div>
                    <div className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(143,179,156,0.14)] text-[#8FB39C] text-xs font-semibold'>
                        <span className='h-1.5 w-1.5 rounded-full bg-[#8FB39C]'></span>
                        Strong
                    </div>
                </div>

                <div className="relative mx-auto w-3xs">
                    <svg viewBox="0 0 200 120" className="w-full h-auto block">
                        <defs>
                            <linearGradient id="heroArc" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#8FB39C" />
                                <stop offset="100%" stopColor="#B6CFC0" />
                            </linearGradient>
                        </defs>
                        <path
                            d={`M 22 105 A ${RADIUS} ${RADIUS} 0 0 1 178 105`}
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />
                        <motion.path
                            d={`M 22 105 A ${RADIUS} ${RADIUS} 0 0 1 178 105`}
                            fill="none"
                            stroke="url(#heroArc)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeDasharray={ARC}
                            initial={{ strokeDashoffset: ARC }}
                            animate={{ strokeDashoffset: ARC - ARC * PCT }}
                            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        />
                    </svg>

                    <div className='absolute inset-x-0 top-20 flex flex-col items-center'>
                        <div className='font-display tabular text-5xl font-semibold tracking-tight text-white leading-none'>
                            {SCORE}
                        </div>
                        <div className='text-xs text-white/45 mt-0.5'>
                            out of 100
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex items-center justify-center">
                    <div className='text-white/45 inline-flex items-center justify-center gap-1 px-2 py-1 rounded-full bg-[rgba(143,179,156,0.16)] text-xs font-semibold tabular'>
                        <TrendingUp size={10} strokeWidth={2.5} />
                        +18 v/s V1
                    </div>
                </div>
            </motion.div>

            {/* Floating: Issues card */}
            <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-10 left-0 sm:-left-4 w-3xs rounded-[18px] backdrop-blur border border-white/10 p-4 overflow-hidden"
                style={{
                    background: "linear-gradient(155deg, rgba(31,42,36,0.95) 0%, rgba(22,24,29,0.95) 50%, rgba(15,17,21,0.95) 100%)",
                    boxShadow: "0 24px 60px -16px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.05)",
                }}
            >
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-6 rounded-lg bg-[rgba(212,132,124,0.16)] text-red-200 flex items-center justify-center">
                        <AlertCircle size={12} />
                    </div>
                    <div className='text-xs font-semibold text-white'>
                        Top issues
                    </div>
                    <div className='ml-auto text-xs text-white/45 tabular'>5</div>
                </div>

                {[
                    { label: "Weak action verbs", tone: "high" },
                    { label: "Missing keywords: React, AWS", tone: "med" },
                    { label: "Inconsistent dates", tone: "low" },
                ].map((it, i)=>(
                    <motion.div
                        key={it.label}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.3, duration: 1 }}
                        className="flex items-center gap-2 py-1.5"
                    >
                        <div
                            className='h-1.5 w-1.5 rounded-full'
                            style={{
                                background: it.tone === 'high' ? '#D4847C' : it.tone === 'med' ? '#D4A86A' : '#8FB39C'
                            }}
                        ></div>
                        <div
                            className='text-xs text-white/75 truncate'
                        >{it.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Floating: Rewrite card */}
            <motion.div
                initial={{ opacity: 0, x: 30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-4 right-0 sm:-right-4 w-3xs rounded-lg backdrop-blur border border-white/10 p-4 overflow-hidden"
                style={{
                    background: "linear-gradient(155deg, rgba(31,42,36,0.95) 0%, rgba(22,24,29,0.95) 50%, rgba(15,17,21,0.95) 100%)",
                    boxShadow: "0 24px 60px -16px rgba(0,0,0,0.7), inset 0 1px 0 0 rgba(255,255,255,0.05)",
                }}
            >
                <div className="flex items-center gap-2 mb-3 text-white">
                    <div className='h-6 w-6 rounded-lg bg-[rgba(143,179,156,0.16)] text-[#B6CFC0] flex items-center justify-center'>
                        <Sparkles size={12} />
                    </div>
                    <div className='text-xs font-semibold'>
                        AI Rewrite
                    </div>
                    <div className='ml-auto inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[rgba(143,179,156,0.16)] text-[#B6CFC0] text-xs font-semibold'>
                        <CheckCircle2 size={9} /> Improved
                    </div>
                </div>

                <div className='text-xs uppercase tracking-wide text-white/40 font-semibold mb-1'>Before</div>
                <div className='text-xs text-white/45 line-through leading-snug'>
                    Worked on dashboards for the team
                </div>
                <div className='flex items-center gap-1.5 my-2 text-white/30'>
                    <ArrowRight size={11} />
                    <span className='text-xs uppercase tracking-wide text-[#B6CFC0] font-semibold'>After</span>
                </div>
                <div className='text-xs text-white leading-snug'>
                    Shipped 4 React analytics dashboards used by 12k+ users, cutting load time 38%.
                </div>
            </motion.div>

            {/* Floating: keyword pills */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-2 right-2 sm:right-6 hidden md:flex md:flex-col md:items-end"
            >
                {['React', "TypeScript", 'AWS'].map((k, i)=>(
                    <motion.div
                        key={k}
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                            duration: 3 + i * 0.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3 + 1,
                        }}
                        className="px-2.5 py-1 rounded-full bg-white/8 backdrop-blur border border-white/10 text-xs font-semibold text-white"
                    >
                        +{k}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}