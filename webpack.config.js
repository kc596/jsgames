const path = require('path');

const entry = {
    pre: [
        "./artifacts/exnext/game1/index.js",
    ],
};

const mode = "production";

const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
};

const plugins = [];

const config = { entry, mode, output, plugins };

module.exports = config;
