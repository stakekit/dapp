import clsx from "clsx";
import {
	type AllHTMLAttributes,
	type ElementType,
	forwardRef,
	type PropsWithChildren,
} from "react";
import { type Atoms, atoms } from "../../../styles";

export type BoxProps = PropsWithChildren<
	Omit<
		AllHTMLAttributes<HTMLElement>,
		| "className"
		| "content"
		| "height"
		| "translate"
		| "color"
		| "width"
		| "cursor"
	> &
		Atoms & { as?: ElementType; className?: Parameters<typeof clsx>[0] }
>;

export const Box = forwardRef<unknown, BoxProps>(
	({ children, as = "div", className, ...props }, ref) => {
		const atomsProps: Record<string, unknown> = {};
		const nativeProps: Record<string, unknown> = {};

		const Component = as;

		Object.entries(props).forEach(([key, value]) => {
			if (atoms.properties.has(key as keyof Atoms)) {
				atomsProps[key] = value;
			} else {
				nativeProps[key] = value;
			}
		});

		return (
			<Component
				ref={ref}
				className={clsx([atoms(atomsProps), className])}
				{...nativeProps}
			>
				{children}
			</Component>
		);
	},
);

Box.displayName = "Box";
