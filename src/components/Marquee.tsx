"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
}

export default function Marquee({
  children,
  pauseOnHover = true,
  speed = "normal",
  direction = "left",
  className,
  ...props
}: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "20s",
    fast: "10s"
  }

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden [--duration:20s] [--gap:1rem]",
        className
      )}
      style={{ "--duration": speedMap[speed] } as React.CSSProperties}
      {...props}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0  items-center justify-around gap-[2rem] animate-marquee group-hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[2rem] animate-marquee group-hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

