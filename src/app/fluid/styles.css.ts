import { style } from "@vanilla-extract/css"

export const styles = style({
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  zIndex: -1,

  "::after": {
    background: "#121415",
    opacity: 0.5,
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    content: '""',
  },
})
