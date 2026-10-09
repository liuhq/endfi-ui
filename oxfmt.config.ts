import { defineConfig } from "oxfmt"

export default defineConfig({
  ignorePatterns: ["node_modules/**"],
  semi: false,
  sortImports: true,
  overrides: [
    {
      files: ["**/*.json"],
      options: {
        printWidth: 80,
      },
    },
  ],
})
