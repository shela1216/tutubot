// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  globals: {
    process: "readonly",
  },
  extends: "eslint:recommended",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: "block" },
      { blankLine: "always", prev: "block", next: "*" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },

      // After imports, except between imports
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: "import" },

      // Before and after every sequence of variable declarations
      { blankLine: "always", prev: "*", next: ["const", "let", "var"] },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },

      // Before and after class declaration, if, while, switch, try
      { blankLine: "always", prev: "*", next: ["class", "if", "while", "switch", "try"] },
      { blankLine: "always", prev: ["class", "if", "while", "switch", "try"], next: "*" },
    ],
  },
};
