"use client"

import { useEffect, useRef } from "react"
import { startFluid } from "@stakekit/fluid-animation"
import { mobileBackground, styles } from "./styles.css"
import { useIsMobile } from "@/utils/use-is-mobile"
import clsx from "clsx"
import { useIsClient } from "../../utils/use-is-client"

export const FluidContainer = () => {
  const fluidStarted = useRef(false)
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  const isClient = useIsClient()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (
      !isClient ||
      !canvasContainerRef.current ||
      fluidStarted.current ||
      isMobile
    ) {
      return
    }

    fluidStarted.current = true
    startFluid(canvasContainerRef.current)
  }, [isMobile, isClient])

  return (
    <div
      ref={canvasContainerRef}
      className={clsx([styles, { [mobileBackground]: isMobile }])}
    />
  )
}
