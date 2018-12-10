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

var user2 = {
    email: 'reza@gmail.com',
    name: 'Reza',
    login(){
        console.log(this.email, 'has logged in');        
    },
    logout(){
        console.log(this.email, 'has logged out');        
    }
};

var user3 = {
    email: 'kapil@gmail.com',
    name: 'Kapil',
    login(){
        console.log(this.email, 'has logged in');        
    },
    logout(){
        console.log(this.email, 'has logged out');        
    }
};

user1.name = 'Md. Ruhul AMin';
