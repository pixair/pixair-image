module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import"],
    env: {
        node: true,
        browser: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:import/typescript",
    ],
    rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
    },
};
