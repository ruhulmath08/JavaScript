
//Constructor function
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, ' has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, ' has logged out');
}

function Admin(...args){
    User.apply(this, args)
    this.role = 'Super Admin';
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};

var userOne = new User('reza@gmail.com', 'Ruhul');
var userTwo = new User('rabi@gmail.com', 'Kapil');
var admin = new Admin('jumu@gmail.com', 'jumu');

var users = [userOne, userTwo, admin];


console.log(admin);



