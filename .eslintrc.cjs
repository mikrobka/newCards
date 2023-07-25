module.exports = {
    extends: ['@it-incubator/eslint-config', 'plugin:storybook/recommended'],
    rules: {
        'no-console': ['warn', {
            allow: ['warn', 'error']
        }]
    },
    "settings": {
        "import/resolver": {
            "alias": {
                "map": [
                    ["src", "./src"]  // Replace this with your actual alias configuration
                ],
                "extensions": [".js", ".jsx", ".ts", ".tsx", ".json"]
            }
        }
    }
};