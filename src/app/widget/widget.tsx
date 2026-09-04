"use client";

import "@stakekit/widget/style.css";
import { darkTheme, SKApp } from "@stakekit/widget";
import { Box } from "@/components/atoms/box";
import { config } from "../../config";
import { tracking } from "../tracking";
import { HelpModals } from "./help-modals";

export const Widget = () => {
  const theme = {
    ...darkTheme,
    color: {
      ...(darkTheme.color ?? {}),
      background: "rgba(0, 0, 0, 0.83)",
      modalBodyBackground: "#121415",
      selectValidatorMultiDefaultBackground: "#121415",
      positionsClaimRewardsBackground: "#121415",
      positionsActionRequiredBackground: "#121415",
      positionsPendingBackground: "#121415",
      connectKit: {
        ...(darkTheme.color?.connectKit ?? {}),
        modalBackground: "#121415",
        profileForeground: "#121415",
      },
      secondaryButtonBackground: "#FFFFFF0D",
      secondaryButtonColor: "#EEF0F2",
      secondaryButtonActiveBackground: "#ffffff1a",
      secondaryButtonHoverBackground: "#ffffff1a",
      stakeSectionBackground: "#FFFFFF0D",
      backgroundMuted: "#FFFFFF0D",
      tokenSelectBackground: "#FFFFFF0D",
      tokenSelectHoverBackground: "#ffffff1a",
      skeletonLoaderBase: "#FFFFFF0D",
      skeletonLoaderHighlight: "#2B2B2B",
      dropdownBackground: "#121415",
      warningBoxBackground: "#FFFFFF0D",
    },
  };

  return (
    <SKApp apiKey={config.apiKey} theme={theme} tracking={tracking}>
      <Box marginTop={{ tablet: "0", mobile: "8" }}>
        <HelpModals />
      </Box>
    </SKApp>
  );
};
