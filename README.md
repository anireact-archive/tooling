# anireact’s monorepo configs and CLI tools

## TLDR

1. Install dependencies.

    ```bash
    yarn add -DW \
        `# Peer dependencies` \
        @commitlint/cli \
        @babel/core \
        lerna prettier typescript eslint \
        babel-eslint eslint-codeframe-formatter \
        `# Configs` \
        @anireact/{babel,commitlint,eslint,lerna,prettier,typescript}-config \
        @anireact/babel-preset \
        `# Tools` \
        @anireact/new \
        `# Additional tools for 'new'` \
        dedent enquirer mkdirp
    ```

    _PowerShell guys suck._

2. Set up `package.json` (like in this repo).
3. Create configs (copy from this repo, then tweak).
4. Run `yarn` in the repo root.

## License

MIT
