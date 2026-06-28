import { Heart } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  {
    title: "Your smile",
    body: "It's the kind of smile that makes the rest of the world go quiet. I've memorized every version of it, the shy one, the surprised one and the one you try to hide. They're all mine and I treasure every single one deeply.",
  },
  {
    title: "Your heart",
    body: "You love like it costs you nothing and yet I know how deeply it runs. Watching you love has taught me what love is supposed to look like. You are the standard I aim to reach, Mari. You always will be.",
  },
  {
    title: "Your laugh",
    body: "There is no better sound in the entire world. Not music, not rain, NOTHING!! I would embarrass myself a thousand times over just to be the reason it happens.",
  },
  {
    title: "Your strength",
    body: "You don't even see it and that's what moves me most. You bend but never break. You hold everything together so quietly, so beautifully. I am in awe of you every single day.",
  },
  {
    title: "The little things",
    body: "The way you make me miss you when you're not here. The warmth and softness of your touch. Your charming sense of humour. The way in which you forgive and move me to be better.",
  },
  {
    title: "Simply you",
    body: "Not a version of you, not you on your best day or your worst, all of you! Every strength, every layer, every flaw, all of it Marinel. Loving you isn't something I decided, it is just something I am.",
  },
]

export function Reasons() {
  return (
    <section id="reasons" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="font-heading text-lg italic text-primary sm:text-xl">
            A few of the endless reasons
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Why I love you, Mari
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-primary/15 bg-card/70 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 group-hover:scale-110">
                  <Heart className="h-6 w-6 fill-primary/30" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {reason.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
