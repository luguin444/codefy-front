module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    globals: {
        process: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:styled-components-a11y/recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "styled-components-a11y",
    ],
    "rules": {
        "react/prop-types": "off",
        "semi": [2, "always"],
        "react/jsx-equals-spacing": [2, "never"],
        "react/jsx-indent" : ["error", 2],
        "object-curly-spacing": ["error", "always"],
        "no-multiple-empty-lines": ["error", { "max": 1 }],
        "padded-blocks": ["error", "never"],
        "quotes": ["error", "single"],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "space-in-parens": ["error", "never"],
        "eol-last": ["error", "always"]
    }
};