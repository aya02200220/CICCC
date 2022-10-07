//数字を１づつ足していく　１〜５までループ
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("============");
//数字を２づつ足していく　１〜１０までループ
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//Forループ前のロジックの中では ++1 も 1++　も変わらない。
//ロジックの次の「{}」の中では変わる
console.log("====== i++ ======");
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

console.log("===== ++i =======");
for (let i = 0; i <= 5; ++i) {
  console.log(i);
}

console.log("====== i++② ======");
for (let i = 0; i <= 5; ) {
  i++;
  console.log(i);
}

console.log("===== ++i② =======");
for (let i = 0; i <= 5; ) {
  ++i;
  console.log(i);
}

//arrの長さは６で返されるが、インデックスは５までだから0~5のループで動く
console.log("===arr=========");
let arr = [0, 2, 4, 6, 8, 10];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//二次ループのコードの描き方
console.log("============");
for (let x = 0; x < 10; x++) {
  console.log("x is: ", x);

  for (let y = 0; y < 2; y++) {
    console.log("y is: ", y);
  }
}

//for(expression1;expression2;expression3){}

//For in :Objectを使ったループ　For inは都度中身を見にいく -----
console.log("====== for in ======");
const obj = { number1: 1, number2: 2, number3: 3 };
for (let x in obj) {
  console.log(x); //returns keys
  console.log(obj[x]); //returns values
}

//For in :オブジェクトを使ったループ② --------------------------
console.log("====== for in② ======");
const person = { Fname: "Jane", lName: "Alex", age: 30, location: "Vancouver" };
for (let x in person) {
  //This for loop will return 4 times
  console.log(x + " => " + person[x]);
}

//For of : iterable  ---------------------------------------
console.log("====== for of ======");

let arr2 = [
  { name: "Jane", lastname: "doe" },
  { name: "john", lastname: "doe" },
];
for (let x of arr2) {
  console.log(x);
}

//上と一緒の結果だけどロジックが違う。このケースは途中の数字から開始して停められる
console.log("====== for of② ======");
for (let x = 0; x < arr2.length; x++) {
  console.log(arr2[x]);
}

// For in は中のキーの数を探しにいく、For of　は中のそのものを探しにいく

//
console.log("====== for of オブジェクトと文字列が混在している場合 ======");
let arr3 = [
  { fName: "Alex", lName: "Mart", location: "Toronto" }, //object
  "Hello", //string
  "World", //string
  "Foo", //string
  2,
];
for (let a of arr3) {
  // console.log(a.fName);
  if (typeof a === "object") {
    console.log("This is object");
  } else if (typeof a === "string") {
    console.log("This in not object");
  } else {
    console.log("This is not object and string");
  }
}

//コードをスキップしたいとき
for (let a = 0; a < car.length; a++) {
  if (a === 3) {
    continue; //break one retenative condition
  }
  console.log(car[a]);
}

let name = "ishimura";
console.log(name[0].toUpperCase + name);
