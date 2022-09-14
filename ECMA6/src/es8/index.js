const data = {
  frontEnd: "oscar",
  backend: "Isabel",
  desing: "Ana",
};

const entries = Object.entries(data);
console.log(entries.length);

const student = {
    firstName: "Asabeneh",
    lastName: "Yetayehe",
    age: 250,
    isMarried: true,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
  };
const studentJson = JSON.stringify(
    student,
    ["firstName", "lastName", "skills"],
    4
  );
  console.log(typeof studentJson);


  const string= 'hello';

  console.log(string.padStart(7,'h1')); 
   console.log(string.padEnd(12,'-------------'));