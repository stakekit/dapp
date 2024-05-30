import { useLayoutEffect, useState } from "react"

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth < 520)
  }, [])

  return isMobile
}
