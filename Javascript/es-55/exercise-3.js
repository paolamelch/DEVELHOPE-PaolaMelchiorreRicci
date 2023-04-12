function calculateAverageAge(persons) {
  const totalAge = persons.reduce((accumulator, currentValue) => accumulator + currentValue.age , 0 )
  const avgAge = totalAge / persons.length;
  return avgAge;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = Math.round(calculateAverageAge(persons));
console.log(persons);
console.log(average);