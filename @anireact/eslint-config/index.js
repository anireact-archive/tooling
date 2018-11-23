const off = 'off';
const error = 'error';

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 10,
        codeFrame: true,
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        commonjs: true,
        'shared-node-browser': true,
    },
    plugins: [
        'babel',
        'import',
        'unicorn',
        'array-func',
        'fp',
        'promise',
        'typescript',
        'jest',
        'no-use-extend-native',
        'prettier',
    ],
    rules: {
        // region Possible errors
        'for-direction': error,
        'getter-return': error,
        'no-compare-neg-zero': error,
        'no-cond-assign': error,
        'no-console': error,
        'no-constant-condition': error,
        'no-control-regex': error,
        'no-debugger': error,
        'no-dupe-args': error,
        'no-dupe-keys': error,
        'no-duplicate-case': error,
        'no-empty': [error, { allowEmptyCatch: true }],
        'no-empty-character-class': error,
        'no-ex-assign': error,
        'no-extra-boolean-cast': error,
        'no-extra-parens': off, // Covered by Prettier.
        'no-extra-semi': off, // Covered by Prettier.
        'no-func-assign': error,
        'no-inner-declarations': error,
        'no-invalid-regexp': error,
        'no-irregular-whitespace': error,
        'no-misleading-character-class': error,
        'no-obj-calls': error,
        'no-prototype-builtins': error,
        'no-regex-spaces': error,
        'no-sparse-arrays': error,
        'no-template-curly-in-string': error,
        'no-unexpected-multiline': off, // Covered by Prettier.
        'no-unreachable': error,
        'no-unsafe-finally': error,
        'no-unsafe-negation': error,
        'require-atomic-updates': error,
        'use-isnan': error,
        'valid-jsdoc': error,
        'valid-typeof': off, // Covered by Babel.
        // endregion Possible errors

        // region Best practices
        'accessor-pairs': error,
        'array-callback-return': error,
        'block-scoped-var': error,
        'class-methods-use-this': error,
        complexity: error,
        'consistent-return': error,
        curly: off, // Fuck off.
        'default-case': error,
        'dot-location': off, // Covered by Prettier.
        'dot-notation': error,
        eqeqeq: error,
        'guard-for-in': error,
        'max-classes-per-file': error,
        'no-alert': error,
        'no-caller': error,
        'no-case-declarations': error,
        'no-div-regex': error,
        'no-else-return': error,
        'no-empty-function': error,
        'no-empty-pattern': off, // Fuck off.
        'no-eq-null': off, // Covered by `eqeqeq`.
        'no-eval': error,
        'no-extend-native': error,
        'no-extra-bind': error,
        'no-extra-label': error,
        'no-fallthrough': off, // Fuck off.
        'no-floating-decimal': off, // Covered by Prettier.
        'no-global-assign': off,
        'no-implicit-coercion': error,
        'no-implicit-globals': error,
        'no-implied-eval': error,
        'no-invalid-this': off, // Covered by Babel.
        'no-iterator': error,
        'no-labels': off, // Fuck off.
        'no-lone-blocks': error,
        'no-loop-func': error,
        'no-magic-numbers': [error, { ignore: [0, 1, -1] }],
        'no-multi-spaces': off, // Covered by Prettier.
        'no-multi-str': error,
        'no-new': error,
        'no-new-func': error,
        'no-new-wrappers': error,
        'no-octal': error,
        'no-octal-escape': error,
        'no-param-reassign': error,
        'no-proto': error,
        'no-redeclare': error,
        'no-restricted-properties': off, // MAYBE: Configure.
        'no-return-assign': error,
        'no-return-await': error,
        'no-script-url': error,
        'no-self-assign': error,
        'no-self-compare': error,
        'no-sequences': error,
        'no-throw-literal': error,
        'no-unmodified-loop-condition': error,
        'no-unused-expressions': off, // Covered by Babel.
        'no-unused-labels': error,
        'no-useless-call': error,
        'no-useless-concat': error,
        'no-useless-escape': error,
        'no-useless-return': error,
        'no-void': off, // Fuck off.
        'no-warning-comments': off, // TODO: Configure.
        'no-with': error,
        'prefer-promise-reject-errors': error,
        radix: error,
        'require-await': error,
        'require-unicode-regexp': error,
        'vars-on-top': error,
        'wrap-iife': off, // Covered by Prettier.
        yoda: error,
        // endregion Best practices

        // region Strict mode
        strict: error,
        // endregion Strict mode

        // region Variables
        'init-declarations': error,
        'no-delete-var': error,
        'no-label-var': error,
        'no-restricted-globals': error,
        'no-shadow': [error, { hoist: 'all', builtinGlobals: true }],
        'no-shadow-restricted-names': error,
        'no-undef': error,
        'no-undef-init': off, // Fuck off.
        'no-undefined': off, // Fuck off.
        'no-unused-vars': off, // Covered by TypeScript.
        'no-use-before-define': off, // Covered by TypeScript.
        // endregion Variables

        // region NodeJS and CommonJS
        'callback-return': error,
        'global-require': error,
        'handle-callback-err': error,
        'no-buffer-constructor': error,
        'no-mixed-requires': error,
        'no-new-require': error,
        'no-path-concat': error,
        'no-process-env': off, // Fuck off.
        'no-process-exit': off, // Covered by Unicorn.
        'no-restricted-modules': [
            error,
            {
                paths: [
                    {
                        name: 'path',
                        message: 'Use `upath` instead.',
                    },
                ],
            },
        ],
        'no-sync': error,
        // endregion NodeJS and CommonJS

        // region Stylistic issues
        'array-bracket-newline': off, // Covered by Prettier.
        'array-bracket-spacing': off, // Covered by Prettier.
        'array-element-newline': off, // Covered by Prettier.
        'block-spacing': off, // Covered by Prettier.
        'brace-style': off, // Covered by Prettier.
        camelcase: off, // Covered by Babel.
        'capitalized-comments': off, // Fuck off.
        'comma-dangle': off, // Covered by Prettier.
        'comma-spacing': off, // Covered by Prettier.
        'comma-style': off, // Covered by Prettier.
        'computed-property-spacing': off, // Covered by Prettier.
        'consistent-this': [error, 'self'],
        'eol-last': off, // Covered by Prettier.
        'func-call-spacing': off, // Covered by Prettier.
        'func-name-matching': error,
        'func-names': [error, 'as-needed'],
        'func-style': error,
        'function-paren-newline': off, // Covered by Prettier.
        'id-blacklist': off, // Fuck off.
        'id-length': off, // Fuck off.
        'id-match': off, // TODO: Configure.
        'implicit-arrow-linebreak': off, // Covered by Prettier.
        indent: off, // Covered by Prettier.
        'jsx-quotes': off, // Covered by Prettier.
        'key-spacing': off, // Covered by Prettier.
        'keyword-spacing': off, // Covered by Prettier.
        'line-comment-position': off, // Fuck off.
        'linebreak-style': error,
        'lines-around-comment': off, // Covered by Prettier.
        'lines-between-class-members': off, // Fuck off. TODO: Configure.
        'max-depth': error,
        'max-len': off, // Covered by Prettier.
        'max-lines': off, // Fuck off.
        'max-lines-per-function': error,
        'max-nested-callbacks': [error, 3],
        'max-params': [error, 5],
        'max-statements': error,
        'max-statements-per-line': off, // Covered by Prettier.
        'multiline-comment-style': off, // Fuck off.
        'multiline-ternary': off, // Covered by Prettier.
        'new-cap': error,
        'new-parens': off, // Covered by Prettier.
        'newline-per-chained-call': off, // Covered by Prettier.
        'no-array-constructor': error,
        'no-bitwise': error,
        'no-continue': off, // Fuck off.
        'no-inline-comments': off, // Fuck off.
        'no-lonely-if': error,
        'no-mixed-operators': off, // Covered by Prettier.
        'no-mixed-spaces-and-tabs': off, // Covered by Prettier.
        'no-multi-assign': error,
        'no-multiple-empty-lines': off, // Covered by Prettier.
        'no-negated-condition': off, // Fuck off.
        'no-nested-ternary': off, // Covered by Prettier.
        'no-new-object': error,
        'no-plusplus': off, // Fuck off.
        'no-restricted-syntax': off, // Fuck off.
        'no-tabs': off, // Covered by Prettier.
        'no-ternary': off, // Fuck off.
        'no-trailing-spaces': off, // Covered by Prettier.
        'no-underscore-dangle': off, // Fuck off.
        'no-unneeded-ternary': error,
        'no-whitespace-before-property': off, // Covered by Prettier.
        'nonblock-statement-body-position': off, // Covered by Prettier.
        'object-curly-newline': off, // Covered by Prettier.
        'object-curly-spacing': off, // Covered by Prettier.
        'object-property-newline': off, // Covered by Prettier.
        'one-var': off, // Fuck off.
        'one-var-declaration-per-line': off, // Covered by Prettier.
        'operator-assignment': off, // Fuck off.
        'operator-linebreak': off, // Covered by Prettier.
        'padded-blocks': off, // Covered by Prettier.
        'padding-line-between-statements': [
            error,
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'block-like',
                    'break',
                    'cjs-import',
                    'const',
                    'continue',
                    'debugger',
                    'import',
                    'let',
                    'multiline-expression',
                    'return',
                    'throw',
                    'var',
                ],
            },
            {
                blankLine: 'always',
                prev: [
                    'block-like',
                    'break',
                    'cjs-import',
                    'const',
                    'continue',
                    'debugger',
                    'import',
                    'let',
                    'multiline-expression',
                    'return',
                    'throw',
                    'var',
                ],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['cjs-import', 'const', 'import', 'let', 'var'],
                next: ['cjs-import', 'const', 'import', 'let', 'var'],
            },
        ],
        'prefer-object-spread': error,
        'quote-props': off, // Covered by Prettier.
        quotes: off, // Covered by Prettier.
        'require-jsdoc': error,
        semi: off, // Covered by Prettier.
        'semi-spacing': off, // Covered by Prettier.
        'semi-style': off, // Covered by Prettier.
        'sort-keys': error,
        'sort-vars': off, // Fuck off.
        'space-before-blocks': off, // Covered by Prettier.
        'space-before-function-paren': off, // Covered by Prettier.
        'space-in-parens': off, // Covered by Prettier.
        'space-infix-ops': off, // Covered by Prettier.
        'space-unary-ops': off, // Covered by Prettier.
        'spaced-comment': error,
        'switch-colon-spacing': off, // Covered by Prettier.
        'template-tag-spacing': off, // Covered by Prettier.
        'unicode-bom': off, // Covered by Prettier.
        'wrap-regex': off, // Covered by Prettier.
        // endregion Stylistic issues

        // region ES6
        'arrow-body-style': off, // Fuck off.
        'arrow-parens': off, // Covered by Prettier.
        'arrow-spacing': off, // Covered by Prettier.
        'constructor-super': error,
        'generator-star-spacing': off, // Covered by Prettier.
        'no-class-assign': error,
        'no-confusing-arrow': off, // Fuck off.
        'no-const-assign': error,
        'no-dupe-class-members': error,
        'no-duplicate-imports': error,
        'no-new-symbol': error,
        'no-restricted-imports': [
            error,
            {
                paths: [
                    {
                        name: 'path',
                        message: 'Use `upath` instead.',
                    },
                ],
            },
        ],
        'no-this-before-super': error,
        'no-useless-computed-key': error,
        'no-useless-constructor': error,
        'no-useless-rename': error,
        'no-var': error,
        'object-shorthand': error,
        'prefer-arrow-callback': error,
        'prefer-const': error,
        'prefer-destructuring': [
            error,
            {
                array: false,
                object: true,
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'prefer-numeric-literals': error,
        'prefer-rest-params': error,
        'prefer-spread': error,
        'prefer-template': error,
        'require-yield': error,
        'rest-spread-spacing': off, // Covered by Prettier.
        'sort-imports': off, // TODO: Plugin imports.
        'symbol-description': error,
        'template-curly-spacing': off, // Covered by Prettier.
        'yield-star-spacing': off, // Covered by Prettier.
        // endregion ES6

        // region Babel
        'babel/camelcase': error,
        'babel/no-invalid-this': error,
        'babel/no-unused-expressions': error,
        'babel/valid-typeof': error,
        // endregion Babel

        // region Import
        'import/no-unresolved': error,
        'import/named': error,
        'import/default': error,
        'import/namespace': error,
        'import/no-absolute-path': error,
        'import/no-dynamic-require': error,
        'import/no-internal-modules': error,
        'import/no-webpack-loader-syntax': error,
        'import/no-self-import': error,
        'import/no-cycle': error,
        'import/no-useless-path-segments': error,

        'import/export': error,
        'import/no-named-as-default': error,
        'import/no-named-as-default-member': error,
        'import/no-deprecated': error,
        'import/no-extraneous-dependencies': error,
        'import/no-mutable-exports': error,

        'import/no-commonjs': error,
        'import/no-amd': error,

        'import/first': error,
        'import/no-duplicates': error,
        'import/extensions': error,
        'import/order': [error, { 'newlines-between': 'always' }],
        'import/newline-after-import': off, // Covered by `'padding-line-between-statements'`.
        'import/no-unassigned-import': error,
        'import/no-named-default': error,
        'import/no-default-export': error,
        'import/no-anonymous-default-export': error,
        // endregion Import

        // region Unicorn
        'unicorn/catch-error-name': [error, { name: 'error' }],
        'unicorn/explicit-length-check': error,
        'unicorn/no-process-exit': error,
        'unicorn/throw-new-error': error,
        'unicorn/no-array-instanceof': error,
        'unicorn/no-hex-escape': error,
        'unicorn/prefer-starts-ends-with': error,
        'unicorn/prefer-type-error': error,
        'unicorn/regex-shorthand': error,
        'unicorn/prefer-spread': error,
        'unicorn/error-message': error,
        'unicorn/prefer-add-event-listener': error,
        'unicorn/prefer-exponentiation-operator': error,
        // endregion Unicorn

        // region Array
        'array-func/from-map': error,
        'array-func/no-unnecessary-this-arg': error,
        'array-func/avoid-reverse': error,
        // endregion Array

        // region FP
        'fp/no-arguments': error,
        'fp/no-delete': error,
        'fp/no-loops': error,
        'fp/no-mutating-assign': error,
        // endregion FP

        // region Promise
        'promise/catch-or-return': error,
        'promise/no-return-wrap': error,
        'promise/param-names': error,
        'promise/no-nesting': error,
        'promise/no-promise-in-callback': error,
        'promise/no-callback-in-promise': error,
        'promise/avoid-new': error,
        'promise/no-return-in-finally': error,
        'promise/valid-params': error,
        'promise/prefer-await-to-then': error,
        'promise/prefer-await-to-callbacks': error,
        // endregion Promise

        // TODO: React.
        // TODO: JSX a11y.
        // TODO: Node.
        // TODO: Markdown.
        // TODO: Notice.
        // TODO: Security.
        // TODO: Jest.

        // region Misc
        'no-use-extend-native/no-use-extend-native': error,
        'prettier/prettier': error,
        // endregion Misc
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: 'typescript-eslint-parser',
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 10,
                codeFrame: true,
                ecmaFeatures: {
                    jsx: true,
                },
                jsx: true,
            },
            rules: {
                'valid-jsdoc': off,
                'require-jsdoc': off,

                // region TypeScript
                'typescript/adjacent-overload-signatures': error,
                'typescript/class-name-casing': error,
                'typescript/member-ordering': [
                    error,
                    {
                        default: [
                            'public-static-field',
                            'protected-static-field',
                            'private-static-field',
                            'public-static-method',
                            'protected-static-method',
                            'private-static-method',
                            'public-instance-field',
                            'protected-instance-field',
                            'private-instance-field',
                            'constructor',
                            'public-instance-method',
                            'protected-instance-method',
                            'private-instance-method',
                        ],
                    },
                ],
                'typescript/no-angle-bracket-type-assertion': error,
                'typescript/no-empty-interface': error,
                'typescript/no-explicit-any': error,
                'typescript/no-inferrable-types': error,
                'typescript/no-namespace': error,
                'typescript/no-non-null-assertion': error,
                'typescript/no-triple-slash-reference': error,
                'typescript/no-unused-vars': error,
                'typescript/no-use-before-define': [error, { typedefs: false }],
                'typescript/no-var-requires': error,
                'typescript/prefer-namespace-keyword': error,
                // endregion TypeScript
            },
            globals: {
                Brand: false,
                isNever: true,
            },
        },
        {
            files: ['*.spec.ts', '*.spec.tsx'],
            env: {
                'jest/globals': true,
            },
        },
        {
            files: ['*.js'],
            rules: {
                'import/no-commonjs': off,
                'sort-keys': off,
                'no-magic-numbers': off,
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
        },
        'import/parsers': {
            'typescript-eslint-parser': ['.ts', '.tsx'],
        },
    },
};
