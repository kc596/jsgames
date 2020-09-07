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

## Webpack


## Few unsupported syntax in older browsers

And thus, require polyfills.

- *class* : Firefox 45+, Chrome 49+, Safari 9+. This doesn't require polyfills and are transpiled.
- *Array.prototype.includes*
- *Promise.resolve().finally();*
- *Map*
