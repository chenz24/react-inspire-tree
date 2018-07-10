// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es6: true,
        commonjs: true,
        browser: true,
    },
    extends: [
        // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
        // 'standard',
        // https://github.com/feross/eslint-config-standard-react
        // 'standard-react',
        'airbnb-base'
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    plugins: [
        'react',
        'babel',
        'promise'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'react/jsx-uses-vars': 1,
        'class-methods-use-this': 0,
        'no-console': 0,
        "no-mixed-operators": 0,
        "import/prefer-default-export": 0,
        "object-curly-newline": 0,
        "no-plusplus": 0,
        "no-restricted-properties": 0,
        "consistent-return": 0,
        "no-underscore-dangle": 0,
        "function-paren-newline": 0,
        "prefer-destructuring": 0,
    }
}
