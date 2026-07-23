"use client"

import dynamic from "next/dynamic"
import { useIsMobile } from "@/hooks/use-mobile"

const SiteBackground = dynamic(() => import("@/components/three/site-background").then((m) => m.SiteBackground), {
  ssr: false,
})

export function BackgroundMount() {
  const isMobile = useIsMobile()
  return <SiteBackground reduced={isMobile} />
}
