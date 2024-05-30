"use client"

import "@stakekit/widget/style.css"
import { SKApp, darkTheme } from "@stakekit/widget"
import { config } from "../../config"
import { tracking } from "../tracking"

export const Widget = () => {
  return (
    <SKApp
      apiKey={config.apiKey}
      theme={{
        ...darkTheme,
        color: {
          ...darkTheme.color,
          background: "rgba(0, 0, 0, 0.83)",
          modalBodyBackground: "#121415",
          selectValidatorMultiDefaultBackground: "#121415",
          positionsSectionBackgroundColor: "#121415",
          positionsSectionBorderColor: "#121415",

          connectKit: {
            ...darkTheme.color.connectKit,
            modalBackground: "#121415",
            profileForeground: "#121415",
          },

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
          dropdownBackground: "#121415",
          warningBoxBackground: "#FFFFFF0D",
        },
      }}
      tracking={tracking}
      referralCheck={config.enableReferralCheck}
    />
  )
}
