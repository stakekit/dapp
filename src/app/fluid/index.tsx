"use client"

import { useEffect, useRef } from "react"
import { startFluid } from "@stakekit/fluid-animation"

export const FluidContainer = () => {
  const fluidStarted = useRef(false)
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasContainerRef.current || fluidStarted.current) return

    fluidStarted.current = true
    startFluid(canvasContainerRef.current)
  }, [])

  return (
    <div
      ref={canvasContainerRef}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}
