import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

export const styles = recipe({
	base: {
		background: "rgba(255, 255, 255, 0.10)",
	},
	variants: {
		type: {
			horizontal: {
				width: "100%",
				height: "1px",
			},
			vertical: {
				width: "1px",
				height: "100%",
			},
		},
	},
	defaultVariants: {
		type: "vertical",
	},
});

export type DividerVariants = RecipeVariants<typeof styles>;
