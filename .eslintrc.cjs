module.exports = {
    extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended', "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    rules: {
        'no-console': ['warn', {
            allow: ['warn', 'error']
        }]
    },
    "settings": {
        "import/resolver": {
            "typescript": {} // This enables eslint-import-resolver-typescript
        }
    },

};