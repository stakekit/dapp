import clsx from "clsx"
import { PropsWithChildren } from "react"
import { heading, HeadingVariants } from "./styles.css"

type Props = PropsWithChildren<{ variant?: HeadingVariants }> &
  JSX.IntrinsicElements["h1"]

export const Heading = ({ children, variant, className, ...rest }: Props) => {
  const Component = variant?.level ?? "h1"

  return (
    <Component className={clsx(heading(variant), className)} {...rest}>
      {children}
    </Component>
  )
}
