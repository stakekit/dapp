export const config = {
  apiKey: import.meta.env.VITE_API_KEY ?? "",
  mixPanelToken: import.meta.env.VITE_MIX_PANEL_TOKEN ?? "",
} as const;
