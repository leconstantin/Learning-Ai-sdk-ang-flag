// lib/flags.ts
import { flag } from "flags/next";

export const exampleFlag = flag({
  key: "example-flag",
  decide() {
    return Math.random() > 0.5;
  },
});

export const showBanner = flag<boolean>({
  key: "banner",
  decide: () => true,
});
