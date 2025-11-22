import { CheckCircle2 } from "lucide-react"

export function About() {
  const highlights = [
    "LinkedIn Marketing Optimization",
    "Audience Mapping & Research",
    "Cross-Platform Content Strategy",
    "Data-Driven Decision Making",
    "Creative Direction",
    "Brand Storytelling",
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative shadow-xl">
              <img src="/professional-woman-portrait-office.jpg" alt="Vanshita Kalra" className="object-cover w-full h-full" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/50 rounded-full -z-10 blur-xl"></div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">About Me</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I'm Vanshita. I work at the intersection of{" "}
                <strong className="text-foreground font-semibold">research, content, and strategy</strong>. With a
                background in English Literature and Economics, I bring a unique duality to marketing: the ability to
                craft compelling narratives while grounding them in hard data.
              </p>
              <p>
                My experience spans across Retail, BFSI, CPG, and consumer brands, where I’ve helped businesses not just
                reach their audience, but truly understand them. Whether it’s optimizing LinkedIn presence for premium
                analytics firms or driving engagement for lifestyle brands, my goal remains the same: sustainable growth
                through authentic connection.
              </p>
              <p className="text-foreground italic font-medium text-xl pl-4 border-l-4 border-primary">
                "Strategy starts with curiosity — and I stay endlessly curious."
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
