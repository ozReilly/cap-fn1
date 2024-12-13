/// <reference types="vitest" />

// import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // legacy(),
    nodePolyfills(),
    wasm(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      process: "vite-plugin-node-polyfills/shims/process",
      buffer: "vite-plugin-node-polyfills/shims/buffer",
      crypto: "vite-plugin-node-polyfills/shims/crypto",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    target: ["esnext"], // 或者直接用 es2022 或更高
  },
});
