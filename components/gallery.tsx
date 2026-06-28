"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Reveal } from "@/components/reveal"

const photos = [
  { src: "/images/gallery-1.png", caption: "Every sunset is better with you", span: "sm:row-span-2" },
  { src: "/images/gallery-2.png", caption: "Slow mornings, just us" },
  { src: "/images/gallery-3.png", caption: "You make the world bloom" },
  { src: "/images/gallery-6.png", caption: "My hand always finds yours", span: "sm:row-span-2" },
  { src: "/images/gallery-4.png", caption: "Under the same stars" },
  { src: "/images/gallery-5.png", caption: "Words I'll never stop writing for you" },
]

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="gallery" className="relative bg-secondary/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="font-heading text-lg italic text-primary sm:text-xl">
            Moments I hold close
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Us, in little frames
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Placeholders for now, my love — swap these for our real photos and
            watch our story fill the page.
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 80}
              className={photo.span ?? ""}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden rounded-3xl border border-primary/15 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 right-4 translate-y-3 text-left font-heading text-lg italic text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/70 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={photos[active].caption}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-card/80 text-foreground transition-colors hover:bg-card"
          >
            <X className="h-5 w-5" />
          </button>
          <figure
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-primary/20 shadow-lg">
              <Image
                src={photos[active].src || "/placeholder.svg"}
                alt={photos[active].caption}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 text-center font-heading text-xl italic text-primary-foreground">
              {photos[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
