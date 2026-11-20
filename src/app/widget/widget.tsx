import "@stakekit/widget/style.css";
import { SKApp, type SKAppearance } from "@stakekit/widget";
import { useCallback, useEffect, useState } from "react";
import { config } from "../../config";
import { tracking } from "../tracking";
import { HelpModals } from "./help-modals";

// Shows the help links if the widget never reports its mount animation as
// complete, such as when it fails to load.
const helpLinksFallbackMs = 5000;

const appearance: SKAppearance = {
  colorScheme: "dark",
  colors: {
    dark: {
      // The dark accent before the redesign; its hover, soft and text tints
      // derive from it.
      accent: "#AB95FF",
      // Dialogs: the old modal body. The frame paints this role too and is
      // made translucent in global.css.ts.
      background: "#121415",
      surface: "#FFFFFF0D",
      surfaceHover: "#ffffff1a",
      surfaceRaised: "#121415",
      warningSoft: "#FFFFFF0D",
    },
  },
};

export const Widget = () => {
  const [widgetOpen, setWidgetOpen] = useState(false);
  const onMountAnimationComplete = useCallback(() => setWidgetOpen(true), []);

  useEffect(() => {
    const timeout = setTimeout(() => setWidgetOpen(true), helpLinksFallbackMs);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <SKApp
      apiKey={config.apiKey}
      appearance={appearance}
      tracking={tracking}
      onMountAnimationComplete={onMountAnimationComplete}
    >
      <HelpModals visible={widgetOpen} />
    </SKApp>
  );
};
