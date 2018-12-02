
//Constructor function
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, ' has logged in');
    }
}

var userOne = new User('ruhulmath08@gmail.com', 'Ruhul');
var userTwo = new User('kapildatto@gmail.com', 'Kapil');

console.log(userOne);
userTwo.login();


