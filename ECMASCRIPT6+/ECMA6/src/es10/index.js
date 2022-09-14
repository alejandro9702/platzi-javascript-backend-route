let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(1));

let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

let toTrim = "           hello world";
console.log(toTrim.trimStart());

let toTrimEnd = "              hello world                  ";
console.log(toTrimEnd.trimEnd());

//parametor de catch optional
try {
} catch {
  console.log(error);
}

//de arreglos a objetos

let entries = [['name','alejandro'],['age',32]];

console.log(Object.fromEntries(entries));


//

let mySymbol ='My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);