import { globalStyle } from "@vanilla-extract/css"
import { widgetContainer } from "../app/style.css"

globalStyle("html, body", {
  margin: 0,
})

globalStyle("body", {
  background: "rgba(18, 20, 21, 1)",
  fontFamily: "var(--sk-font-garamond)",
  minHeight: "100vh",
})

globalStyle("a", {
  textDecoration: "none",
})

globalStyle(`${widgetContainer} > [data-rk='stakekit']`, {
  padding: "0 8px",
})

globalStyle(
  `${widgetContainer} > [data-rk='stakekit'] > div:first-of-type > div:first-of-type`,
  { borderRadius: "20px" }
)
