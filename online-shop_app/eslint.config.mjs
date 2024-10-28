import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },

    plugins: {
      "@typescript-eslint": tsPlugin,
      react: pluginReact,
    },

    rules: {
      // Basic ESLint and TypeScript rules
      ...pluginJs.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "no-console": "warn",
      // React rules without implicit "extends"
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        "warn",
        { extensions: [".js", ".jsx", ".tsx", ".ts"] },
      ],
      "no-undef": "off",
    },
  },
];
