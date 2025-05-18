import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bannerlord-recruiting-tutorial/", // This is important for gh-pages deployment
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@src/scss/variables.scss";`,
      },
    },
  },
});
