const plugins = [
    [
        "@babel/plugin-transform-runtime",
        {
            "absoluteRuntime": false,
            "corejs": false,
            "helpers": true,
            "regenerator": true,
            "useESModules": true,
        }
    ]
];

const presets = [
    [
        "@babel/env",
        {
            targets: "> 0.25%, not dead",
            useBuiltIns: "usage",
            corejs: 3,
            modules: false,
            bugfixes: true,
        }
    ]
];

module.exports = {
    presets,
    plugins
};
