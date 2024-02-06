import React from "react"
import { Header } from "./header"
import { Widget } from "./widget"
import { HelpModals } from "./widget/help-modals"

export default function Home() {
  return (
    <>
      <Header />
      <Widget />
      <HelpModals />
    </>
  )
}
