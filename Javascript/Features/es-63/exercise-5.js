const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, name, surname, old } = {
  id : person.id,
  name : person.firstName,
  surname : person.lastName,
  old : person.age
};

console.log(id, name, surname, old);