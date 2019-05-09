var axios = require("axios");
const greetOne = function(name) {
  console.log("hello " + name);
};

const greetTwo = name => {
  console.log("hello 2 " + name);
};

const greetThree = name => console.log("hello " + name);
const greetFour = () => console.log("hello everyone");

const arrowFunctions = () => {
  greetOne("juan");
  greetTwo("miguel");
  greetThree("sofia");
  greetFour();
};

//arrowFunctions();

var data = axios.get("http://jsonplaceholder.typicode.com/posts/1");

data.then(posts => console.log(posts));
