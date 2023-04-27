class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
  
  static fromJson(){
    return new Person(json["id"],json["firstName"],json["lastName"],json["age"])
  }
}

const json = JSON.parse('{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}') ;
const developer = Person.fromJson(json);
console.log(developer instanceof Person);