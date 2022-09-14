const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const module = await import("./file.js");
  module.hello();
});

//big int
const aBigNumber = 90071989393939222222n;

const anotherBigNumber = BigInt(90071989393939222222n);

console.log(aBigNumber);
console.log(anotherBigNumber);

// promise.allsettled()

const promise1 = new Promise((resolve, reject) => reject("error"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3]).then((res) =>
  console.log(res)
);

//global this

console.log(window);
console.log(globalThis);

// nullish coalescing operator (??) - manejar valores nulos
let foo = und;
const valA = foo ?? "default";
console.log(valA);

// optional chaning

const user = {
  profile: {
    age: 22,
    name: "alejandro",
    emnail: " fn@gmail.com",
  },
};

console.log(user?.profile?.email);

console.log(user?.profile?.email ?? "not defined");

const potentiallyNullObj = null;
let x = 0;
const prop = potentiallyNullObj?.[x++];

console.log(x); // 0 as x was not incremented



