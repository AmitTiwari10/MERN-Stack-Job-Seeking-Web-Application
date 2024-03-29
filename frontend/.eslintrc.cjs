module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  output: "export", //uncomment for main branch which is deployed on aws
  trailingSlash: true, //uncomment for main branch which is deployed on aws
  distDir: "dist", //uncomment for main branch which is deployed on aws
  skipTrailingSlashRedirect: true, //uncomment for main branch which is deployed on aws
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
