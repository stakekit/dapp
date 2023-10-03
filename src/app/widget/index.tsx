"use client"

import "@stakekit/widget/package/css"
import { SKApp, darkTheme } from "@stakekit/widget"
import { config } from "../../config"

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={darkTheme}
      connectKitForceTheme="darkMode"
    />
  )
}
