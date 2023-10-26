"use client"

import "@stakekit/widget/package/css"
import { SKApp, darkTheme } from "@stakekit/widget"
import { config } from "../../config"
import mixpanel from "mixpanel-browser"
import { tracking } from "../tracking"

if (typeof window !== "undefined") {
  mixpanel.init(config.mixPanelToken)
}

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={darkTheme}
      connectKitForceTheme="darkMode"
      tracking={tracking}
    />
  )
}
