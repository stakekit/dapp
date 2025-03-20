import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./tokens/colors";
import { fonts } from "./tokens/fonts";
import { radii } from "./tokens/radii";
import { spaces } from "./tokens/space";
import {
	fontSizes,
	fontWeights,
	headings,
	letterSpacings,
	lineHeights,
	texts,
} from "./tokens/typography";

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
});
