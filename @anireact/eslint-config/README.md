# @anireact/eslint-config

> anireact’s ESLint config.

```bash
yarn add -DW @babel/core eslint @anireact/babel-config
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
