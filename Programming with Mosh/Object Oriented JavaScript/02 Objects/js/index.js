function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(20);

//add property
const propertyName = "center-location";
//circle.center-location => not working
circle[propertyName] = { x: 1 };
console.log(circle);

/*
Circle {radius: 20, draw: ƒ, location: {…}}
draw: ƒ ()
location: {x: 1}
radius: 20
__proto__: Object
*/
