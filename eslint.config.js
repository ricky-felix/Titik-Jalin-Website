import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  {
    ignores: ["**/*.json", "**/*.md", "**/*.css", "dist/**", "build/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ["**/*.{jsx,js}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^(React|motion|Button|Link|AnimatePresence|Badge|RxChevronRight|slideVariants|BiLogoInstagram|BiLogoLinkedinSquare|Routes|Route|Home|NotFound404|StrictMode|BrowserRouter|App|Navbar|Footer|Header|Sliders|CorePrinciples|ThreeStepDesignProcess|Portfolio|Quote|Connect|Banner|PageNotFound|activeSection|imageLoadStates)$"
      }],
    },
  },
];
