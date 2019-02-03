//this is not accessable when we import circle (circle.js)
const _radius = new WeakMap();

//once we import circle (circle.js) Circle is accessable
export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log("Circle with radious: " + _radius.get(this));
  }
}
