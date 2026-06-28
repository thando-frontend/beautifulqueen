import { Heart } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative px-6 py-20 text-center">
      <Heart className="mx-auto h-10 w-10 animate-heartbeat fill-primary text-primary" />
      <p className="mx-auto mt-6 max-w-md text-balance font-heading text-3xl italic text-foreground sm:text-4xl">
        I love you to the moon, around the stars and all the way back.
      </p>
      <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
        For Marinel &middot; My Queen &middot; My Princess &middot; Bae
      </p>
      <p className="mt-2 text-xs text-muted-foreground/70">
        Made with all my heart, just for you my dear.
      </p>
    </footer>
  )
}
