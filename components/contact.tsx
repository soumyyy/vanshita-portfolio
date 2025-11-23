import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Download } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Let's Create Something <span className="text-primary italic">Meaningful</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you need a comprehensive marketing strategy, content direction, or just want to chat about the
              latest trends in digital — I'm always open to new conversations.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:vanshitahi@gmail.com"
                className="flex items-center gap-4 text-xl font-medium hover:text-primary transition-colors group p-2 -ml-2 rounded-lg hover:bg-secondary/50"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                vanshitahi@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/vanshita-kalra-6a5077262/" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-xl font-medium hover:text-primary transition-colors group p-2 -ml-2 rounded-lg hover:bg-secondary/50"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </div>
                Connect on LinkedIn
              </a>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
              >
                <Download className="mr-2 w-4 h-4" /> Download Resume
              </Button>
            </div>
          </div>

          <div className="bg-secondary/30 p-8 md:p-10 rounded-3xl border border-border shadow-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium pl-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="your name"
                    className="bg-background rounded-xl border-transparent focus:border-primary h-12 shadow-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium pl-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-background rounded-xl border-transparent focus:border-primary h-12 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium pl-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  className="bg-background rounded-xl border-transparent focus:border-primary h-12 shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium pl-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  className="bg-background rounded-xl border-transparent focus:border-primary min-h-[150px] shadow-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl text-base font-medium h-12 shadow-md hover:shadow-lg transition-shadow"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
