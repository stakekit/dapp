"use client"

import { useEffect, useRef } from "react"
import { startFluid } from "@stakekit/fluid-animation"
import { styles } from "./styles.css"

export const FluidContainer = () => {
  const fluidStarted = useRef(false)
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasContainerRef.current || fluidStarted.current) return

    fluidStarted.current = true
    startFluid(canvasContainerRef.current)
  }, [])

  return <div ref={canvasContainerRef} className={styles} />
}
