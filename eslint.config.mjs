import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import _import from "eslint-plugin-import";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:import/typescript",
      "next/core-web-vitals",
    ),
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
    },

    rules: {
      "no-unused-vars": "off",
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"],
            "internal",
            ["index", "sibling", "parent"],
            "unknown",
          ],

          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "{next,next/**,next-*}",
              group: "external",
              position: "before",
            },
            {
              pattern: "@{*}",
              group: "external",
              position: "before",
            },
          ],

          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
        },
      ],
    },
  },
];

export default config;
