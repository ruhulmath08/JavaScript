function Circle(radius) {
  this.radius = radius;
  this.move = function() {
    this.draw();
    console.log("move");
  };
}

Circle.prototype.draw = function() {
  console.log("draw");
};

const circle1 = new Circle(10);
console.log(circle1.move());

/*
draw
move
*/
