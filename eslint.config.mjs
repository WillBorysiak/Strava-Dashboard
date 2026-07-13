import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";

const config = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    plugins: {
      import: importPlugin,
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
