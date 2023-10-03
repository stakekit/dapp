import Image from "next/image"
import { Box } from "../components/atoms/box"
import { Text } from "../components/atoms/typography"
import { TwitterIcon } from "../components/atoms/icons/twitter"
import { GHIcon } from "../components/atoms/icons/gh"

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
        <Image
          src="https://raw.githubusercontent.com/stakekit/assets/main/stakekit/sk-horizontal.svg"
          alt="logo"
          width={160}
          height={80}
          priority
        />
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" gap="3">
        <Box as="a" href="https://docs.stakek.it/docs" target="_blank">
          <Text variant={{ size: "small", weight: "normal", type: "muted" }}>
            Docs
          </Text>
        </Box>
        <Box as="a" href="https://twitter.com/omnidotapp" target="_blank">
          <TwitterIcon />
        </Box>
        <Box as="a" href="https://github.com/stakekit/" target="_blank">
          <GHIcon />
        </Box>
      </Box>
    </Box>
  )
}
