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
      // Mark identifiers referenced in JSX (components, icon vars) as "used".
      // Without this, no-unused-vars false-positives on every <Component/>.
      "react/jsx-uses-vars": "error",
      "no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^(React|motion|Button|Link|AnimatePresence|Badge|RxChevronRight|slideVariants|BiLogoInstagram|BiLogoLinkedinSquare|Routes|Route|Home|NotFound404|StrictMode|BrowserRouter|App|Navbar|Footer|Header|Sliders|CorePrinciples|ThreeStepDesignProcess|Portfolio|Quote|Connect|Banner|PageNotFound|activeSection|imageLoadStates)$"
      }],
    },
  },
];
