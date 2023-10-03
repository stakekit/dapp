import { style } from "@vanilla-extract/css"

export const gradientContainer = style({
  position: "fixed",
  width: "100vw",
  height: "30vh",
  top: "40%",
  left: 0,
  right: 0,
  bottom: 0,
  background:
    "linear-gradient(331deg, #FFC21B 5.21%, #B1A5B9 23.44%, #F46FC8 38.54%, #FF5F25 79.69%, #6D05F3 100%)",
  opacity: 0.7,
  filter: "blur(140px)",
  transform: "rotate(-15.84deg)",
  overflow: "hidden",
})
