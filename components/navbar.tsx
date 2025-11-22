"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight">
          VK.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-primary transition-colors">
              {link.name}
            </Link>
          ))}
          <Button asChild className="rounded-full">
            <Link href="#contact">
              Hire Me <MoveRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-border/50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-2">
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Hire Me
            </Link>
          </Button>
        </div>
      )}
    </nav>
  )
}
