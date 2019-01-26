class Shape {
  move() {
    console.log("Move");
  }
}

class Circle extends Shape {
  move() {
    console.log("Move");
  }
}

const c = new Circle("red", 10);
console.log(c); //Circle {color: "red", radius: 10}
/*
Circle {color: "red", radius: 10}
  color: "red"
  radius: 10
  __proto__: Shape
    constructor: class Circle
    draw: ƒ draw()
    __proto__:
      constructor: class Shape
      move: ƒ move()
      __proto__: Object
*/
