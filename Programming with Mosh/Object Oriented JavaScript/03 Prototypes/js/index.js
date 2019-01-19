function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

//circleBase is like this
//Circle.prototype = Object.create(Object.prototype); //objectBase

//Create ShapeBase prototype and set to to CircleBase
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(20);

console.log(new Circle(20));
/*
Circle {radius: 20}
radius: 20
__proto__:
draw: ƒ ()
constructor: ƒ Circle(radius)
__proto__: Object
*/
