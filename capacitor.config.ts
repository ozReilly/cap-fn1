/* eslint-disable no-useless-escape */
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "capacitor.BGC.FN1",
  appName: "BGC",
  webDir: "dist",
  android: {
    buildOptions: {
      keystorePath:
        "c:\\Users\\Administrator\\Documents\\capacitor-fn1\\tffn.jks",
      keystoreAlias: "123",
    },
  },
};

export default config;
