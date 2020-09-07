# jsgames

### Game 1

- Prints a starry pattern in console.

<pre>
n = 7 
*                        * *
* *                    * * *
* * *                * * * *
* * * *            * * * * *
* * * * *        * * * * * *
* * * * * *    * * * * * * *
* * * * * * ** * * * * * * *
* * * * * * *  * * * * * * *
* * * * * *      * * * * * *
* * * * *          * * * * *
* * * *              * * * *
* * *                  * * *
* *                      * *
*                          *
</pre>

### Game 2

- Prints another starry pattern in console. Uses starOrSpace() function from game 1.

<pre>
n = 7
* * * * * * *  * * * * * * *
* * * * * *      * * * * * *
* * * * *          * * * * *
* * * *              * * * *
* * *                  * * *
* *                      * *
*                          *
*                          *
* *                      * *
* * *                  * * *
* * * *              * * * *
* * * * *          * * * * *
* * * * * *      * * * * * *
* * * * * * *  * * * * * * *
</pre>


### Game 3

- Contains utils for shape and area : circle, rectangle, square, right angled triangle

### Game 4

- Contains utils for volume using area (from game 3) : cube(x), sphere(x)

### Game 5

- Uses fast exponent to expose a function pow3() which calculates power of 3

### Game 6

- Uses game 4 to calc hyperCube(x) = cube(x) * x
- Uses game5 pow3() to calc pow9()
- Also uses fastexponent directly to calc pow2()
- Uses game2 to print pattern for n=5

### Game 7

- Snake game

## Babel

The main things Babel can do:

- Transform syntax
- Polyfill features that are missing in your target environment (through @babel/polyfill)
- Source code transformations (codemods)

Babel is a compiler (source code => output code). Like many other compilers it runs in 3 stages: parsing, transforming, and printing.

Now, out of the box Babel doesn't do anything. It basically acts like const babel = code => code; by parsing the code and then generating the same code back out again. You will need to add plugins for Babel to do anything.

Instead of individual plugins, you can also enable a set of plugins in a preset.

> *babel-loader* is used for using babel with webpack build system. 
 
> *@rollup/plugin-babel* is used for using babel with rollup build system.


### Ordering matters for each visitor in the plugin.

This means if two transforms both visit the "Program" node, the transforms will run in either plugin or preset order.

- Plugins run before Presets.
- Plugin ordering is first to last.
- Preset ordering is reversed (last to first).

### @babel/plugin-transform-runtime

Babel uses very small helpers for common functions such as _extend. By default this will be added to every file that requires it. This duplication is sometimes unnecessary, especially when application is spread out over multiple files.

@babel/plugin-transform-runtime plugin makes all of the helpers will reference the module @babel/runtime to avoid duplication across your compiled output. The runtime will be compiled into your build.

Another purpose of this transformer is to create a sandboxed environment for your code. If you directly import core-js or @babel/polyfill and the built-ins it provides such as Promise, Set and Map, those will pollute the global scope.

Examples on size is shown below in table :-
| Plugin | Options | Size (orig./gzip) in B | Time (s) |
| ------ | ------ | ------ | ------ |
| - | - | 69385 / 26890| 2.4 |
| plugin-transform-runtime | default | 54994 / 21806 | 2.1 - 2.2 |
| plugin-transform-runtime | corejs:3 | 82100 / 31239 | 2.8 |
| plugin-transform-runtime | helpers:false | 69408 / 26896 | 2.5 |
| plugin-transform-runtime | regenerator:false | 54969 / 21784 | 2.2 |
| plugin-transform-runtime | useESModules:true | 54667 / 21673 | 2.2 |


### @babel/env preset 

Example affect on size of bundle:  

**bugfixes: false** : original size: 26912 / gzipped size: 10483  

**bugfixes: true** : original size: 26685 / gzipped size: 10454  


It is worth pointing out that this reduciton happend when targettig modern browsers.

```js
targets: {
    "browsers": [
        "Chrome >= 78",
        "ChromeAndroid >= 78",
        "Firefox >= 69",
        "Safari >= 12",
    ],
}
```

However, same code for older targets had no size reduction.

```js
targets: {
    "browsers": [
        "Chrome >= 40",
        "ChromeAndroid >= 40",
        "Firefox >= 40",
        "Safari >= 9",
    ],
}
```

**bugfixes: false** : original size: 54342 / gzipped size: 21551  

**bugfixes: true** : original size: 54342 / gzipped size: 21551  


## Webpack


## Few unsupported syntax in older browsers

And thus, require polyfills.

- *class* : Firefox 45+, Chrome 49+, Safari 9+. This doesn't require polyfills and are transpiled.
- *Array.prototype.includes*
- *Promise.resolve().finally();*
- *Map*
