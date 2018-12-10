
var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed*time);        
    };
    this.lodDriver = function(){
        console.log("Driver name: "+this.driver);
        
    };
};

var myCar1 = new Car(100, "Ruhul");
var myCar2 = new Car(120, "Reza");
var myCar3 = new Car(140, "Kapil");

console.log(myCar1.maxSpeed);
console.log(myCar2.maxSpeed);