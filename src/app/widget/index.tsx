"use client";

import dynamic from "next/dynamic";

export const Widget = dynamic(
  () => import("./widget").then((mod) => mod.Widget),
  {
    ssr: false,
  },
);

export const HelpModals = dynamic(
  () => import("./help-modals").then((mod) => mod.HelpModals),
  {
    ssr: false,
  },
);
