import { motion } from 'framer-motion'

const RADIUS = 78
const ARC = Math.PI*RADIUS
const SCORE = 86
const PCT = SCORE / 100

export function HeroDashboardPreview(){
    return (
        <div>
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
                    </div>
                </div>
            </motion.div>
        </div>
    )
}