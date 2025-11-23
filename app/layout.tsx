import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vanshita Kalra | Marketing Analyst & Digital Strategist",
  description: "Portfolio of Vanshita Kalra - Turning insights into strategy and strategy into growth.",
  icons: {
    icon: [
      {
        url: "/icon.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
