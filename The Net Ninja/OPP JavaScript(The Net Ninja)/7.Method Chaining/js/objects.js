
class User{
    //constructor function
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email, ' just loged in');
        return this;
    }

    logout(){
        console.log(this.email, ' just loged out');
        return this;
    }

    updateScore(){
        this.score++;
        console.log(this.name, "Score is now: "+ this.score);
        return this;    
    }
}

var userOne = new User('ruhulmath08@gmail.com', 'Ruhul');
var userTwo = new User('reza99@gmail.com', 'Reza');
var userThree = new User('kapildatto@gmail.com', 'Kapil');

userOne.login().updateScore().updateScore().logout();

