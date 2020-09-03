import { Cube } from "./3dinterfaces/Cube";
import { Sphere } from "./3dinterfaces/Sphere";


let cube: Cube = new Cube(4);
console.log("Volume of cube with side ", cube.side(), ":", cube.volume());

let sphere: Sphere = new Sphere(3);
console.log("Volume of sphere with radius ", sphere.radius(), ":", sphere.volume());
