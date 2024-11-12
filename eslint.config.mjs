import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import _import from "eslint-plugin-import";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
)), {
    plugins: {
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        import: fixupPluginRules(_import)
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node
        },

        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: "module",

        parserOptions: {
            allowImportExportEverywhere: false,
            requireConfigFile: false,

            babelOptions: {
                presets: ["@babel/env", "@babel/react"]
            },

            tsconfigRootDir: "./",
            project: "tsconfig.json",

            ecmaFeatures: {
                jsx: true,
                globalReturn: false
            }
        }
    },

    settings: {
        react: {
            version: "detect"
        },

        "import/resolver": {
            webpack: {
                config: "./build/configs/webpack.common.js"
            }
        }
    },

    rules: {
        "react/react-in-jsx-scope": 0,
        "arrow-body-style": [2, "as-needed"],
        "prefer-template": 2,
        "react/prop-types": 0,
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",

        "semi-spacing": [2, {
            before: false,
            after: true
        }],

        semi: [2, "always"],
        "object-property-newline": 1,

        "object-curly-newline": [2, {
            consistent: true,
            multiline: true
        }],

        "key-spacing": [2, {
            beforeColon: false,
            afterColon: true
        }],

        "comma-dangle": [2, "never"],
        "no-trailing-spaces": 2,
        "no-undef-init": 2,
        "object-shorthand": [2, "always"],

        "react/jsx-no-undef": [2, {
            allowGlobals: true
        }],

        "comma-spacing": [2, {
            after: true,
            before: false
        }],

        "react/jsx-key": 2,
        "react/jsx-no-bind": 2,

        "react/jsx-no-duplicate-props": [2, {
            ignoreCase: true
        }],

        "space-infix-ops": 2,

        "keyword-spacing": [2, {
            before: true,
            after: true
        }],

        "arrow-spacing": [2, {
            before: true,
            after: true
        }],

        "no-multi-spaces": 2,
        "react/jsx-equals-spacing": [2, "never"],
        "react/self-closing-comp": 2,
        "react/display-name": 0,
        "no-console": 2,

        "no-restricted-imports": ["error", {
            patterns: ["@mui/*/*/*"]
        }],

        "no-unused-vars": 1,
        quotes: [2, "double"],

        "prefer-destructuring": [1, {
            VariableDeclarator: {
                array: false,
                object: true
            },

            AssignmentExpression: {
                array: true,
                object: true
            }
        }, {
            enforceForRenamedProperties: false
        }],

        "no-duplicate-imports": [2, {
            includeExports: true
        }],

        indent: [2, 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            ArrayExpression: "first",
            outerIIFEBody: 1,

            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },

            FunctionExpression: {
                parameters: 1,
                body: 1
            },

            CallExpression: {
                arguments: 1
            },

            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,

            ignoredNodes: [
                "JSXElement",
                "JSXElement > *",
                "JSXAttribute",
                "JSXIdentifier",
                "JSXNamespacedName",
                "JSXMemberExpression",
                "JSXSpreadAttribute",
                "JSXExpressionContainer",
                "JSXOpeningElement",
                "JSXClosingElement",
                "JSXText",
                "JSXEmptyExpression",
                "JSXSpreadChild"
            ],

            ignoreComments: false
        }],

        "operator-linebreak": [2, "after"],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-indent": [2, 4],

        "max-len": [2, {
            code: 120,
            tabWidth: 4,
            ignoreRegExpLiterals: true,
            ignoreUrls: true,
            ignoreComments: false,
            ignoreStrings: false,
            ignoreTemplateLiterals: true
        }],

        "react/jsx-closing-bracket-location": [2, "tag-aligned"],

        "react/jsx-tag-spacing": [2, {
            beforeSelfClosing: "always"
        }]
    }
}, {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]
}];