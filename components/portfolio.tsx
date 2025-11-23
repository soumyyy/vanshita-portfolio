import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Portfolio() {
  const projects = [
    {
      title: "LinkedIn Optimization Strategy",
      category: "B2B Strategy",
      description:
        "Developed a comprehensive LinkedIn strategy for premium analytics firms, focusing on thought leadership and lead generation.",
      tags: ["Strategy", "LinkedIn", "B2B"],
    },
    {
      title: "Inaya Accessories Festive Campaign",
      category: "Social Media Marketing",
      description:
        "Directed a high-impact festive campaign achieving 35% engagement lift and producing 100+ creative assets.",
      tags: ["Campaign Management", "Visual Design", "B2C"],
    },
    {
      title: "Gloria Coffee Brand Playbook",
      category: "Brand Strategy",
      description:
        "Constructed a platform-wise content playbook based on deep demographic research and audience analysis.",
      tags: ["Branding", "Research", "Content Strategy"],
    },
    {
      title: "Market Intelligence Reports",
      category: "Research",
      description: "Delivered actionable market intelligence for industry giants like Tredence and Fractal Analytics.",
      tags: ["Market Research", "Data Analysis", "Consulting"],
    },
  ]

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A collection of projects highlighting my expertise in strategy, content, and growth.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full bg-transparent">
            View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 bg-muted group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/marketing-project.png"
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link href="#" className="absolute inset-0 z-10">
                <span className="sr-only">View Project</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="rounded-full w-full bg-transparent">
            View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
