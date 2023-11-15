import React from "react"
import { container, widgetContainer } from "./style.css"
import { Box } from "../components/atoms/box"
import { Header } from "./header"
import { Widget } from "./widget"
import { HelpModals } from "./widget/help-modals"

export default function Home() {
  return (
    <>
      <Box className={container}>
        <Box className={widgetContainer}>
          <Header />
          <Widget />
          <HelpModals />
        </Box>
      </Box>
    </>
  )
}
