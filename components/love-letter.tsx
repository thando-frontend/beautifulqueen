import { Quote } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function LoveLetter() {
  return (
    <section id="letter" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="relative rounded-3xl border border-primary/15 bg-card/70 p-8 shadow-sm backdrop-blur-sm sm:p-12">
            <Quote className="absolute -top-5 left-8 h-10 w-10 rotate-180 fill-accent stroke-accent" />
            <p className="font-heading text-2xl italic text-primary sm:text-3xl">
              My dearest Princess,
            </p>
            <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-foreground/90">
              <p>
                There are a thousand things I want to tell you, and somehow words
                always feel too small. But I&apos;ll try anyway, because you
                deserve to hear them every day.
              </p>
              <p>
                You are my favorite hello and my hardest goodbye. You make
                ordinary moments feel like memories worth keeping, and you turn
                even the dullest days soft and golden just by being in them.
              </p>
              <p>
                I love the sound of your laugh, the way you scrunch your nose,
                and how safe the world feels whenever you&apos;re near. Being
                away from you only makes me more certain: it&apos;s you, Mari. It
                has always been you.
              </p>
              <p>
                So until Friday, I&apos;ll be counting every second — and when I
                finally see you, I&apos;m never letting go.
              </p>
            </div>
            <p className="mt-8 font-heading text-2xl italic text-primary">
              Forever yours,
              <span className="mt-1 block text-foreground/80">
                your one and only
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
