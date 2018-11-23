# @anireact/eslint-config

> anireact’s ESLint config.

```bash
$ yarn add -DW \
    @anireact/babel-config \
    eslint babel-eslint prettier typescript typescript-eslint-parser \
    eslint-plugin-{array-func,babel,fp,import,jest} \
    eslint-plugin-{no-use-extend-native,prettier,promise,typescript,unicorn}
```

```javascript
// Create .eslintrc.js
module.exports = {
    // ↓ Force IDEA lint TypeScript files with ESLint.
    parser: 'babel-eslint',
    extends: ['@anireact'],
};
```

> **NB:** Don’t forget to setup [Babel config].

## License

MIT

[babel config]: https://github.com/anireact/tooling/tree/master/@anireact/babel-config
