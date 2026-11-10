import { useState } from "react";
import { breakpoints } from "@/styles/tokens/breakpoints";

export const useIsMobile = () => {
  const [isMobile] = useState(() => window.innerWidth < breakpoints.tablet);

  return isMobile;
};
