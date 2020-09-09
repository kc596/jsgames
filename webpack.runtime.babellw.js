const path = require('path');
const babelConfig = require("./babel-configs/babellw.config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;   /* https://github.com/webpack-contrib/webpack-bundle-analyzer */
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();
const enableBundleAnalyzer = false;
const mode = "production";  // mode = "development" : bundle is not minified

/* Do not create an entry for vendors or other stuff that is not the starting point of execution. */
const entry = {
    babellw: [
        "./artifacts/esnext/game1/index.js",
        "./artifacts/esnext/game2/index.js",
        "./artifacts/esnext/game3/index.js",
        "./artifacts/esnext/game4/index.js",
        "./artifacts/esnext/game5/index.js",
        "./artifacts/esnext/game6/index.js",
        "./artifacts/esnext/game7/index.js",
    ],
};

const output = {
    /* Allow outputting JavaScript files as module type. It sets output.iife to false, output.libraryTarget to 'module', output.scriptType to 'module' and terserOptions.module to true. */
    module: true,
    path: path.resolve(__dirname, 'dist-runtime-lw'),
    filename: '[name].bundle.js',   // [name] is taken from entry
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

const optimization = {}

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
