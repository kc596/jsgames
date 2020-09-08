const path = require('path');
const webpack = require('webpack');     /* to access built-in plugins */
const babelConfig = require("./babel1.config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;   /* https://github.com/webpack-contrib/webpack-bundle-analyzer */
const TerserPlugin = require('terser-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();
const enableBundleAnalyzer = true;
const mode = "production";

/* Do not create an entry for vendors or other stuff that is not the starting point of execution. */
const entry = {
    game1: "./artifacts/exnext/game1/index.js",
    game2: "./artifacts/exnext/game2/index.js",
    game3: "./artifacts/exnext/game3/index.js",
    game4: "./artifacts/exnext/game4/index.js",
    game5: "./artifacts/exnext/game5/index.js",
    game6: "./artifacts/exnext/game6/index.js",
    game7: "./artifacts/exnext/game7/index.js",
};

const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
};

const plugins = [];
if (enableBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
}

const experiments = {
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

const optimization = {
    splitChunks: {
        chunks: "all"
    }
};

const config = smp.wrap({
    "mode": mode,
    "entry": entry,
    "output": output,
    "plugins": plugins,
    "experiments": experiments,
    "module": moduleConfig,
    "optimization": optimization
});

module.exports = config;
