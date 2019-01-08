class Employee {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  doWork() {
    return `${this.name} is working`;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    if (newName) {
      this._name = newName;
    }
  }
}

let man = new Employee("Ruhul", 30);
console.log(man.name, man.age); //RUHUL 30
man.name = "Shamim";
man.age = 28;
console.log(man.name, man.age); //SHAMIM 28
