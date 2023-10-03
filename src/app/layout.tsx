import "../styles/global.css"
import { layoutContainer } from "./style.css"
import { EB_Garamond, Roboto_Flex } from "next/font/google"

export const metadata = {
  title: "StakeKit",
  description: "StakeKit",
}

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--sk-font-roboto" })
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--sk-font-garamond",
  weight: "400",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${ebGaramond.variable}`}>
      <link rel="icon" href="/icon.png" />
      <body className={layoutContainer}>{children}</body>
    </html>
  )
}
