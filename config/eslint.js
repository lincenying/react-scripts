module.exports = {
    "globals": {
        "$": true,
        "_": true,
        "window": true,
        "document": true,
        "FormData": true,
        "navigator": true,
        "process": true,
        "__dirname": true
    },
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:sort-class-members/recommended"
    ],
    parser: 'babel-eslint',

    // import plugin is termporarily disabled, scroll below to see why
    plugins: [
        "babel",
        "sort-class-members",
        'react'
    ],

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            generators: true,
            experimentalObjectRestSpread: true
        }
    },

    settings: {
        'import/ignore': [
            'node_modules',
            '\\.(json|css|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$',
        ],
        'import/extensions': ['.js', '.jsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.json']
            }
        }
    },

    rules: {
        "accessor-pairs": 2,
        "array-bracket-spacing": 0,
        "arrow-parens": 0,
        "arrow-spacing": 2,
        "babel/arrow-parens": [
            2,
            "as-needed"
        ],
        "babel/generator-star-spacing": [
            2,
            "before"
        ],
        "block-scoped-var": 2,
        "block-spacing": 0,
        "brace-style": 0,
        "camelcase": 0,
        "comma-dangle": 0,
        "comma-spacing": 0,
        "comma-style": 0,
        "complexity": 0,
        "computed-property-spacing": 2,
        "consistent-return": 0,
        "consistent-this": 2,
        "constructor-super": 2,
        "curly": 0,
        "default-case": 2,
        "dot-location": [
            2,
            "property"
        ],
        "dot-notation": 0,
        "eol-last": 0,
        "eqeqeq": [
            2,
            "smart"
        ],
        "func-names": 0,
        "func-style": [
            2,
            "declaration", {
                "allowArrowFunctions": true
            }
        ],
        "generator-star-spacing": 0,
        "id-length": [
            0, {
                "exceptions": [
                    "_",
                    "e",
                    "i",
                    "$"
                ]
            }
        ],
        "indent": [
            2,
            4, {
                "SwitchCase": 1
            }
        ],
        "key-spacing": 0,
        "keyword-spacing": [
            0, {
                "overrides": {
                    "case": {
                        "after": true
                    },
                    "return": {
                        "after": true
                    },
                    "throw": {
                        "after": true
                    }
                }
            }
        ],
        "linebreak-style": 0,
        "lines-around-comment": 0,
        "max-depth": 2,
        "max-nested-callbacks": 0,
        "max-params": [
            2,
            4
        ],
        "new-cap": 0,
        "new-parens": 2,
        "newline-after-var": 0,
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-caller": 2,
        "no-catch-shadow": 0,
        "no-class-assign": 2,
        "no-cond-assign": [
            "error",
            "always"
        ],
        "no-confusing-arrow": 2,
        "no-console": 0,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-div-regex": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-else-return": 2,
        "no-empty-label": 0,
        "no-empty": 0,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-parens": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-inline-comments": 2,
        "no-iterator": 2,
        "no-label-var": 0,
        "no-labels": 0,
        "no-lone-blocks": 2,
        "no-lonely-if": 0,
        "no-loop-func": 2,
        "no-mixed-requires": 2,
        "no-mixed-spaces-and-tabs": 0,
        "no-multi-spaces": 0,
        "no-multi-str": 0,
        "no-native-reassign": 2,
        "no-nested-ternary": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 2,
        "no-new-wrappers": 2,
        "no-new": 2,
        "no-octal-escape": 2,
        "no-path-concat": 2,
        "no-process-env": 0,
        "no-process-exit": 0,
        "no-proto": 2,
        "no-restricted-modules": 2,
        "no-return-assign": 2,
        "no-script-url": 0,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 0,
        "no-spaced-func": 0,
        "no-sync": 0,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "no-trailing-spaces": 2,
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-underscore-dangle": 0,
        "no-unexpected-multiline": 2,
        "no-unneeded-ternary": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": [
            1, {
                "vars": "all",
                "args": "after-used"
            }
        ],
        "no-use-before-define": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-var": 0,
        "no-void": 2,
        "no-warning-comments": 0,
        "no-with": 0,
        "object-curly-spacing": 0,
        "object-shorthand": 2,
        "one-var": 0,
        "operator-assignment": 2,
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 2,
        "prefer-spread": 2,
        "prefer-template": 0,
        "quotes": 0,
        "quote-props": 0,
        "radix": 2,
        "require-yield": 2,
        "semi": [
            "error",
            "never"
        ],
        "semi-spacing": 0,
        "sort-vars": 2,
        "space-before-blocks": 0,
        "space-before-function-paren": 0,
        "space-in-parens": 0,
        "space-infix-ops": 0,
        "space-unary-ops": 0,
        "spaced-comment": 0,
        "sort-imports": 0,
        "strict": 0,
        "valid-jsdoc": 2,
        "vars-on-top": 0,
        "yoda": 0,
        "wrap-iife": 0,
        "wrap-regex": 2,

        "react/forbid-component-props":0,
        "react/forbid-prop-types": 0,
        "react/no-danger": 0,
        "react/no-danger-with-children": 0,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 1,
        "react/no-did-update-set-state": 0,
        "react/no-direct-mutation-state": 1,
        "react/no-find-dom-node": 0,
        "react/no-is-mounted": 1,
        "react/no-multi-comp": 1,
        "react/no-render-return-value": 1,
        "react/no-set-state": 0,
        "react/no-string-refs": 1,
        "react/no-unknown-property": 1,
        "react/prefer-es6-class": 1,
        "react/prefer-stateless-function": 1,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 1,
        "react/require-optimization": [1, {allowDecorators: ['immutableRenderDecorator']}],
        "react/require-render-return": 1,
        "react/self-closing-comp": 1,
        "react/sort-comp": 1,
        "react/sort-prop-types": 1,

        "react/jsx-boolean-value": 1,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-curly-spacing": 1,
        "react/jsx-equals-spacing": [1, "never"],
        "react/jsx-filename-extension": 1,
        "react/jsx-first-prop-new-line": 1,
        "react/jsx-handler-names": [1, {
            "eventHandlerPrefix": "handle",
            "eventHandlerPropPrefix": "on",
        }],
        "react/jsx-indent": 1,
        "react/jsx-indent-props": 1,
        "react/jsx-key": 1,
        "react/jsx-max-props-per-line": [0, {"maximum": 4}],
        "react/jsx-no-bind": [1, {
            "ignoreRefs": true,
            "allowBind": true
        }],
        "react/jsx-no-comment-textnodes": 0,
        "react/jsx-no-duplicate-props": [1, {
            "ignoreCase": true
        }],
        "react/jsx-no-literals": 0,
        "react/jsx-no-target-blank": 1,
        "react/jsx-no-undef": 1,
        "react/jsx-pascal-case": [1, {
            "allowAllCaps": true,
            "ignore": [],
        }],
        "react/jsx-sort-props": 0,
        "react/jsx-space-before-closing": 1,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/jsx-wrap-multilines": 0
    }
};
