import { TrackingContextProvider } from "@stakekit/widget"
import mixpanel from "mixpanel-browser"
import { ComponentProps } from "react"

export const tracking: ComponentProps<
  typeof TrackingContextProvider
>["tracking"] = {
  trackEvent: (...args) => {
    mixpanel.track(...args)
  },
  trackPageView: (page, props) => {
    mixpanel.track_pageview({ page, ...(props && { props }) })
  },
}
