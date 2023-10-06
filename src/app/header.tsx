import Image from "next/image"
import { Box } from "../components/atoms/box"
import { Text } from "../components/atoms/typography"
import { TwitterIcon } from "../components/atoms/icons/twitter"
import { GHIcon } from "../components/atoms/icons/gh"
import Logo from "./sk-horizontal-darkmode.svg"
import { connectContainer, dividerContainer } from "./style.css"
import { Divider } from "../components/atoms/divider"

export const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py="2"
      px={{ mobile: "4", tablet: "8" }}
    >
      <Box
        as="a"
        href="/"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image src={Logo} alt="logo" width={160} height={80} priority />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="3"
        className={connectContainer}
      >
        <Box as="a" href="https://docs.stakek.it/docs" target="_blank">
          <Text variant={{ size: "small", weight: "normal", type: "muted" }}>
            Docs
          </Text>
        </Box>

        <Box className={dividerContainer}>
          <Divider />
        </Box>

        <Box
          display="flex"
          as="a"
          href="https://twitter.com/stakekit"
          target="_blank"
        >
          <TwitterIcon />
        </Box>

        <Box className={dividerContainer}>
          <Divider />
        </Box>

        <Box
          display="flex"
          as="a"
          href="https://github.com/stakekit/"
          target="_blank"
        >
          <GHIcon />
        </Box>
      </Box>
    </Box>
  )
}
