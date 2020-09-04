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


## Babel

The main things Babel can do:

- Transform syntax
- Polyfill features that are missing in your target environment (through @babel/polyfill)
- Source code transformations (codemods)

