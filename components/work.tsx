"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Cpu, Landmark, Compass, TrendingUp } from "lucide-react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { Reveal } from "@/components/scroll-reveal"

function StatNumber({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const counter = { n: 0 }
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" },
        onUpdate: () => {
          if (el) el.textContent = Math.round(counter.n).toString()
        },
      })
    })
    return () => ctx.revert()
  }, [value])

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  )
}

const cards = [
  {
    icon: Cpu,
    title: "Technology",
    body: "VP-level leadership hiring for product, engineering, growth, and revenue functions, roles where technical judgment and organizational leadership have to coexist.",
  },
  {
    icon: Landmark,
    title: "BFSI",
    body: "Senior leadership search across banking, financial services, and insurance, mandates where regulatory fluency and stakeholder trust are non-negotiable.",
  },
  {
    icon: Compass,
    title: "How I Approach It",
    body: null,
    steps: [
      "Mandate & mapping the market",
      "Targeted search & assessment",
      "A structured shortlist, not a gut call",
      "Support through placement & beyond",
    ],
  },
  {
    icon: TrendingUp,
    title: "In Numbers",
    body: null,
    stats: [
      { value: 10, label: "VP-level leaders placed" },
      { value: 1, label: "years leading search mandates" },
    ],
  },
]

export function Work() {
  return (
    <section id="work" className="py-28 md:py-44 scroll-mt-24 relative overflow-hidden">
      <div className="px-4 md:px-10">
        <Reveal className="max-w-2xl mb-4">
          <p className="text-accent font-medium mb-4 tracking-[0.28em] uppercase text-xs">The Work</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-balance">
            One chapter, <span className="italic text-primary">not the whole book.</span>
          </h2>
        </Reveal>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-12 md:mb-16">
          Drag to explore &rarr;
        </p>

        <div className="relative -mx-4 px-4 md:-mx-10 md:px-10">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8">
            {cards.map((card, i) => (
              <motion.div
                key={card.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[36%] lg:w-[30%] p-8 md:p-10 border-t border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-[border-color,box-shadow] duration-300 flex flex-col"
              >
                <card.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">{card.title}</h3>

                {card.body && <p className="text-muted-foreground leading-relaxed">{card.body}</p>}

                {card.steps && (
                  <ol className="space-y-3 mt-1">
                    {card.steps.map((step, si) => (
                      <li key={step} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="font-serif text-primary/60 shrink-0">{`0${si + 1}`}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                )}

                {card.stats && (
                  <div className="space-y-6 mt-1">
                    {card.stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-4xl font-serif font-medium text-primary mb-1">
                          <StatNumber value={stat.value} />
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <span className="mt-auto pt-8 text-xs text-muted-foreground/60 tracking-widest uppercase">
                  {`0${i + 1} / 0${cards.length}`}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
