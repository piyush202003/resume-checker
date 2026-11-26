import { AlertCircle, Gauge, GitCompare, KeyRound, Sparkles, TrendingUp } from "lucide-react"
import { DarkPanel } from "./DarkPanel"
import { SectionHeader } from "./FeaturesSection"
import { motion } from 'framer-motion' 

const SERIES = [ 42, 51, 58, 67, 74, 81, 86 ]

function KpiCard({ className= '', icon: Icon, label, value, suffix, delta, accent }){
    return(
        <div
            className={` rounded-2xl p-5 border ${
                accent
                ? 'bg-linear-to-br from-[#2F4A3A] to-[#1A2B22] border-[rgba(143,179,156,0.3)]'
                : 'bg-white/3 border-white/[0.07]'
            } ${className}`}
        >
            <div className="flex items-center gap-2 mb-3">
                <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center ${
                        accent
                        ? 'bg-white/15 text-white'
                        : "bg-[rgba(143,179,156,0.14)] text-[#B6CFC0]"
                    }`}
                ><Icon size={13} /></div>
                <span className="text-xs text-white/55">{label}</span>
            </div>

            <div className="flex items-baseline gap-1">
                <span className="font-display tabular text-3xl font-semibold tracking-tight text-white">{value}</span>
                {suffix && <span className="text-xs text-white/45">{suffix}</span>}
            </div>

            {delta && (
                <div className="inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full bg-[rgba(143,179,156,0.14)] text-[#8FB39C] text-xs font-semibold tabular">{delta}</div>
            )}
        </div>
    )
}

function DarkCard({ className= '', children}){
    return (
        <div className={`rounded-2xl bg-white/3 border border-white/7 backdrop-blur-sm p-5 ${className}`}>
            {children}
        </div>
    )
}

function AreaChart(){
    const w = 600
    const h = 140 
    const stepX = w / (SERIES.length - 1)
    const path = SERIES.map(
        (p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${h - (p / 100) * h}`
    ).join(" ")
    const area = `${path} L ${w} ${h} L 0 ${h} Z`
    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-35">
            <defs>
                <linearGradient id="dpAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8FB39C" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#8FB39C" stopOpacity="0" />
                </linearGradient>
            </defs>
            <motion.path
                d={area}
                fill="url(#dpAreaGrad)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <motion.path
                d={path}
                fill="none"
                stroke="#B6CFC0"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            {SERIES.map((p, i) => (
                <circle
                key={i}
                cx={i * stepX}
                cy={h - (p / 100) * h}
                r="3.5"
                fill="#16181D"
                stroke="#B6CFC0"
                strokeWidth="2"
                />
            ))}
            </svg>
    )
}

export function DashboardPreviewSection() {
    return (
        <section
            id="dashboard-preview"
            className="px-3 sm:px-6 mt-28 sm:mt-36 max-w-7xl ml-auto mr-auto"
        >
            <SectionHeader 
                eyebrow={'Inside the product'}
                title={<>Every metric you'd ask for. None you wouldn't.</>}
                sub={"A real glimpse at the dashboard you'll be using in two minutes."}
            />

            <DarkPanel className="mt-12 p-4 sm:p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
                    {/* KPI row */}
                    <KpiCard 
                        className="lg:col-span-3"
                        icon={Gauge}
                        label={'ATS Score'}
                        value={"86"}
                        suffix={'/100'}
                        delta={'+18%'}
                    />

                    <KpiCard 
                        className="lg:col-span-3"
                        icon={GitCompare}
                        label={'Versions'}
                        value={'4'}
                        delta={'+2'}
                    />

                    <KpiCard 
                        className="lg:col-span-3"
                        icon={AlertCircle}
                        label={'Issues Fixed'}
                        value={'11'}
                        delta={'+7'}
                    />

                    <KpiCard 
                        className="lg:col-span-3"
                        icon={KeyRound}
                        label={'Keywords Matched'}
                        value={'24'}
                        suffix={'/26'}
                        delta={'+9'}
                        accent
                    />

                    {/* Score evolution */}
                    <DarkCard className="lg:col-span-7">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="text-xs uppercase trascking-wide text-white/45 font-semibold">Score Evolution</div>
                                <div className="font-display text-base font-semibold text-white mt-1">
                                    V1 → V4 over 3 weeks
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[rgba(143,179,156,0.16)] text-[#B6CFC0] text-xs font-semibold tabular">
                                <TrendingUp size={10} strokeWidth={2.5} />
                                +44 pts
                            </div>
                        </div>

                        <div className="flex items-baseline gap-2 mb-3">
                            <div 
                                className="font-display tabular text-5xl font-semibold text-white leading-none tracking-tight"
                            >86</div>
                            <div className="text-xs text-white/50">/ 100</div>
                        </div>

                        <AreaChart />
                    </DarkCard>

                    {/* Score breakdown */}
                    <DarkCard className="lg:col-span-5" >
                        <div className="text-xs uppercase tracking-wide text-white/45 font-semibold">
                            Score breakdown
                        </div>
                        <div className="font-display text-base font-semibold text-white mt-1 mb-4">
                            Where you're winning
                        </div>
                        {[
                            { label: "Keywords", value: 88 },
                            { label: "Format & ATS parsing", value: 74 },
                            { label: "Impact statements", value: 91 },
                            { label: "Readability", value: 82 },
                            { label: "Action verbs", value: 79 },
                        ].map(( b, i )=> (
                            <div key={b.label} className="mb-3 last:mb-0">
                                <div className="flex justify-between text-xs text-white/55 mb-1">
                                    <span>{b.label}</span>
                                    <span className="tabular text-white font-semibold">{b.value}</span>
                                </div>
                                <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${b.value}%`}}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.1+i*0.05, ease: [ 0.16, 1, 0.3, 1]}}
                                        className="h-full rounded-full"
                                        style={{
                                            background: "linear-gradient(90deg, #8FB39C 0%, #B6CFC0 100%)",
                                        }}
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </DarkCard>

                    {/* Bullet rewrite */}
                    <DarkCard className="lg:col-span-7" >
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <div className="text-xs uppercase tracking-wide text-white/45 font-semibold">
                                    Bullet rewrite
                                </div>
                                <div className="font-display text-base font-semibold text-white mt-1">
                                    Apply all → new version
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(143,179,156,0.14)] text-[#B6CFC0] text-xs font-semibold">
                                <Sparkles size={10} /> AI rewrite
                            </div>
                        </div>
                    </DarkCard>
                </div>
            </DarkPanel>
        </section>
    )
}