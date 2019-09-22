module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    semi: ["error", "never"],
    // doesn't work well with typescript
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": ["error"],
    "quotes": ["error", "double"],
    "quote-props": ["error", "as-needed"],
    "prefer-arrow-callback": ["error"],
    "prettier/prettier": "error"
  },
  extends: [
    "eslint-config-prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ]
}
