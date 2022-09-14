const names = [
  { name: "oscar", age: 32 },
  { name: "yesica", age: 29 },
];

let listOfNames = names.map((item) => item.name);

console.log(listOfNames);

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) resolve("hey!");
    else reject("ups!");
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));