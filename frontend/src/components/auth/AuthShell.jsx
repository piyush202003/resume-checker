import { motion } from "framer-motion"
import { Sparkles } from "lucide-react";
import { BrandCardMarquee } from "./BrandCardMarquee";

const NOISE_DATA_URI = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='3'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.9'/></svg>\")";

function BrandPanel({ headline, subhead }){
    return (
        <div className="hidden lg:block flex-1 relative rounded-3xl overflow-hidden isolate">
            {/* Base dark gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(140deg, #18271F 0%, #2F4A3A 38%, #1A2B22 72%, #0E1812 100%)",
                }}
            ></div>

            {/* Animated radial glows */}
            <motion.div
                className="absolute -top-32 -right-32 w-xl h-130 rounded-full pointer-events-none"
                style={{ 
                    background: "radial-gradient(circle, rgba(168,196,179,0.55) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
                animate={{ x: [ 0, 40, 0], y: [ 0, 25, 0 ], opacity:[ 0.45, 0.75, 0.45] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut'}}
            ></motion.div>

            <motion.div
                className="absolute -bottom-40 -left-32 w-113 h-113 rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(91,124,106,0.6) 0%, transparent 70%)",
                    filter: "blur(60px)",
                }}
                animate={{
                    x: [0, -30, 0],
                    y: [0, -40, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            {/* Diagonal sheen sweep */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.07) 50%, transparent 70%)",
                    backgroundSize: '200% 200%',
                }}
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"]}}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear'}}
            ></motion.div>

            {/* Noise grain overlay */}
            <div
                className="absolute inset-0 opacity-6 mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: NOISE_DATA_URI }}
            ></div>

            {/* Soft inner vignette */}
            <div
                className="absoulte inset-0 pointer-events-none"
                style={{ boxShadow: "inset 0 0 120px 20px rgba(0,0,0,0.35)"}}
            ></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between pt-10 xl:pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [ 0.16, 1, 0.3, 1 ]}}
                    className="px-10 xl:px-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/16 backdrop-blur-md">
                        <Sparkles size={12} className="text-white/80" />
                        <span className="text-xs tracking-wide text-white/80 uppercase font-semibold">
                            AI Resume Roaster
                        </span>
                    </div>

                    <h2
                        className="font-serif italic font-medium tracking-tighter text-5xl xl:text-6xl leading-16 text-white mt-8 max-w-xl"
                    >{headline}</h2>

                    <p
                        className="text-white/65 text-base xl:text-lg mt-6 max-w-md leading-relaxed"
                    >{subhead}</p>
                </motion.div>

                <div className="pb-8 xl:pb-0">
                    <BrandCardMarquee />
                </div>
            </div>
        </div>
    )
}

export function AuthShell({ children, headline, subhead }){
    return(
        <div className="min-h-screen flex bg-(--bg) p-3 sm:p-4 gap-0 lg:gap-4">
            {/* Left--form */}
            <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-10">
                <div className="w-full max-w-100">{children}</div>
            </div>

            {/* Right -- brand panel (desktop only) */}
            <BrandPanel headline={headline} subhead={subhead} />
        </div>
    )
}