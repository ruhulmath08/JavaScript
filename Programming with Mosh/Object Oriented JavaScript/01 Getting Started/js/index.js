//functional programming
let baseSalary = 3000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}

const total = getWage(baseSalary, overtime, rate);
console.log(total); //3200

//Object-orianted programming
let employee = {
  baseSalary: 3000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + this.overtime * this.rate;
  }
};
console.log(employee.getWage()); //3200
