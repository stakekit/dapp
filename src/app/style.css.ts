import { style } from "@vanilla-extract/css";
import { atoms } from "../styles";
import { minMediaQuery } from "../styles/tokens/breakpoints";

export const layoutContainer = style([atoms({ fontFamily: "body" })]);

export const container = style({
	height: "100%",
	display: "flex",
	flexDirection: "column",
	position: "relative",
	overflow: "hidden",
});

export const links = style({
	cursor: "pointer",
});

export const connectContainer = style({
	borderRadius: "110px",
	background: "rgba(255, 255, 255, 0.05)",
	padding: "15px 20px",
	"@media": {
		[minMediaQuery("tablet")]: {
			padding: "15px 25px",
		},
	},
});

export const dividerContainer = style({
	alignSelf: "stretch",
});

export const logo = style({
	height: "60px",
	width: "140px",
	aspectRatio: "auto 140 / 60",
	"@media": {
		[minMediaQuery("tablet")]: {
			height: "80px",
			width: "160px",
			aspectRatio: "auto 160 / 80",
		},
	},
});
