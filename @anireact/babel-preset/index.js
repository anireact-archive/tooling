/* eslint-disable global-require */

module.exports = {
    ignore: [/@types/u],
    presets: [
        [
            require('@babel/preset-env'),
            {
                loose: true,
                modules: false,
                shippedProposals: true,
                useBuiltIns: 'usage',
            },
        ],
        require('@babel/preset-typescript'),
    ],
    plugins: [require('@babel/plugin-transform-runtime')],
};
