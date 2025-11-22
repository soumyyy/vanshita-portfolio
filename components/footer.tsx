import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl font-bold mb-1">Vanshita Kalra</p>
          <p className="text-sm text-muted-foreground">Marketing Analyst & Digital Strategist</p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#experience" className="hover:text-primary transition-colors">
            Work
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
