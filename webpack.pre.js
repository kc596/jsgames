const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();
const enableBundleAnalyzer = false;
const mode = "production";

const entry = {
    pre: [
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
    module: true,
    path: path.resolve(__dirname, 'dist-pre'),
    filename: '[name].bundle.js',
};

const plugins = [];
if (enableBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
}

const experiments = {
    "outputModule": true
};

const moduleConfig = {};

const optimization = {};

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
