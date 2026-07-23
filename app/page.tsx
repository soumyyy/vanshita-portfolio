import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Work } from "@/components/work"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { BackgroundMount } from "@/components/background-mount"

export default function Home() {
  return (
    <SmoothScroll>
      <BackgroundMount />
      <main className="relative z-10 min-h-screen text-foreground font-sans selection:bg-primary/20">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
