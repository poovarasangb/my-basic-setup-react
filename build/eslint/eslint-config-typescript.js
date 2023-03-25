/* eslint-env node */
module.exports = {
    overrides: [
        {
            files: ["**/*.ts", "**/*.tsx"],
            env: {
                browser: true,
                es6: true,
                node: true
            },
            extends: [
                "plugin:@typescript-eslint/eslint-recommended"
            ],
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
            plugins: ["@typescript-eslint"],
            rules: {
                "no-undef": "off",
                "@typescript-eslint/semi": ["error", "always"],
                "@typescript-eslint/no-unused-vars": 2
            }
        }
    ]
};