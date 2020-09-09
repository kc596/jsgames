import babel from '@rollup/plugin-babel'; 
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const { presets, plugins } = require("./babel-configs/babelhw.config");

export default {
    input: './dist-pre/pre.bundle.js',
    output: {
        dir: 'dist-wp-ru',
        format: 'iife',
        plugins: [
            terser()
        ]
    },
    perf: true,
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            babelHelpers: "bundled",
            presets: presets,
            include: [
                "./dist-pre/**",
            ],
        })
    ]
};
