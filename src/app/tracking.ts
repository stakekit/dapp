import { SKAppProps } from "@stakekit/widget"
import mixpanel from "mixpanel-browser"

export const tracking: SKAppProps["tracking"] = {
  trackEvent: (...args) => {
    mixpanel.track(...args)
  },
  trackPageView: (page, props) => {
    mixpanel.track_pageview({ page, ...(props && { props }) })
  },
}
