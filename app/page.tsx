import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Leadership } from "@/components/leadership"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Leadership />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
