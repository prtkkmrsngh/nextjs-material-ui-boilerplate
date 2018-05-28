module.exports = {
  "parser": "babel-eslint",

    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },

    "extends": [
      "prettier",
      "prettier/flowtype",
      "prettier/react"
    ],

    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
      "babel",
      "flowtype",
      "import",
      "react",
      "prettier",
    ],
    "rules": {
        "react/jsx-uses-vars": 2,
        "indent": [2, 2, {"SwitchCase": 1}],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],

        "constructor-super": "error",
        "no-case-declarations": "error",
        "no-class-assign": "error",
        "no-cond-assign": "error",
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": "error",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-semi": "error",
        "no-fallthrough": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-new-symbol": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-self-assign": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "require-yield": "error",
        "use-isnan": "error",
        "valid-typeof": "error",

        "babel/new-cap": "off",
        "babel/object-curly-spacing": "off",
        "babel/arrow-parens": "off",

        "flowtype/boolean-style": ["error", "boolean"],
        "flowtype/define-flow-type": "error",
        "flowtype/no-dupe-keys": "error",
        "flowtype/no-primitive-constructor-types": "error",
        "flowtype/no-weak-types": "off",
        "flowtype/require-parameter-type": "off",
        "flowtype/require-return-type": ["error", "always", {
          "annotateUndefined": "never",
          "excludeArrowFunctions": "expressionsOnly"
        }],
        "flowtype/require-valid-file-annotation": "error",
        "flowtype/require-variable-type": "off",
        "flowtype/sort-keys": "off",
        "flowtype/type-id-match": ["error", "^([A-Z][a-z0-9]+)+Type$"],
        "flowtype/use-flow-type": "error",
        "flowtype/valid-syntax": "error",

        "import/no-unresolved": "error",
        "import/named": "error",
        "import/default": "off",
        "import/namespace": "off",
        "import/export": "error",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-deprecated": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-commonjs": "error",
        "import/no-amd": "error",
        "import/no-nodejs-modules": "off",
        "import/imports-first": "error",
        "import/no-duplicates": "error",
        "import/no-namespace": "off",
        "import/extensions": ["error", { "js": "never", "json": "always" }],
        "import/order": "off",

        "react/display-name": "off",
        "react/forbid-prop-types": "off",
        "react/no-danger": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": "off",
        "react/no-set-state": "off",
        "react/no-string-refs": "error",
        "react/no-unknown-property": "error",
        "react/prefer-es6-class": "error",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "error",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": "error",
        "react/sort-prop-types": "off",
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-handler-names": "off",
        "react/jsx-key": "error",
        "react/jsx-no-bind": "off",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-literals": "off",
        "react/jsx-no-undef": "error",
        "react/jsx-pascal-case": "error",
        "react/jsx-sort-props": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",

        "prettier/prettier": ["error", {"trailingComma": "all", "singleQuote": true}],
    },
    "globals": {
      "process": true,
    }
};