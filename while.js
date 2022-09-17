//
//while(condition){code/logic}
let i = 0;
while (i <= 10) {
  // console.log(i);
  text = "The number is " + i;
  i++;
}
console.log(i);

console.log("=====================");
const numberArr = [1, 2, 3, 4, 5, 6];
while (i <= numberArr.length) {
  console.log(i);
  i++;
}

//do while
console.log("======== Do while =============");
let ii = 0;
do {
  //logic
  console.log(ii);
  ii++;
} while (ii < 10);
//once i received i is 10 then I am going to stop

//-------- while vs for
const car = ["BMW", "Volvo", "Skoda", "Ford", "Mercedes"];

console.log("==========while/for （for）===========");
for (let a = 0; a < car.length; a++) {
  console.log(car[a]);
}

let a = 0;
console.log("==========while/for（while）===========");
while (car[a]) {
  console.log(car[a]);
  a++;
}
