import { lazy, Suspense } from "react";

const WidgetContent = lazy(() =>
  import("./widget").then((mod) => ({ default: mod.Widget })),
);

export const Widget = () => (
  <Suspense fallback={null}>
    <WidgetContent />
  </Suspense>
);
