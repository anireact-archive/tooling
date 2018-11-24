module.exports = {
    hooks: {
        'pre-commit': 'lerna run build && lint',
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    },
};
