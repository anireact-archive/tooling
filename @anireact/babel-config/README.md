# @anireact/babel-config

> anireact’s Babel config.

```bash
$ yarn add -DW @babel/{core,preset-{preset,typescript},plugin-transform-runtime}
$ yarn add -DW @anireact/babel-config
```

```javascript
// Create babel.config.js
module.exports = {
    extends: '@anireact/babel-config',
};
```

> **NB:** Don’t forget to add `@babel/runtime` and `core-js` to runtime
> dependencies of all Babel-transpiled packages in the project.

# License

MIT
