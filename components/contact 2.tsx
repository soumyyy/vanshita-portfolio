import { Mail, Linkedin } from "lucide-react"
import { Reveal } from "@/components/scroll-reveal"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 relative overflow-hidden bg-vignette">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-accent font-medium mb-4 tracking-[0.28em] uppercase text-xs">Contact</p>
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-balance">
              Let&rsquo;s talk about your <span className="italic text-primary">next mandate.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
              If you&rsquo;re looking to fill a VP-level leadership role in technology or BFSI, I&rsquo;d rather hear
              from you directly than through a form.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:vanshitahi@gmail.com"
                className="group flex items-center gap-4 px-8 h-14 rounded-full border border-border bg-card/60 hover:bg-primary hover:border-primary transition-all duration-300 text-lg font-medium"
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="group-hover:text-primary-foreground transition-colors">vanshitahi@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/vanshita-kalra-6a5077262/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 px-8 h-14 rounded-full border border-border bg-card/60 hover:bg-primary hover:border-primary transition-all duration-300 text-lg font-medium"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="group-hover:text-primary-foreground transition-colors">Connect on LinkedIn</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
