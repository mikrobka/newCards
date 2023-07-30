module.exports = {
    extends: ['@it-incubator/eslint-config'],


    "plugins": ["import"],
    "rules": {
        "import/order": [
            "error",
            {
                "groups": [
                    ["builtin", "external"],
                    "internal",
                    ["parent", "sibling", "index"],
                    "object",
                    "type",
                    "unknown"
                ],
                "alphabetize": {
                    "order": "asc",
                    "caseInsensitive": true
                },
                "newlines-between": "always",
                "pathGroups": [
                    {
                        "pattern": "@components/**",
                        "group": "internal"
                    }
                ],
                "pathGroupsExcludedImportTypes": ["builtin"],
                "newlines-between": "always"
            }
        ]
    }


};