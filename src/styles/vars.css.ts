import { createGlobalTheme } from "@vanilla-extract/css"
import { spaces } from "./tokens/space"
import { radii } from "./tokens/radii"
import { colors } from "./tokens/colors"
import {
  fontSizes,
  fontWeights,
  headings,
  letterSpacings,
  lineHeights,
  texts,
} from "./tokens/typography"
import { fonts } from "./tokens/fonts"

export const vars = createGlobalTheme(":root", {
  space: spaces,
  color: colors,
  borderRadius: radii,
  fonts: fonts,
  fontSize: fontSizes,
  fontWeight: fontWeights,
  lineHeight: lineHeights,
  letterSpacing: letterSpacings,
  heading: headings,
  text: texts,
})
