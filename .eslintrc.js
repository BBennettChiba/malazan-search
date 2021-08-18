module.exports = {
  env: { node: true },
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/eslint-recommended"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "error",
  },
};
