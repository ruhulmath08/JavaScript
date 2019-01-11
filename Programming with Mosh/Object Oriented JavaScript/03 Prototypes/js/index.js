function Circle(radious){
  this.radious = radious;
  this.draw = function(){
    console.log("draw");    
  };
}

const circle = new Circle(10);
""