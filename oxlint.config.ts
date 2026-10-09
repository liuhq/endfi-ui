import { defineConfig } from "oxlint"

export default defineConfig({
  ignorePatterns: ["node_modules/**"],
  plugins: ["eslint", "typescript", "unicorn", "oxc", "import", "react", "jsx-a11y"],
  categories: {
    correctness: "error",
    suspicious: "warn",
    perf: "warn",
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-cycle": ["error", { maxDepth: 3 }],
  },
  env: {
    builtin: true,
    browser: true,
  },
})
