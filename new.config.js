/* eslint-env node */

const dedent = require('dedent');
const { Confirm } = require('enquirer');

const lerna = require('./lerna');
const pkg = require('./package');

module.exports = {
    // Allowed scopes.
    scopes: ['anireact'],

    // Workspaces locations.
    workspaces: ['@anireact'],

    // Repository URL.
    repository: pkg.repository,

    // Package’s homepage.
    homepage: (name, workspace) => `https://github.com/anireact/tooling/tree/master/${workspace}/${name}`,

    // Issue tracker URL.
    bugs: (name, workspace) => `https://github.com/anireact/tooling/issues?q=is:issue+label:${workspace}/${name}`,

    // Author’s name, email, homepage.
    author: pkg.author,

    // Monorepo root.
    context: __dirname,

    // Initial version of new packages.
    version: lerna.version,

    // Prefer private packages.
    private: false,

    // Default license.
    license: 'MIT',

    // Default entry point.
    main: 'dist/index.js',

    // Post-process generated `package.json`.
    package: x => x,

    // Post-spawn commands.
    finalize: async pkg_ => {
        const add = await new Confirm({
            message: 'Add to Git:',
            initial: true,
        }).run();

        return [
            { root: true, run: ['yarn'] },
            ['yarn', 'add', '@babel/runtime', 'core-js'],
            {
                file: 'README.md',
                data: dedent`
                    # ${pkg_.name}

                    > ${pkg_.description}

                    ## License

                    MIT
                `,
            },
            ['prettier', '--write', './**/*.{js,jsx,ts,tsx,css,less,scss,html,json,md}'],
            add && ['git', 'add', './*'],
        ];
    },
};
