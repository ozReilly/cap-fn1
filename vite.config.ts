/// <reference types="vitest" />

// import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import wasm from "vite-plugin-wasm";
// import webpack from "webpack";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // legacy(),
    wasm(),
    nodePolyfills({
      // Specific modules that should not be polyfilled.
      exclude: [],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true, // can also be 'build', 'dev', or false
        global: true,
        process: true,
      },
      include: ["crypto", "buffer", "process", "util"],
      protocolImports: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      process: "vite-plugin-node-polyfills/shims/process",
      buffer: "vite-plugin-node-polyfills/shims/buffer",
      // crypto: "vite-plugin-node-polyfills/shims/crypto",
      stream: "stream-browserify",
      crypto: "crypto-browserify",
      util: "util",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    target: ["esnext"], // 或者直接用 es2022 或更高
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});
