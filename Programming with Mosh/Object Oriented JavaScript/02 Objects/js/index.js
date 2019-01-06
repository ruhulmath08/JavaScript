
//only radius and draw is access through circle object
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = {x: 0, y: 0};
  let computeOptimumLocation = function(){
    // ...
  }
  this.draw = function() {
    computeOptimumLocation();
    defaultLocation();
    console.log("draw");
  };
}

const circle = new Circle(20);

