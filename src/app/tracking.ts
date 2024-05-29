import { SKAppProps } from "@stakekit/widget"
import mixpanel from "mixpanel-browser"
import { config } from "../config"

export const mixpanelEnabled =
  typeof window !== "undefined" && config.mixPanelToken

if (mixpanelEnabled) {
  mixpanel.init(config.mixPanelToken)
}

export const tracking: SKAppProps["tracking"] = mixpanelEnabled
  ? {
      trackEvent: (...args) => {
        mixpanel.track(...args)
      },
      trackPageView: (page, props) => {
        mixpanel.track_pageview({ page, ...(props && { props }) })
      },
    }
  : undefined
