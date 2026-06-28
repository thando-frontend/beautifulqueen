"use client"

import Image from "next/image"
import { Heart, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Image
        src="/images/hero-blooms.png"
        alt=""
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <span className="inline-flex animate-drift items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          <Heart className="h-4 w-4 fill-primary" />
          A little something, just for you
        </span>

        <h1 className="mt-8 text-balance font-heading text-5xl font-medium leading-[1.05] text-foreground sm:text-7xl md:text-8xl">
          For my{" "}
          <span className="italic text-primary">Marinel</span>
          <span className="block font-light italic text-foreground/80">
            my Queen, my whole heart
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I built this little corner of the world to say something I&apos;ll
          never say enough: I love you, Mari Boo Boo Bear. Endlessly, and more
          every single day.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#countdown"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-base font-medium text-primary-foreground shadow-sm transition-transform hover:scale-105"
          >
            See our countdown
            <Heart className="h-4 w-4 fill-primary-foreground" />
          </a>
          <a
            href="#reasons"
            className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-card/60 px-7 py-3 text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
          >
            Why I love you
          </a>
        </div>
      </div>

      <a
        href="#letter"
        aria-label="Scroll down"
        className="absolute bottom-8 z-10 text-primary/70 transition-colors hover:text-primary"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  )
}
