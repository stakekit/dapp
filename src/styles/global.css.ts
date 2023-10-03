import { globalStyle } from "@vanilla-extract/css"
import { container } from "../app/style.css"
import { maxMediaQuery } from "./tokens/breakpoints"

globalStyle("html, body", {
  margin: 0,
})

globalStyle("body", {
  background: "rgba(18, 20, 21, 1)",
  fontFamily: "var(--sk-font-garamond)",
  minHeight: "100vh",
  height: "100vh",
})

globalStyle("a", {
  textDecoration: "none",
})

globalStyle(`${container} > [data-rk='stakekit']`, {
  "@media": {
    [maxMediaQuery("tablet")]: {
      display: "flex",
      flex: "1",
    },
  },
})
