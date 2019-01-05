function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new Address("17/A", "Dhaka", "1700");
let address2 = new Address("17/A", "Dhaka", "1700");
let address3 = address1;

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2)); //true
console.log(areSame(address1, address2)); //false
console.log(areSame(address1, address3)); //true

