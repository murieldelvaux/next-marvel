const config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "prettier/prettier": "error",
  },
};

module.exports = config;
