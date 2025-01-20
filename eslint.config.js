import js from "@eslint/js";
import globals from "globals";
import react from "@eslint-react/eslint-plugin";
import reactDom from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            "dist",
            "./src/routeTree.gen.ts",
        ]
    },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react": react,
            "react-dom": reactDom,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                {allowConstantExport: true},
            ],
            "quotes": [
                "error",
                "double",
            ],
            "semi": [
                "error",
                "always",
            ],
            "react-dom/no-children-in-void-dom-elements": "warn",
            "react-dom/no-dangerously-set-innerhtml": "warn",
            "react-dom/no-dangerously-set-innerhtml-with-children": "error",
            "react-dom/no-find-dom-node": "error",
            "react-dom/no-missing-button-type": "warn",
            "react-dom/no-missing-iframe-sandbox": "warn",
            "react-dom/no-namespace": "error",
            "react-dom/no-render-return-value": "error",
            "react-dom/no-script-url": "warn",
            "react-dom/no-unsafe-iframe-sandbox": "warn",
            "react-dom/no-unsafe-target-blank": "warn",
            "react-hooks/exhaustive-deps": "warn",
            "react-hooks/rules-of-hooks": "error",
            "react/ensure-forward-ref-using-ref": "warn",
            "react/jsx-no-duplicate-props": "warn",
            "react/jsx-uses-vars": "warn",
            "react/no-access-state-in-setstate": "error",
            "react/no-array-index-key": "warn",
            "react/no-children-count": "warn",
            "react/no-children-for-each": "warn",
            "react/no-children-map": "warn",
            "react/no-children-only": "warn",
            "react/no-children-to-array": "warn",
            "react/no-clone-element": "warn",
            "react/no-comment-textnodes": "warn",
            "react/no-component-will-mount": "error",
            "react/no-component-will-receive-props": "error",
            "react/no-component-will-update": "error",
            "react/no-context-provider": "warn",
            "react/no-create-ref": "error",
            "react/no-default-props": "error",
            "react/no-direct-mutation-state": "error",
            "react/no-duplicate-key": "error",
            "react/no-forward-ref": "warn",
            "react/no-implicit-key": "warn",
            "react/no-missing-key": "error",
            "react/no-nested-components": "error",
            "react/no-prop-types": "error",
            "react/no-redundant-should-component-update": "error",
            "react/no-set-state-in-component-did-mount": "warn",
            "react/no-set-state-in-component-did-update": "warn",
            "react/no-set-state-in-component-will-update": "warn",
            "react/no-string-refs": "error",
            "react/no-unsafe-component-will-mount": "warn",
            "react/no-unsafe-component-will-receive-props": "warn",
            "react/no-unsafe-component-will-update": "warn",
            "react/no-unstable-context-value": "warn",
            "react/no-unstable-default-props": "warn",
            "react/no-unused-class-component-members": "warn",
            "react/no-unused-state": "warn",
            "react/prefer-destructuring-assignment": "warn",
            "react/prefer-shorthand-boolean": "warn",
            "react/prefer-shorthand-fragment": "warn",
        },
    },
)
