import { Heart } from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  {
    title: "Your smile",
    body: "It's the first thing I think about in the morning and the last thing I picture at night. It could light up the darkest room.",
  },
  {
    title: "Your heart",
    body: "You love so fully and so gently. The way you care for the people around you makes me want to be a better man every day.",
  },
  {
    title: "Your laugh",
    body: "That sound is my favorite song. I'd do the silliest things just to hear it one more time.",
  },
  {
    title: "Your strength",
    body: "You carry so much with such grace. You inspire me more than you'll ever know, my Queen.",
  },
  {
    title: "The little things",
    body: "The way you say my name, your sleepy texts, your hugs that feel like home. The small moments are my favorite ones.",
  },
  {
    title: "Simply you",
    body: "I don't need a reason, really. Loving you is the easiest thing I've ever done. It's just you, all of you, always.",
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
