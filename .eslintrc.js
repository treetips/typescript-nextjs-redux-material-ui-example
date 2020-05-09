module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
  },
  plugins: ["@typescript-eslint/eslint-plugin", "react"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "prettier/react",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
  },
}
