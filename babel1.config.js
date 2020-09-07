/**
 * This is called by webpack using babel-loader plugin.
 */

// plugins run in order and before presets.
// TODO: check size with and without runtime plugin
const plugins = [
    // [
         "@babel/plugin-transform-runtime",
    //     {
    //         "absoluteRuntime": false,
    //         /* how the runtime module's location is resolved, this allows users to resolve the runtime once up front, and then insert absolute paths to the runtime into the output code. */

    //         "corejs": false,
    //         /* false, 2, 3 or { version: 2 | 3, proposals: boolean }, defaults to false.

    //         Specifying a version will rewrite the helpers that need polyfillable APIs to reference helpers from that (major) version of core-js.
    //         By default, @babel/plugin-transform-runtime doesn't polyfill proposals.
    //         option	    Install command
    //         false	    npm install --save @babel/runtime
    //         2	        npm install --save @babel/runtime-corejs2
    //         3	        npm install --save @babel/runtime-corejs3
    //         */

    //         "helpers": true,

    //         "regenerator": true,
    //         /* Toggles whether or not generator functions are transformed to use a regenerator runtime that does not pollute the global scope.*/

    //         "useESModules": false,
    //         /* When enabled, the transform will use helpers that do not get run through @babel/plugin-transform-modules-commonjs. This allows for smaller builds in module systems like webpack, since it doesn't need to preserve commonjs semantics. */
    //     }
    // ]
];

// presets run order is reverse.
const presets = [
    [
        "@babel/env",
        {
            //targets: "> 0.25%, not dead",
            targets: {
                "edge": "12",
                "firefox": "40",
                "chrome": "40",
                "safari": "10.2"
            },
            useBuiltIns: "usage",
            corejs: 3,
            modules: false,
            //"bugfixes": false,
            /* defaults to false. @babel/preset-env tries to compile the broken syntax to the closest non-broken modern syntax supported by your target browsers. this can lead to a significant size reduction in the compiled app */
        }
    ]
];

module.exports = {
    presets,
    plugins
};
