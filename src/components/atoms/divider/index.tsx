import { Box, BoxProps } from "../box"
import { DividerVariants, styles } from "./style.css"

type Props = BoxProps & {
  variant?: DividerVariants
}

export const Divider = (props: Props) => {
  return <Box className={styles(props.variant)} {...props} />
}
