var myCar = {
    maxSpeed: 120,
    driver: "Ruhul",
    drive: function(speed, time){
        console.log(speed*time);        
    },
    lodDriver: function(){
        console.log("Driver name: "+this.driver);
        
    }
};

myCar.drive(100, 3);
myCar.lodDriver();
