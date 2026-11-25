import { motion } from 'framer-motion'
import { ArrowRight, Check, Cpu, FileDown, Sparkles, Upload } from 'lucide-react';
import { SectionHeader } from './FeaturesSection';

function UploadVisual(){
    return (
        <div className='relative rounded-2xl bg-linear-to-br from-(--surface-2)/60 to-(--surface) border border-(--border) p-4'>
            <div className='flex items-center gap-3'>
                <div className='relative shrink-0'>
                    <div className='absolute -inset-1 rounded-2xl bg-(--accent-soft) blur-md opacity-70'></div>
                    <div className='relative h-11 w-11 rounded-2xl bg-(--surface) border border-(--border) shadow-card flex items-center justify-center'>
                        <div
                            className='h-7 w-7 rounded-lg flex items-center justify-center text-white'
                            style={{
                                background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%)",
                            }}
                        >
                            <Upload size={13} strokeWidth={2.4} />
                        </div>
                    </div>
                </div>

                <div className='flex-1 min-w-0 text-left'>
                    <div className='text-xs font-semibold text-(--ink) truncate'>
                        resume_v3.pdf
                    </div>
                    <div className='text-xs text-(--ink-muted) mt-0.5 tabular-nums'>
                        412 KB parsing...
                    </div>
                </div>

                <div className='inline-flex items-center gap-1 h-5 px-2 rounded-full bg-(--accent-soft) text-(--accent-strong) text-xs font-semibold'>
                    <span className='h-1 w-1 rounded-full bg-(--accent) animate-pulse'></span>
                    live
                </div>
            </div>

            <div className='mt-3 h-1 w-full rounded-full bg-(--surface-2) overflow-hidden'>
                <motion.div
                    animate={{ x: [ '-100%', '100%' ]}}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                    className='h-full w-1/2 rounded-full'
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)",
                    }}
                ></motion.div>
            </div>
        </div>
    )
}

function AnalyzeVisual(){
     const items = [
        { label: "Structure parsed", done: true },
        { label: "ATS rules checked", done: true },
        { label: "Generating rewrites…", done: false },
    ]
    return (
        <div className='relative rounded-2xl bg-linear-to-br from-(--surface-2)/60 to-(--surface) border border-(--border) p-4'>
            <div className='flex items-center gap-2 mb-3'>
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className='h-4 w-4 rounded-full border-2 border-(--accent) border-r-transparent'
                ></motion.div>
                <div className='text-xs font-semibold text-(--ink)'>Analysing</div>
                <div className='ml-auto inline-flex items-center gap-1 h-5 px-2 rounded-full bg-(--surface-2) text-(--ink-muted) text-xs font-semibold tabular-nums'>8 / 12</div>
            </div>
            <div className='space-y-1.5'>
                {items.map(( item, i )=>(
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true}}
                        transition={{ duration: 0.4, delay: 0.2+i*0.1}}
                        className='flex items-center gap-2'
                    >
                        <div
                            className={`h-4 w-4 rounded-full flex items-center justify-center ${
                                item.done
                                ? "bg-(--accent-soft) text-(--accent-strong)"
                                : 'border border-(--accent)/40'
                            }`}
                        >
                            {item.done && <Check size={9} strokeWidth={3.5} />}
                        </div>

                        <div className='text-xs text-(--ink-muted)'>{item.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className='mt-3 pt-3 border-t border-(--border) flex items-center justify-between'>
                <div className='text-xs text-(--ink-muted)'>
                    Predicted score
                </div>
                <div className='inline-flex items-center gap-1 text-xs font-bold text-(--accent-strong) tabular-nums'>
                    <Sparkles size={10} strokeWidth={2.5} />
                    82 / 100
                </div>
            </div>
        </div>
    )
}

function DownloadVisual(){
    return (
        <div className='relative rounded-2xl bg-linear-to-br from-(--surface-2)/60 to-(--surface) border border-(--border) p-4'>
            <div className='flex items-center gap-3'>
                <div className='relative shrink-0'>
                    <div className='h-12 w-9 rounded-md bg-(--surface) border border-(--border) shadow-card flex flex-col gap-0.5 p-1.5 '>
                        <div className='h-0.5 w-3/4 rounded bg-(--ink-muted)/40'></div>
                        <div className='h-0.5 w-full rounded bg-(--ink-muted)/25'></div>
                        <div className='h-0.5 w-5/6 rounded bg-(--ink-muted)/25'></div>
                        <div className='h-0.5 w-2/3 rounded bg-(--ink-muted)/25'></div>
                        <div className='mt-auto h-1 w-full rounded-xs bg-(--accent-soft)'></div>
                    </div>
                    <div
                        className='absolute -bottom-1.5 -right-1.5 h-5 px-1.5 rounded-md text-white text-xs font-bold flex items-center'
                        style={{
                            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%)",
                        }}
                    >PDF</div>
                </div>

                <div className="flex-1 min-w-0 text-left">
                    <div className='text-xs font-semibold text-(--ink) truncate'>
                        resume_v3_optimized.pdf
                    </div>
                    <div className='text-xs text-(--ink-muted) mt-0.5'>
                        ATS-ready · 1 page
                    </div>
                </div>

                <button className='h-9 w-9 rounded-full bg-(--ink) text-(--bg) flex items-center justify-center shrink-0 transition-transform hover:-translate-y-0.5'>
                    <FileDown size={13} />
                </button>
            </div>

            <div className='mt-3 pt-3 border-t border-(--border) flex items-center justify-between'>
                <div className='text-xs inline-flex items-center gap-1 h-5 px-2 rounded-full bg-(--accent-soft) text-(--success) font-semibold tabular-nums'>
                    ATS 86
                </div>
                <div className='text-xs text-(--ink-muted) tabular-nums'>
                    <span className='text-(--success) font-semibold'>+24 pts</span> from V1
                </div>
            </div>

        </div>
    )
}

const STEPS = [
    {
        n: "01",
        icon: Upload,
        title: "Upload your resume",
        desc: "Drop a PDF or DOCX. We parse it in seconds — no signup wall, no nonsense.",
        Visual: UploadVisual,
    },
    {
        n: "02",
        icon: Cpu,
        title: "AI analyzes & roasts",
        desc: "Gemini scores against ATS rubrics, surfaces 5 issues + 5 strengths, and drafts rewrites.",
        Visual: AnalyzeVisual,
    },
    {
        n: "03",
        icon: FileDown,
        title: "Download optimized PDF",
        desc: "Apply rewrites, save a new version, and export a clean ATS-friendly PDF.",
        Visual: DownloadVisual,
    },
];

export function HowItWorks(){
    return (
        <section
            id='how-it-works'
            className='max-w-7xl relative px-3 sm:px-6 mt-28 sm:mt-36 mr-auto ml-auto'
        >
            <SectionHeader
                eyebrow={'How it works'}
                title={<>From upload to interview-ready in&nbsp;3 steps.</>}
                sub={'No prompt engineering. No ten-step funnels. Drop, analyze, ship.'}
            />

            <div className='mt-16 relative grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {/* Flowing dashed sage line behind the cards on desktop */}
                <svg
                    className="hidden lg:block absolute top-25 left-0 right-0 w-full pointer-events-none z-0"
                    height="40"
                    viewBox="0 0 1200 40"
                    preserveAspectRatio="none"
                    aria-hidden
                >
                    <motion.path
                        d="M 80 20 C 280 -20 420 60 600 20 S 920 -20 1120 20"
                        fill="none"
                        stroke="var(--accent)"
                        strokeOpacity="0.35"
                        strokeWidth="1.25"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                </svg>

                {STEPS.map(( s, i )=>{
                    const Icon = s.icon
                    const Visual = s.Visual
                    return (
                        <motion.div
                            key={s.n}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{
                                duration: 0.65,
                                delay: 1 * 0.12,
                                ease: [ 0.16, 1, 0.3, 1 ],
                            }}
                            className='group relative'
                        >
                            {/* Card */}
                            <div
                                className='relative rounded-3xl bg-(--surface) border border-(--border) shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 p-7 overflow-hidden min-h-105'
                            >
                                {/* top accent line */}
                                <div
                                    className='absolute top-0 inset-x-7 h-px'
                                    style={{
                                        background: "linear-gradient(90deg, transparent, var(--accent) 50%, transparent)",
                                        opacity: 0.5,
                                    }}
                                ></div>

                                {/* Massive ghost number */}
                                <div
                                    className='absolute -top-2 right-3 font-display text-9xl font-bold leading-none tracking-tighter select-none pointer-events-none'
                                    style={{
                                        background: "linear-gradient(180deg, var(--accent-soft) 0%, transparent 75%)",
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'transparent',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >{s.n}</div>

                                {/* Step pill */}
                                <div
                                    className='relative inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-(--accent-soft) text-(--accent-strong) text-xs font-semibold uppercase tracking-wider '
                                >Step {s.n}</div>

                                {/* Icon with soft glow */}
                                <div className='relative mt-6 inline-block mx-2'>
                                    <div className='absolute -inset-2 rounded-3xl bg-(--accent-soft) blur-lg opacity-70'></div>
                                    <div
                                        className='relative h-14 w-14 rounded-2xl flex items-center justify-center text-white shadow-card'
                                        style={{
                                            background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%)",
                                        }}
                                    >
                                        <Icon size={22} strokeWidth={2} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className='relative font-display text-2xl font-semibold tracking-tight text-(--ink) mt-6 leading-tight '
                                >{s.title}</h3>

                                {/* Description */}
                                <p
                                    className='relative text-sm text-(--ink-muted) mt-2.5 leading-relaxed'
                                >{s.desc}</p>

                                {/* Visual mockup */}
                                <dic className="relative mt-7"><Visual /></dic>
                            </div>

                            {/* Arrow between card on desktop */}
                            {i < STEPS.length-1 && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ duration: 0.4, delay: 0.5+i*0.12}}
                                    className='hidden lg:flex absolute top-28 -right-3.5 z-10 h-7 w-7 rounded-full items-center justify-center text-white shadow-card '
                                    style={{
                                        background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-strong) 100%)",
                                    }}
                                    aria-hidden
                                >
                                    <ArrowRight size={12} strokeWidth={2.5} />
                                </motion.div>
                            )}
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}