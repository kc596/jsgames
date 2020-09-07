export default {
    input: './dist/pre_babel.bundle.js',
    output: {
        dir: 'dist-rollup-after-webpack',
        format: 'iife'
    },
    perf: true
};
