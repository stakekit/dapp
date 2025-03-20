import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";
import { atoms, vars } from "../../../styles";
import { minMediaQuery } from "../../../styles/tokens/breakpoints";
import type { Heading, Text } from "../../../styles/tokens/typography";

export const heading = recipe({
	base: atoms({ color: "text", my: "0" }),

	variants: {
		type: {
			regular: {},
		},
		level: {
			...Object.keys(vars.heading).reduce(
				(acc, key) => {
					const K = key as Heading;

					acc[K] = {
						fontSize: vars.heading[K].mobile.fontSize,
						"@media": {
							[minMediaQuery("tablet")]: {
								fontSize: vars.heading[K].tablet.fontSize,
							},
						},
					};

					return acc;
				},
				{} as Record<
					Heading,
					{
						fontSize: typeof vars.heading.h1.mobile.fontSize;
						"@media": Record<
							string,
							{ fontSize: typeof vars.heading.h1.mobile.fontSize }
						>;
					}
				>,
			),
		},
		weight: {
			normal: atoms({ fontWeight: "normal" }),
			medium: atoms({ fontWeight: "medium" }),
			semibold: atoms({ fontWeight: "semibold" }),
			bold: atoms({ fontWeight: "bold" }),
			extrabold: atoms({ fontWeight: "extrabold" }),
		},
	},

	defaultVariants: {
		level: "h1",
		weight: "normal",
	},
});

export type HeadingVariants = RecipeVariants<typeof heading>;

export const textStyles = recipe({
	base: [atoms({ color: "text" }), { margin: 0 }],
	variants: {
		type: {
			regular: atoms({ color: "text" }),
			muted: atoms({ color: "textMuted" }),
			white: atoms({ color: "white" }),
		},
		weight: {
			normal: atoms({ fontWeight: "normal" }),
			medium: atoms({ fontWeight: "medium" }),
			semibold: atoms({ fontWeight: "semibold" }),
			bold: atoms({ fontWeight: "bold" }),
			extrabold: atoms({ fontWeight: "extrabold" }),
		},
		size: {
			...Object.keys(vars.text).reduce(
				(acc, key) => {
					const K = key as Text;

					acc[K] = {
						fontSize: vars.text[K].mobile.fontSize,
						"@media": {
							[minMediaQuery("tablet")]: {
								fontSize: vars.text[K].tablet.fontSize,
							},
						},
					};

					return acc;
				},
				{} as Record<
					Text,
					{
						fontSize: typeof vars.text.small.mobile.fontSize;
						"@media": Record<
							string,
							{ fontSize: typeof vars.text.small.mobile.fontSize }
						>;
					}
				>,
			),
			supportLink: {
				fontSize: vars.fontSize.xl,
			},
		},
	},

	defaultVariants: {
		type: "regular",
		size: "standard",
		weight: "medium",
	},
});

export type TextVariants = RecipeVariants<typeof textStyles>;
