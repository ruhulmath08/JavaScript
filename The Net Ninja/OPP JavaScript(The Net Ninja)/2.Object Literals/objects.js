//this is a simple object
//inside this obje 'this' keyword reffer this object
var user1 = {
    email: 'ruhulmath08@gmail.com',
    name: 'Ruhul',
    login(){
        console.log(this.email, 'has logged in');        
    },
    logout(){
        console.log(this.email, 'has logged out');        
    }
};

/*
outside any function or object this keyword reffer global object means window object
*/

console.log(user1.name);
