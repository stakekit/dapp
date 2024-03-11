import { globalStyle } from "@vanilla-extract/css"
import { maxMediaQuery } from "./tokens/breakpoints"

globalStyle("html, body", {
  margin: 0,
})

globalStyle("body", {
  background: "#121415",
  fontFamily: "var(--sk-font-garamond)",
  minHeight: "100vh",
})

globalStyle("a", {
  textDecoration: "none",
})

globalStyle("[data-rk='stakekit']", {
  "@media": {
    [maxMediaQuery("tablet")]: {
      padding: "0 8px",
    },
  },
})

globalStyle("[data-rk='stakekit'] > div:first-of-type", {
  borderRadius: "20px",
})
