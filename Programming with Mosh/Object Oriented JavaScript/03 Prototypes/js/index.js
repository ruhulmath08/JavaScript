function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

function Circle() {}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log("duplicate-circle");
};

function Square() {}

extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log("duplicate-square");
};

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}

/*
duplicate-circle
duplicate-square
*/
""