class cslculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA += valueA;
    this.valueB += valueB;

    return this.valueA + this.valueB;
  }
}

const calc = new cslculator();

console.log(calc.sum(4, 2));

const hello = require("./module");
console.log(hello());

function* hellWorld() {
  if (true) {
    yield "hello, ";
  }
  if (true) {
    yield "world, ";
  }
}

console.group("generator");
const generatorHello = hellWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.groupEnd();
