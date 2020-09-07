// Just for checking if this compiles faster?
// TODO: delete this file after use
module.exports = {
    input: './dist/pre_babel.bundle.js',
    output: {
        dir: 'dist-rollup-after-webpack',
        format: 'iife'
    },
    perf: true
};
