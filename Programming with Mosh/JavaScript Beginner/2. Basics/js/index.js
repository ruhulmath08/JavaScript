const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  //value receive here is a valid string
  set fullName(value) {
    //if(typeof value !== 'string') return
    if (typeof value !== "string") {
      throw new Error("Value is not a string");
    }
    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("Enter a valid name");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = "";
} catch (e) {
  console.log(e);
}
console.log(person);
/*
Error: Enter a valid name
    at Object.set fullName [as fullName]
{firstName: "Mosh", lastName: "Hamedani"}
*/
