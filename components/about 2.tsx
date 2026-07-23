"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { Reveal } from "@/components/scroll-reveal"

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current
    if (!section || !image) return

    const ctx = gsap.context(() => {
      gsap.to(image, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 md:py-44 relative overflow-hidden">
      <div className="grid md:grid-cols-12 gap-y-16 md:gap-x-8 px-4 md:px-10">
        {/* Photo — bleeds off the left edge, sits high */}
        <div className="md:col-span-5 relative">
          <div ref={imageRef} className="relative -ml-4 md:-ml-10 aspect-[4/5] md:aspect-[3/4] shadow-2xl">
            <Image
              src="/vanshita.jpg"
              alt="Vanshita Kalra"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
          </div>
          <p className="font-cursive text-4xl md:text-5xl text-primary absolute -bottom-8 right-4 md:-right-8 max-w-[70%] text-right leading-tight drop-shadow-sm">
            the right hire isn&rsquo;t found, it&rsquo;s mapped.
          </p>
        </div>

        {/* Text — offset lower and to the right, staggered against the photo */}
        <div className="md:col-span-6 md:col-start-7 md:pt-20">
          <Reveal>
            <p className="text-accent font-medium mb-4 tracking-[0.28em] uppercase text-xs">Who I Am</p>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-8 text-balance">
              Endlessly curious. <span className="italic text-primary">Occasionally about the wrong things.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I studied <strong className="text-foreground font-semibold">English Literature and Economics</strong>{" "}
                because I couldn&rsquo;t choose between the two things I actually cared about: how people tell
                stories, and why they make the decisions they make. Most days I still can&rsquo;t choose — I just
                use both.
              </p>
              <p>
                That curiosity currently lives at{" "}
                <strong className="text-foreground font-semibold">XQtiv Consulting</strong>, a boutique search firm
                in Mumbai, where I lead VP-level executive search across technology and BFSI as part of a small,
                senior team. It&rsquo;s not the whole story — it&rsquo;s just the chapter where reading people
                turned into a job.
              </p>
              <p>
                Every mandate still starts the same way: less gut feeling, more structured curiosity — mapping the
                market, and the person, before I ever make an introduction.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
