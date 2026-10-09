import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  root: "./playground",
  plugins: [
    react(),
    vanillaExtractPlugin({
      identifiers: "debug",
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
})
