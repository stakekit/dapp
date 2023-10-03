import clsx from "clsx"
import { PropsWithChildren } from "react"
import { textStyles, TextVariants } from "./styles.css"
import { Box, BoxProps } from "../box"

type Props = PropsWithChildren<{ variant?: TextVariants }> & BoxProps

export const Text = ({ children, variant, className, ...rest }: Props) => {
  return (
    <Box as="p" className={clsx(className, textStyles(variant))} {...rest}>
      {children}
    </Box>
  )
}
