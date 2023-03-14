const { resolve } = require("path");

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    overrides: [{
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]
    }],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2022,
        sourceType: "module"
    },
    plugins: [
        "react",
        "react-hooks",
        "import",
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/semi": ["error", "always"],
        "react/react-in-jsx-scope": 0,
        "arrow-body-style": [2, "as-needed"],
        "prefer-template": 2,
        "react/prop-types": 0,
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "semi-spacing": [
            2,
            {
                before: false,
                after: true
            }
        ],
        semi: [2, "always"],
        "object-property-newline": 1,
        "object-curly-newline": [
            2,
            {
                consistent: true,
                multiline: true
            }
        ],
        "key-spacing": [
            2,
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        "comma-dangle": [2, "never"],
        "no-trailing-spaces": 2,
        "indent": [
            2,
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1
            }
        ],
        "no-undef-init": 2,
        "no-undef": "error",
        "object-shorthand": [2, "always"],
        "react/jsx-no-undef": [
            2, {
                allowGlobals: true
            }
        ],
        "comma-spacing": [
            2,
            {
                after: true,
                before: false
            }
        ],
        "react/jsx-key": 2,
        "react/jsx-no-bind": 2,
        "react/jsx-no-duplicate-props": [
            2, {
                ignoreCase: true
            }
        ],
        "space-infix-ops": 2,
        "keyword-spacing": [
            2,
            {
                before: true,
                after: true
            }
        ],
        "arrow-spacing": [
            2,
            {
                before: true,
                after: true
            }
        ],
        "no-multi-spaces": 2,
        "react/jsx-equals-spacing": [
            2,
            "never"
        ],
        "react/self-closing-comp": 2,
        "react/display-name": 0,
        "no-console": 2,
        "no-restricted-imports": [
            "error",
            {
                "patterns": ["@mui/*/*/*"]
            }
        ]
    },
    settings: {
        react: {
            version: "detect"
        },
        "import/resolver": {
            webpack: {
                config: resolve(__dirname, "./build/configs/webpack.common.js")
            }
        }
    }
};
