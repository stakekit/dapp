import { PropsWithChildren } from "react"
import { Box } from "../../atoms/box"
import { gradientContainer } from "./style.css"

export const GradientContainer = ({ children }: PropsWithChildren) => {
  return <Box className={gradientContainer}>{children}</Box>
}
