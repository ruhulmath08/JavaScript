var myArray = new Array();
myArray[0] = 1;
myArray[1] = "Helllo";

var myCar = new Object();
myCar.topSpeed = 50;
myCar.driver = "Kajol";

console.log(myCar.driver);

myCar.drive = function(){
    console.log("Vom vom vom");
    
};
myCar.drive()

var myCar2 = {
    color: "red",
    MaxSpeed: 100,
    type: function(){
        console.log("Sports Car");
        
    }
};

console.log(myCar2.MaxSpeed);
myCar2.type();

