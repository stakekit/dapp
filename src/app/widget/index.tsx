"use client"

import "@stakekit/widget/package/css"
import { SKApp, darkTheme } from "@stakekit/widget"
import { config } from "../../config"
import mixpanel from "mixpanel-browser"
import { tracking } from "../tracking"

if (typeof window !== "undefined" && config.mixPanelToken) {
  mixpanel.init(config.mixPanelToken)
}

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={{
        ...darkTheme,
        color: {
          ...darkTheme.color,
          background: "#000000B2",
          modalBodyBackground: "#121415",
          selectValidatorMultiDefaultBackground: "#121415",
          positionsSectionBackgroundColor: "#121415",
          positionsSectionBorderColor: "#121415",

          secondaryButtonBackground: "#FFFFFF0D",
          secondaryButtonOutline: "#FFFFFF0D",

          secondaryButtonActiveBackground: "#ffffff1a",
          secondaryButtonActiveOutline: "#ffffff1a",
          secondaryButtonActiveColor: "#EEF0F2",

          secondaryButtonHoverBackground: "#ffffff1a",
          secondaryButtonHoverOutline: "#ffffff1a",
          secondaryButtonHoverColor: "#EEF0F2",

          stakeSectionBackground: "#FFFFFF0D",
          backgroundMuted: "#FFFFFF0D",
          tokenSelectBackground: "#FFFFFF0D",
          positionsSectionDividerColor: "#FFFFFF0D",
          tokenSelectHoverBackground: "#ffffff1a",

          skeletonLoaderBase: "#FFFFFF0D",
          skeletonLoaderHighlight: "#2B2B2B",
        },
      }}
      connectKitForceTheme="darkMode"
      tracking={tracking}
      referralCheck={config.enableReferralCheck}
    />
  )
}
