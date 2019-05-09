const [one, two, , , six] = ["1", "2", "3", "4", "5", "6"];
let uno, dos, seis;

let numbers = {
  un: "",
  deux: "",
  six: ""
};

[uno, dos, , , , seis] = ["1", "2", "3", "4", "5", "6"];
[numbers.un, numbers.deux, , , , numbers.six] = ["1", "2", "3", "4", "5", "6"];

console.log(one);
console.log(two);
console.log(six);

console.log(uno, dos, seis);

// console.log(numbers.un, numbers.deux, numbers.six);

const [test] = [...["1", "2", "3", "4", "5", "6"]];
console.log("test: " + test);

let colors = ["red", "green", "yellow", "blue"];
colors.push("brown", "pink", ...colors);
console.log(colors);
