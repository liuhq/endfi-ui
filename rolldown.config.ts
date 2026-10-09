import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin"
import { defineConfig } from "rolldown"

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    entryFileNames: "index.js",
    sourcemap: true,
    assetFileNames: (asset) => {
      if (asset.names.some((n) => n.endsWith(".css"))) {
        return "[name][extname]"
      }

      return "assets/[name]-[hash][extname]"
    },
  },
  external: [/^react($|\/)/, /^react-dom($|\/)/],
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short",
      extract: {
        name: "styles.css",
        sourcemap: false,
      },
    }),
  ],
})
