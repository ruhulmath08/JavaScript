
class User{
    //constructor function
    constructor(email, name){
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(this.email, ' just loged in');
        
    }

    logout(){
        console.log(this.email, ' just loged out');
        
    }
}

var userOne = new User('ruhulmath08@gmail.com', 'Ruhul');
var userTwo = new User('reza99@gmail.com', 'Reza');
var userThree = new User('kapildatto@gmail.com', 'Kapil');

userOne.login();
userTwo.logout();

