import { BarChart3, Target, PenTool, TrendingUp } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Strategy & Analysis",
      icon: <Target className="w-6 h-6" />,
      skills: [
        "Market Intelligence",
        "Strategic Planning",
        "Competitor Analysis",
        "Consumer Behavior",
        "Campaign Optimization",
      ],
    },
    {
      title: "Content & Creative",
      icon: <PenTool className="w-6 h-6" />,
      skills: [
        "Content Strategy",
        "Copywriting",
        "Brand Storytelling",
        "Creative Direction",
        "Social Media Management",
      ],
    },
    {
      title: "Data & Tools",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Excel/Google Sheets", "Data Visualization", "Notion", "SEO Basics", "Performance Tracking"],
    },
    {
      title: "Growth & Impact",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: [
        "Lead Generation",
        "Community Building",
        "Stakeholder Management",
        "Project Management",
        "Client Relations",
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">My Toolkit</h2>
            <p className="text-white/70 text-lg mb-8 max-w-md leading-relaxed">
              I combine analytical rigor with creative flair to deliver comprehensive marketing solutions. My approach
              is holistic, covering everything from initial research to final execution.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-4xl font-bold text-primary mb-2">4+</h3>
                <p className="text-sm text-white/60">Years of Experience</p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-4xl font-bold text-primary mb-2">12+</h3>
                <p className="text-sm text-white/60">Industries Served</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4 border border-primary/20">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-sm text-white/70 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
