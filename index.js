//question 1

let a = 3;
let b = 4;
let c = 7;

let num1 = 5 * c - 2 * a;
let num2 = 3 * b + 1 * b;
let num3 = 3 * c - 2 * b;

alert((num1 / num2) * num3);

//question 2

function square(number) {
  alert(number * number);
}

square(3);

//question 3

const randomFacts = [
  'The Earth is the third planet from the Sun',
  'A group of Cows is called a Herd',
  'Bananas are berries, but Strawberries are not',
  'Honey never spoils',
  'The Great wall of China is visible from space',
  'Octopuses have three hearts',
  'Penguins only live in the Southern hemisphere',
  'The Eiffel tower can be about 15 cm taller in the Summer',
  'A day on Venus is longer than a year on Venus',
  'The Antarctic Blue Whale is the biggest animal in the World',
];

let randomize = Math.floor(Math.random() * 10);
alert(randomFacts[randomize]);
