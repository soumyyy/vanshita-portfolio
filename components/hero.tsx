"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden">
      <div className="relative z-10 h-full min-h-[100svh] flex flex-col justify-between px-4 md:px-10 pt-28 pb-10">
        <p className="text-accent font-medium tracking-[0.28em] uppercase text-xs md:text-sm animate-fade-in">
          Executive Search · Technology &amp; BFSI
        </p>

        <div className="max-w-5xl animate-fade-up">
          <h1 className="text-[15vw] sm:text-[11vw] md:text-[8vw] lg:text-[7vw] font-serif font-medium leading-[0.95] tracking-tight text-balance -ml-1">
            I read people
            <br />
            <span className="italic text-primary">for a living.</span>
          </h1>
        </div>

        <div className="max-w-xl ml-auto text-right md:text-left animate-fade-up">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            I&rsquo;m Vanshita Kalra. That curiosity is now a career: leading VP-level executive search across
            technology and BFSI at XQtiv Consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-end md:justify-start">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" className="rounded-full text-base h-12 px-8" asChild>
                <Link href="#contact">
                  Say Hello <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 bg-transparent" asChild>
                <Link href="https://www.linkedin.com/in/vanshita-kalra-6a5077262/" target="_blank" rel="noreferrer">
                  Connect on LinkedIn
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
