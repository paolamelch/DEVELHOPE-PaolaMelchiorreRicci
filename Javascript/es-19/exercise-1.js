const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

// Modify the property `firstName` of the `person2` in "Simon".
//person2 si riferisce ai valori di person1 e non è un oggetto a parte, per questo motivo se viene cambiato un valore verrà cambiato per entrambi gli oggetti.
console.log(person1);
console.log(person2);
