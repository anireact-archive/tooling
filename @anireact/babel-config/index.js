module.exports = {
    ignore: [/@types/u],
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false,
                shippedProposals: true,
                useBuiltIns: 'usage',
            },
        ],
        '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-transform-runtime'],
};
