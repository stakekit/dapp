import { startFluid } from "@stakekit/fluid-animation";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/utils/use-is-mobile";
import { mobileBackground, styles } from "./styles.css";

export const FluidContainer = () => {
  const fluidStarted = useRef(false);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (!canvasContainerRef.current || fluidStarted.current || isMobile) {
      return;
    }

    fluidStarted.current = true;
    startFluid(canvasContainerRef.current);
  }, [isMobile]);

  return (
    <div
      ref={canvasContainerRef}
      className={clsx([styles, { [mobileBackground]: isMobile }])}
    />
  );
};
