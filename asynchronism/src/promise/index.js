const promise = new Promise((resolve, reject) => {
  resolve("hey");
});

const cows = 11;

const counCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else reject("There is not cows enough on the farm");
});

counCows
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((err) => {
    console.log("finally finished");
  });

function delay(time, message) {
  return new Promise((resolve, reject) => {
    if (time > 0) {
      setTimeout(() => {
        resolve(message);
      }, time);
    } else {
      reject("time must be greater than zero");
    }
  });
}

delay(3000, "Hello after 2s")
  .then((message) => console.log(message))
  .catch((err) => {
    console.log(err);
  });

  
