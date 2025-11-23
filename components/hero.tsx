import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="200" r="200" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <circle cx="400" cy="200" r="150" stroke="currentColor" strokeWidth="1" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl animate-fade-up">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
            Marketing Analyst & Digital Strategist
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-balance">
            Turning insights into <span className="italic text-primary">strategy</span> and strategy into{" "}
            <span className="italic text-primary">growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            I’m Vanshita Kalra, a creative storyteller blending data-driven research with compelling content to build
            brands that connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full text-base h-12 px-8" asChild>
              <Link href="#portfolio">
                View Work <ArrowDown className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 bg-transparent" asChild>
              <Link href="#contact">
                Hire Me <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Stats Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-8 md:gap-16 items-center font-medium tracking-wide text-sm md:text-base uppercase opacity-90">
          <div className="flex gap-8 md:gap-16 min-w-full justify-center px-4">
            <span>4.2x ROAS B2B</span>
            <span className="hidden sm:inline text-primary-foreground/50">•</span>
            <span>80% Client Retention</span>
            <span className="hidden sm:inline text-primary-foreground/50">•</span>
            <span>100+ Assets Created</span>
            <span className="hidden sm:inline text-primary-foreground/50">•</span>
            <span>3 Projects Closed in 3 Months</span>
            <span className="hidden sm:inline text-primary-foreground/50">•</span>
            <span>Strategy meets Creativity</span>
          </div>
        </div>
      </div>
    </section>
  )
}
