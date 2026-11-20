import { style } from "@vanilla-extract/css";
import { minMediaQuery } from "../styles/tokens/breakpoints";

export const container = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
});

export const links = style({
  cursor: "pointer",
});

// The help links fade in once the widget frame has grown open on mount, so
// they never show while the growing frame pushes them down.
export const helpLinks = style({
  "@media": {
    "(prefers-reduced-motion: no-preference)": {
      transition: "opacity 0.3s ease",
    },
  },
});

export const helpLinksHidden = style({
  opacity: 0,
  visibility: "hidden",
});

export const connectContainer = style({
  borderRadius: "110px",
  background: "rgba(255, 255, 255, 0.05)",
  padding: "15px 20px",
  "@media": {
    [minMediaQuery("tablet")]: {
      padding: "15px 25px",
    },
  },
});

export const dividerContainer = style({
  alignSelf: "stretch",
});

export const logo = style({
  height: "60px",
  width: "140px",
  aspectRatio: "auto 140 / 60",
  "@media": {
    [minMediaQuery("tablet")]: {
      height: "80px",
      width: "160px",
      aspectRatio: "auto 160 / 80",
    },
  },
});
