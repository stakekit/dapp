import { globalStyle } from "@vanilla-extract/css";
import { maxMediaQuery, minMediaQuery } from "./tokens/breakpoints";
import { colors } from "./tokens/colors";
import { garamondVar } from "./tokens/fonts";

globalStyle("html, body", {
  margin: 0,
  minHeight: "100%",
});

globalStyle("body", {
  background: "#121415",
  fontFamily: `var(${garamondVar})`,
  minHeight: "100vh",
});

globalStyle("#root", {
  minHeight: "100vh",
});

globalStyle("a", {
  textDecoration: "none",
});

// The widget frame paints the `background` Color Role, which its dialogs share,
// so only the frame goes translucent over the fluid backdrop, without the
// outline. `!important`: the widget's StyleX rules carry id-level specificity.
globalStyle("[data-rk='widget-container']", {
  backgroundColor: `${colors.widgetBackground} !important`,
  boxShadow: "none !important",
  "@media": {
    // Narrower than the viewport, so the frame keeps its corners on phones.
    [maxMediaQuery("tablet")]: {
      width: "calc(100% - 16px) !important",
    },
    [minMediaQuery("tablet")]: {
      marginBottom: "50px",
    },
  },
});
