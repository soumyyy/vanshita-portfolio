import { Reveal } from "@/components/scroll-reveal"

const roles = [
  {
    period: "2025 - Present",
    title: "Executive Search Consultant",
    org: "XQtiv Consulting",
    description:
      "Leading VP-level executive search across technology and BFSI as part of a small, senior team. 10+ VP-level leaders placed in 1+ years on search mandates.",
  },
  {
    period: "Ongoing",
    title: "Freelance Social Media Strategist",
    org: "Self-Employed",
    description:
      "80% client retention. 4.2x ROAS on B2B campaigns, 3.8x on B2C. 85% follower growth and a 45% engagement rise within six months.",
  },
  {
    period: "Internship",
    title: "Social Media Marketing Intern",
    org: "Inaya Accessories",
    description:
      "35% engagement lift, 40% CTR boost. Festive campaigns run at 95% brand consistency across 100+ design assets and 20+ monthly posts.",
  },
  {
    period: "Internship",
    title: "Sales & Marketing Intern",
    org: "XIRCLS",
    description:
      "25% engagement increase, 30% lead qualification increase, 40% onboarding efficiency improvement. Market strategy for Dipi Treats, Love Beauty & Planet, and HUL.",
  },
  {
    period: "Project",
    title: "Strategy Consultant",
    org: "Gloria Coffee",
    description: "Audience and demographic research, content playbooks, and an uplift in organic reach.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-28 md:py-44 scroll-mt-24 relative overflow-hidden">
      <div className="px-4 md:px-10">
        <Reveal className="max-w-2xl mb-16 md:mb-20">
          <p className="text-accent font-medium mb-4 tracking-[0.28em] uppercase text-xs">The Journey</p>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-balance">
            How curiosity <span className="italic text-primary">became a career.</span>
          </h2>
        </Reveal>

        <div className="relative max-w-3xl">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border/60" aria-hidden="true" />
          <div className="space-y-14 md:space-y-16">
            {roles.map((role, i) => (
              <Reveal key={role.title + role.org} delay={i * 0.08} className="relative pl-8 md:pl-12">
                <span className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary" />
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{role.period}</p>
                <h3 className="text-xl md:text-2xl font-serif font-medium mb-1">
                  {role.title} <span className="text-primary">· {role.org}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">{role.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
