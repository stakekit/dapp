import { style } from "@vanilla-extract/css"
import { atoms } from "../styles"

export const container = style({
  height: "100%",
  display: "flex",
  flexDirection: "column",
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
