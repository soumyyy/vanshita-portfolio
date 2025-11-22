export function Experience() {
  const experiences = [
    {
      role: "Analyst",
      company: "XQtiv Consulting",
      period: "2025 – Present",
      description: "Leading research and strategy across T&H, Retail, CPG, and BFSI sectors.",
      achievements: [
        "Led LinkedIn optimization strategy for premium analytics firms.",
        "Delivered market intelligence for Tredence, Fractal Analytics, and Omega Healthcare.",
        "Closed 3 client projects in 3 months, contributing to $100K revenue.",
      ],
    },
    {
      role: "Social Media Marketing Intern",
      company: "Inaya Accessories",
      period: "Previous",
      description: "Driving engagement and brand consistency through festive campaigns.",
      achievements: [
        "Achieved 35% engagement lift and 40% CTR boost.",
        "Directed festive campaigns with 95% brand consistency.",
        "Produced 100+ design assets and 20+ monthly posts.",
      ],
    },
    {
      role: "Freelance Social Media Strategist",
      company: "Self-Employed",
      period: "Ongoing",
      description: "Helping B2B and B2C clients maximize their digital ROI.",
      achievements: [
        "Maintained 80% client retention rate.",
        "Achieved 4.2x ROAS for B2B clients and 3.8x for B2C.",
        "Drove 85% follower growth and 45% engagement rise in 6 months.",
      ],
    },
    {
      role: "Sales & Marketing Intern",
      company: "XIRCLS",
      period: "Previous",
      description: "Optimizing sales workflows and developing market strategies.",
      achievements: [
        "Increased engagement by 25% and lead qualification by 30%.",
        "Improved onboarding efficiency by 40% through B2B workflows.",
        "Developed market strategy for Dipi Treats, Love Beauty & Planet, and HUL.",
      ],
    },
    {
      role: "Strategy Consultant",
      company: "Gloria Coffee",
      period: "Project",
      description: "Comprehensive brand strategy and content playbook design.",
      achievements: [
        "Conducted in-depth audience analysis and demographic research.",
        "Created platform-wise content playbooks.",
        "Significantly uplifted organic reach and engagement.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Experience & Impact</h2>
          <p className="text-muted-foreground text-lg">
            A timeline of delivering results, driving growth, and crafting strategies that work.
          </p>
        </div>

        <div className="relative border-l-2 border-muted ml-4 md:ml-auto md:mr-auto md:w-2/3 space-y-16 pl-8 md:pl-12 pb-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full border-4 border-background bg-primary transition-transform group-hover:scale-125 shadow-sm" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-2xl font-serif font-bold">{exp.company}</h3>
                <span className="text-sm font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full mt-2 md:mt-0 w-fit shadow-sm">
                  {exp.period}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-primary font-semibold text-lg">{exp.role}</span>
                <p className="text-muted-foreground mt-1 text-lg">{exp.description}</p>
              </div>

              <ul className="space-y-3 mb-6 bg-secondary/30 p-6 rounded-xl border border-border/50">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
