import { globalStyle } from "@vanilla-extract/css"

globalStyle("html", {
  overflowX: "hidden",
})

globalStyle("html, body", {
  margin: 0,
})

globalStyle("body::before", {
  content: "",
  position: "absolute",
  top: "400px",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "35vh",
  background:
    "linear-gradient(331deg, #FFC21B 5.21%, #B1A5B9 23.44%, #F46FC8 38.54%, #FF5F25 79.69%, #6D05F3 100%)",
  filter: "blur(140px)",
  transform: "rotate(-15.84deg) translate3d(0, 0, 0) translateZ(0)",
})

globalStyle("body", {
  background: "rgba(18, 20, 21, 1)",
  fontFamily: "var(--sk-font-garamond)",
  minHeight: "100vh",

  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflowX: "hidden",
})

globalStyle("a", {
  textDecoration: "none",
})

globalStyle("[data-rk='stakekit']", {
  padding: "0 8px",
})

globalStyle("[data-rk='stakekit'] > div:first-of-type > div:first-of-type", {
  borderRadius: "20px",
})
