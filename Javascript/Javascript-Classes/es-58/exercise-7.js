class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName(){
  return `${this._firstName} ${this._lastName}`;
  }
  set firstName(newfirstName) {
    this._firstName = newfirstName;
  }
  set lastName(newlastName) {
    this._lastName = newlastName;
  }
  set age(newAge) {
    this._age = newAge;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
