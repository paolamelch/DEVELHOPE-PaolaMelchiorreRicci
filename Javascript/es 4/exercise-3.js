const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (a,b,c) => 
divide(subtract(multiply(sum(a,b), sum(c,a)), a), c);

console.log(log(2,4,5));