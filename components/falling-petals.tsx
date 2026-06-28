"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

type Petal = {
  left: number
  size: number
  duration: number
  delay: number
  opacity: number
  rotate: number
}

export function FallingPetals({ count = 14 }: { count?: number }) {
  // Generate only on the client to avoid hydration mismatch from Math.random()
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        size: 12 + Math.random() * 22,
        duration: 14 + Math.random() * 16,
        delay: Math.random() * -30,
        opacity: 0.25 + Math.random() * 0.45,
        rotate: Math.random() * 360,
      })),
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block text-primary/70"
          style={{
            left: `${p.left}%`,
            // @ts-expect-error custom properties for keyframes
            "--s": p.size / 18,
            "--o": p.opacity,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        >
          <Heart
            style={{
              width: p.size,
              height: p.size,
              transform: `rotate(${p.rotate}deg)`,
            }}
            className="fill-primary/40 stroke-primary/40"
          />
        </span>
      ))}
    </div>
  )
}
