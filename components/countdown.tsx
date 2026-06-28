"use client"

import { useEffect, useState } from "react"
import { CalendarHeart, Clock, MapPin } from "lucide-react"
import { Reveal } from "@/components/reveal"

// Friday, 3 July 2026 at 12:00 PM CAT (UTC+2)
const TARGET = new Date("2026-07-03T12:00:00+02:00").getTime()

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): { left: TimeLeft; done: boolean } {
  const diff = TARGET - Date.now()
  if (diff <= 0) {
    return { left: { days: 0, hours: 0, minutes: 0, seconds: 0 }, done: true }
  }
  return {
    left: {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    },
    done: false,
  }
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex min-w-[4.5rem] items-center justify-center rounded-2xl border border-primary/15 bg-card/70 px-4 py-5 shadow-sm backdrop-blur-sm sm:min-w-[6rem] sm:px-6 sm:py-7">
        <span className="font-heading text-4xl font-semibold tabular-nums text-primary sm:text-6xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
        {label}
      </span>
    </div>
  )
}

export function Countdown() {
  const [state, setState] = useState<{ left: TimeLeft; done: boolean } | null>(
    null,
  )

  useEffect(() => {
    setState(getTimeLeft())
    const id = setInterval(() => setState(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-secondary/40 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-heading text-lg italic text-primary sm:text-xl">
            Until I get to hold you again
          </p>
          <h2 className="mt-3 text-balance font-heading text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Counting down to you, Bae
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 flex items-center justify-center gap-3 sm:gap-6">
            {state && !state.done ? (
              <>
                <Unit value={state.left.days} label="Days" />
                <span className="font-heading text-3xl text-primary/40 sm:text-5xl">
                  :
                </span>
                <Unit value={state.left.hours} label="Hours" />
                <span className="font-heading text-3xl text-primary/40 sm:text-5xl">
                  :
                </span>
                <Unit value={state.left.minutes} label="Minutes" />
                <span className="font-heading text-3xl text-primary/40 sm:text-5xl">
                  :
                </span>
                <Unit value={state.left.seconds} label="Seconds" />
              </>
            ) : state && state.done ? (
              <p className="font-heading text-3xl italic text-primary sm:text-4xl">
                It&apos;s finally today. Come here, my love.
              </p>
            ) : (
              <div className="h-[7.5rem] w-full max-w-md animate-pulse rounded-2xl bg-card/50" />
            )}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 text-muted-foreground sm:flex-row sm:gap-8">
            <span className="flex items-center gap-2">
              <CalendarHeart className="h-5 w-5 text-primary" />
              Friday, 3 July
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              12:00 PM CAT
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Right back in your arms
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
