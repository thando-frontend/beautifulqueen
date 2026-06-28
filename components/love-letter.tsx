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
                There are a thousand things I want to tell you, so much I want
                to make up for and somehow words always feel wrong and too small. 
                But I&apos;ll try anyway, because you deserve to hear them every day.
              </p>
              <p>
                You are my favorite hello and my hardest goodbye. You make the
                ordinary moments feel like memories worth keeping and you turn
                even the most dull days great and golden just by being in them.
              </p>
              <p>
                I love the sound of your laugh, the way you can love so strongly 
                and how safe the world feels whenever you&apos;re near. Being
                away from you only makes me more certain: it&apos;s you, Mari. It
                has always been you.
              </p>
              <p>
                These last 2 months have been both the hardest and the most clarifying 
                of my life. I know that I have hurt you and I know there are things 
                I wish I could take back. But I need you to know, Marinel, more than 
                anything, I&apos;ve never once wanted to hurt you. Not intentionally, not 
                even for a second. I love you too deeply for that. And whatever it takes, 
                however long it takes, I want to make it right. You are worth every bit 
                of that effort and so much more so I&apos;ll never stop making it up to you.
              </p>
              <p>
                So until Friday, I&apos;ll be counting every day, every hour and every second,
                so that when I finally see you, I&apos;m never letting you go Marinel.
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
