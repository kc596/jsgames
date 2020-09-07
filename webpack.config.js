const path = require('path');
const webpack = require('webpack');     /* to access built-in plugins */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;   /* https://github.com/webpack-contrib/webpack-bundle-analyzer */
const babelConfig = require("./babel1.config");
const TerserPlugin = require('terser-webpack-plugin');

const enableBundleAnalyzer = false;
const mode = "production";

/* Do not create an entry for vendors or other stuff that is not the starting point of execution. */
const entry = {
    babel1: [
        "./artifacts/exnext/game1/index.js",
        "./artifacts/exnext/game2/index.js",
        "./artifacts/exnext/game3/index.js",
        "./artifacts/exnext/game4/index.js",
        "./artifacts/exnext/game5/index.js",
        "./artifacts/exnext/game6/index.js",
        "./artifacts/exnext/game7/index.js",
    ],
};

const output = {
    /* Allow outputting JavaScript files as module type. It sets output.iife to false, output.libraryTarget to 'module', output.scriptType to 'module' and terserOptions.module to true. */
    module: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
};

const plugins = [];
if (enableBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
}

const experiments = {
    /* Enables the use of output.module configuration */
    "outputModule": true
};

const moduleConfig = {
    rules: [{
        test: /\.(ts|js)x?$/,
        include: [
            path.resolve(__dirname, "artifacts"),
            path.resolve(__dirname, "node_modules", "fastexponent")
        ],
        use: [
            /* Loaders are transformations that are applied to the source code of a module. */
            {
                loader: "babel-loader",
                options: babelConfig
            },
        ]
    }]
};

const config = {
    "mode": mode,
    "entry": entry,
    "output": output,
    "plugins": plugins,
    "experiments": experiments,
    "module": moduleConfig
};

module.exports = config;
