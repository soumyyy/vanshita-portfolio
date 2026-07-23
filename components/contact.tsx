import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/scroll-reveal"

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-48 scroll-mt-24 relative overflow-hidden">
      <div className="px-4 md:px-10 max-w-3xl">
        <Reveal>
          <p className="text-accent font-medium mb-4 tracking-[0.28em] uppercase text-xs">Say Hello</p>
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 text-balance">
            Reach out, whether it&rsquo;s <span className="italic text-primary">a mandate or a good conversation.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-muted-foreground mb-14 leading-relaxed max-w-xl">
            A VP-level search, a question about how I think, or just curiosity about the work. I&rsquo;d rather
            hear it directly than through a form.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col gap-6">
            <a
              href="mailto:vanshitahi@gmail.com"
              className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-serif w-fit border-b border-border/50 hover:border-primary transition-colors pb-1"
            >
              vanshitahi@gmail.com
              <ArrowUpRight className="w-5 h-5 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href="https://www.linkedin.com/in/vanshita-kalra-6a5077262/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-serif w-fit border-b border-border/50 hover:border-primary transition-colors pb-1"
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-5 h-5 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
