/* eslint-disable global-require */

module.exports = () => ({
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
    plugins: [
        require('@babel/plugin-transform-runtime'),
        [require('@babel/plugin-proposal-class-properties'), { loose: true }],
    ],
});
