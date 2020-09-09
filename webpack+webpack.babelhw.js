const path = require('path');
const babelConfig = require("./babel-configs/babelhw.config");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();
const enableBundleAnalyzer = false;
const mode = "production";

const entry = {
    post: [
        "./dist-pre/pre.bundle.js"
    ],
};

const output = {
    module: true,
    path: path.resolve(__dirname, 'dist-wp-wp-hw'),
    filename: '[name].bundle.js',
};

const plugins = [];
if (enableBundleAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin());
}

const experiments = {
    "outputModule": true
};

const moduleConfig = {
    rules: [{
        test: /\.(ts|js)x?$/,
        include: [
            path.resolve(__dirname, "dist-pre"),
            path.resolve(__dirname, "node_modules", "fastexponent")
        ],
        use: [
            {
                loader: "babel-loader",
                options: babelConfig
            },
        ]
    }]
};

const config = smp.wrap({
    "mode": mode,
    "entry": entry,
    "output": output,
    "plugins": plugins,
    "experiments": experiments,
    "module": moduleConfig
});

module.exports = config;
