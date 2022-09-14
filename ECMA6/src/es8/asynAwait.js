const helloWorld = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("helloWorld"), 3000)
      : reject(new Error("test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();

var value;

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(10), 1000);
  });

  let result = await promise; // espera hasta que la promesa se resuelva (*)

  value = result;
  console.log(value); // "¡Hecho!"
}

f();

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  }

  throw new Error(response.status);

  //   response.status == 200
  //     ? response.json()
  //     : Promise.reject(new Error("Whoops!"));
}

loadJson("https://javascript.info/no-such-user.json").catch((error) =>
  console.log(error)
); // Error: 404
