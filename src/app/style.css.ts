import { style } from "@vanilla-extract/css"
import { atoms } from "../styles"

export const container = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",

  "::before": {
    content: "",
    position: "absolute",
    top: "35%",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "35vh",
    background:
      "linear-gradient(331deg, #FFC21B 5.21%, #B1A5B9 23.44%, #F46FC8 38.54%, #FF5F25 79.69%, #6D05F3 100%)",
    filter: "blur(140px)",
    transform: "rotate(-15.84deg)",
  },

  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
})

export const layoutContainer = style([
  atoms({ fontFamily: "body" }),
  {
    scrollbarWidth: "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
])

export const links = style({
  cursor: "pointer",
})

export const widgetContainer = style({ zIndex: 1 })

export const connectContainer = style({
  borderRadius: "110px",
  background: "rgba(255, 255, 255, 0.05)",
  padding: "15px 25px",
})

export const dividerContainer = style({
  alignSelf: "stretch",
})
