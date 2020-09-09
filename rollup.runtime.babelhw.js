import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import multi from '@rollup/plugin-multi-entry';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const { presets, plugins } = require("./babel-configs/babelhw.config");

export default {
    input: [
        "./artifacts/esnext/game1/index.js",
        "./artifacts/esnext/game2/index.js",
        "./artifacts/esnext/game3/index.js",
        "./artifacts/esnext/game4/index.js",
        "./artifacts/esnext/game5/index.js",
        "./artifacts/esnext/game6/index.js",
        "./artifacts/esnext/game7/index.js",
    ],
    output: {
        dir: 'dist-ru',
        format: 'iife',
        plugins: [
            terser()
        ]
    },
    perf: true,
    plugins: [
        nodeResolve(),
        commonjs(),
        multi(),
        babel({
            babelHelpers: "bundled",
            presets: presets,
            include: [
                "./artifacts/esnext/**/**",
            ],
        })
    ]
};
