"use client"

import { useEffect, useRef } from "react"
import { startFluid } from "@stakekit/fluid-animation"
import { styles } from "./styles.css"
import { useIsMobile } from "@/utils/use-is-mobile"

export const FluidContainer = () => {
  const fluidStarted = useRef(false)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!canvasContainerRef.current || fluidStarted.current) return

    fluidStarted.current = true
    startFluid(canvasContainerRef.current)
  }, [])

  if (isMobile) return null
  return <div ref={canvasContainerRef} className={styles} />
}
