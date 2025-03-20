import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { Box, type BoxProps } from "../box";
import { type TextVariants, textStyles } from "./styles.css";

type Props = PropsWithChildren<{ variant?: TextVariants }> & BoxProps;

export const Text = ({ children, variant, className, ...rest }: Props) => {
	return (
		<Box as="p" className={clsx(className, textStyles(variant))} {...rest}>
			{children}
		</Box>
	);
};
