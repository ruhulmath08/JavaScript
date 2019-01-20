function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

function Circle() {}

extend(Circle, Shape);

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle() {}

//Circle inherit from Shape
extend(Circle, Shape);

//must be places after "extend(Circle, Shape);"
//method overriding
Circle.prototype.duplicate = function() {
  Shape.prototype.duplicate.call(this);
  console.log("duplicate-circle");
};
const c = new Circle();
console.log(c.duplicate());

/*
duplicate
duplicate-circle
*/
