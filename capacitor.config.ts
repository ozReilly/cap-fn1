/* eslint-disable no-useless-escape */
import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "capacitor.BGC.FN1",
  appName: "BGC",
  webDir: "dist",
  android: {
    buildOptions: {
      /**
       * Path to your keystore
       *
       * @since 4.4.0
       */
      keystorePath: "c:/Users/Administrator/Documents/capacitor-fn1/tffn.jks",
      /**
       * Password to your keystore
       *
       * @since 4.4.0
       */
      keystorePassword: "123456",
      /**
       * Alias in the keystore to use
       *
       * @since 4.4.0
       */
      keystoreAlias: "123",
      /**
       * Password for the alias in the keystore to use
       *
       * @since 4.4.0
       */
      keystoreAliasPassword: "123456",
      /**
       * Bundle type for your release build
       *
       * @since 4.4.0
       * @default "AAB"
       */
      releaseType: "APK", // @default "AAB"
      /**
       * Program to sign your build with
       *
       * @since 5.1.0
       * @default "jarsigner"
       */
      signingType: "apksigner", //@default "jarsigner" apksigner
    },
  },
};

export default config;
