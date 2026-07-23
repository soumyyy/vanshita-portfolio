import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Alex_Brush } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

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
const cursive = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cursive",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vanshita Kalra",
  description:
    "Vanshita Kalra, curious by nature and an Executive Search Consultant at XQtiv Consulting leading VP-level leadership search across technology and BFSI.",
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
        url: "/icon.svg",
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
    <html lang="en" className={`dark ${playfair.variable} ${inter.variable} ${cursive.variable}`}>
      <body className="font-sans bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
