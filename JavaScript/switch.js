/*
switch (expression) {
  case x:
    //logic
    break;
  case y:
    break;
  default:
    //logic
    break;
}
*/
console.log(new Date().getDay());
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("???");
}

let name = "Jane";
let greeting = "";
switch (name) {
  case "Jane":
    greeting = "Hello Jane";
    break;
  case "Adam":
    greeting = "Hello Adam";
  default:
    greeting = "Hello world";
}
console.log(greeting);
