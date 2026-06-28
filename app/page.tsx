import { FallingPetals } from "@/components/falling-petals"
import { Hero } from "@/components/hero"
import { LoveLetter } from "@/components/love-letter"
import { Countdown } from "@/components/countdown"
import { Reasons } from "@/components/reasons"
import { Gallery } from "@/components/gallery"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative">
      <FallingPetals />
      <div className="relative z-10">
        <Hero />
        <LoveLetter />
        <Countdown />
        <Reasons />
        <Gallery />
        <SiteFooter />
      </div>
    </main>
  )
}
