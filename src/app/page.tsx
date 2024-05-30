import React from "react"
import { Header } from "./header"
import { Widget } from "./widget"
import { HelpModals } from "./widget/help-modals"
import { Box } from "../components/atoms/box"
import { container } from "./style.css"
import { FluidContainer } from "./fluid"

export default function Home() {
  return (
    <Box className={container}>
      <FluidContainer />
      <Header />
      <Widget />
      <Box marginTop={{ tablet: "0", mobile: "8" }}>
        <HelpModals />
      </Box>
    </Box>
  )
}
