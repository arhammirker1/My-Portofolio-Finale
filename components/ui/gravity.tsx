"use client"

import React from "react"

import { forwardRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export type GravityRef = {
  start: () => void
  stop: () => void
  reset: () => void
}

type MatterBodyProps = {
  children: ReactNode
  className?: string
  x?: number | string
  y?: number | string
}

const MatterBody = ({ children, className, x = 0, y = 0 }: MatterBodyProps) => {
  const style: React.CSSProperties = {}

  if (typeof x === "number") style.left = `${x}px`
  else if (typeof x === "string") style.left = x

  if (typeof y === "number") style.top = `${y}px`
  else if (typeof y === "string") style.top = y

  return (
    <div className={cn("absolute", className)} style={style}>
      {children}
    </div>
  )
}

type GravityProps = {
  children: ReactNode
  className?: string
  gravity?: { x: number; y: number }
}

const Gravity = forwardRef<GravityRef, GravityProps>(({ children, className, gravity = { x: 0, y: 1 } }, ref) => {
  const handleStart = () => {
    // No-op for CSS-based animation
  }

  const handleStop = () => {
    // No-op for CSS-based animation
  }

  const handleReset = () => {
    // No-op for CSS-based animation
  }

  React.useImperativeHandle(ref, () => ({ start: handleStart, stop: handleStop, reset: handleReset }), [])

  return (
    <div className={cn(className, "relative")} style={{ perspective: "1000px" }}>
      {children}
    </div>
  )
})

Gravity.displayName = "Gravity"

export { Gravity, MatterBody }
