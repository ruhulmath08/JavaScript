
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

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        });
    }
}

var userOne = new User('ruhulmath08@gmail.com', 'Ruhul');
var userTwo = new User('kapildatto@gmail.com', 'Kapil');

var admin = new Admin('reza@gmail.com', 'kapil');

var users = [userOne, userTwo, admin];
admin.deleteUser(userTwo);

console.log(users);
