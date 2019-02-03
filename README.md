# anireact’s monorepo configs and CLI tools

## TLDR

1. Install dependencies.

    ```bash
    yarn add -DW \
        `# Peer dependencies` \
        @commitlint/cli \
        @babel/core \
        @babel/plugin-{proposal-class-properties,syntax-dynamic-import,transform-runtime} \
        @babel/preset-{env,react,typescript} \
        styled-jsx \
        lerna prettier typescript eslint husky jest \
        babel-eslint eslint-codeframe-formatter babel-jest \
        `# Configs` \
        @anireact/{babel,commitlint,eslint,husky,jest,lerna,prettier,typescript}-config \
        @anireact/babel-preset \
        `# Tools` \
        @anireact/new \
        `# Additional tools for 'new'` \
        dedent enquirer mkdirp
    ```

    _PowerShell guys suck 🤷‍♀️_

2. Set up `package.json` (like in this repo).
3. Create configs (copy from this repo, then tweak).
4. Run `yarn` in the repo root.

## `yarn new`

[@anireact/new] package provides the `new` command,
which allows to create new packages in a repo without a pain.

It may be used without any arguments;
in such case it switches to interactive wizard-like interface.

The `new.config.js` file in this repository provides example configuration
with post-creation commands.

## License

MIT

[@anireact/new]: https://github.com/anireact/tooling/tree/master/@anireact/new
