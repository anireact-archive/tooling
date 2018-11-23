# @anireact/lerna-config

> anireact’s Lerna config.

```bash
$ yarn add -DW lerna @anireact/lerna-config
```

```json5
// Create lerna.json
{
    extends: '@anireact/lerna-config',
    packages: ['@scope/*'],
    version: '1.0.0',
}
```

> **NB:** Don’t forget to configure [Yarn workspaces].

## License

MIT

[yarn workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/
